const svgtofont = require("svgtofont");
const path = require("path");
const pkg = require('../package.json')

svgtofont({
  src: path.resolve(process.cwd(), "icon"), // svg path
  dist: path.resolve(process.cwd(), "fonts"), // output path
  emptyDist: true,
  outSVGReact: true,
  outSVGPath: true,
  fontName: "ffont", // font name
  css: true, // Create CSS files.
  startNumber: 20000, // unicode start number
  nodemo: true, // no demo html files
  svgicons2svgfont: {
    fontHeight: 1000,
    normalize: true
  },
  website: {
    index: "symbol", // Enum{"font-class", "unicode", "symbol"}
    title: "file-icons",
    // Must be a .svg format image.
    logo: path.resolve(process.cwd(), "assets", "logo.svg"),
    version: pkg.version,
    meta: {
      description: "File icons in the file tree.",
      keywords: "file,icon,file-icons,TTF,EOT,WOFF,WOFF2,SVG"
    },
    description: ``,
    links: [
      {
        title: "GitHub",
        url: "https://github.com/uiwjs/file-icons"
      },
      {
        title: "Feedback",
        url: "https://github.com/uiwjs/file-icons/issues"
      },
      {
        title: "Font Class Demo",
        url: "font-class.html"
      },
      {
        title: "Symbol Demo",
        url: "index.html"
      },
      {
        title: "Unicode Demo",
        url: "unicode.html"
      }
    ],
    footerInfo: `
      Licensed under MIT. (Yes it's free and <a href="https://github.com/uiwjs/file-icons">open-sourced</a>)
    `
  }
}).then(() => {
  console.log("done!");
});