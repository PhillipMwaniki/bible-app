import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'primevue/resources/themes/fluent-light/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                    //core css
import 'primeicons/primeicons.css'                              //icons

//primeflex
import 'primeflex/primeflex.css';


import PrimeVue from 'primevue/config';
import Button from "primevue/button";

const app = createApp(App)
app.use(store)
app.use(router)
app.use(PrimeVue)

app.component('Button', Button)

app.mount('#app')
