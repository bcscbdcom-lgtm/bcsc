// Regenerate assets/icons.js after adding or removing an icon:
//   curl -o /tmp/lucide.min.js https://unpkg.com/lucide@0.546.0/dist/umd/lucide.min.js
//   node tools/make-icons.cjs /tmp/lucide.min.js "award,calculator,..." assets/icons.js
// The name list is every data-lucide="..." and icon: '...' value in index.html.
// Pull the icons the site uses out of the pinned Lucide build and write a small replacement script.
const fs = require('fs'), vm = require('vm');
const [src, names, out] = process.argv.slice(2);
const ctx = { self: {}, window: {}, globalThis: {} };
ctx.self = ctx; ctx.window = ctx; ctx.globalThis = ctx;
vm.runInNewContext(fs.readFileSync(src, 'utf8'), ctx);
const lucide = ctx.lucide;
const pascal = (n) => n.replace(/(^|-)([a-z0-9])/g, (_, __, c) => c.toUpperCase());
const icons = {};
for (const n of names.split(',')) {
  const node = lucide.icons[pascal(n)];
  if (!node) throw new Error('missing icon ' + n);
  icons[n] = node;
}
const js = `/* Lucide 0.546.0 icons used on bcscbd.com (ISC licence, lucide.dev). Generated; add names in the generator, not here. */
(function () {
  var icons = ${JSON.stringify(icons)};
  var base = { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': 2, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' };
  var NS = 'http://www.w3.org/2000/svg';
  function draw(tag, attrs, children) {
    var el = document.createElementNS(NS, tag);
    for (var k in attrs) el.setAttribute(k, attrs[k]);
    (children || []).forEach(function (c) { el.appendChild(draw(c[0], c[1], c[2])); });
    return el;
  }
  function createIcons() {
    document.querySelectorAll('[data-lucide]').forEach(function (el) {
      var name = el.getAttribute('data-lucide');
      var node = icons[name];
      if (!node) return;
      var svg = draw('svg', base, node);
      // Same result as Lucide's own createIcons: keep the element's attributes and merge classes.
      for (var i = 0; i < el.attributes.length; i++) {
        var a = el.attributes[i];
        if (a.name !== 'class') svg.setAttribute(a.name, a.value);
      }
      var classes = ['lucide', 'lucide-' + name].concat((el.getAttribute('class') || '').split(' '));
      svg.setAttribute('class', classes.filter(function (c, i) { return c && classes.indexOf(c) === i; }).join(' '));
      // Icons sit next to their own text, so screen readers can skip them.
      svg.setAttribute('aria-hidden', 'true');
      el.parentNode.replaceChild(svg, el);
    });
  }
  window.lucide = { createIcons: createIcons };
})();
`;
fs.writeFileSync(out, js);
console.log('wrote', out, js.length, 'bytes');
