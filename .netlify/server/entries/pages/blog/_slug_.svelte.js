var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => U5Bslugu5D,
  load: () => load
});
module.exports = __toCommonJS(stdin_exports);
var import_index_cb93fe8d = require("../../../chunks/index-cb93fe8d.js");
const BlogPostCard = (0, import_index_cb93fe8d.c)(($$result, $$props, $$bindings, slots) => {
  let { post } = $$props;
  if ($$props.post === void 0 && $$bindings.post && post !== void 0)
    $$bindings.post(post);
  return `<div class="${"card m-3 w-auto bg-base-100 shadow-xl"}"><figure><img${(0, import_index_cb93fe8d.a)("src", post.meta.source, 0)}${(0, import_index_cb93fe8d.a)("alt", post.path, 0)}></figure>
    <div class="${"card-body"}"><div class="${"badge badge-secondary"}"><span class="${"text-xs"}">${(0, import_index_cb93fe8d.e)(post.meta.date)}</span></div>
        <h2 class="${"card-title"}">${(0, import_index_cb93fe8d.e)(post.meta.title)}</h2>
        <p class="${"content"}">${slots.default ? slots.default({}) : ``}</p>
        <div class="${"card-actions justify-end align-bottom"}"><a href="${"/blog"}" class="${"btn btn-sm"}">Retour au Blog...</a></div></div></div>`;
});
async function load({ fetch, params }) {
  const post = await fetch(`/api/blog/${params.slug}.json`).then((r) => r.json());
  return { props: { post } };
}
const U5Bslugu5D = (0, import_index_cb93fe8d.c)(($$result, $$props, $$bindings, slots) => {
  let { post } = $$props;
  if ($$props.post === void 0 && $$bindings.post && post !== void 0)
    $$bindings.post(post);
  return `${(0, import_index_cb93fe8d.v)(BlogPostCard, "BlogPostCard").$$render($$result, { post }, {}, {})}`;
});
