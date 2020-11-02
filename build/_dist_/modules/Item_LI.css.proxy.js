// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "dd.svelte-1ilgyem{margin-left:10px}dd.double.svelte-1ilgyem{display:flex;justify-content:space-between;flex-wrap:wrap}.other.svelte-1ilgyem{opacity:0.7}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';

  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}