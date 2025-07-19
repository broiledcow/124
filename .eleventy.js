
const { DateTime } = require("luxon");

// all the stuff above HAS to be above

module.exports = function(eleventyConfig) {

	eleventyConfig.addPassthroughCopy('./src/style.css')
	eleventyConfig.addPassthroughCopy('./src/style.css')
	eleventyConfig.addPassthroughCopy('./src/assets/')
	eleventyConfig.addPassthroughCopy('./src/admin')
	eleventyConfig.addFilter("postDate", (dateObj) => { return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED) } );
  	eleventyConfig.addShortcode("excerpt", (article) => extractExcerpt(article));
	eleventyConfig.addNunjucksFilter("excludeFromCollection", function (collection=[], pageUrl=this.ctx.page.url) {return collection.filter(post => post.url !== pageUrl);});
	eleventyConfig.setDataDeepMerge(true);	
	
	// genre sorting and other thigns NOT in tags! below


	return {
		dir: {
			input: "src",
			output: "public"
		}
	};
}

