import { c as createComponent, m as maybeRenderHead, r as renderComponent, d as addAttribute, a as renderTemplate } from '../chunks/astro/server_CYK8Mm0f.mjs';
import 'piccolore';
import { $ as $$Image } from '../chunks/_astro_assets_58ChExD4.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import React, { useState } from 'react';
import { i as iconPhone } from '../chunks/icon-phone_sOvvFBow.mjs';
import { c as createSvgComponent } from '../chunks/runtime_DBuqilIp.mjs';
import { b as brand, a as socials, $ as $$Layout, s as seo } from '../chunks/Layout_Dh-fs9T-.mjs';
import { $ as $$GeneralHero } from '../chunks/GeneralHero_D4Jj1BFp.mjs';
export { renderers } from '../renderers.mjs';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    phone: "",
    msg: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch("https://chester-backend.onrender.com/api/v1/crownCars", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      setFormData({
        fname: "",
        lname: "",
        phone: "",
        msg: ""
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsLoading(false);
    }
  };
  return /* @__PURE__ */ jsx(React.Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "col-lg-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "whatsapp-btn", children: [
      " ",
      /* @__PURE__ */ jsxs("a", { href: "https://wa.link/py3dsa", className: "wa-text", target: "_blank", children: [
        /* @__PURE__ */ jsx("i", { class: "fa-brands fa-whatsapp" }),
        " Chat on WhatsApp"
      ] })
    ] }),
    /* @__PURE__ */ jsx("p", { style: { textAlign: "center" }, children: "or" }),
    /* @__PURE__ */ jsx("div", { className: "contact-us-form", children: /* @__PURE__ */ jsx(
      "form",
      {
        id: "contactForm",
        onSubmit: handleSubmit,
        "data-toggle": "validator",
        className: "wow fadeInUp",
        "data-wow-delay": "0.5s",
        children: /* @__PURE__ */ jsxs("div", { className: "row", children: [
          /* @__PURE__ */ jsxs("div", { className: "form-group col-md-6 mb-4", children: [
            /* @__PURE__ */ jsx("label", { children: "first name" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                name: "fname",
                className: "form-control",
                id: "fname",
                placeholder: "Enter Your Name",
                value: formData.fname,
                onChange: handleChange,
                required: true
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "help-block with-errors" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "form-group col-md-6 mb-4", children: [
            /* @__PURE__ */ jsx("label", { children: "last name" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                name: "lname",
                className: "form-control",
                id: "lname",
                placeholder: "Enter Your Name",
                value: formData.lname,
                onChange: handleChange,
                required: true
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "help-block with-errors" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "form-group col-md mb-4", children: [
            /* @__PURE__ */ jsx("label", { children: "phone" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                name: "phone",
                className: "form-control",
                id: "phone",
                placeholder: "Enter Your Number",
                value: formData.phone,
                onChange: handleChange,
                required: true
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "help-block with-errors" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "form-group col-md-12 mb-4", children: [
            /* @__PURE__ */ jsx("label", { children: "message" }),
            /* @__PURE__ */ jsx(
              "textarea",
              {
                name: "msg",
                className: "form-control",
                id: "msg",
                rows: "4",
                placeholder: "Write Your Message",
                value: formData.msg,
                onChange: handleChange,
                required: true
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "help-block with-errors" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "col-lg-12", children: /* @__PURE__ */ jsxs("div", { className: "contact-form-btn", children: [
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "submit",
                className: "btn-default",
                disabled: isLoading,
                children: isLoading ? "Sending..." : "send message"
              }
            ),
            /* @__PURE__ */ jsx("div", { id: "msgSubmit", className: "h3 hidden" })
          ] }) })
        ] })
      }
    ) })
  ] }) });
};

const mail = createSvgComponent({"meta":{"src":"/_astro/icon-mail.m7OFQjg4.svg","width":41,"height":41,"format":"svg"},"attributes":{"width":"41","height":"41","viewBox":"0 0 41 41","fill":"none"},"children":"\r\n<g clip-path=\"url(#clip0_297_782)\">\r\n<path d=\"M37.0459 6.85699H4.07715C2.14262 6.85699 0.561523 8.43114 0.561523 10.3726V31.4664C0.561523 33.4086 2.14363 34.982 4.07715 34.982H37.0459C38.9804 34.982 40.5615 33.4079 40.5615 31.4664V10.3726C40.5615 8.43067 38.9796 6.85699 37.0459 6.85699ZM36.5061 9.20074C35.3694 10.3411 22.0182 23.7359 21.4696 24.2862C21.0115 24.7457 20.1118 24.7461 19.6534 24.2862L4.61699 9.20074H36.5061ZM2.90527 31.0355V10.8035L12.9885 20.9195L2.90527 31.0355ZM4.61699 32.6382L14.6431 22.5795L17.9935 25.9408C19.3664 27.3182 21.7571 27.3177 23.1297 25.9408L26.48 22.5796L36.5061 32.6382H4.61699ZM38.2178 31.0355L28.1346 20.9195L38.2178 10.8035V31.0355Z\" fill=\"white\" />\r\n</g>\r\n<defs>\r\n<clipPath id=\"clip0_297_782\">\r\n<rect width=\"40\" height=\"40\" fill=\"white\" transform=\"translate(0.561523 0.919495)\" />\r\n</clipPath>\r\n</defs>\r\n"});

const location = createSvgComponent({"meta":{"src":"/_astro/icon-location.BO3nmWFE.svg","width":41,"height":41,"format":"svg"},"attributes":{"width":"41","height":"41","viewBox":"0 0 41 41","fill":"none"},"children":"\r\n<g clip-path=\"url(#clip0_297_799)\">\r\n<path d=\"M27.2393 27.348C31.4958 20.6689 30.9607 21.5022 31.0834 21.328C32.6331 19.1422 33.4521 16.5697 33.4521 13.8882C33.4521 6.77731 27.6818 0.919495 20.5615 0.919495C13.4645 0.919495 7.6709 6.76574 7.6709 13.8882C7.6709 16.5679 8.50715 19.2079 10.1076 21.4231L13.8836 27.3481C9.84645 27.9685 2.9834 29.8173 2.9834 33.8882C2.9834 35.3722 3.95199 37.4871 8.56637 39.135C11.7884 40.2857 16.0483 40.9195 20.5615 40.9195C29.001 40.9195 38.1396 38.5389 38.1396 33.8882C38.1396 29.8166 31.2846 27.9697 27.2393 27.348ZM12.0654 20.1339C12.0525 20.1138 12.039 20.0941 12.025 20.0747C10.6932 18.2425 10.0146 16.0711 10.0146 13.8882C10.0146 8.02746 14.7339 3.26324 20.5615 3.26324C26.3771 3.26324 31.1084 8.02957 31.1084 13.8882C31.1084 16.0747 30.4427 18.1724 29.1829 19.9563C29.07 20.1052 29.659 19.1902 20.5615 33.4655L12.0654 20.1339ZM20.5615 38.5757C11.3432 38.5757 5.32715 35.8661 5.32715 33.8882C5.32715 32.5589 8.4184 30.373 15.2684 29.521L19.5732 36.2759C19.7884 36.6136 20.1611 36.8179 20.5614 36.8179C20.9618 36.8179 21.3346 36.6135 21.5496 36.2759L25.8544 29.521C32.7046 30.373 35.7959 32.5589 35.7959 33.8882C35.7959 35.8493 29.8339 38.5757 20.5615 38.5757Z\" fill=\"white\" />\r\n<path d=\"M20.5615 8.02887C17.3307 8.02887 14.7021 10.6574 14.7021 13.8882C14.7021 17.1191 17.3307 19.7476 20.5615 19.7476C23.7924 19.7476 26.4209 17.1191 26.4209 13.8882C26.4209 10.6574 23.7924 8.02887 20.5615 8.02887ZM20.5615 17.4039C18.623 17.4039 17.0459 15.8268 17.0459 13.8882C17.0459 11.9497 18.623 10.3726 20.5615 10.3726C22.5 10.3726 24.0771 11.9497 24.0771 13.8882C24.0771 15.8268 22.5 17.4039 20.5615 17.4039Z\" fill=\"white\" />\r\n</g>\r\n<defs>\r\n<clipPath id=\"clip0_297_799\">\r\n<rect width=\"40\" height=\"40\" fill=\"white\" transform=\"translate(0.561523 0.919495)\" />\r\n</clipPath>\r\n</defs>\r\n"});

const $$ContactCard = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Page Contact Us Start -->${maybeRenderHead()}<div class="page-contact-us"> <div class="contact-info-form"> <div class="container"> <div class="row"> <div class="col-lg-6"> <!-- Contact Information Start --> <div class="contact-information"> <!-- Contact Information Title Start --> <div class="section-title"> <h2 class="text-anime-style-3" data-cursor="-opaque">
Contact information
</h2> <p>Say something to start a live chat!</p> </div> <!-- Contact Information Title End --> <!-- Contact Information List Start --> <div class="contact-info-list"> <!-- Contact Info Item Start --> <div class="contact-info-item wow fadeInUp" data-wow-delay="0.25s"> <!-- Icon Box Start --> <div class="icon-box"> ${renderComponent($$result, "Image", $$Image, { "src": iconPhone, "alt": "" })} </div> <!-- Icon Box End --> <!-- Contact Info Content Start --> <div class="contact-info-content"> <p>${brand.contactNumber}</p> </div> <!-- Contact Info Content End --> </div> <!-- Contact Info Item End --> <!-- Contact Info Item Start --> <div class="contact-info-item wow fadeInUp" data-wow-delay="0.5s"> <!-- Icon Box Start --> <div class="icon-box"> ${renderComponent($$result, "Image", $$Image, { "src": mail, "alt": "" })} </div> <!-- Icon Box End --> <!-- Contact Info Content Start --> <div class="contact-info-content"> <p>${brand.contactEmail}</p> </div> <!-- Contact Info Content End --> </div> <!-- Contact Info Item End --> <!-- Contact Info Item Start --> <div class="contact-info-item wow fadeInUp" data-wow-delay="0.75s"> <!-- Icon Box Start --> <div class="icon-box"> ${renderComponent($$result, "Image", $$Image, { "src": location, "alt": "" })} </div> <!-- Icon Box End --> <!-- Contact Info Content Start --> <div class="contact-info-content"> <p>${brand.address}</p> </div> <!-- Contact Info Content End --> </div> <!-- Contact Info Item End --> </div> <!-- Contact Information List End --> <!-- Contact Information Social Start --> <div class="contact-info-social wow fadeInUp" data-wow-delay="0.25s"> <ul> ${socials.slice(0, 5).map((item) => renderTemplate`<li><a${addAttribute(item.url, "href")}><i${addAttribute(item.iconClass, "class")}></i></a></li>`)} </ul> </div> <!-- Contact Information Social End --> </div> <!-- Contact Information End --> </div> ${renderComponent($$result, "ContactForm", ContactForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/sumit/devliqly projects/crownweb/src/components/react/ContactForm.jsx", "client:component-export": "default" })} </div> </div> </div> </div> <!-- Page Contact Us End -->`;
}, "D:/sumit/devliqly projects/crownweb/src/components/contact/ContactCard.astro", void 0);

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": seo.contactus.title, "description": seo.contactus.description }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "GeneralHero", $$GeneralHero, { "title": "Contact Us" })} ${renderComponent($$result2, "ContactCard", $$ContactCard, {})}                  ` })}`;
}, "D:/sumit/devliqly projects/crownweb/src/pages/contact.astro", void 0);

const $$file = "D:/sumit/devliqly projects/crownweb/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
