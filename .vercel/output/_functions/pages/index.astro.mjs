import { c as createComponent, m as maybeRenderHead, r as renderComponent, a as renderTemplate, b as renderScript, d as addAttribute } from '../chunks/astro/server_CYK8Mm0f.mjs';
import 'piccolore';
import { a as socials, $ as $$Layout, s as seo } from '../chunks/Layout_Dh-fs9T-.mjs';
import { jsx, Fragment, jsxs } from 'react/jsx-runtime';
import { useState, useEffect, Fragment as Fragment$1 } from 'react';
import { s as supabase } from '../chunks/supabase_6dCz9F9L.mjs';
import { c as createSvgComponent } from '../chunks/runtime_DBuqilIp.mjs';
import { i as iconPhone } from '../chunks/icon-phone_sOvvFBow.mjs';
import { $ as $$AboutUs, b as $$Testimonials, a as $$WhyUs } from '../chunks/Testimonials_UPPKJcEy.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_58ChExD4.mjs';
import { FaUserFriends, FaCog, FaGasPump, FaPalette } from 'react-icons/fa';
import { m as mapSupabaseCarToUI } from '../chunks/carMapper_B4QkH3Dt.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const iconRentDetails1 = createSvgComponent({"meta":{"src":"/_astro/icon-rent-details-1.DyQdVzT1.svg","width":24,"height":25,"format":"svg"},"attributes":{"width":"24","height":"25","viewBox":"0 0 24 25","fill":"none"},"children":"\r\n<path d=\"M19.0532 9.58105H4.94385L6.0658 7.35051C6.58494 6.31832 7.6415 5.66699 8.79697 5.66699H15.2001C16.3553 5.66699 17.4119 6.31832 17.931 7.35051L19.0532 9.58105Z\" stroke=\"white\" stroke-miterlimit=\"10\" />\r\n<path d=\"M21.8188 13.0791V15.6183C21.8188 15.9092 21.7666 16.1979 21.6644 16.4705L21.5976 16.6489C21.5177 16.8626 21.3707 17.0375 21.186 17.1537C21.0274 17.2538 20.8403 17.31 20.6439 17.31L18.9681 17.352C18.8458 17.3553 18.7258 17.318 18.6267 17.2463L17.7642 16.6219L17.29 16.2788L6.70682 16.2319L6.23291 16.5748L5.36385 17.2039C5.26869 17.2728 5.15408 17.31 5.03643 17.31H3.35291C3.1565 17.31 2.96971 17.2538 2.81104 17.1537C2.62611 17.0375 2.47939 16.8626 2.39924 16.6489L2.33244 16.4705C2.23049 16.1979 2.17822 15.9092 2.17822 15.6183V13.0791C2.17822 11.9785 2.74494 10.9557 3.67822 10.3723L4.94385 9.58105H19.0532L20.3186 10.3723C21.2519 10.9557 21.8188 11.9785 21.8188 13.0791Z\" stroke=\"white\" stroke-miterlimit=\"10\" />\r\n<path d=\"M6.23314 16.5752V18.2533C6.23314 18.5932 5.95752 18.8688 5.61768 18.8688H3.4265C3.08666 18.8688 2.81104 18.5932 2.81104 18.2533V17.1541C2.96971 17.2542 3.1565 17.3104 3.35291 17.3104H5.03643\" stroke=\"white\" stroke-miterlimit=\"10\" />\r\n<path d=\"M18.9684 17.3521L20.6442 17.3102C20.8406 17.3102 21.0276 17.2539 21.1863 17.1539V18.2531C21.1863 18.5929 20.9106 18.8686 20.5708 18.8686H18.3796C18.0398 18.8686 17.7642 18.5929 17.7642 18.2531V16.6221\" stroke=\"white\" stroke-miterlimit=\"10\" />\r\n<path d=\"M19.0533 9.51953C18.4554 10.6513 17.6712 11.6845 16.7417 12.5645\" stroke=\"white\" stroke-miterlimit=\"10\" />\r\n<path d=\"M4.94385 9.51953C5.54174 10.6513 6.32596 11.6845 7.25549 12.5645\" stroke=\"white\" stroke-miterlimit=\"10\" />\r\n<path d=\"M17.6904 14.8413C17.6904 13.9387 18.4221 13.207 19.3247 13.207H20.1389C20.2918 13.207 20.4155 13.3308 20.4155 13.4836V14.2048C20.4155 14.5563 20.1305 14.8413 19.7789 14.8413H17.6904Z\" stroke=\"white\" stroke-miterlimit=\"10\" />\r\n<path d=\"M18.9648 9.47668C18.9648 8.69504 19.5984 8.06152 20.38 8.06152H21.085C21.2172 8.06152 21.3245 8.16863 21.3245 8.30105V8.92543C21.3245 9.22988 21.0777 9.47668 20.7733 9.47668H18.9648Z\" stroke=\"white\" stroke-miterlimit=\"10\" />\r\n<path d=\"M5.03229 9.51965C5.03229 8.73801 4.39877 8.10449 3.61713 8.10449H2.91189C2.77971 8.10449 2.67236 8.2116 2.67236 8.34402V8.9684C2.67236 9.27285 2.91916 9.51965 3.22361 9.51965H5.03229Z\" stroke=\"white\" stroke-miterlimit=\"10\" />\r\n<path d=\"M6.30613 14.8413C6.30613 13.9387 5.57441 13.207 4.67184 13.207H3.85762C3.7048 13.207 3.58105 13.3308 3.58105 13.4836V14.2048C3.58105 14.5563 3.86605 14.8413 4.21762 14.8413H6.30613Z\" stroke=\"white\" stroke-miterlimit=\"10\" />\r\n<path d=\"M7.9292 14.373H15.908\" stroke=\"white\" stroke-miterlimit=\"10\" />\r\n"});

