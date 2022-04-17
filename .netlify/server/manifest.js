var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  manifest: () => manifest
});
module.exports = __toCommonJS(stdin_exports);
const manifest = {
  appDir: "_app",
  assets: /* @__PURE__ */ new Set(["admin/config.yml", "admin/index.html", "assets/saubadia.png", "assets/tolede-rond.png", "favicon.png"]),
  mimeTypes: { ".yml": "text/yaml", ".html": "text/html", ".png": "image/png" },
  _: {
    entry: { "file": "start-2a60aa45.js", "js": ["start-2a60aa45.js", "chunks/index-5d60a29c.js"], "css": [] },
    nodes: [
      () => Promise.resolve().then(() => __toESM(require("./nodes/0.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/1.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/5.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/4.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/2.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/3.js")))
    ],
    routes: [
      {
        type: "page",
        id: "",
        pattern: /^\/$/,
        names: [],
        types: [],
        path: "/",
        shadow: null,
        a: [0, 2],
        b: [1]
      },
      {
        type: "page",
        id: "blog",
        pattern: /^\/blog\/?$/,
        names: [],
        types: [],
        path: "/blog",
        shadow: null,
        a: [0, 3],
        b: [1]
      },
      {
        type: "page",
        id: "blog/README",
        pattern: /^\/blog\/README\/?$/,
        names: [],
        types: [],
        path: "/blog/README",
        shadow: null,
        a: [0, 4],
        b: [1]
      },
      {
        type: "endpoint",
        id: "api/blog/posts.json",
        pattern: /^\/api\/blog\/posts\.json$/,
        names: [],
        types: [],
        load: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/api/blog/posts.json.js")))
      },
      {
        type: "endpoint",
        id: "api/blog/[slug].json",
        pattern: /^\/api\/blog\/([^/]+?)\.json$/,
        names: ["slug"],
        types: [null],
        load: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/api/blog/_slug_.json.js")))
      },
      {
        type: "page",
        id: "blog/[slug]",
        pattern: /^\/blog\/([^/]+?)\/?$/,
        names: ["slug"],
        types: [null],
        path: null,
        shadow: null,
        a: [0, 5],
        b: [1]
      }
    ],
    matchers: async () => {
      return {};
    }
  }
};
