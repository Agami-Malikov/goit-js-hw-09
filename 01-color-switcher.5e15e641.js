const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),o=document.querySelector("body");let r;e.addEventListener("click",(()=>{clearInterval(r),o.style.backgroundColor="#ffffff",t.disabled=!1})),t.addEventListener("click",(()=>{r=setInterval((()=>{o.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),t.disabled=!0}));
//# sourceMappingURL=01-color-switcher.5e15e641.js.map