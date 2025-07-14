const pluginNavigation = require("@11ty/eleventy-navigation");
const fs = require("fs");

module.exports = function(eleventyConfig) {
    eleventyConfig.setLiquidOptions({
        dynamicPartials: true
    });

    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPassthroughCopy("js");
    eleventyConfig.addPassthroughCopy("css");

    eleventyConfig.addPlugin(pluginNavigation);

    // FILTER FOR CITATIONS, ADDED BY JASMINE: Custom shortcode or filter that extracts citation info and writes JSON
    // TO USE, in html add {% registerCitation "Naming Terra, Final Fantasy III (USA), SNES" "https://gisst.pomona.edu/data/cc231e2d-3ff6-4b18-9a61-d230d95444c5?state=76f09896-7030-4968-a486-5f14717be5b8" "e4_branching_storylines" %}
    eleventyConfig.addShortcode("registerCitation", function (description, link, pageSlug) {
    const url = new URL(link);

    // Extract UUID parts
    const instance = url.pathname.split("/data/")[1]?.split("?")[0] || "";
    const state = url.searchParams.get("state") || "";
    const replay = url.searchParams.get("replay") || "";

    const citationObj = {
      description,
      link,
      state,
      replay,
      instance,
    };

    const filePath = `pages/gallery/${pageSlug}.json`;

    // Load existing citations
    let citations = [];
    if (fs.existsSync(filePath)) {
      citations = JSON.parse(fs.readFileSync(filePath));
    }

    // Prevent duplicates
    if (!citations.some((c) => c.link === link)) {
      citations.push(citationObj);
      fs.writeFileSync(filePath, JSON.stringify({ citations }, null, 2));
    }

    // Return the actual HTML link element
    return `<a class="gisst-Gallery-demo-link" title="${description}" href="${link}">[${citations.length}]</a>`;
    });

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