({
    baseUrl: "js",
    name: "lib",
    out: "bin/primitives.min.js",
    wrap: {
      start: "(function() {",
      end: "return require('lib'); }());"
    },
    removeCombined: true
})
