(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();async function a(o,r,n){return await(await fetch(`${API_URL}`)).text()}const u=o=>!!String(o).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);var s=document.getElementById("form-submit");s.addEventListener("click",()=>{let o=document.getElementById("user-name"),r=document.getElementById("user-mail"),n=document.getElementById("future-mails");o.length==0?o.style.borderColor="red":u(r.value)==!0&&(a(r.value,o.value,n.checked),console.log(o.value,r.value,n.checked),s.innerText="You're invited!",s.style.backgroundColor="#34b934")});document.getElementById("cta").addEventListener("click",()=>{window.scrollTo({top:500,behavior:"smooth"})});