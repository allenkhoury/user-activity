const mix = require('laravel-mix');
//const path = require('path');

if ( ! mix.inProduction()) {
    mix.webpackConfig({
        devtool: 'inline-source-map'
    })
}

mix.setPublicPath('public/');

mix.sass('resources/assets/scss/mngmnt/app.scss', 'assets/css/mngmnt');

mix.js('resources/assets/js/tracking-script.js', 'assets/js');

mix.js('resources/assets/js/mngmnt/app.js', 'assets/js/mngmnt').vue();
mix.js('resources/assets/js/mngmnt/dashboard.js', 'assets/js/mngmnt').vue();
mix.js('resources/assets/js/mngmnt/activity-log.js', 'assets/js/mngmnt').vue();

/*mix.version().webpackConfig({
    resolve: {
        symlinks: false,
        alias: {
            '@': path.resolve(__dirname, 'resources/assets/mngmnt/js/'),
            '@riwayi': path.resolve(__dirname, '../../../vendor/twindots/riwayi/'),
        },
    }});*/
