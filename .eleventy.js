module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("js");

  eleventyConfig.addFilter("frenchDate", (dateObj) => {
    return new Date(dateObj).toLocaleDateString("fr-FR");
  });

  return {
    pathPrefix: "/Blog-Vic/"
  };
};