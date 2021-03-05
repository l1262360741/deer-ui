import { createApp } from 'vue' //创建app实例
import App from './App.vue'//引入组件
import './index.scss'
import { router } from './router'




const app = createApp(App)
app.use(router)

app.mount('#app')//接受app组件 挂载

