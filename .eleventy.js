module.exports = function(eleventyConfig) {
  // Copy CSS folder to _site/styles
  eleventyConfig.addPassthroughCopy({ "src/styles/css": "styles" });
  // Copy JS folder if needed
  eleventyConfig.addPassthroughCopy({ "src/scripts": "scripts" });
  // Copy images folder if needed
  eleventyConfig.addPassthroughCopy({ "src/images": "images" });

  return {
    dir: {
      input: "src",
      includes: "sections",
      output: "_site"
    }
  };
};