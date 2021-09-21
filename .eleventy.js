const pluginL10n = require('eleventy-plugin-l10n')

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy({ 'src/assets': '_assets' })

    eleventyConfig.addPlugin(pluginL10n, {
        // langCallback tells the plugin how to determine the language from the path of a given file.
        // In this case, it is the first path segment.
        langCallback : path => path.split('/')[1]
    })

    return {
        dir: {
            input: 'src/pages',
            layouts: '../template',
            includes: '../template',
            data: '../data',
            output: 'dist'
        },
        passthroughFileCopy: true,
        templateFormats: ['njk', 'md', 'css', 'html'],
        htmlTemplateEngine: 'njk',
        markdownTemplateEngine: 'njk'
    }
}
