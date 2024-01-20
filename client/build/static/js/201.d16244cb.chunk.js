"use strict";(self.webpackChunksneaker_store=self.webpackChunksneaker_store||[]).push([[201],{5201:(n,e,t)=>{t.r(e),t.d(e,{default:()=>v});var i,r=t(2791),a=t(168);const o=t(5867).ZP.div(i||(i=(0,a.Z)(["\n  .container{\n    padding: 60px 0;\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    gap: 60px;\n  }\n\n  \n\n  .heading:nth-child(1){\n    margin-bottom: 30px;\n  }\n\n\n .checkout-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.checkout-items{\n  display: flex;\n  flex-direction: column;\n  \n}\n\n.checkout-item{\n    display: grid;\n    max-width: 100%;\n    min-width: 100%;\n    grid-template-columns: 80px 1fr;\n    border-bottom: 1px solid var(--normal-grey);\n    padding: 20px 0;\n}\n\n.underline{\n    margin-top: 0px !important;\n    margin-bottom: 5px !important;\n}\n\n.checkout-img-quantity{\n    max-width: 100%;\n    position: relative;\n    border-radius: var(--smallBorderRadius);\n}\n\n.overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.2);\n  top: 0;\n  left: 0;\n  z-index: -1;\n  border-radius: inherit;\n}\n\n.checkout-img-quantity span{\n    position: absolute;\n    width: 25px;\n    height: 25px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background: black;\n    border-radius: 100%;\n    top: -10px;\n    left: -10px;\n    color: white;\n}\n\n.checkout-img-quantity img{\n    max-width: 100%;\n    object-fit: cover;\n    height: auto;\n    border-radius: inherit;\n}\n\n.checkout-item-content{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    margin-left: 15px;\n    \n}\n\n.checkout-size-price-flex{\n    display: flex;\n    justify-content: space-between;\n    margin-top: 10px;\n}\n\n.checkout-total-container{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.checkout-total-container p{\n  margin-bottom: 10px;\n}\n\n.card-number{\n  font-weight: bold;\n  margin-bottom: 15px;\n}\n\n.error-message{\n  margin: 12px 0;\n  padding: 12px;\n}\n\n.checkout-form {\n  display: flex;\n  flex-direction: column;\n  min-width: 100%;\n  max-width: 100%;\n  margin-bottom: 30px;\n  background: var(--normal-grey); \n  padding: 40px;\n  border-radius: var(--smallBorderRadius);\n}\n\nlabel{\n  font-weight: bold;\n}\n\n.checkout-form input {\n  margin-bottom: 15px;\n  padding: 10px 0px;\n  max-width: 100%;\n  min-width: 100%;\n  box-sizing: border-box; /* Ensure padding is included in the width */\n  border: none;\n  border-bottom: 1px solid #555;\n  border-radius: 0px !important;\n  outline: none;\n  background: transparent;\n}\n\n.form-group-flex{\n  display: flex;\n  align-items: center;\n}\n\n.form-group{\n \n}\n\n.form-group-flex > *{\n  min-width: 80px;\n  max-width: 80px;\n}\n\n.form-group-flex .form-group:nth-child(1){\n  margin-right: 20px;\n}\n\n.checkout-form button {\n  padding: 10px 20px;\n  width: 200px;\n}\n\n.checkout-form button:hover {\n  background-color: #45a049;\n}\n\n\n\n@media(max-width: 1200px) {\n    \n}\n@media(max-width: 1024px) {\n    \n}\n@media(max-width: 768px) {\n    .container{\n    grid-template-columns: 1fr;\n    gap: 40px;\n  }\n\n  .checkout-form button {\n    width: 100%;\n  }\n\n}\n@media(max-width: 500px) {\n    \n}\n\n"])));var s=t(9434),c=t(4238),d=t(40),l=t(2819),m="https://js.stripe.com/v3",u=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,p="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",h=null,x=function(n){return null!==h||(h=new Promise((function(e,t){if("undefined"!==typeof window&&"undefined"!==typeof document)if(window.Stripe&&n&&console.warn(p),window.Stripe)e(window.Stripe);else try{var i=function(){for(var n=document.querySelectorAll('script[src^="'.concat(m,'"]')),e=0;e<n.length;e++){var t=n[e];if(u.test(t.src))return t}return null}();i&&n?console.warn(p):i||(i=function(n){var e=n&&!n.advancedFraudSignals?"?advancedFraudSignals=false":"",t=document.createElement("script");t.src="".concat(m).concat(e);var i=document.head||document.body;if(!i)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return i.appendChild(t),t}(n)),i.addEventListener("load",(function(){window.Stripe?e(window.Stripe):t(new Error("Stripe.js not available"))})),i.addEventListener("error",(function(){t(new Error("Failed to load Stripe.js"))}))}catch(r){return void t(r)}else e(null)}))),h},g=Promise.resolve().then((function(){return x(null)})),f=!1;g.catch((function(n){f||console.warn(n)}));var w=t(7689),b=t(184);const v=()=>{const n=(0,s.I0)(),e=(0,w.s0)(),{cartItems:t,totalItems:i,totalPrice:a}=(0,s.v9)((n=>n.cart)),[m,u]=(0,r.useState)(!1),[p,h]=(0,r.useState)(""),[x,g]=(0,r.useState)("");return(0,r.useEffect)((()=>{(async()=>{u(!0),h(!1),(0,c.Gc)(),await n((0,d.ts)()),u(!1)})()}),[]),m?(0,b.jsx)(l.aN,{classProp:"page-loader"}):t.length<1&&!p?e("/"):p?(0,b.jsx)(l.dt,{success:p}):(0,b.jsx)(o,{children:(0,b.jsx)("div",{className:"checkout-section",children:(0,b.jsxs)("div",{className:"container",children:[(0,b.jsxs)("div",{children:[(0,b.jsx)("h2",{className:"heading",children:"Checkout"}),t.length>0&&(0,b.jsxs)("div",{className:"checkout-items",children:[(0,b.jsx)("div",{className:"underline"}),t.map(((n,e)=>(0,b.jsxs)("div",{className:"checkout-item",children:[(0,b.jsxs)("div",{className:"checkout-img-quantity",children:[(0,b.jsx)("div",{className:"overlay"}),(0,b.jsx)("img",{src:"/images/sneaker".concat(n.imageID,".png")}),(0,b.jsx)("span",{children:n.amount})]}),(0,b.jsxs)("div",{className:"checkout-item-content",children:[(0,b.jsx)("h3",{className:"text-sm",children:n.title}),(0,b.jsxs)("div",{className:"checkout-size-price-flex",children:[(0,b.jsxs)("p",{className:"text-sm",children:["Size: ",n.size]}),(0,b.jsxs)("p",{className:"text-sm",children:["$",n.price*n.amount]})]})]})]},e)))]})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("h2",{className:"heading",children:"Payment Details"}),(0,b.jsx)(l.c7,{loading:m,setLoading:u,success:p,setSuccess:h,error:x,setError:g}),(0,b.jsxs)("div",{className:"checkout-total-container",children:[(0,b.jsxs)("p",{className:"text-sm",children:["Items: ",i]}),(0,b.jsxs)("h3",{className:"text-lg",children:["Total: $",a]})]})]})]})})})}}}]);
//# sourceMappingURL=201.d16244cb.chunk.js.map