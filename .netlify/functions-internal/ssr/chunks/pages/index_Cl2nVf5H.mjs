/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, e as renderComponent, i as renderTransition, f as createAstro } from '../astro_BBjevKmn.mjs';
import 'kleur/colors';
import 'html-escaper';
import { C as CardPlayButton, p as playlists, $ as $$Layout } from './_id__C_ANw4Zt.mjs';

const $$Astro = createAstro();
const $$PlaylistItemCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PlaylistItemCard;
  const { playlist } = Astro2.props;
  const { id, cover, title, artists, color } = playlist;
  const artistString = artists.join(", ");
  return renderTemplate`${maybeRenderHead()}<section class="group relative"> <div${addAttribute(`absolute right-4 bottom-20 translate-y-4
    transition-all duration-500 opacity-0
    group-hover:translate-y-0 group-hover:opacity-100
    z-10`, "class")}> ${renderComponent($$result, "CardPlayButton", CardPlayButton, { "id": id, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "D:/Program Files/Dev/Clonify/src/components/CardPlayButton", "client:component-export": "CardPlayButton" })} </div> <a${addAttribute({ backgroundColor: `${color.dark}` }, "style")} class="playlist-item transition-all duration-500 shadow-lg flex p-2 overflow-hidden gap-5 px-3 rounded-md group-hover:scale-105 hover:shadow-2xl hover:bg-zinc-500/10 w-40 flex-col"${addAttribute(`/playlist/${id}`, "href")}${addAttribute(renderTransition($$result, "kljxcvf4", "", `playlist ${id} box`), "data-astro-transition-scope")}> <picture class="aspect-square w-full h-auto"> <img class="w-full h-auto rounded-md"${addAttribute(cover, "src")}${addAttribute(`Cover of ${title} by ${artistString}`, "alt")}${addAttribute(renderTransition($$result, "3vjvs5qv", "", `playlist ${id} image`), "data-astro-transition-scope")}> </picture> <div class="flex flex-col flex-auto truncate"> <h4 class="font-bold h-6 w-auto text-sm"${addAttribute(renderTransition($$result, "l3uzvahc", "", `playlist ${id} title`), "data-astro-transition-scope")}>${title} </h4> <span class="h-6 w-auto text-xs text-gray-300"${addAttribute(renderTransition($$result, "acivehaq", "", `playlist ${id} artists`), "data-astro-transition-scope")}>${artistString}</span> </div> </a> </section>`;
}, "D:/Program Files/Dev/Clonify/src/components/PlaylistItemCard.astro", "self");

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Clonify" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="relative transition-all duration-1000 overflow-hidden p-4 bg-green-600" id="playlist-container"> <h2 class="text-2xl mb-4 font-bold">Good Morning</h2> <div class="relative z-10 px-6 flex gap-4 flex-wrap"> ${playlists.map((playlist) => renderTemplate`${renderComponent($$result2, "PlaylistItemCard", $$PlaylistItemCard, { "playlist": playlist })}`)} </div> <div class="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-800/90"></div> </div> ` })} `;
}, "D:/Program Files/Dev/Clonify/src/pages/index.astro", void 0);

const $$file = "D:/Program Files/Dev/Clonify/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
