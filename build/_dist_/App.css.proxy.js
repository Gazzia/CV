// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "html, body{position:absolute;top:0;left:0;width:100%;height:100vh;padding:0;margin:0;font-family:\"Poppins\", sans-serif;overflow:hidden}.container.svelte-fsrwex{background-color:rgb(247, 244, 244);color:rgb(61, 56, 53);height:100vh;overflow-y:auto}h1, h2, h3{margin:0;padding:0}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';

  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}