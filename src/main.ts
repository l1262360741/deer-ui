import { createApp } from 'vue' //创建app实例
import App from './App.vue'//引入组件
import './index.css'
import { createWebHashHistory, createRouter } from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'

const history = createWebHashHistory()
const router = createRouter({
    history: history,
    routes: [
        { path: '/', component: Home },
        { path: '/doc', component: Doc },
    ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')//接受app组件 挂载