const iconRentDetails2 = createSvgComponent({"meta":{"src":"/_astro/icon-rent-details-2.DRoE-h7z.svg","width":24,"height":25,"format":"svg"},"attributes":{"width":"24","height":"25","viewBox":"0 0 24 25","fill":"none"},"children":"\r\n<g clip-path=\"url(#clip0_345_10131)\">\r\n<path d=\"M16.0052 16.0075C18.5591 12 18.2381 12.5 18.3117 12.3955C19.2415 11.084 19.7329 9.54048 19.7329 7.93164C19.7329 3.66508 16.2707 0.150391 11.9985 0.150391C7.74032 0.150391 4.26416 3.65814 4.26416 7.93164C4.26416 9.53945 4.76591 11.1234 5.72619 12.4525L7.99175 16.0075C5.56949 16.3798 1.45166 17.4891 1.45166 19.9316C1.45166 20.822 2.03282 22.0909 4.80144 23.0797C6.73466 23.7701 9.29061 24.1504 11.9985 24.1504C17.0622 24.1504 22.5454 22.722 22.5454 19.9316C22.5454 17.4887 18.4324 16.3805 16.0052 16.0075ZM6.90083 11.6791C6.8931 11.667 6.88504 11.6552 6.8766 11.6435C6.07752 10.5442 5.67041 9.24137 5.67041 7.93164C5.67041 4.41517 8.50194 1.55664 11.9985 1.55664C15.4879 1.55664 18.3267 4.41644 18.3267 7.93164C18.3267 9.24348 17.9272 10.5021 17.1714 11.5725C17.1036 11.6618 17.457 11.1128 11.9985 19.678L6.90083 11.6791ZM11.9985 22.7441C6.46757 22.7441 2.85791 21.1184 2.85791 19.9316C2.85791 19.134 4.71266 17.8225 8.82266 17.3113L11.4056 21.3642C11.5347 21.5668 11.7583 21.6895 11.9985 21.6895C12.2387 21.6895 12.4624 21.5668 12.5914 21.3642L15.1743 17.3113C19.2844 17.8225 21.1392 19.134 21.1392 19.9316C21.1392 21.1083 17.562 22.7441 11.9985 22.7441Z\" fill=\"white\" />\r\n<path d=\"M11.9985 4.41602C10.06 4.41602 8.48291 5.99312 8.48291 7.93164C8.48291 9.87016 10.06 11.4473 11.9985 11.4473C13.9371 11.4473 15.5142 9.87016 15.5142 7.93164C15.5142 5.99312 13.9371 4.41602 11.9985 4.41602ZM11.9985 10.041C10.8354 10.041 9.88916 9.09475 9.88916 7.93164C9.88916 6.76853 10.8354 5.82227 11.9985 5.82227C13.1616 5.82227 14.1079 6.76853 14.1079 7.93164C14.1079 9.09475 13.1616 10.041 11.9985 10.041Z\" fill=\"white\" />\r\n</g>\r\n<defs>\r\n<clipPath id=\"clip0_345_10131\">\r\n<rect width=\"24\" height=\"24\" fill=\"white\" transform=\"translate(-0.00146484 0.150391)\" />\r\n</clipPath>\r\n</defs>\r\n"});

