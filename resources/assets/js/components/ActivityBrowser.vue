<template>
    <span :title="browserName + ' - ' + browserVersion">
        <template v-if="browserIcon">
            <i :class="browserIcon"></i>
        </template>

        <template v-if="!iconOnly">
            {{ browserName }}
        </template>
    </span>
</template>

<script>

var uap = require('ua-parser-js');

export default {
    name: "ActivityBrowser",

    props: {
        userAgent: {},
        iconOnly: {
            default(){
                return false;
            }
        }
    },

    computed: {
        browserName(){
            if(!this.userAgent)
                return '';

            let parsed = uap( this.userAgent );

            if(parsed.browser)
                return parsed.browser.name;
        },

        browserVersion(){
            if(!this.userAgent)
                return '';

            let parsed = uap( this.userAgent );

            if(parsed.browser)
                return parsed.browser.version;
        },

        browserIcon(){
            return this.getIcon(this.browserName);
        }
    },

    methods: {
        getIcon(browserName){
            let icons = {
                'Firefox [Focus/Reality]': 'fa-brands fa-firefox-browser',
                'Firefox': 'fa-brands fa-firefox-browser',
                'Edge': 'fa-brands fa-edge',
                'Chrome': 'fa-brands fa-chrome',
                'Chromium': 'fa-brands fa-chrome',
                'Safari': 'fa-brands fa-safari',
                'IE': 'fa-brands fa-internet-explorer',
                'Opera [Mini/Mobi/Tablet]': 'fa-brands fa-opera',
                'Opera': 'fa-brands fa-opera',
                'Brave': 'fa-solid fa-shield-cat',
            };

            return icons[browserName] !== undefined ? icons[browserName] : 'fa-solid fa-globe';
        }
    }

}
</script>