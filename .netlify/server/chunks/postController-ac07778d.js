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
  a: () => getPost,
  g: () => getAllPosts
});
module.exports = __toCommonJS(stdin_exports);
const getAllPosts = async () => {
  const allPostFiles = { "../data/blog/1.md": () => Promise.resolve().then(() => __toESM(require("./1-f8fa1d10.js"))), "../data/blog/2.md": () => Promise.resolve().then(() => __toESM(require("./2-5932aeef.js"))), "../data/blog/3.md": () => Promise.resolve().then(() => __toESM(require("./3-0544e45b.js"))), "../data/blog/4.md": () => Promise.resolve().then(() => __toESM(require("./4-366c2f53.js"))), "../data/blog/hello.md": () => Promise.resolve().then(() => __toESM(require("./hello-41e058d6.js"))) };
  const iterablePostFiles = Object.entries(allPostFiles);
  const allPosts = await Promise.all(iterablePostFiles.map(async ([path, resolverPromise]) => {
    const { metadata } = await resolverPromise();
    const postPath = path.slice(`../data/blog/`.length, -3);
    return {
      meta: metadata,
      path: postPath
    };
  }));
  return allPosts.sort((a, b) => {
    return new Date(b.meta.date) - new Date(a.meta.date);
  });
};
const getPost = async (slug) => {
  const allPostFiles = { "../data/blog/1.md": () => Promise.resolve().then(() => __toESM(require("./1-f8fa1d10.js"))), "../data/blog/2.md": () => Promise.resolve().then(() => __toESM(require("./2-5932aeef.js"))), "../data/blog/3.md": () => Promise.resolve().then(() => __toESM(require("./3-0544e45b.js"))), "../data/blog/4.md": () => Promise.resolve().then(() => __toESM(require("./4-366c2f53.js"))), "../data/blog/hello.md": () => Promise.resolve().then(() => __toESM(require("./hello-41e058d6.js"))) };
  const iterablePostFile = Object.entries(allPostFiles).find(([path]) => path.includes(slug));
  const [, resolverPromise] = iterablePostFile;
  const { metadata } = await resolverPromise();
  return { meta: metadata, path: slug };
};
