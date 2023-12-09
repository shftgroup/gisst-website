const pluginNavigation = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig) {
    eleventyConfig.setLiquidOptions({
        dynamicPartials: true
    });

    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPassthroughCopy("js");

    eleventyConfig.addPlugin(pluginNavigation);

    return {
        templateFormats: [
            "md",
            "html",
            "liquid"
        ],
        pathPrefix: "/",
        dir: {
            input: "./",
            includes: "_includes",
            data: "_data",
            output: "_site"
        }
    }
};