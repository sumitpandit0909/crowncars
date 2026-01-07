import { c as createComponent, e as createAstro, m as maybeRenderHead, d as addAttribute, a as renderTemplate } from './astro/server_CYK8Mm0f.mjs';
import 'piccolore';
import 'clsx';

const pageHeaderBg = new Proxy({"src":"/_astro/page-header-bg.BJ7GAbR_.jpg","width":1920,"height":768,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/sumit/devliqly projects/crownweb/src/assets/images/page-header-bg.jpg";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro();
const $$GeneralHero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$GeneralHero;
  const { title } = Astro2.props;
  return renderTemplate`<!-- Page Header Start -->${maybeRenderHead()}<div class="page-header bg-section parallaxie"${addAttribute(`background-image: url(${pageHeaderBg});background-size: cover;border-radius: 46px;position: relative;overflow: hidden;padding: 140px 0;`, "style")}> <div class="container"> <div class="row"> <div class="col-lg-12"> <!-- Page Header Box Start --> <div class="page-header-box"> <h1 class="text-anime-style-3" data-cursor="-opaque">${title}</h1> <nav class="wow fadeInUp"> <ol class="breadcrumb"> <!-- <li class="breadcrumb-item active" aria-current="page">home</li> --> <li class="breadcrumb-item active" aria-current="page">${title}</li> </ol> </nav> </div> <!-- Page Header Box End --> </div> </div> </div> </div> <!-- Page Header End --> `;
}, "D:/sumit/devliqly projects/crownweb/src/components/global/GeneralHero.astro", void 0);

export { $$GeneralHero as $ };
