import Echo from 'laravel-echo';
import Pusher from 'pusher-js';
import Method from "../components/Method.vue";
import activityLog from "../mixins/activity-log";
import Common from "../mixins/common";

window.Pusher = Pusher;
window.Echo = new Echo({
    broadcaster: 'pusher',
    key: broadcastingData.key,
    cluster: broadcastingData.options.cluster ?? 'mt1',
    wsHost: broadcastingHost ? broadcastingHost : `ws-${broadcastingData.options.cluster}.pusher.com`,
    wsPort: broadcastingData.options.port ?? 80,
    wssPort: broadcastingData.options.port ?? 443,
    forceTLS: (broadcastingData.options.scheme ?? 'https') === 'https',
    enabledTransports: ['ws', 'wss'],
});

new Vue({
    el: '#MasterApp',
    mixins: [activityLog, Common],

    components: {Method},

    created() {
        this.listening();
    },

    computed:{
        usersFiltered(){
            return this.users.filter(function (user){
                return user.id != thisUser;
            });
        }
    },

    data:{
        recentActivity: recentActivity,
        userNameField: userNameField,
        users: [],
    },

    methods: {
        listening(){
            window.Echo.join('al.tracking.users')
                .here((users) => {
                    this.users = users;
                })
                .joining((user) => {

                    let index = this.users.findIndex(function (single){
                        return single.id === user.id;
                    });

                    if( index > 0 ){
                        this.users[index] = user;
                    } else {
                        this.users.push(user);
                    }

                })
                .leaving((user) => {

                    let index = this.users.findIndex(function (single){
                        return single.id === user.id;
                    });

                    if( index > 0 )
                        this.users.splice(index, 1);
                })
                .error((error) => {
                    console.error(error);
                });
        }
    }
});