createSvgComponent({"meta":{"src":"/_astro/icon-rent-details-5.D4oy5bcH.svg","width":24,"height":25,"format":"svg"},"attributes":{"width":"24","height":"25","viewBox":"0 0 24 25","fill":"none"},"children":"\r\n<path d=\"M19.5029 3.15039H18.0029C18.0029 2.32339 17.3299 1.65039 16.5029 1.65039C15.6759 1.65039 15.0029 2.32339 15.0029 3.15039H9.00293C9.00293 2.32339 8.32993 1.65039 7.50293 1.65039C6.67593 1.65039 6.00293 2.32339 6.00293 3.15039H4.50293C3.12443 3.15039 2.00293 4.27189 2.00293 5.65039V20.1504C2.00293 21.5289 3.12443 22.6504 4.50293 22.6504H19.5029C20.8814 22.6504 22.0029 21.5289 22.0029 20.1504V5.65039C22.0029 4.27189 20.8814 3.15039 19.5029 3.15039ZM16.0029 3.15039C16.0029 2.87489 16.2269 2.65039 16.5029 2.65039C16.7789 2.65039 17.0029 2.87489 17.0029 3.15039V4.15039C17.0029 4.42589 16.7789 4.65039 16.5029 4.65039C16.2269 4.65039 16.0029 4.42589 16.0029 4.15039V3.15039ZM7.00293 3.15039C7.00293 2.87489 7.22693 2.65039 7.50293 2.65039C7.77893 2.65039 8.00293 2.87489 8.00293 3.15039V4.15039C8.00293 4.42589 7.77893 4.65039 7.50293 4.65039C7.22693 4.65039 7.00293 4.42589 7.00293 4.15039V3.15039ZM3.00293 5.65039C3.00293 4.82339 3.67593 4.15039 4.50293 4.15039H6.00293C6.00293 4.97739 6.67593 5.65039 7.50293 5.65039C8.32993 5.65039 9.00293 4.97739 9.00293 4.15039H15.0029C15.0029 4.97739 15.6759 5.65039 16.5029 5.65039C17.3299 5.65039 18.0029 4.97739 18.0029 4.15039H19.5029C20.3299 4.15039 21.0029 4.82339 21.0029 5.65039V7.65039H3.00293V5.65039ZM21.0029 20.1504C21.0029 20.9774 20.3299 21.6504 19.5029 21.6504H4.50293C3.67593 21.6504 3.00293 20.9774 3.00293 20.1504V8.65039H21.0029V20.1504Z\" fill=\"white\" />\r\n<path d=\"M6.00293 14.1504H7.50293C8.05443 14.1504 8.50293 13.7019 8.50293 13.1504V11.6504C8.50293 11.0989 8.05443 10.6504 7.50293 10.6504H6.00293C5.45143 10.6504 5.00293 11.0989 5.00293 11.6504V13.1504C5.00293 13.7019 5.45143 14.1504 6.00293 14.1504ZM6.00293 11.6504H7.50293L7.50393 13.1504H6.00293V11.6504Z\" fill=\"white\" />\r\n<path d=\"M11.2529 14.1504H12.7529C13.3044 14.1504 13.7529 13.7019 13.7529 13.1504V11.6504C13.7529 11.0989 13.3044 10.6504 12.7529 10.6504H11.2529C10.7014 10.6504 10.2529 11.0989 10.2529 11.6504V13.1504C10.2529 13.7019 10.7014 14.1504 11.2529 14.1504ZM11.2529 11.6504H12.7529L12.7539 13.1504H11.2529V11.6504Z\" fill=\"white\" />\r\n<path d=\"M16.5029 14.1504H18.0029C18.5544 14.1504 19.0029 13.7019 19.0029 13.1504V11.6504C19.0029 11.0989 18.5544 10.6504 18.0029 10.6504H16.5029C15.9514 10.6504 15.5029 11.0989 15.5029 11.6504V13.1504C15.5029 13.7019 15.9514 14.1504 16.5029 14.1504ZM16.5029 11.6504H18.0029L18.0039 13.1504H16.5029V11.6504Z\" fill=\"white\" />\r\n<path d=\"M6.00293 19.6504H7.50293C8.05443 19.6504 8.50293 19.2019 8.50293 18.6504V17.1504C8.50293 16.5989 8.05443 16.1504 7.50293 16.1504H6.00293C5.45143 16.1504 5.00293 16.5989 5.00293 17.1504V18.6504C5.00293 19.2019 5.45143 19.6504 6.00293 19.6504ZM6.00293 17.1504H7.50293L7.50393 18.6504H6.00293V17.1504Z\" fill=\"white\" />\r\n<path d=\"M11.2529 19.6504H12.7529C13.3044 19.6504 13.7529 19.2019 13.7529 18.6504V17.1504C13.7529 16.5989 13.3044 16.1504 12.7529 16.1504H11.2529C10.7014 16.1504 10.2529 16.5989 10.2529 17.1504V18.6504C10.2529 19.2019 10.7014 19.6504 11.2529 19.6504ZM11.2529 17.1504H12.7529L12.7539 18.6504H11.2529V17.1504Z\" fill=\"white\" />\r\n<path d=\"M16.5029 19.6504H18.0029C18.5544 19.6504 19.0029 19.2019 19.0029 18.6504V17.1504C19.0029 16.5989 18.5544 16.1504 18.0029 16.1504H16.5029C15.9514 16.1504 15.5029 16.5989 15.5029 17.1504V18.6504C15.5029 19.2019 15.9514 19.6504 16.5029 19.6504ZM16.5029 17.1504H18.0029L18.0039 18.6504H16.5029V17.1504Z\" fill=\"white\" />\r\n"});

