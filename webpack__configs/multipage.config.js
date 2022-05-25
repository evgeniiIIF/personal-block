const path = require("path");

res = {};
res.entry = {
	index: path.join(__dirname, "../src/pages/index/index.js"),
	"post-full": path.join(__dirname, "../src/pages/post-full/post-full.js"),
	works: path.join(__dirname, "../src/pages/works/works.js"),
	"search-full": path.join(__dirname, "../src/pages/search-full/search-full.js"),
	profile: path.join(__dirname, "../src/pages/profile/profile.js"),
	signin: path.join(__dirname, "../src/pages/signin/signin.js"),
	signup: path.join(__dirname, "../src/pages/signup/signup.js"),
	reset: path.join(__dirname, "../src/pages/reset/reset.js"),
};

res.pages = [
	{ chunks: ["index"], page: "index.html", template: path.join(__dirname, "../src/pages/index/index.pug") },
	{ chunks: ["post-full"], page: "post-full.html", template: path.join(__dirname, "../src/pages/post-full/post-full.pug") },
	{ chunks: ["works"], page: "works.html", template: path.join(__dirname, "../src/pages/works/works.pug") },
	{ chunks: ["search-full"], page: "search-full.html", template: path.join(__dirname, "../src/pages/search-full/search-full.pug") },
	{ chunks: ["profile"], page: "profile.html", template: path.join(__dirname, "../src/pages/profile/profile.pug") },
	{ chunks: ["signin"], page: "signin.html", template: path.join(__dirname, "../src/pages/signin/signin.pug") },
	{ chunks: ["signup"], page: "signup.html", template: path.join(__dirname, "../src/pages/signup/signup.pug") },
	{ chunks: ["reset"], page: "reset.html", template: path.join(__dirname, "../src/pages/reset/reset.pug") },
];

module.exports = res;
