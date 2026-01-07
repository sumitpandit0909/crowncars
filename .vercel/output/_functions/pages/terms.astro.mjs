import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../chunks/astro/server_CYK8Mm0f.mjs';
import 'piccolore';
import { $ as $$GeneralHero } from '../chunks/GeneralHero_D4Jj1BFp.mjs';
import { $ as $$Layout, s as seo } from '../chunks/Layout_Dh-fs9T-.mjs';
import { marked } from 'marked';
import { f as fetchLegalPage } from '../chunks/legal_CJS3DNzH.mjs';
import { Fragment } from 'react';
export { renderers } from '../renderers.mjs';

const $$Terms = createComponent(async ($$result, $$props, $$slots) => {
  const termsData = await fetchLegalPage("terms");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": seo.terms.title, "description": seo.terms.description }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "GeneralHero", $$GeneralHero, { "title": "Terms & Conditions" })} ${maybeRenderHead()}<section class="container mx-auto p-6 m-5"> ${termsData ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate` <div class="content-box">${unescapeHTML(marked.parse(termsData.content_mdx))}</div> <p class="mt-4 text-sm text-gray-500">Last updated: ${new Date(termsData.updated_at).toLocaleDateString()}</p> ` })}` : renderTemplate`<div class="error-box"> <h2>Terms & Conditions</h2> <p>Unable to load terms and conditions at this time. Please try again later.</p> </div>`} </section> ` })}`;
}, "D:/sumit/devliqly projects/crownweb/src/pages/terms.astro", void 0);

const $$file = "D:/sumit/devliqly projects/crownweb/src/pages/terms.astro";
const $$url = "/terms";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Terms,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
