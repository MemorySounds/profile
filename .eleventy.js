module.exports = function (eleventyConfig) {
  // Copy CSS folder to _site/styles
  eleventyConfig.addPassthroughCopy({ "src/styles/css": "styles" });
  // Copy JS folder if needed
  eleventyConfig.addPassthroughCopy({ "src/scripts": "scripts" });
  // Copy images folder if needed
  eleventyConfig.addPassthroughCopy({ "src/images": "images" });

  // Copy favicon files
  eleventyConfig.addPassthroughCopy({ "src/favicon.ico": "favicon.ico" });

  // Copy CNAME file to output (IMPORTANT for custom domain)
  eleventyConfig.addPassthroughCopy({ CNAME: "CNAME" });

  return {
    dir: {
      input: "src",
      includes: "sections",
      output: "_site",
    },
  };
};