createSvgComponent({"meta":{"src":"/_astro/icon-rent-details-4.CVEURhj4.svg","width":24,"height":25,"format":"svg"},"attributes":{"width":"24","height":"25","viewBox":"0 0 24 25","fill":"none"},"children":"\r\n<g clip-path=\"url(#clip0_345_10142)\">\r\n<path d=\"M16.0096 16.0075C18.5635 12 18.2425 12.5 18.3161 12.3955C19.2459 11.084 19.7373 9.54048 19.7373 7.93164C19.7373 3.66508 16.2751 0.150391 12.0029 0.150391C7.74471 0.150391 4.26855 3.65814 4.26855 7.93164C4.26855 9.53945 4.7703 11.1234 5.73059 12.4525L7.99615 16.0075C5.57388 16.3798 1.45605 17.4891 1.45605 19.9316C1.45605 20.822 2.03721 22.0909 4.80584 23.0797C6.73905 23.7701 9.29501 24.1504 12.0029 24.1504C17.0666 24.1504 22.5498 22.722 22.5498 19.9316C22.5498 17.4887 18.4368 16.3805 16.0096 16.0075ZM6.90523 11.6791C6.89749 11.667 6.88943 11.6552 6.88099 11.6435C6.08191 10.5442 5.6748 9.24137 5.6748 7.93164C5.6748 4.41517 8.50634 1.55664 12.0029 1.55664C15.4923 1.55664 18.3311 4.41644 18.3311 7.93164C18.3311 9.24348 17.9316 10.5021 17.1758 11.5725C17.108 11.6618 17.4614 11.1128 12.0029 19.678L6.90523 11.6791ZM12.0029 22.7441C6.47196 22.7441 2.8623 21.1184 2.8623 19.9316C2.8623 19.134 4.71705 17.8225 8.82705 17.3113L11.41 21.3642C11.5391 21.5668 11.7626 21.6895 12.0029 21.6895C12.2431 21.6895 12.4668 21.5668 12.5958 21.3642L15.1787 17.3113C19.2888 17.8225 21.1436 19.134 21.1436 19.9316C21.1436 21.1083 17.5664 22.7441 12.0029 22.7441Z\" fill=\"white\" />\r\n<path d=\"M12.0029 4.41602C10.0644 4.41602 8.4873 5.99312 8.4873 7.93164C8.4873 9.87016 10.0644 11.4473 12.0029 11.4473C13.9414 11.4473 15.5186 9.87016 15.5186 7.93164C15.5186 5.99312 13.9414 4.41602 12.0029 4.41602ZM12.0029 10.041C10.8398 10.041 9.89355 9.09475 9.89355 7.93164C9.89355 6.76853 10.8398 5.82227 12.0029 5.82227C13.166 5.82227 14.1123 6.76853 14.1123 7.93164C14.1123 9.09475 13.166 10.041 12.0029 10.041Z\" fill=\"white\" />\r\n</g>\r\n<defs>\r\n<clipPath id=\"clip0_345_10142\">\r\n<rect width=\"24\" height=\"24\" fill=\"white\" transform=\"translate(0.00292969 0.150391)\" />\r\n</clipPath>\r\n</defs>\r\n"});

createSvgComponent({"meta":{"src":"/_astro/icon-rent-details-5.D4oy5bcH.svg","width":24,"height":25,"format":"svg"},"attributes":{"width":"24","height":"25","viewBox":"0 0 24 25","fill":"none"},"children":"\r\n<path d=\"M19.5029 3.15039H18.0029C18.0029 2.32339 17.3299 1.65039 16.5029 1.65039C15.6759 1.65039 15.0029 2.32339 15.0029 3.15039H9.00293C9.00293 2.32339 8.32993 1.65039 7.50293 1.65039C6.67593 1.65039 6.00293 2.32339 6.00293 3.15039H4.50293C3.12443 3.15039 2.00293 4.27189 2.00293 5.65039V20.1504C2.00293 21.5289 3.12443 22.6504 4.50293 22.6504H19.5029C20.8814 22.6504 22.0029 21.5289 22.0029 20.1504V5.65039C22.0029 4.27189 20.8814 3.15039 19.5029 3.15039ZM16.0029 3.15039C16.0029 2.87489 16.2269 2.65039 16.5029 2.65039C16.7789 2.65039 17.0029 2.87489 17.0029 3.15039V4.15039C17.0029 4.42589 16.7789 4.65039 16.5029 4.65039C16.2269 4.65039 16.0029 4.42589 16.0029 4.15039V3.15039ZM7.00293 3.15039C7.00293 2.87489 7.22693 2.65039 7.50293 2.65039C7.77893 2.65039 8.00293 2.87489 8.00293 3.15039V4.15039C8.00293 4.42589 7.77893 4.65039 7.50293 4.65039C7.22693 4.65039 7.00293 4.42589 7.00293 4.15039V3.15039ZM3.00293 5.65039C3.00293 4.82339 3.67593 4.15039 4.50293 4.15039H6.00293C6.00293 4.97739 6.67593 5.65039 7.50293 5.65039C8.32993 5.65039 9.00293 4.97739 9.00293 4.15039H15.0029C15.0029 4.97739 15.6759 5.65039 16.5029 5.65039C17.3299 5.65039 18.0029 4.97739 18.0029 4.15039H19.5029C20.3299 4.15039 21.0029 4.82339 21.0029 5.65039V7.65039H3.00293V5.65039ZM21.0029 20.1504C21.0029 20.9774 20.3299 21.6504 19.5029 21.6504H4.50293C3.67593 21.6504 3.00293 20.9774 3.00293 20.1504V8.65039H21.0029V20.1504Z\" fill=\"white\" />\r\n<path d=\"M6.00293 14.1504H7.50293C8.05443 14.1504 8.50293 13.7019 8.50293 13.1504V11.6504C8.50293 11.0989 8.05443 10.6504 7.50293 10.6504H6.00293C5.45143 10.6504 5.00293 11.0989 5.00293 11.6504V13.1504C5.00293 13.7019 5.45143 14.1504 6.00293 14.1504ZM6.00293 11.6504H7.50293L7.50393 13.1504H6.00293V11.6504Z\" fill=\"white\" />\r\n<path d=\"M11.2529 14.1504H12.7529C13.3044 14.1504 13.7529 13.7019 13.7529 13.1504V11.6504C13.7529 11.0989 13.3044 10.6504 12.7529 10.6504H11.2529C10.7014 10.6504 10.2529 11.0989 10.2529 11.6504V13.1504C10.2529 13.7019 10.7014 14.1504 11.2529 14.1504ZM11.2529 11.6504H12.7529L12.7539 13.1504H11.2529V11.6504Z\" fill=\"white\" />\r\n<path d=\"M16.5029 14.1504H18.0029C18.5544 14.1504 19.0029 13.7019 19.0029 13.1504V11.6504C19.0029 11.0989 18.5544 10.6504 18.0029 10.6504H16.5029C15.9514 10.6504 15.5029 11.0989 15.5029 11.6504V13.1504C15.5029 13.7019 15.9514 14.1504 16.5029 14.1504ZM16.5029 11.6504H18.0029L18.0039 13.1504H16.5029V11.6504Z\" fill=\"white\" />\r\n<path d=\"M6.00293 19.6504H7.50293C8.05443 19.6504 8.50293 19.2019 8.50293 18.6504V17.1504C8.50293 16.5989 8.05443 16.1504 7.50293 16.1504H6.00293C5.45143 16.1504 5.00293 16.5989 5.00293 17.1504V18.6504C5.00293 19.2019 5.45143 19.6504 6.00293 19.6504ZM6.00293 17.1504H7.50293L7.50393 18.6504H6.00293V17.1504Z\" fill=\"white\" />\r\n<path d=\"M11.2529 19.6504H12.7529C13.3044 19.6504 13.7529 19.2019 13.7529 18.6504V17.1504C13.7529 16.5989 13.3044 16.1504 12.7529 16.1504H11.2529C10.7014 16.1504 10.2529 16.5989 10.2529 17.1504V18.6504C10.2529 19.2019 10.7014 19.6504 11.2529 19.6504ZM11.2529 17.1504H12.7529L12.7539 18.6504H11.2529V17.1504Z\" fill=\"white\" />\r\n<path d=\"M16.5029 19.6504H18.0029C18.5544 19.6504 19.0029 19.2019 19.0029 18.6504V17.1504C19.0029 16.5989 18.5544 16.1504 18.0029 16.1504H16.5029C15.9514 16.1504 15.5029 16.5989 15.5029 17.1504V18.6504C15.5029 19.2019 15.9514 19.6504 16.5029 19.6504ZM16.5029 17.1504H18.0029L18.0039 18.6504H16.5029V17.1504Z\" fill=\"white\" />\r\n"});

