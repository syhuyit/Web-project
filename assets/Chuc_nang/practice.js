function runCode() {
  const html = document.getElementById("htmlCode").value;
  const css = document.getElementById("cssCode").value;
  const js = document.getElementById("jsCode").value;

  const iframe = document.getElementById("result");

  const fullCode = `
    <html>
      <head>
        <style>${css}</style>
      </head>
      <body>
        ${html}
        <script>
          ${js}
        <\/script>
      </body>
    </html>
  `;

  iframe.srcdoc = fullCode;
}
