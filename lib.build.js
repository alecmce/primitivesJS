({
    baseUrl: "js",
    include: ["ext/almond", "lib"],
    out: "bin/primitives.min.js",
    removeCombined: true,
    wrap: {
      startFile: "js/_start.js",
      endFile: "js/_end.js"
    }
})
