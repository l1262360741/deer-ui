import { createWebHashHistory, createRouter } from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import ButtonhDemo from './components/ButtonhDemo.vue'
import TabDemo from './components/TabDemo.vue'
import DialogDemo from './components/DialogDemo.vue'
import DocDemo from './components/DocDemo.vue'
import Clock from './components/Clock.vue'
import TabBar from './components/Tabbar.vue'


const history = createWebHashHistory()
export const router = createRouter({
    history: history,
    routes: [
        { path: '/', component: Home },
        {
            path: '/doc', component: Doc, children: [
                { path: '', component: DocDemo },
                { path: 'switch', component: SwitchDemo },
                { path: 'button', component: ButtonhDemo },
                { path: 'tabs', component: TabDemo },
                { path: 'dialog', component: DialogDemo },
                { path: 'clock', component: Clock },
                { path: 'tabbar', component: TabBar },
            ]
        },
    ],

});
