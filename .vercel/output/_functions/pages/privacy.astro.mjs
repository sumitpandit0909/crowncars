import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../chunks/astro/server_CYK8Mm0f.mjs';
import 'piccolore';
import { $ as $$GeneralHero } from '../chunks/GeneralHero_D4Jj1BFp.mjs';
import { $ as $$Layout, s as seo } from '../chunks/Layout_Dh-fs9T-.mjs';
import { marked } from 'marked';
import { f as fetchLegalPage } from '../chunks/legal_DoYKhQbF.mjs';
import { Fragment } from 'react';
export { renderers } from '../renderers.mjs';

const $$Privacy = createComponent(async ($$result, $$props, $$slots) => {
  const privacyData = await fetchLegalPage("privacy");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": seo.privacy.title, "description": seo.privacy.description }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "GeneralHero", $$GeneralHero, { "title": "Privacy Policy" })} ${maybeRenderHead()}<section class="terms-container m-5"> <div class="container"> ${privacyData ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate` <div class="content-box">${unescapeHTML(marked.parse(privacyData.content_mdx))}</div> <p class="mt-4 text-sm text-gray-500">Last updated: ${new Date(privacyData.updated_at).toLocaleDateString()}</p> ` })}` : renderTemplate`<div class="error-box"> <h2>Privacy Policy</h2> <p>Unable to load privacy policy at this time. Please try again later.</p> </div>`} </div> </section> ` })}`;
}, "D:/sumit/devliqly projects/crownweb/src/pages/privacy.astro", void 0);

const $$file = "D:/sumit/devliqly projects/crownweb/src/pages/privacy.astro";
const $$url = "/privacy";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Privacy,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