const iconCalendar = createSvgComponent({"meta":{"src":"/_astro/icon-calendar.BwfSExXh.svg","width":512,"height":512,"format":"svg"},"attributes":{"width":"512","height":"512","viewBox":"0 0 512 512","fill":"none"},"children":"\r\n<g clip-path=\"url(#clip0_833_77)\">\r\n<path d=\"M452 39.9922H428V-0.0078125H388V39.9922H124V-0.0078125H84V39.9922H60C26.916 39.9922 0 66.9082 0 99.9922V451.992C0 485.076 26.916 511.992 60 511.992H452C485.084 511.992 512 485.076 512 451.992V99.9922C512 66.9082 485.084 39.9922 452 39.9922ZM472 451.992C472 463.02 463.028 471.992 452 471.992H60C48.972 471.992 40 463.02 40 451.992V187.992H472V451.992ZM472 147.992H40V99.9922C40 88.9642 48.972 79.9922 60 79.9922H84V119.992H124V79.9922H388V119.992H428V79.9922H452C463.028 79.9922 472 88.9642 472 99.9922V147.992Z\" fill=\"white\" />\r\n<path d=\"M116 229.992H76V269.992H116V229.992Z\" fill=\"white\" />\r\n<path d=\"M196 229.992H156V269.992H196V229.992Z\" fill=\"white\" />\r\n<path d=\"M276 229.992H236V269.992H276V229.992Z\" fill=\"white\" />\r\n<path d=\"M356 229.992H316V269.992H356V229.992Z\" fill=\"white\" />\r\n<path d=\"M436 229.992H396V269.992H436V229.992Z\" fill=\"white\" />\r\n<path d=\"M116 309.992H76V349.992H116V309.992Z\" fill=\"white\" />\r\n<path d=\"M196 309.992H156V349.992H196V309.992Z\" fill=\"white\" />\r\n<path d=\"M276 309.992H236V349.992H276V309.992Z\" fill=\"white\" />\r\n<path d=\"M356 309.992H316V349.992H356V309.992Z\" fill=\"white\" />\r\n<path d=\"M116 389.992H76V429.992H116V389.992Z\" fill=\"white\" />\r\n<path d=\"M196 389.992H156V429.992H196V389.992Z\" fill=\"white\" />\r\n<path d=\"M276 389.992H236V429.992H276V389.992Z\" fill=\"white\" />\r\n<path d=\"M356 389.992H316V429.992H356V389.992Z\" fill=\"white\" />\r\n<path d=\"M436 309.992H396V349.992H436V309.992Z\" fill=\"white\" />\r\n</g>\r\n<defs>\r\n<clipPath id=\"clip0_833_77\">\r\n<rect width=\"512\" height=\"512\" fill=\"white\" transform=\"translate(0 -0.0078125)\" />\r\n</clipPath>\r\n</defs>\r\n"});

