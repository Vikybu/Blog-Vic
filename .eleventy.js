module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("style.css");
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("assets");
};

export default function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css");
}

export const config = {
  pathPrefix: "/Blog-Vic/"
};