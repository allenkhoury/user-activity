import Vue from 'vue';
import AlEvent from "../classes/AlEvent";
import Method from "../components/Method.vue";
import Spinner from "../classes/Spinner";

Vue.component('method', Method);

window.Vue = Vue;
window.axios = require('axios');
window.AlEvent = new AlEvent();
window.Spinner = new Spinner();