// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "dl.svelte-5zdvlx.svelte-5zdvlx{display:flex;flex-direction:column;grid-gap:6px;margin:0}dl.svelte-5zdvlx dt.svelte-5zdvlx{font-weight:600;color:#6254bd}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';

  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}