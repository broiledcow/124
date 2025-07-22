const { DateTime } = require("luxon");
const fs = require('fs')
const matter = require('gray-matter')
// all the stuff above HAS to be above

module.exports = function(eleventyConfig) {

	eleventyConfig.addPassthroughCopy('./src/style.css')
	eleventyConfig.addPassthroughCopy('./src/style.css')
	eleventyConfig.addPassthroughCopy('./src/assets/')
	eleventyConfig.addPassthroughCopy('./src/assets/pfps/')
	eleventyConfig.addPassthroughCopy('./src/assets/releases/')
	eleventyConfig.addPassthroughCopy('./src/assets/css/')

	eleventyConfig.addPassthroughCopy('./src/admin')
	eleventyConfig.addFilter("postDate", (dateObj) => { return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED) } );
  	eleventyConfig.addShortcode("excerpt", (article) => extractExcerpt(article));
	eleventyConfig.addNunjucksFilter("excludeFromCollection", function (collection=[], pageUrl=this.ctx.page.url) {return collection.filter(post => post.url !== pageUrl);});
	eleventyConfig.setDataDeepMerge(true);	
	eleventyConfig.addFilter("exclude", (arr, exclude) => arr.filter(el => el !== exclude))
	// Get the first n elements of a collection.
  eleventyConfig.addFilter("head", (array, n) => {
    if (n < 0) {
      return array.slice(n)
    }

    return array.slice(0, n)
  })
	
	// genre sorting and other thigns NOT in tags! below


	

	return {
		dir: {
			input: "src",
			output: "public"
		}
	};
}
	
