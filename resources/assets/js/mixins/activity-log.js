import ActivityBrowser from "../components/ActivityBrowser.vue";
import ActivitySystem from "../components/ActivitySystem.vue";
import 'vue-json-pretty/lib/styles.css';
import VueJsonPretty from 'vue-json-pretty';

var activityLog = {

    components: {ActivityBrowser, ActivitySystem, VueJsonPretty},

    created(){},

    data(){
        return {
            activityLog: {
                modal: null,
                route: activityLogGetRoute,
                item: null,
            }
        }
    },

    methods: {
        openDetailsModal(id, event){
            let instance = this;
            let button = event.currentTarget;

            window.Spinner.on().button(button);

            let route = `${this.activityLog.route}/${id}`;

            axios.get(route)
                .finally(function (){
                    window.Spinner.off().button(button);
                })
                .then(function (response){
                    instance.activityLog.item = response.data.result;
                    instance.activityLogModal().show();
                })
                .catch(function (error){
                    console.error(error);
                });
        },

        activityLogModal(){
            var myModalEl = document.querySelector('#ActivityLogDetailsModal')
            return bootstrap.Modal.getOrCreateInstance(myModalEl)
        },

        activityBrowser(){

        },

        activityOs(){

        }
    }
}

export default activityLog;