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
  default: () => _layout
});
module.exports = __toCommonJS(stdin_exports);
var import_index_cb93fe8d = require("../../chunks/index-cb93fe8d.js");
var app = "";
const TheFooter = (0, import_index_cb93fe8d.c)(($$result, $$props, $$bindings, slots) => {
  return `<footer class="${"footer footer-center bg-base-200 p-4 text-base-content"}"><div><p>Copyright \xA9 2022 - All right reserved by L&#39;Aigle de Tol\xE8de</p></div></footer>`;
});
let userAvatar = "tolede-rond.png";
let userName = "Tolede";
const TheHeader = (0, import_index_cb93fe8d.c)(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"navbar bg-base-200"}"><div class="${"flex-1"}"><a href="${"/"}" class="${"btn btn-ghost text-xl normal-case"}">Woodenspoon</a></div>
    <div class="${"flex-none gap-2"}"><div class="${"form-control"}"><a href="${"/blog"}" class="${"btn btn-outline text-xl normal-case"}">Blog</a></div>
        <div class="${"form-control"}"><input type="${"text"}" placeholder="${"Rechercher"}" class="${"input input-bordered"}"></div>

        <div class="${"dropdown dropdown-end"}">
            <label tabindex="${"0"}" class="${"avatar btn btn-ghost btn-circle"}"><div class="${"w-10 rounded-full"}"><img src="${"/assets/" + (0, import_index_cb93fe8d.e)(userAvatar)}"${(0, import_index_cb93fe8d.a)("alt", userName, 0)}></div></label>
            <ul tabindex="${"0"}" class="${"dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"}"><li><a href="${"/"}" class="${"justify-between"}">Profile
                        <span class="${"badge"}">New</span></a></li>
                <li><a href="${"/"}">Settings</a></li>
                <li><a href="${"/"}">Logout</a></li></ul></div></div></div>`;
});
const _layout = (0, import_index_cb93fe8d.c)(($$result, $$props, $$bindings, slots) => {
  return `${(0, import_index_cb93fe8d.v)(TheHeader, "TheHeader").$$render($$result, {}, {}, {})}
<div class="${"container "}">${slots.default ? slots.default({}) : ``}</div>
${(0, import_index_cb93fe8d.v)(TheFooter, "TheFooter").$$render($$result, {}, {}, {})}`;
});
