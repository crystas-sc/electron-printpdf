import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')


export async function printPage(){
    await (window.api as any).printPage()
}
