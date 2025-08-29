import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import router from "./routes";
import HeaderComponent from "./components/HeaderComponent.vue";

// 意味調べる
const app = createApp(App);

app.component('header-component', HeaderComponent);
app.use(router).mount('#app');



