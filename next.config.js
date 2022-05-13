const withImages = require('next-images')

module.exports = withImages({
    esModule: true,
    compiler: {
        styledComponents: true
    }
})
