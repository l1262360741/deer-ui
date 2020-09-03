import { createApp } from 'vue' //创建app实例
import App from './App.vue'//引入组件
import './index.css'
import { createWebHashHistory, createRouter } from 'vue-router'
import Frank from './components/Frank.vue'
import Frank2 from './components/Frank2.vue'

const history = createWebHashHistory()
const router = createRouter({
    history: history,
    routes: [
        { path: '/', component: Frank },
        { path: '/xxx', component: Frank2 },
    ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')//接受app组件 挂载
