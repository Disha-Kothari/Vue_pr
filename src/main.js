import './assets/main.css'

import { createApp } from 'vue'
//import Vue from 'vue'
import App from './App.vue'

//import { BootstrapVue} from 'bootstrap-vue'
//import 'bootstrap/dist/css/bootstrap.css'
//import 'bootstrap/dist/css/bootstrap.min.css'
//import 'bootstrap-vue/dist/bootstrap-vue.css'
//import "bootstrap/dist/js/bootsrap.js"
//import "bootstrap"
//Vue.use(BootstrapVue)

import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faPhone);
createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount('#app')

//global binding
// const app=craateApp(App)
// app.component('',)
