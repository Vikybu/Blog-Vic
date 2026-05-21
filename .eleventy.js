module.exports = function(eleventyConfig) {

  // Copie les fichiers statiques vers _site
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("js");

  return {
    pathPrefix: "/Blog-Vic/"
  };
};