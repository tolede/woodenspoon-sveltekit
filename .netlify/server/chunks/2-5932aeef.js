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
  default: () => _2,
  metadata: () => metadata
});
module.exports = __toCommonJS(stdin_exports);
var import_index_cb93fe8d = require("./index-cb93fe8d.js");
var import_post_b51f798a = require("./_post-b51f798a.js");
const metadata = {
  "title": "J'aime le caf\xE9",
  "date": "2022-03-31",
  "source": "https://images.unsplash.com/photo-1615137773842-e80b9d071a2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=225&q=80"
};
const _2 = (0, import_index_cb93fe8d.c)(($$result, $$props, $$bindings, slots) => {
  return `${(0, import_index_cb93fe8d.v)(import_post_b51f798a.P, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => {
      return `<p>Je suis le <em>post n\xB02</em></p>
<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt placeat saepe dolores earum! Architecto, magnam necessitatibus aspernatur inventore earum accusantium reprehenderit, nihil quae dolorem, cum tempora officia illum harum nam?</p>`;
    }
  })}`;
});
