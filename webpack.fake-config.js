/**
 * This config is FAKE.
 *
 * It exists for and only for webstorm to resolve imports correctly.
 */

const path = require('path');

module.exports = {
    resolve: {
        alias: {
            '~': path.join(__dirname, './src'),
        },
    },
};
