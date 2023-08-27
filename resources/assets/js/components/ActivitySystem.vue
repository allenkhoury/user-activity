<template>
    <span :title="systemName + ' - ' + systemVersion">
        <template v-if="systemIcon">
            <i :class="systemIcon"></i>
        </template>

        <template v-if="!iconOnly">
            {{ systemName }}
        </template>
    </span>
</template>

<script>

var uap = require('ua-parser-js');

export default {
    name: "ActivitySystem",

    props: {
        userAgent: {},
        iconOnly: {
            default() {
                return false;
            }
        }
    },

    computed: {
        systemName() {
            if (!this.userAgent)
                return '';

            let parsed = uap(this.userAgent);

            if (parsed.os)
                return parsed.os.name;
        },

        systemVersion() {
            if (!this.userAgent)
                return '';

            let parsed = uap(this.userAgent);

            if (parsed.os)
                return parsed.os.version;
        },

        systemIcon() {
            return this.getIcon(this.systemName);
        }
    },

    methods: {
        getIcon(systemName) {

            let icons = {
                'Android[-x86]': 'fa-brands fa-android',
                'Android': 'fa-brands fa-android',
                'Arch': 'fa-solid fa-archway',
                'CentOS': 'fa-brands fa-centos',
                'Chromium OS': 'fa-brands fa-chrome',
                'Firefox OS': 'fa-brands fa-firefox-browser',
                'Fedora': 'fa-brands fa-fedora',
                'iOS': 'fa-brands fa-apple',
                'Linux': 'fa-brands fa-linux',
                'Mint': 'fa-brands fa-linux',
                'Mac OS': 'fa-brands fa-apple',
                'Mac': 'fa-brands fa-apple',
                'Ubuntu': 'fa-brands fa-ubuntu',
                'Windows': 'fa-brands fa-windows',
                'Windows [Phone/Mobile]': 'fa-brands fa-windows',
            };

            return icons[systemName] !== undefined ? icons[systemName] : 'fa-solid fa-laptop';
        }
    }

}
</script>