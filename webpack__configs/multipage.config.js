const path = require("path");

res = {};
res.entry = {
	index: path.join(__dirname, "../src/index.js"),
	about: path.join(__dirname, "../src/blocks/pages/about.js"),
	one: path.join(__dirname, "../src/blocks/pages/one/one.js"),
};
res.pages = [
	{ chunks: ["index"], page: "index.html", template: path.join(__dirname, "../src/blocks/index.pug") },
	{ chunks: ["about"], page: "pages/about.html", template: path.join(__dirname, "../src/blocks/pages/about.pug") },
	{ chunks: ["one"], page: "pages/one.html", template: path.join(__dirname, "../src/blocks/pages/one/one.pug") },
];
module.exports = res;
