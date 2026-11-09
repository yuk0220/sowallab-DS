/* sowallab Design Docs — 문서는 content/*.md, 미리보기는 previews/*.html에서 읽어 그립니다. */
(function () {
  'use strict';

  var DATA = null, NAV = null, CSS = { fonts: '', tokens: '', comps: '' };
  var PAGES = [];       // flat order: {slug, name, ko, section, group}
  var BY = {};
  var cache = {};
  var $ = function (id) { return document.getElementById(id); };

  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function get(url, kind) {
    return fetch(url).then(function (r) { if (!r.ok) throw new Error(url + ' ' + r.status); return kind === 'json' ? r.json() : r.text(); });
  }

  /* ---------- theme ---------- */
  function isDark() {
    var t = document.documentElement.getAttribute('data-theme');
    if (t) return t === 'dark';
    return !window.matchMedia('(prefers-color-scheme: light)').matches;
  }
  function syncThemeLabel() { $('theme-toggle').setAttribute('aria-label', isDark() ? '밝은 화면으로 바꾸기' : '어두운 화면으로 바꾸기'); }
  try { var saved = localStorage.getItem('sowallab-docs-theme'); if (saved === 'light' || saved === 'dark') document.documentElement.setAttribute('data-theme', saved); } catch (e) {}
  $('theme-toggle').addEventListener('click', function () {
    var next = isDark() ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try { localStorage.setItem('sowallab-docs-theme', next); } catch (e) {}
    syncThemeLabel();
  });
  syncThemeLabel();

  /* ---------- nav ---------- */
  function buildPages() {
    var heights = {};
    DATA.components.forEach(function (c) { heights[c.slug] = c.height; });
    NAV.groups.forEach(function (g) {
      function add(it, sub) {
        PAGES.push({ slug: it.slug, name: it.name, ko: it.ko || '', section: it.section || g.section, head: g.title, group: sub || '', preview: !!it.preview, height: heights[it.slug] });
      }
      (g.items || []).forEach(function (it) { add(it); });
      (g.subgroups || []).forEach(function (sg) { sg.items.forEach(function (it) { add(it, sg.title); }); });
    });
    PAGES.forEach(function (p) { BY[p.slug] = p; });
  }
  function link(p) { return '<li><a href="#' + p.slug + '" data-slug="' + p.slug + '" data-q="' + esc((p.name + ' ' + p.ko).toLowerCase()) + '"><span>' + esc(p.name) + '</span><span class="ko">' + esc(p.ko) + '</span></a></li>'; }
  function renderNav() {
    $('nav').innerHTML = NAV.groups.map(function (g) {
      var html = '<div class="nav-group"><p class="nav-head">' + esc(g.title) + '</p>';
      var mine = PAGES.filter(function (p) { return p.head === g.title; });
      if (g.subgroups) {
        g.subgroups.forEach(function (sg) {
          var items = mine.filter(function (p) { return p.group === sg.title; });
          if (items.length) html += '<div class="nav-sec"><p class="nav-sub">' + esc(sg.title) + '</p><ul class="nav-list">' + items.map(link).join('') + '</ul></div>';
        });
      } else {
        html += '<ul class="nav-list">' + mine.map(link).join('') + '</ul>';
      }
      return html + '</div>';
    }).join('');
  }
  $('nav-search').addEventListener('input', function () {
    var q = this.value.trim().toLowerCase(), any = false;
    document.querySelectorAll('#nav a').forEach(function (a) {
      var hit = !q || a.dataset.q.indexOf(q) > -1;
      a.parentNode.hidden = !hit; if (hit) any = true;
    });
    document.querySelectorAll('#nav .nav-sec, #nav .nav-group').forEach(function (g) {
      g.hidden = !g.querySelector('li:not([hidden])');
    });
    $('nav-empty').hidden = any;
  });

  /* mobile drawer */
  function setDrawer(open) {
    $('sidebar').classList.toggle('open', open);
    $('scrim').hidden = !open;
    $('menu-toggle').setAttribute('aria-expanded', String(open));
  }
  $('menu-toggle').addEventListener('click', function () { setDrawer(!$('sidebar').classList.contains('open')); });
  $('scrim').addEventListener('click', function () { setDrawer(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setDrawer(false); });

  /* ---------- markdown post-processing ---------- */
  function enhance(root) {
    root.querySelectorAll('table').forEach(function (t) {
      var w = document.createElement('div'); w.className = 'table-wrap';
      t.parentNode.insertBefore(w, t); w.appendChild(t);
    });
    root.querySelectorAll('code').forEach(function (c) {
      if (c.parentNode.tagName === 'PRE') return;
      var v = DATA.colors[c.textContent.replace(/^--/, '')];
      if (!v) return;
      var s = document.createElement('span'); s.className = 'sw'; s.style.background = v; s.title = v;
      c.parentNode.insertBefore(s, c);
    });
    // **Do** — … / **Don't** — … → 카드 묶음
    var ps = Array.prototype.slice.call(root.querySelectorAll(':scope > p'));
    var group = null;
    ps.forEach(function (p) {
      var f = p.firstElementChild, txt = f && f.tagName === 'STRONG' ? f.textContent.trim() : '';
      var kind = txt === 'Do' ? 'do' : (txt === "Don't" || txt === 'Don’t') ? 'dont' : null;
      if (!kind || p.firstChild !== f) { group = null; return; }
      f.remove();
      p.innerHTML = p.innerHTML.replace(/^\s*[—–-]\s*/, '');
      var card = document.createElement('div'); card.className = 'rule ' + kind;
      card.innerHTML = '<span class="rule-k">' + (kind === 'do'
        ? '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>Do'
        : '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>Don’t') + '</span>' + p.innerHTML;
      if (!group || group.nextElementSibling !== p) {
        group = document.createElement('div'); group.className = 'rules';
        p.parentNode.insertBefore(group, p);
      }
      group.appendChild(card); p.remove();
    });
  }

  /* ---------- heroes ---------- */
  function frameDoc(body) {
    var base = document.baseURI.replace(/[#?].*$/, '').replace(/[^/]*$/, '');
    return '<!doctype html><html data-theme="dark"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><base href="' + base + '">' +
      '<style>' + CSS.fonts + '\n' + CSS.tokens + '\n' + CSS.comps + '\nhtml,body{background:var(--bg)}body{margin:0;min-height:0}</style></head><body>' + body + '</body></html>';
  }
  function fitFrame(f, min) {
    function fit() { try { var d = f.contentDocument; if (d && d.body) f.style.height = Math.max(min, Math.ceil(d.body.getBoundingClientRect().height)) + 'px'; } catch (e) {} }
    f.addEventListener('load', function () {
      fit(); setTimeout(fit, 300); setTimeout(fit, 1200);
      try { f.contentDocument.fonts.ready.then(fit); } catch (e) {}
    });
  }
  function previewHero(page) {
    return get('previews/' + page.slug + '.html').then(function (html) {
      var wrap = document.createElement('div'); wrap.className = 'hero';
      wrap.innerHTML = '<div class="hero-tabs" role="tablist" aria-label="미리보기와 코드"><button class="hero-tab" role="tab" aria-selected="true" data-v="p">Preview</button><button class="hero-tab" role="tab" aria-selected="false" data-v="c">HTML</button></div>';
      var f = document.createElement('iframe'); f.className = 'hero-frame'; f.title = page.name + ' 미리보기';
      f.style.height = Math.min(page.height || 200, 640) + 'px';
      fitFrame(f, 80);
      f.srcdoc = frameDoc(html);
      var code = document.createElement('pre'); code.className = 'hero-code'; code.hidden = true;
      code.textContent = html.replace(/<script>\s*<\/script>\s*$/, '').trim();
      wrap.appendChild(f); wrap.appendChild(code);
      wrap.querySelector('.hero-tabs').addEventListener('click', function (e) {
        var b = e.target.closest('.hero-tab'); if (!b) return;
        wrap.querySelectorAll('.hero-tab').forEach(function (x) { x.setAttribute('aria-selected', String(x === b)); });
        f.hidden = b.dataset.v !== 'p'; code.hidden = b.dataset.v !== 'c';
      });
      return wrap;
    });
  }
  function box(inner, cap) {
    var d = document.createElement('div'); d.className = 'hero';
    d.innerHTML = inner + (cap ? '<div class="hero-cap">' + cap + '</div>' : '');
    return d;
  }
  function palRow(name, keys, labels) {
    var c = DATA.colors;
    return '<div class="pal-row"><span class="pal-name">' + name + '</span><div class="pal-bar">' +
      keys.map(function (k) { return '<span style="background:' + c[k] + '" title="' + k + ' ' + c[k] + '"></span>'; }).join('') +
      '</div><div class="pal-labels">' + labels.map(function (l) { return '<span>' + l + '</span>'; }).join('') + '</div></div>';
  }
  var STEPS = ['100', '200', '300', '400', '500', '600', '700', '800', '900'];
  var LUCIDE = {
    Menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
    ArrowRight: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
    ArrowLeft: '<path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>',
    ChevronLeft: '<path d="m15 18-6-6 6-6"/>',
    ChevronRight: '<path d="m9 18 6-6-6-6"/>',
    X: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
    Download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/><path d="M12 15V3"/>',
    Info: '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>',
    Plus: '<path d="M5 12h14"/><path d="M12 5v14"/>',
    Minus: '<path d="M5 12h14"/>',
    RotateCcw: '<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>',
    File: '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/>',
    Box: '<path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/>',
    Layers: '<path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/>',
    Eye: '<path d="M2.06 12.35a1 1 0 0 1 0-.7 10.75 10.75 0 0 1 19.88 0 1 1 0 0 1 0 .7 10.75 10.75 0 0 1-19.88 0"/><circle cx="12" cy="12" r="3"/>',
    Monitor: '<rect width="20" height="14" x="2" y="3" rx="2"/><path d="M8 21h8"/><path d="M12 17v4"/>'
  };
  function lucide(n, size, sw) { return '<svg width="' + size + '" height="' + size + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="' + sw + '" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + LUCIDE[n] + '</svg>'; }

  var HEROES = {
    'getting-started': function () {
      var dots = '';
      for (var c = 0; c < 6; c++) for (var r = 0; r < 8; r++) dots += '<circle cx="' + (616 + c * 24) + '" cy="' + (12 + r * 24) + '" r="2" fill="#15171d"/>';
      return box('<svg class="cover-art" viewBox="0 0 960 288" role="img" aria-label="sowallab 색 블록과 점 격자">' +
        '<rect width="960" height="288" fill="#15171d"/>' +
        '<rect x="592" y="-16" width="192" height="240" rx="16" fill="#6767f1"/>' + dots +
        '<rect x="800" y="48" width="176" height="112" rx="16" fill="#f3f5f9"/>' +
        '<rect x="800" y="176" width="208" height="64" rx="32" fill="#9ba1f0"/>' +
        '<circle cx="528" cy="216" r="24" fill="#9dffff"/>' +
        '<text x="40" y="200" font-family="Pretendard, -apple-system, sans-serif" font-size="80" font-weight="600" letter-spacing="-3.2" fill="#f3f5f9">sowallab</text>' +
        '<text x="42" y="244" font-family="Pretendard, -apple-system, sans-serif" font-size="16" fill="#abb0bc">도면과 데이터로 제품이 움직이는 3D를 만듭니다</text></svg>');
    },
    color: function () {
      return box('<div class="hero-pad pal">' +
        palRow('Primary', STEPS.map(function (s) { return 'primary-' + s; }), STEPS) +
        palRow('Neutral', ['neutral-white'].concat(STEPS.map(function (s) { return 'neutral-' + s; })).concat(['neutral-black']), ['W'].concat(STEPS).concat(['B'])) +
        palRow('Warning', STEPS.map(function (s) { return 'warning-' + s; }), STEPS) +
        palRow('CTA', ['cta-vivid-1', 'cta-vivid-2', 'cta-vivid-3', 'cta-soft-1', 'cta-soft-2', 'cta-soft-3', 'cta-soft-4'], ['vivid 1', '2', '3', 'soft 1', '2', '3', '4']) +
        '</div>', '바탕은 Neutral 900, 포인트는 Primary 500. 막대에 마우스를 올리면 토큰 이름과 값이 보입니다.');
    },
    typography: function () {
      var rows = [
        ['Display · 68', '<div style="font-size:68px;line-height:1.12;font-weight:600;letter-spacing:-0.04em;text-wrap:balance">기술의 가치가 제대로 전해지도록</div>'],
        ['H1 · 46', '<div style="font-size:46px;line-height:1.2;font-weight:600;letter-spacing:-0.035em">무료 3D 시안 제공</div>'],
        ['H2 · 36', '<div style="font-size:36px;line-height:1.28;font-weight:600;letter-spacing:-0.03em">비즈니스 솔루션</div>'],
        ['H3 · 20', '<div style="font-size:20px;line-height:1.4;font-weight:600;letter-spacing:-0.02em;color:#9ba1f0">분해·단면 뷰어</div>'],
        ['Lead · 18', '<div style="font-size:18px;line-height:1.7;color:#abb0bc">영업자료부터 사내 업무까지, 4가지 서비스로 도와드립니다.</div>'],
        ['Body · 16', '<div style="font-size:16px;line-height:1.6;letter-spacing:-0.01em">도면 그대로 만든 3D를 돌리고 확대하며 규격표, 2D 도면과 함께 봅니다.</div>'],
        ['Mono · 12', '<div style="font-size:12px;font-weight:500;letter-spacing:.08em;color:#abb0bc">STEP 01 · 2026.11.06</div>']
      ];
      return box('<div class="hero-pad spec">' + rows.map(function (r) { return '<div class="spec-row"><span class="spec-k">' + r[0] + '</span><div class="spec-v">' + r[1] + '</div></div>'; }).join('') + '</div>', 'Pretendard · SemiBold 600 / Medium 500 / Regular 400');
    },
    grid: function () {
      var sp = DATA.spacing.filter(function (t) { return /^space-/.test(t.name); });
      return box('<div class="hero-pad bars">' + sp.map(function (t) {
        var px = parseFloat(t.value);
        return '<div class="bar-row"><span>' + t.name + '</span><span>' + t.value + '</span><span class="bar" style="width:' + (px * 6) + 'px;max-width:100%"></span></div>';
      }).join('') + '</div>', '막대 길이는 실제 값의 6배입니다. 컨테이너 최대 1280px, 좌우 여백 clamp(20px, 10vw, 160px).');
    },
    icons: function () {
      return box('<div class="hero-pad icons">' + Object.keys(LUCIDE).map(function (n) { return '<div class="ic">' + lucide(n, 24, 1.75) + '<span>' + n + '</span></div>'; }).join('') + '</div>', 'lucide · UI 아이콘 16~20px, 선 1.75~2 / 기능 아이콘 32px, 선 1.4');
    },
    elevation: function () {
      return box('<div class="hero-pad"><div class="layers">' +
        '<div class="lay" style="inset:0;background:#15171d;border:1px dashed rgba(255,255,255,.12)"><b>0 · Page</b>bg</div>' +
        '<div class="lay" style="left:6%;top:22%;width:54%;height:62%;background:#1f2229"><b>1 · Card</b>bg-elevation · 그림자 없음</div>' +
        '<div class="lay" style="left:42%;top:40%;width:50%;height:48%;background:#1f2229;border:1px solid rgba(255,255,255,.08);box-shadow:0 24px 60px -24px rgba(0,0,0,.5),0 12px 30px -10px rgba(0,0,0,.55)"><b>2 · Floating</b>card + shadow-panel</div>' +
        '</div></div>', '깊이는 바탕 밝기와 선으로 나누고, 그림자는 떠 있는 요소에만 씁니다.');
    },
    motion: function () {
      var html = '<div style="padding:32px;display:grid;gap:24px;justify-items:start">' +
        '<div style="display:flex;flex-wrap:wrap;gap:12px"><a href="#" onclick="return false" class="btn btn-beam btn-lg">무료 3D 시안 신청 <span class="arr" aria-hidden="true"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></span></a>' +
        '<a href="#" onclick="return false" class="btn btn-secondary btn-beam-dark btn-lg">hover 때만 빛남</a></div>' +
        '<div class="tabs" role="tablist"><span class="tab-ind" aria-hidden="true"></span><button class="tab" role="tab" aria-selected="true">3D 영업자료</button><button class="tab" role="tab" aria-selected="false">홈페이지</button><button class="tab" role="tab" aria-selected="false">제품 영상</button></div></div>' +
        '<script>var t=document.querySelector(".tabs"),i=t.querySelector(".tab-ind");function p(){var s=t.querySelector("[aria-selected=true]");i.style.width=s.offsetWidth+"px";i.style.transform="translateX("+s.offsetLeft+"px)"}t.onclick=function(e){var b=e.target.closest(".tab");if(!b)return;t.querySelectorAll(".tab").forEach(function(x){x.setAttribute("aria-selected",x===b)});p()};p();document.fonts&&document.fonts.ready.then(p)<\/script>';
      var d = box('', '빛줄기는 4.5초에 한 바퀴, 탭 선택 배경은 380ms. 탭을 눌러 보세요.');
      var f = document.createElement('iframe'); f.className = 'hero-frame'; f.title = '모션 미리보기'; f.style.height = '190px';
      fitFrame(f, 150); f.srcdoc = frameDoc(html);
      d.insertBefore(f, d.firstChild);
      return d;
    },
    writing: function () {
      return box('<div class="hero-pad spec">' +
        '<div class="spec-row"><span class="spec-k" style="color:#9ba1f0">Do</span><div class="spec-v" style="font-size:26px;line-height:1.35;font-weight:600;letter-spacing:-0.03em">촬영 없이 3D로 제품 영상과 사진 제작</div></div>' +
        '<div class="spec-row"><span class="spec-k" style="color:#ff4c83">Don’t</span><div class="spec-v" style="font-size:26px;line-height:1.35;font-weight:600;letter-spacing:-0.03em;color:#575c68;text-decoration:line-through">차세대 비주얼 콘텐츠</div></div>' +
        '<div class="spec-row"><span class="spec-k">버튼</span><div class="spec-v" style="color:#d8dce5">무료 3D 시안 신청 · 솔루션 보기 · 회사 소개서 받기</div></div>' +
        '</div>', '50대 독자도 한 번에 알아듣는 쉬운 말, 명사형 제목, 존댓말 평서문.');
    },
    tokens: function () {
      var c = DATA.colors, list = ['text-sub', 'fill-primary-hover', 'border-default', 'layer-primary-selected', 'cat-3'];
      return box('<div class="hero-pad chips">' + list.map(function (n) { return '<span class="tchip"><span class="sw" style="background:' + c[n] + ';margin:0"></span>--' + n + '</span>'; }).join('') +
        '<span class="tchip">--radius-card: 16px</span><span class="tchip">--space-4: 16px</span><span class="tchip">--shadow-modal</span></div>', '{요소}-{역할}-{상태} 순서로 이름을 붙입니다.');
    }
  };

  function assetGallery(group) {
    var files = DATA.assets[group] || [];
    var fig = document.createElement('div'); fig.className = 'gallery';
    fig.innerHTML = files.map(function (f) {
      var src = 'assets/' + group + '/' + f, cls = 'thumb', media;
      if (/\.mp4$/.test(f)) media = '<video src="' + src + '" muted loop playsinline autoplay preload="metadata"></video>';
      else media = '<img src="' + src + '" alt="' + esc(f) + '" loading="lazy">';
      if (group === 'Photography' || group === 'Brand') cls += ' photo';
      if (/_lo\.svg$|symbol\.svg$/.test(f)) cls += ' light';
      if (group === 'Tools') cls += ' tool';
      return '<figure><div class="' + cls + '">' + media + '</div><figcaption>' + esc(f) + '</figcaption></figure>';
    }).join('');
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) fig.querySelectorAll('video').forEach(function (v) { v.removeAttribute('autoplay'); });
    return fig;
  }

  /* ---------- page ---------- */
  var tocObserver = null;
  function render(slug) {
    var page = BY[slug] || BY['getting-started'];
    document.querySelectorAll('#nav a').forEach(function (a) { if (a.dataset.slug === page.slug) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current'); });
    document.querySelectorAll('.topnav a').forEach(function (a) { a.setAttribute('aria-current', String(a.dataset.section === page.section)); });
    var cur = document.querySelector('#nav a[aria-current="page"]');
    if (cur && cur.scrollIntoView) cur.scrollIntoView({ block: 'nearest' });
    setDrawer(false);

    var mdP = cache[page.slug] ? Promise.resolve(cache[page.slug]) : get('content/' + page.slug + '.md').then(function (t) { cache[page.slug] = t; return t; });
    mdP.then(function (md) {
      var tmp = document.createElement('div');
      tmp.innerHTML = marked.parse(md);
      var h1 = tmp.querySelector('h1'), title = h1 ? h1.textContent : page.name;
      if (h1) h1.remove();
      var lead = tmp.firstElementChild && tmp.firstElementChild.tagName === 'P' ? tmp.firstElementChild : null;
      $('doc-title').textContent = title;
      $('doc-lead').innerHTML = lead ? lead.innerHTML : '';
      if (lead) lead.remove();
      $('crumb').textContent = page.head + (page.group ? ' · ' + page.group : '') + (page.ko ? ' · ' + page.ko : '');
      enhance(tmp);
      if (page.slug === 'assets') {
        tmp.querySelectorAll('h2').forEach(function (h) {
          var g = h.textContent.trim(), end = h.nextElementSibling;
          while (end && end.nextElementSibling && end.nextElementSibling.tagName !== 'H2') end = end.nextElementSibling;
          if (DATA.assets[g]) (end || h).after(assetGallery(g));
        });
      }
      var hs = tmp.querySelectorAll('h2');
      hs.forEach(function (h, i) { h.id = 'sec-' + i; });
      var content = $('doc-content');
      content.innerHTML = '';
      while (tmp.firstChild) content.appendChild(tmp.firstChild);

      var hero = $('doc-hero'); hero.innerHTML = '';
      if (page.preview) previewHero(page).then(function (el) { if (BY[curSlug()] === page || curSlug() === page.slug) hero.appendChild(el); });
      else if (HEROES[page.slug]) hero.appendChild(HEROES[page.slug]());

      $('toc').innerHTML = Array.prototype.map.call(hs, function (h) { return '<li><button type="button" data-t="' + h.id + '">' + esc(h.textContent) + '</button></li>'; }).join('');
      watchToc(hs);

      var i = PAGES.indexOf(page), prev = PAGES[i - 1], next = PAGES[i + 1];
      $('pager').innerHTML = (prev ? '<a class="prev" href="#' + prev.slug + '"><span class="pk">이전</span><span class="pn">' + esc(prev.name) + '</span></a>' : '') +
        (next ? '<a class="next" href="#' + next.slug + '"><span class="pk">다음</span><span class="pn">' + esc(next.name) + '</span></a>' : '');
      document.title = (page.slug === 'getting-started' ? '' : page.name + ' · ') + 'sowallab Design Docs';
      window.scrollTo(0, 0);
    }).catch(function () {
      $('doc-content').innerHTML = '<p class="loading">문서를 불러오지 못했습니다. 새로고침해 주세요.</p>';
    });
  }
  function watchToc(hs) {
    if (tocObserver) tocObserver.disconnect();
    if (!('IntersectionObserver' in window) || !hs.length) return;
    var btns = $('toc').querySelectorAll('button');
    tocObserver = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (!e.isIntersecting) return;
        btns.forEach(function (b) { b.classList.toggle('on', b.dataset.t === e.target.id); });
      });
    }, { rootMargin: '-80px 0px -70% 0px' });
    hs.forEach(function (h) { tocObserver.observe(h); });
  }
  $('toc').addEventListener('click', function (e) {
    var b = e.target.closest('button'); if (!b) return;
    var t = document.getElementById(b.dataset.t);
    if (t) t.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
  });
  function curSlug() { return (location.hash || '').slice(1) || 'getting-started'; }
  window.addEventListener('hashchange', function () { render(curSlug()); });

  /* ---------- boot ---------- */
  Promise.all([get('data.json', 'json'), get('nav.json', 'json'), get('fonts.css'), get('tokens.css'), get('components.css')]).then(function (r) {
    DATA = r[0]; NAV = r[1]; CSS.fonts = r[2]; CSS.tokens = r[3]; CSS.comps = r[4];
    buildPages(); renderNav(); render(curSlug());
  }).catch(function () {
    $('doc-content').innerHTML = '<p class="loading">문서를 불러오지 못했습니다. 새로고침해 주세요.</p>';
  });
})();
