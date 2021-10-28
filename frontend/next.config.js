// const withPlugins = require('next-compose-plugins');

const withOptimizedImages = require("next-optimized-images");
module.exports = withOptimizedImages({
    images: {
        disableStaticImages: true,
    },
    handleImages: ["jpeg", "png", "svg", "gif", "ico"],
    optimizeImagesInDev: true,
});