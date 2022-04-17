const { init } = require('../handler.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["admin/config.yml","admin/index.html","assets/saubadia.png","assets/tolede-rond.png","favicon.png"]),
	mimeTypes: {".yml":"text/yaml",".html":"text/html",".png":"image/png"},
	_: {
		entry: {"file":"start-ff78bace.js","js":["start-ff78bace.js","chunks/index-5d60a29c.js"],"css":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/3.js'))
		],
		routes: [
			{
				type: 'endpoint',
				id: "api/blog/posts.json",
				pattern: /^\/api\/blog\/posts\.json$/,
				names: [],
				types: [],
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/api/blog/posts.json.js'))
			},
			{
				type: 'endpoint',
				id: "api/blog/[slug].json",
				pattern: /^\/api\/blog\/([^/]+?)\.json$/,
				names: ["slug"],
				types: [null],
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/api/blog/_slug_.json.js'))
			},
			{
				type: 'page',
				id: "blog/[slug]",
				pattern: /^\/blog\/([^/]+?)\/?$/,
				names: ["slug"],
				types: [null],
				path: null,
				shadow: null,
				a: [0,2],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
