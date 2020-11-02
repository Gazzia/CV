// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "span.svelte-w1sq3n{margin-left:10px;display:flex;justify-content:space-between;flex-wrap:wrap}.date.svelte-w1sq3n{opacity:0.7}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';

  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}