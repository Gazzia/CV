// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "main.svelte-oqykqp{display:grid;grid-gap:25px;padding:40px 25px;grid-template-columns:repeat(auto-fill, minmax(310px, 1fr));max-width:900px;margin:auto}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';

  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}