const Inquiry = () => {
  const [loading, setLoading] = useState(false);
  const [carTypes, setCarTypes] = useState([]);
  const [form, setForm] = useState({
    car_type: "",
    pickup_location: "",
    pickup_date: "",
    email: "",
    return_date: ""
  });
  useEffect(() => {
    const fetchCarTypes = async () => {
      const { data, error } = await supabase.from("cars").select("title").eq("is_available", true);
      if (error) {
        console.error("Error fetching car types:", error);
      } else if (data) {
        const types = Array.from(new Set(data.map((car) => car.title.replace(/\b(19|20)\d{2}\b/, "").trim())));
        setCarTypes(types);
      }
    };
    fetchCarTypes();
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "pickup_date" || name === "return_date") {
      setForm({
        ...form,
        [name]: value
      });
    } else {
      setForm({
        ...form,
        [name]: value
      });
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(
        "https://chester-backend.onrender.com/api/v1/crownCarsinquiry",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(form)
        }
      );
      const data = await response.json();
      console.log("Success:", data);
      setForm({
        car_type: "",
        pickup_location: "",
        pickup_date: "",
        email: "",
        return_date: ""
      });
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("div", { className: "rent-details", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsx("form", { onSubmit: handleSubmit, children: /* @__PURE__ */ jsx("div", { className: "row no-gutters align-items-center", children: /* @__PURE__ */ jsx("div", { className: "col-md-12", children: /* @__PURE__ */ jsx("div", { className: "rent-details-box", children: /* @__PURE__ */ jsxs("div", { className: "rent-details-form", children: [
    /* @__PURE__ */ jsxs("div", { className: "rent-details-item", children: [
      /* @__PURE__ */ jsx("div", { className: "icon-box", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: iconRentDetails1.src,
          alt: "icon-rent-details-1"
        }
      ) }),
      /* @__PURE__ */ jsxs("div", { className: "rent-details-content", children: [
        /* @__PURE__ */ jsx("h3", { children: "Car" }),
        /* @__PURE__ */ jsxs(
          "select",
          {
            name: "car_type",
            value: form.car_type,
            onChange: handleChange,
            className: "rent-details-form form-select",
            style: { border: "none", outline: "none" },
            children: [
              /* @__PURE__ */ jsx("option", { value: "", disabled: true, selected: true, children: "Choose Car Type" }),
              carTypes.map((type, i) => /* @__PURE__ */ jsx("option", { value: type, children: type }, i))
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "rent-details-item", children: [
      /* @__PURE__ */ jsx("div", { className: "icon-box", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: iconRentDetails2.src,
          alt: "icon-rent-details-2"
        }
      ) }),
      /* @__PURE__ */ jsxs("div", { className: "rent-details-content", children: [
        /* @__PURE__ */ jsx("h3", { children: "pickup location" }),
        /* @__PURE__ */ jsxs(
          "select",
          {
            name: "pickup_location",
            value: form.pickup_location,
            onChange: handleChange,
            className: "rent-details-form form-select",
            style: { border: "none", outline: "none" },
            children: [
              /* @__PURE__ */ jsx("option", { value: "", disabled: true, selected: true, children: "Pick Up Location" }),
              /* @__PURE__ */ jsx("option", { value: "Home Delivery", children: "Home Delivery" }),
              /* @__PURE__ */ jsx("option", { value: "self pickup", children: "self pickup" })
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "rent-details-item", children: [
      /* @__PURE__ */ jsx("div", { className: "icon-box", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: iconCalendar.src,
          alt: "icon-calendar"
        }
      ) }),
      /* @__PURE__ */ jsxs("div", { className: "rent-details-content", children: [
        /* @__PURE__ */ jsx("h3", { children: "pickup date" }),
        /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx(
          "input",
          {
            type: "date",
            name: "pickup_date",
            value: form.pickup_date,
            onChange: handleChange,
            className: "rent-details-form pickup-datepicker",
            required: true,
            style: { border: "none", outline: "none" }
          }
        ) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "rent-details-item", children: [
      /* @__PURE__ */ jsx("div", { className: "icon-box", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: iconPhone.src,
          alt: "icon-phone"
        }
      ) }),
      /* @__PURE__ */ jsxs("div", { className: "rent-details-content", children: [
        /* @__PURE__ */ jsx("h3", { children: "Phone number" }),
        /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx(
          "input",
          {
            type: "number",
            name: "email",
            value: form.email,
            onChange: handleChange,
            placeholder: "Enter number",
            className: "",
            required: true,
            style: {
              border: "none",
              outline: "none",
              padding: "0px 5px",
              borderRadius: "5px",
              boxShadow: "none",
              backgroundColor: "transparent"
            }
          }
        ) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "rent-details-item", children: [
      /* @__PURE__ */ jsx("div", { className: "icon-box", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: iconCalendar.src,
          alt: "icon-calendar"
        }
      ) }),
      /* @__PURE__ */ jsxs("div", { className: "rent-details-content", children: [
        /* @__PURE__ */ jsx("h3", { children: "Return Date" }),
        /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx(
          "input",
          {
            type: "date",
            name: "return_date",
            value: form.return_date,
            onChange: handleChange,
            className: "return-datepicker",
            required: true,
            style: { border: "none", outline: "none" }
          }
        ) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "rent-details-item rent-details-search", children: /* @__PURE__ */ jsx(
      "button",
      {
        type: "submit",
        style: {
          padding: "15px",
          backgroundColor: "#FF3600",
          color: "#fff",
          borderRadius: "50px",
          border: "none",
          width: "100%"
        },
        disabled: loading,
        children: loading ? /* @__PURE__ */ jsx("i", { className: "fa-solid fa-spinner fa-spin" }) : /* @__PURE__ */ jsx("i", { className: "fa-solid fa-paper-plane" })
      }
    ) })
  ] }) }) }) }) }) }) }) });
};

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Hero Section Start -->${maybeRenderHead()}<div class="hero"> <div class="hero-section bg-section parallaxie"> <div class="container"> <div class="row align-items-center"> <div class="col-lg-12"> <!-- Hero Content Start --> <div class="hero-content"> <div class="section-title"> <h3 class="wow fadeInUp">welcome to Crown Cars</h3> <h1 class="text-anime-style-3" data-cursor="-opaque">
Looking to save more on your rental car?
</h1> <p class="wow fadeInUp" data-wow-delay="0.25s">
Whether you're planning a weekend getaway, a business trip, or
                just need a reliable ride for the day, we offers a wide range of
                vehicles to suit your needs.
</p> </div> <div class="hero-content-body wow fadeInUp" data-wow-delay="0.5s"> <a href="/contact" class="btn-default">Contact Us</a> <a href="/about" class="btn-default btn-highlighted">learn more</a> </div> </div> <!-- Hero Content End --> </div> </div> </div> </div> ${renderComponent($$result, "Inquiry", Inquiry, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/sumit/devliqly projects/crownweb/src/components/react/Inquiry", "client:component-export": "default" })} </div> <!-- Hero Section End -->`;
}, "D:/sumit/devliqly projects/crownweb/src/components/home/Hero.astro", void 0);

const $$Fleets = createComponent(async ($$result, $$props, $$slots) => {
  const { data: supabaseCars, error } = await supabase.from("cars").select("*").eq("is_available", true).limit(3);
  let cars = [];
  if (error) {
    console.error("Error fetching cars:", error);
  } else if (supabaseCars) {
    cars = supabaseCars.map(mapSupabaseCarToUI);
  }
  return renderTemplate`<!-- Page Fleets Start -->${maybeRenderHead()}<div class="page-fleets" data-astro-cid-fvz2bdjw> <div class="container-fluid" data-astro-cid-fvz2bdjw> <div class="row section-row" data-astro-cid-fvz2bdjw> <div class="col-lg-12" data-astro-cid-fvz2bdjw> <!-- Section Title Start --> <div class="section-title" data-astro-cid-fvz2bdjw> <h3 class="wow fadeInUp" data-astro-cid-fvz2bdjw>our fleets</h3> <h2 class="text-anime-style-3" data-cursor="-opaque" data-astro-cid-fvz2bdjw>
Explore our perfect and extensive fleet
</h2> </div> <!-- Section Title End --> </div> </div> <div class="container" style="display: flex; justify-content: center; flex-direction: column; align-items: center;" data-astro-cid-fvz2bdjw> <div class="col-lg-9" data-astro-cid-fvz2bdjw> <div class="fleets-collection-box" data-astro-cid-fvz2bdjw> <div class="row" data-astro-cid-fvz2bdjw> ${cars.map((car, index) => renderTemplate`${renderComponent($$result, "Fragment", Fragment$1, { "key": index }, { "default": async ($$result2) => renderTemplate` <div class="col-lg-4 col-md-6" data-astro-cid-fvz2bdjw> <div class="perfect-fleet-item fleets-collection-item wow fadeInUp" data-astro-cid-fvz2bdjw> <!-- Image Slider Start --> <div class="image-box car-slider"${addAttribute(`slider-${car.name}`, "id")}${addAttribute(car.name, "data-car-name")} data-astro-cid-fvz2bdjw> <div class="slider-images" data-astro-cid-fvz2bdjw> ${(car.images && car.images.length > 0 ? car.images : ["/assets/images/placeholder-car.jpg"]).map((img, imgIndex) => renderTemplate`<div class="slider-image"${addAttribute(imgIndex, "data-index")}${addAttribute({ display: imgIndex === 0 ? "block" : "none" }, "style")} data-astro-cid-fvz2bdjw> ${renderComponent($$result2, "Image", $$Image, { "src": img, "width": 800, "height": 450, "alt": `${car.name} image ${imgIndex + 1}`, "inferSize": true, "data-astro-cid-fvz2bdjw": true })} </div>`)} </div> ${car.images && car.images.length > 1 && renderTemplate`${renderComponent($$result2, "Fragment", Fragment$1, { "data-astro-cid-fvz2bdjw": true }, { "default": async ($$result3) => renderTemplate`  <div class="slider-arrow prev-arrow" data-astro-cid-fvz2bdjw>&#10094;</div> <div class="slider-arrow next-arrow" data-astro-cid-fvz2bdjw>&#10095;</div> <div class="slider-nav" data-astro-cid-fvz2bdjw> ${car.images.map((_, dotIndex) => renderTemplate`<span${addAttribute(`nav-dot ${dotIndex === 0 ? "active" : ""}`, "class")}${addAttribute(dotIndex, "data-index")} data-astro-cid-fvz2bdjw></span>`)} </div> ` })}`} </div> <!-- Image Slider End --> <div class="perfect-fleet-content" data-astro-cid-fvz2bdjw> <div class="perfect-fleet-title" data-astro-cid-fvz2bdjw> <h3 data-astro-cid-fvz2bdjw>${car.name}${car.model ? ` - ${car.model}` : ""}</h3> </div> <div class="perfect-fleet-body" data-astro-cid-fvz2bdjw> <ul data-astro-cid-fvz2bdjw> <li data-astro-cid-fvz2bdjw>${renderComponent($$result2, "FaUserFriends", FaUserFriends, { "data-astro-cid-fvz2bdjw": true })} <span data-astro-cid-fvz2bdjw>${car.features.seater} seater</span></li> <li data-astro-cid-fvz2bdjw>${renderComponent($$result2, "FaCog", FaCog, { "data-astro-cid-fvz2bdjw": true })} <span data-astro-cid-fvz2bdjw>${car.features.transmission}</span></li> <li data-astro-cid-fvz2bdjw>${renderComponent($$result2, "FaGasPump", FaGasPump, { "data-astro-cid-fvz2bdjw": true })} <span data-astro-cid-fvz2bdjw>${car.features.fuel}</span></li> <li data-astro-cid-fvz2bdjw>${renderComponent($$result2, "FaPalette", FaPalette, { "data-astro-cid-fvz2bdjw": true })} <span data-astro-cid-fvz2bdjw>${car.features.color}</span></li> </ul> </div> <div class="perfect-fleet-footer" data-astro-cid-fvz2bdjw> <div class="perfect-fleet-pricing" data-astro-cid-fvz2bdjw> <h2 data-astro-cid-fvz2bdjw>₹${car.price}<span data-astro-cid-fvz2bdjw>/hr</span></h2> </div> <div class="perfect-fleet-btn" data-astro-cid-fvz2bdjw> <a${addAttribute(socials.whatsapp, "href")} target="_blank" class="section-icon-btn" data-astro-cid-fvz2bdjw><i class="fa-brands fa-whatsapp" style="color: white;font-size: 20px;" data-astro-cid-fvz2bdjw></i></a> </div> </div> </div> </div> </div> ` })}`)} </div> </div> </div> <div class="col-lg-12" style="text-align: center; margin-top: 40px;" data-astro-cid-fvz2bdjw> <a href="/cars" class="btn-default" data-astro-cid-fvz2bdjw>Explore More</a> </div> </div> </div> </div> ${renderScript($$result, "D:/sumit/devliqly projects/crownweb/src/components/home/Fleets.astro?astro&type=script&index=0&lang.ts")} `;
}, "D:/sumit/devliqly projects/crownweb/src/components/home/Fleets.astro", void 0);

const image = new Proxy({"src":"/_astro/cta-car-img.Be_2sAFq.png","width":652,"height":320,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/sumit/devliqly projects/crownweb/src/assets/images/cta-car-img.png";
							}
							
							return target[name];
						}
					});

const $$Cta = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- CTA Box Section Start -->${maybeRenderHead()}<section class="ctasection" data-astro-cid-5f7neqxn> <div class="cta-box bg-section cta-box-section" data-astro-cid-5f7neqxn> <div class="container" data-astro-cid-5f7neqxn> <div class="row align-items-center" data-astro-cid-5f7neqxn> <div class="col-lg-6 col-md-7" data-astro-cid-5f7neqxn> <!-- Cta Box Content Start --> <div class="cta-box-content" data-astro-cid-5f7neqxn> <!-- Section Title Start --> <div class="section-title" data-astro-cid-5f7neqxn> <h2 class="text-anime-style-3" data-cursor="-opaque" data-astro-cid-5f7neqxn>
Ready to hit the road? Book your car today !
</h2> <p class="wow fadeInUp" data-astro-cid-5f7neqxn>
Our friendly customer service team is here to help. Contact us
                anytime for support and inquiries.
</p> </div> <!-- Section Title End --> <!-- Cta Box Btn Start --> <div class="cta-box-btn wow fadeInUp" data-wow-delay="0.5s" data-astro-cid-5f7neqxn> <a href="/contact" class="btn-default" data-astro-cid-5f7neqxn>contact us</a> </div> <!-- Cta Box Btn End --> </div> <!-- Cta Box Content End --> </div> <div class="col-lg-6 col-md-5" data-astro-cid-5f7neqxn> <!-- Cta Box Image Start --> <div class="cat-box-image" data-astro-cid-5f7neqxn> <figure data-astro-cid-5f7neqxn> ${renderComponent($$result, "Image", $$Image, { "format": "avif", "src": image, "alt": "", "data-astro-cid-5f7neqxn": true })} </figure> <!-- Cta Box Image End --> </div> </div> </div> </div> <!-- CTA Box Section End --> </div> </section> `;
}, "D:/sumit/devliqly projects/crownweb/src/components/home/Cta.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": seo.home.title, "description": seo.home.description }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "AboutUs", $$AboutUs, {})} ${renderComponent($$result2, "Fleets", $$Fleets, {})} ${renderComponent($$result2, "Testimonials", $$Testimonials, {})} ${renderComponent($$result2, "WhyUs", $$WhyUs, {})} ${renderComponent($$result2, "Cta", $$Cta, {})} ` })}`;
}, "D:/sumit/devliqly projects/crownweb/src/pages/index.astro", void 0);

const $$file = "D:/sumit/devliqly projects/crownweb/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
