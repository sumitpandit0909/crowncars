import { c as createComponent, m as maybeRenderHead, r as renderComponent, a as renderTemplate, d as addAttribute, e as createAstro, f as renderSlot, g as renderHead } from './astro/server_CYK8Mm0f.mjs';
import 'piccolore';
/* empty css                         */
import { $ as $$Image } from './_astro_assets_58ChExD4.mjs';

const logo$1 = new Proxy({"src":"/_astro/logohead.CjF_7RwV.png","width":478,"height":193,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/sumit/devliqly projects/crownweb/src/assets/images/logohead.png";
							}
							
							return target[name];
						}
					});

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Header Start -->${maybeRenderHead()}<header class="main-header"> <div class="header-sticky"> <nav class="navbar navbar-expand-lg"> <div class="container" style="display: flex;justify-content: space-between;"> <!-- Logo Start --> <a class="navbar-brand" href="/"> ${renderComponent($$result, "Image", $$Image, { "format": "avif", "src": logo$1, "alt": "Logo", "width": 200, "height": 80, "style": "object-fit: contain;" })} </a> <!-- Logo End --> <!-- Main Menu Start --> <div class="collapse navbar-collapse main-menu"> <div class="nav-menu-wrapper"> <ul class="navbar-nav mr-auto" id="menu"> <li class="nav-item"><a class="nav-link" href="/">Home</a></li> <li class="nav-item"> <a class="nav-link" href="/about">About Us</a> </li> <li class="nav-item"> <a class="nav-link" href="/cars">Cars</a> </li> <!-- <li class="nav-item"><a class="nav-link" href="/contact">Contact Us</a></li> --> </ul> </div> <!-- Let’s Start Button Start --> <div class="header-btn d-inline-flex"> <a href="/contact" class="btn-default">Contact Us</a> </div> <!-- Let’s Start Button End --> </div> <!-- Main Menu End --> <div class="navbar-toggle"></div> </div> </nav> <div class="responsive-menu"></div> </div> </header> <!-- Header End -->`;
}, "D:/sumit/devliqly projects/crownweb/src/components/global/Header.astro", void 0);

const logo = new Proxy({"src":"/_astro/logofoot.B_62Tq2-.png","width":478,"height":299,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/sumit/devliqly projects/crownweb/src/assets/images/logofoot.png";
							}
							
							return target[name];
						}
					});

const brand = {"contactEmail":"crowncarsrentalsdelhi@gmail.com","contactNumber":"+91 931545120","address":"123, MG Road, New Delhi, India"};
const socials = [{"name":"instagram","url":"https://www.instagram.com/bookcrowncars/","iconClass":"fab fa-instagram"},{"name":"google","url":"https://share.google/Bg0eNXTj2ylRpCWbH","iconClass":"fab fa-google"},{"name":"whatsapp","url":"https://wa.me/91931545120","iconClass":"fab fa-whatsapp"}];
const seo = {"home":{"title":"Crown Cars - Rent Luxury & Affordable Cars Easily","description":"Find the perfect rental car for your journey at Crown Cars. Affordable rates, luxury cars, and easy booking."},"about":{"title":"About Crown Cars - Your Trusted Car Rental Partner","description":"Learn more about Crown Cars, our mission, values, and how we provide the best car rental experience."},"cars":{"title":"Browse Our Fleet - Luxury & Economy Cars | Crown Cars","description":"Explore our wide range of rental cars, from luxury sedans to budget-friendly options. Find your perfect ride today."},"contactus":{"title":"Contact Crown Cars - We're Here to Help!","description":"Have questions? Reach out to Crown Cars for support, bookings, and more."},"terms":{"title":"Terms & Conditions - Crown Cars Rental Policy","description":"Read the terms and conditions of Crown Cars rental service. Know your rights and responsibilities before booking."},"privacy":{"title":"Privacy Policy - Crown Cars","description":"Understand how Crown Cars handles your personal data. Read our privacy policy for full details."}};

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Footer Start -->${maybeRenderHead()}<footer class="main-footer bg-section"> <div class="container"> <div class="row"> <div class="col-lg-3"> <!-- About Footer Start --> <div class="about-footer"> <!-- Footer Logo Start --> <div class="footer-logo"> ${renderComponent($$result, "Image", $$Image, { "format": "avif", "src": logo, "alt": "footerimg", "width": 200, "height": 100, "style": "object-fit: contain;" })} </div> <!-- Footer Logo End --> <!-- About Footer Content Start --> <div class="about-footer-content"> <p>
Experience the ease and convenience of renting a car with
              Crown Cars.
</p> </div> <!-- About Footer Content End --> </div> <!-- About Footer End --> </div> <div class="col-lg-3 col-md-4"> <!-- Footer Quick Links Start --> <div class="footer-links footer-quick-links"> <h3>legal policy</h3> <ul> <li><a href="/terms">term & condition</a></li> <li><a href="/privacy">privacy policy</a></li> </ul> </div> <!-- Footer Quick Links End --> </div> <div class="col-lg-3 col-md-4"> <!-- Footer Menu Start --> <div class="footer-links footer-menu"> <h3>Contact Us</h3> <ul> <li><a href="/contact">Contact</a></li> </ul> </div> <!-- Footer Menu End --> </div> <div class="col-lg-3 col-md-4"> <!-- Footer Menu Start --> <div class="footer-links footer-menu"> <h3>quick links</h3> <ul> <li><a href="/">home</a></li> <li><a href="/about">about us</a></li> <li><a href="/cars">cars</a></li> </ul> </div> <!-- Footer Menu End --> </div> </div> <!-- Footer Copyright Section Start --> <div class="footer-copyright"> <div class="row align-items-center"> <div class="col-lg-6 col-md-7"> <!-- Footer Copyright Start --> <div class="footer-copyright-text"> <p>© 2025 CROWN CARS. All rights reserved.</p> </div> <!-- Footer Copyright End --> </div> <div class="col-lg-6 col-md-5"> <!-- Footer Social Link Start --> <div class="footer-social-links"> <ul> ${socials.slice(0, 5).map((item) => renderTemplate`<li><a${addAttribute(item.url, "href")}><i${addAttribute(item.iconClass, "class")}></i></a></li>`)} </ul> </div> <!-- Footer Social Link End --> </div> </div> </div> <!-- Footer Copyright Section End --> </div> </footer> <!-- Footer End -->`;
}, "D:/sumit/devliqly projects/crownweb/src/components/global/Footer.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description } = Astro2.props;
  return renderTemplate(_a || (_a = __template([`<html lang="zxx"> <!-- Mirrored from html.awaikenthemes.com/Crown Cars/dark/ by HTTrack Website Copier/3.x [XR&CO'2014], Sun, 23 Mar 2025 08:17:47 GMT --> <head><!-- Meta --><meta charset="utf-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description" content=""><meta name="keywords" content=""><meta name="author" content="Awaiken"><!-- Page Title --><title>`, '</title><!-- Favicon Icon --><meta name="description"', '><link rel="shortcut icon" type="image/x-icon" href="/logofoot.png"><!-- Google Fonts Css--><link rel="preconnect" href="https://fonts.googleapis.com/"><link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin><link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Epilogue:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">', '</head> <body> <!-- Preloader Start --> <!-- <div class="preloader">\n      <div class="loading-container">\n        <div class="loading"></div>\n        <div id="loading-icon">\n          <Image src={loader} alt="" />\n        </div>\n      </div>\n    </div> --> <!-- Preloader End --> ', " ", " ", " <!-- WhatsApp Button --> <a", ' class="whatsapp-float" target="_blank"> <i class="fab fa-whatsapp"></i> </a> <!-- Jquery Library File --> <script defer src="/js/jquery-3.7.1.min.js"><\/script> <!-- Jquery Ui Js File --> <script defer src="/js/jquery-ui.js"><\/script> <!-- Bootstrap js file --> <script defer src="/js/bootstrap.min.js"><\/script> <!-- Validator js file --> <script defer src="/js/validator.min.js"><\/script> <!-- SlickNav js file --> <script defer src="/js/jquery.slicknav.js"><\/script> <!-- Swiper js file --> <script defer src="/js/swiper-bundle.min.js"><\/script> <!-- Counter js file --> <script defer src="/js/jquery.waypoints.min.js"><\/script> <script defer src="/js/jquery.counterup.min.js"><\/script> <!-- Magnific js file --> <script defer src="/js/jquery.magnific-popup.min.js"><\/script> <!-- SmoothScroll --> <script defer src="/js/SmoothScroll.js"><\/script> <!-- Parallax js --> <script defer src="/js/parallaxie.js"><\/script> <!-- MagicCursor js file --> <script defer src="/js/gsap.min.js"><\/script> <script defer src="/js/magiccursor.js"><\/script> <!-- Text Effect js file --> <script defer src="/js/SplitText.js"><\/script> <script defer src="/js/ScrollTrigger.min.js"><\/script> <!-- YTPlayer js File --> <script defer src="/js/jquery.mb.YTPlayer.min.js"><\/script> <!-- Wow js file --> <script defer src="/js/wow.js"><\/script> <!-- Main Custom js file --> <script defer src="/js/function.js"><\/script> <script defer src="../../../demo.awaikenthemes.com/assets/js/theme-panel.js"><\/script> </body> </html>'])), title, addAttribute(description, "content"), renderHead(), renderComponent($$result, "Header", $$Header, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}), addAttribute(socials[2].url, "href"));
}, "D:/sumit/devliqly projects/crownweb/src/layouts/Layout.astro", void 0);

export { $$Layout as $, socials as a, brand as b, seo as s };
