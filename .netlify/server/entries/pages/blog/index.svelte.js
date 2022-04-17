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
  default: () => Blog,
  load: () => load
});
module.exports = __toCommonJS(stdin_exports);
var import_index_cb93fe8d = require("../../../chunks/index-cb93fe8d.js");
const BlogPostsListCard = (0, import_index_cb93fe8d.c)(($$result, $$props, $$bindings, slots) => {
  let { post } = $$props;
  if ($$props.post === void 0 && $$bindings.post && post !== void 0)
    $$bindings.post(post);
  return `<div class="${"card m-3 w-60 bg-base-100 shadow-xl"}"><figure><img${(0, import_index_cb93fe8d.a)("src", post.meta.source, 0)}${(0, import_index_cb93fe8d.a)("alt", post.path, 0)}></figure>
    <div class="${"card-body"}"><div class="${"badge badge-secondary"}"><span class="${"text-xs"}">${(0, import_index_cb93fe8d.e)(post.meta.date)}</span></div>
        <h2 class="${"card-title"}">${(0, import_index_cb93fe8d.e)(post.meta.title)}</h2>
        <div class="${"card-actions justify-end align-bottom"}"><a href="${"/blog/" + (0, import_index_cb93fe8d.e)(post.path)}" class="${"btn btn-sm"}">En lire plus...</a></div></div></div>`;
});
const load = async ({ fetch }) => {
  const posts = await fetch("/api/blog/posts.json").then((r) => r.json());
  return { props: { posts } };
};
const Blog = (0, import_index_cb93fe8d.c)(($$result, $$props, $$bindings, slots) => {
  let { posts } = $$props;
  if ($$props.posts === void 0 && $$bindings.posts && posts !== void 0)
    $$bindings.posts(posts);
  return `<div class="${"container m-10"}"><h1 class="${"text-2xl"}">Section Blog</h1>
    <div class="${"flex flex-wrap"}">${(0, import_index_cb93fe8d.b)(posts, (post) => {
    return `${(0, import_index_cb93fe8d.v)(BlogPostsListCard, "BlogListCard").$$render($$result, { post }, {}, {})}`;
  })}</div></div>`;
});
