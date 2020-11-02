// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "section.svelte-8fntcu{background-color:white;border-radius:6px;padding:15px 20px;padding-bottom:32px;box-shadow:0 0.5px 1.3px rgba(0, 0, 0, 0.008), 0 1.1px 3.1px rgba(0, 0, 0, 0.012),\r\n\t\t\t0 2.1px 5.9px rgba(0, 0, 0, 0.015), 0 3.8px 10.5px rgba(0, 0, 0, 0.018),\r\n\t\t\t0 7.1px 19.6px rgba(0, 0, 0, 0.022), 0 17px 47px rgba(0, 0, 0, 0.03);gap:6px}.title.svelte-8fntcu{text-transform:uppercase;letter-spacing:0.5px;font-size:16px;font-weight:500;width:100%;text-align:center;margin-bottom:15px;color:#6254bd}.boxContent.svelte-8fntcu{gap:6px;display:flex;flex-direction:column}.boxContent.dated.svelte-8fntcu{border-right:1px dashed rgba(61, 56, 53, 0.3);padding-right:10px}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';

  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}