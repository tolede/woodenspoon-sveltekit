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
  P: () => Post
});
module.exports = __toCommonJS(stdin_exports);
var import_index_cb93fe8d = require("./index-cb93fe8d.js");
const Post = (0, import_index_cb93fe8d.c)(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { date } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.date === void 0 && $$bindings.date && date !== void 0)
    $$bindings.date(date);
  return `<div class="${"prose m-10"}"><h2>${(0, import_index_cb93fe8d.e)(title)}</h2>
    <p>Publi\xE9 : ${(0, import_index_cb93fe8d.e)(date)}</p>
    <div class="${"content"}">${slots.default ? slots.default({}) : ``}</div></div>`;
});
