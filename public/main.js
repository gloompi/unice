document.addEventListener("DOMContentLoaded",()=>{const n={"/auth":"auth.js"},o=async a=>{try{const t=await import(`/${a}`);t.run()}catch(t){console.log("FAILED TO RUN MODULE",a,t)}};Object.entries(n).forEach(([t,a])=>{"/"===location.pathname&&o("home.js"),n[t]!==location.pathname&&!location.pathname.includes(t)||o(a)})});