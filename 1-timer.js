import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{f,i as h}from"./assets/vendor-BsWh0j-M.js";let a=null;const n=document.querySelector("[data-start]"),c=document.querySelector("#datetime-picker"),y=document.querySelector("[data-days]"),p=document.querySelector("[data-hours]"),S=document.querySelector("[data-minutes]"),b=document.querySelector("[data-seconds]"),C=document.querySelectorAll(".label");C.forEach(e=>{e.textContent=e.textContent.toUpperCase()});n.disabled=!0;const q={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){const t=e[0];t<=new Date?(h.error({message:"Please choose a date in the future",position:"topRight"}),n.disabled=!0):(a=t,n.disabled=!1)}};f("#datetime-picker",q);n.addEventListener("click",D);function D(){n.disabled=!0,c.disabled=!0,setInterval(()=>{const t=a-new Date;if(t<=0)x();else{const o=E(t);d(o)}},1e3)}function d({days:e,hours:t,minutes:o,seconds:r}){y.textContent=s(e),p.textContent=s(t),S.textContent=s(o),b.textContent=s(r)}function x(){c.disabled=!1,n.disabled=!0,d({days:0,hours:0,minutes:0,seconds:0})}function s(e){return String(e).padStart(2,"0")}function E(e){const u=Math.floor(e/864e5),i=Math.floor(e%864e5/36e5),l=Math.floor(e%864e5%36e5/6e4),m=Math.floor(e%864e5%36e5%6e4/1e3);return{days:u,hours:i,minutes:l,seconds:m}}
//# sourceMappingURL=1-timer.js.map
