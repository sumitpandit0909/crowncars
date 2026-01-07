import 'piccolore';
import { p as decodeKey } from './chunks/astro/server_CYK8Mm0f.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_BE82TAFU.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///D:/sumit/devliqly%20projects/crownweb/","cacheDir":"file:///D:/sumit/devliqly%20projects/crownweb/node_modules/.astro/","outDir":"file:///D:/sumit/devliqly%20projects/crownweb/dist/","srcDir":"file:///D:/sumit/devliqly%20projects/crownweb/src/","publicDir":"file:///D:/sumit/devliqly%20projects/crownweb/public/","buildClientDir":"file:///D:/sumit/devliqly%20projects/crownweb/dist/client/","buildServerDir":"file:///D:/sumit/devliqly%20projects/crownweb/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.BG0qwuTL.css"}],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.BG0qwuTL.css"},{"type":"external","src":"/_astro/cars.hTqxC4Fo.css"}],"routeData":{"route":"/cars","isIndex":false,"type":"page","pattern":"^\\/cars\\/?$","segments":[[{"content":"cars","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/cars.astro","pathname":"/cars","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.BG0qwuTL.css"}],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.BG0qwuTL.css"}],"routeData":{"route":"/privacy","isIndex":false,"type":"page","pattern":"^\\/privacy\\/?$","segments":[[{"content":"privacy","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/privacy.astro","pathname":"/privacy","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.BG0qwuTL.css"}],"routeData":{"route":"/terms","isIndex":false,"type":"page","pattern":"^\\/terms\\/?$","segments":[[{"content":"terms","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/terms.astro","pathname":"/terms","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.BG0qwuTL.css"},{"type":"inline","content":".car-slider[data-astro-cid-fvz2bdjw]{position:relative;overflow:hidden;border-radius:10px;width:100%;display:block}.slider-images[data-astro-cid-fvz2bdjw]{width:100%;position:relative;display:block}.slider-image[data-astro-cid-fvz2bdjw]{width:100%}.slider-image[data-astro-cid-fvz2bdjw] img[data-astro-cid-fvz2bdjw]{width:100%;object-fit:cover;border-radius:10px;display:block;max-width:100%}.slider-image[data-astro-cid-fvz2bdjw] img[data-astro-cid-fvz2bdjw]{width:100%;height:170px;object-fit:cover;border-radius:10px}.slider-nav[data-astro-cid-fvz2bdjw]{position:absolute;bottom:10px;left:50%;transform:translate(-50%);display:flex;gap:8px;z-index:10}.nav-dot[data-astro-cid-fvz2bdjw]{display:block;width:10px;height:10px;background:#ffffffb3;border-radius:50%;cursor:pointer;transition:background .3s}.nav-dot[data-astro-cid-fvz2bdjw].active{background:#333}.slider-arrow[data-astro-cid-fvz2bdjw]{position:absolute;top:50%;transform:translateY(-50%);width:30px;height:30px;background-color:#ffffffb3;color:#333;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;z-index:10;font-size:18px;font-weight:700;transition:background-color .3s,color .3s}.slider-arrow[data-astro-cid-fvz2bdjw]:hover{background-color:#000000b3;color:#fff}.prev-arrow[data-astro-cid-fvz2bdjw]{left:10px}.next-arrow[data-astro-cid-fvz2bdjw]{right:10px}.ctasection[data-astro-cid-5f7neqxn]{display:flex;justify-content:center;margin:auto}.cta-box-section[data-astro-cid-5f7neqxn]{margin-bottom:30px}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["D:/sumit/devliqly projects/crownweb/src/pages/about.astro",{"propagation":"none","containsHead":true}],["D:/sumit/devliqly projects/crownweb/src/pages/cars.astro",{"propagation":"none","containsHead":true}],["D:/sumit/devliqly projects/crownweb/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["D:/sumit/devliqly projects/crownweb/src/pages/index.astro",{"propagation":"none","containsHead":true}],["D:/sumit/devliqly projects/crownweb/src/pages/privacy.astro",{"propagation":"none","containsHead":true}],["D:/sumit/devliqly projects/crownweb/src/pages/terms.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/cars@_@astro":"pages/cars.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/privacy@_@astro":"pages/privacy.astro.mjs","\u0000@astro-page:src/pages/terms@_@astro":"pages/terms.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_YaEXu0Cf.mjs","D:/sumit/devliqly projects/crownweb/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_BPSxcw8w.mjs","D:/sumit/devliqly projects/crownweb/src/components/react/ContactForm.jsx":"_astro/ContactForm.D208XW0_.js","D:/sumit/devliqly projects/crownweb/src/components/react/Inquiry":"_astro/Inquiry.BgodpLfU.js","@astrojs/react/client.js":"_astro/client.CBwL3ilQ.js","D:/sumit/devliqly projects/crownweb/src/components/cars/CarsListing.astro?astro&type=script&index=0&lang.ts":"_astro/CarsListing.astro_astro_type_script_index_0_lang.BglrQ-FS.js","D:/sumit/devliqly projects/crownweb/src/components/home/Fleets.astro?astro&type=script&index=0&lang.ts":"_astro/Fleets.astro_astro_type_script_index_0_lang.DbhzCD4s.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["D:/sumit/devliqly projects/crownweb/src/components/cars/CarsListing.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",function(){const p=document.getElementById(\"filterToggleBtn\"),y=document.getElementById(\"filterSidebar\");p&&y&&p.addEventListener(\"click\",()=>{y.classList.toggle(\"active\");const t=y.classList.contains(\"active\");p.querySelector(\".filter-text\").textContent=t?\"Hide Filters\":\"Filters\"});const S=document.querySelectorAll(\".transmission-filter\"),L=document.querySelectorAll(\".fuel-filter\"),q=document.querySelectorAll(\".seater-filter\"),A=document.querySelectorAll(\".price-filter\"),C=document.querySelectorAll(\".fleets-collection-item\"),w=document.getElementById(\"carSearch\");function f(){const t=w?.value.toLowerCase()||\"\",i=Array.from(S).filter(e=>e.checked).map(e=>e.value),a=Array.from(L).filter(e=>e.checked).map(e=>e.value),h=Array.from(q).filter(e=>e.checked).map(e=>e.value),m=Array.from(A).find(e=>e.checked)?.value,c=Array.from(C).filter(e=>{const o=e.querySelector(\".perfect-fleet-body li:nth-child(2) span\")?.textContent,d=e.querySelector(\".perfect-fleet-body li:nth-child(3) span\")?.textContent,r=e.querySelector(\".perfect-fleet-body li:nth-child(1) span\")?.textContent,l=e.querySelector(\".perfect-fleet-title h3\")?.textContent?.toLowerCase()||\"\",E=i.length===0||i.includes(o),u=a.length===0||a.includes(d),n=h.length===0||h.some(g=>r?.includes(g)),s=t===\"\"||l.includes(t);return E&&u&&n&&s});m&&c.sort((e,o)=>{const d=parseInt(e.querySelector(\".perfect-fleet-pricing h2\")?.textContent.replace(/[^0-9]/g,\"\")||\"0\"),r=parseInt(o.querySelector(\".perfect-fleet-pricing h2\")?.textContent.replace(/[^0-9]/g,\"\")||\"0\");return m===\"high-to-low\"?r-d:d-r}),C.forEach(e=>{const o=e.closest(\".col-lg-4\");o&&(o.style.display=c.includes(e)?\"\":\"none\")});const v=document.querySelector(\".fleets-collection-box .row\");v&&c.forEach(e=>{v.appendChild(e.closest(\".col-lg-4\"))})}S.forEach(t=>{t.addEventListener(\"change\",f)}),L.forEach(t=>{t.addEventListener(\"change\",f)}),q.forEach(t=>{t.addEventListener(\"change\",f)}),A.forEach(t=>{t.addEventListener(\"change\",f)}),document.querySelectorAll(\".car-slider\").forEach(t=>{const i=t.querySelectorAll(\".slider-image\"),a=t.querySelectorAll(\".nav-dot\"),h=t.querySelector(\".prev-arrow\"),m=t.querySelector(\".next-arrow\");let c=0;const v=i.length;let e=0,o=0;const d=50;function r(n){n<0&&(n=v-1),n>=v&&(n=0),c=n,i.forEach(s=>{s.style.display=\"none\"}),i[c].style.display=\"block\",a.forEach((s,g)=>{s.classList.toggle(\"active\",g===c)})}t.addEventListener(\"touchstart\",n=>{e=n.touches[0].clientX},{passive:!0}),t.addEventListener(\"touchmove\",n=>{o=n.touches[0].clientX},{passive:!0}),t.addEventListener(\"touchend\",()=>{const n=o-e;Math.abs(n)>d&&(n>0?r(c-1):r(c+1))}),a.forEach((n,s)=>{n.addEventListener(\"click\",()=>{r(s)})}),h?.addEventListener(\"click\",()=>{r(c-1)}),m?.addEventListener(\"click\",()=>{r(c+1)});let l=null;function E(){l||(l=window.setInterval(()=>{r(c+1)},3e3))}function u(){l&&(clearInterval(l),l=null)}t.addEventListener(\"mouseenter\",E),t.addEventListener(\"mouseleave\",u),a.forEach(n=>{n.addEventListener(\"click\",u)}),h?.addEventListener(\"click\",u),m?.addEventListener(\"click\",u)}),w?.addEventListener(\"input\",f)});"],["D:/sumit/devliqly projects/crownweb/src/components/home/Fleets.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",function(){const f=document.querySelectorAll(\".transmission-filter\"),h=document.querySelectorAll(\".fuel-filter\"),y=document.querySelectorAll(\".fleets-collection-item\");function v(){const e=Array.from(f).filter(t=>t.checked).map(t=>t.value),s=Array.from(h).filter(t=>t.checked).map(t=>t.value);y.forEach(t=>{const i=t.querySelector(\".perfect-fleet-body li:nth-child(2) span\").textContent,a=t.querySelector(\".perfect-fleet-body li:nth-child(3) span\").textContent,c=e.length===0||e.includes(i),d=s.length===0||s.includes(a);c&&d?t.closest(\".col-lg-4\").style.display=\"\":t.closest(\".col-lg-4\").style.display=\"none\"})}f.forEach(e=>{e.addEventListener(\"change\",v)}),h.forEach(e=>{e.addEventListener(\"change\",v)}),document.querySelectorAll(\".car-slider\").forEach(e=>{const s=e.querySelectorAll(\".slider-image\"),t=e.querySelectorAll(\".nav-dot\"),i=e.querySelector(\".prev-arrow\"),a=e.querySelector(\".next-arrow\");let c=0;const d=s.length;let m=0,E=0;const p=50;function l(n){n<0&&(n=d-1),n>=d&&(n=0),c=n,s.forEach(r=>{r.style.display=\"none\"}),s[c].style.display=\"block\",t.forEach((r,S)=>{r.classList.toggle(\"active\",S===c)})}e.addEventListener(\"touchstart\",n=>{m=n.touches[0].clientX},{passive:!0}),e.addEventListener(\"touchmove\",n=>{E=n.touches[0].clientX},{passive:!0}),e.addEventListener(\"touchend\",()=>{const n=E-m;Math.abs(n)>p&&(n>0?l(c-1):l(c+1))}),t.forEach((n,r)=>{n.addEventListener(\"click\",()=>{l(r)})}),i.addEventListener(\"click\",()=>{l(c-1)}),a.addEventListener(\"click\",()=>{l(c+1)});let o=null;function L(){o||(o=setInterval(()=>{l(c+1)},3e3))}function u(){o&&(clearInterval(o),o=null)}e.addEventListener(\"mouseenter\",L),e.addEventListener(\"mouseleave\",u),t.forEach(n=>{n.addEventListener(\"click\",u)}),i.addEventListener(\"click\",u),a.addEventListener(\"click\",u)})});"]],"assets":["/_astro/page-header-bg.BJ7GAbR_.jpg","/_astro/about-img-2.CGsWUDec.jpg","/_astro/about-img-1.CDIRS8Ib.jpg","/_astro/why-choose-img.fv_I9XbE.jpg","/_astro/our-mission-img.L8MsFnn4.jpg","/_astro/our-vision-img.SFOydG4r.jpg","/_astro/logohead.CjF_7RwV.png","/_astro/icon-about-trusted-2.SW_1o5Vy.svg","/_astro/icon-location.BO3nmWFE.svg","/_astro/icon-phone.1uofV3jX.svg","/_astro/icon-mail.m7OFQjg4.svg","/_astro/icon-why-choose-1.96h7wla0.svg","/_astro/icon-why-choose-4.bXLRSh5u.svg","/_astro/icon-why-choose-2.DM8d1xuA.svg","/_astro/icon-why-choose-3.CTrLUAac.svg","/_astro/logofoot.B_62Tq2-.png","/_astro/cta-car-img.Be_2sAFq.png","/_astro/icon-rent-details-1.DyQdVzT1.svg","/_astro/icon-rent-details-4.CVEURhj4.svg","/_astro/icon-rent-details-5.D4oy5bcH.svg","/_astro/icon-calendar.BwfSExXh.svg","/_astro/icon-rent-details-2.DRoE-h7z.svg","/_astro/why-choose-us-bg.Bxv7aQ6k.svg","/_astro/hero-bg.Bn8pRspf.jpg","/_astro/why-choose-car-img.CCxNK9N_.png","/_astro/intro-video-bg.9XXRD8Wx.jpg","/_astro/our-faqs-car-img.BK10wDNJ.png","/_astro/footer-bg.DtuQNt0y.svg","/_astro/testimonial-bg.D0cTerv_.png","/_astro/about.BG0qwuTL.css","/_astro/cars.hTqxC4Fo.css","/favicon.svg","/logofoot.png","/logohead.png","/js/bootstrap.min.js","/js/function.js","/js/gsap.min.js","/js/jquery-3.7.1.min.js","/js/jquery-ui.js","/js/jquery.counterup.min.js","/js/jquery.magnific-popup.min.js","/js/jquery.mb.YTPlayer.min.js","/js/jquery.slicknav.js","/js/jquery.waypoints.min.js","/js/magiccursor.js","/js/parallaxie.js","/js/ScrollTrigger.min.js","/js/SmoothScroll.js","/js/SplitText.js","/js/swiper-bundle.min.js","/js/validator.min.js","/js/wow.js","/webfonts/fa-brands-400.ttf","/webfonts/fa-brands-400.woff2","/webfonts/fa-regular-400.ttf","/webfonts/fa-regular-400.woff2","/webfonts/fa-solid-900.ttf","/webfonts/fa-solid-900.woff2","/webfonts/fa-v4compatibility.ttf","/webfonts/fa-v4compatibility.woff2","/_astro/client.CBwL3ilQ.js","/_astro/ContactForm.D208XW0_.js","/_astro/index.ai7qpRr1.js","/_astro/Inquiry.BgodpLfU.js","/_astro/jsx-runtime.D_zvdyIk.js"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"serverIslandNameMap":[],"key":"PVBuY4yiROSgmBlC2fQGKhTr7cR5dSNnEe1HGwj50Vs="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
