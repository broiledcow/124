
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
	eleventyConfig.addCollection("postsChron", (collection) =>
		collection.getFilteredByGlob("articles/releases/*.md").sort((a, b) => {
		if (a.data.year > b.data.year) return -1;
		else if (a.data.year < b.data.year) return 1;
		else return 0;
		})
);




	
	// genre sorting and other thigns NOT in tags! below


	

	return {
		dir: {
			input: "src",
			output: "public"
		}
	};
}

