import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'
import { useAuthStore } from './store/auth';

const app = createApp(App)
const pinia = createPinia()

app.use(pinia);
app.use(router);

const authStore = useAuthStore();

authStore.fetchUser().then(() => {
    console.log("Aplicacion para montar")
    app.mount('#app');
});