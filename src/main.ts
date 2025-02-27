import { createApp } from 'vue'
import router from './router'
import store from './store'
import Global from '@/components/global/global' // 页面文件目录
import '@/style/style.less'

let app = createApp(App)

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'

// 注册全局组件
Global.forEach( (item: any, index: any) => {
    app.component(item.name, item.componentb)
})

app.use(store).use(router).use(ElementPlus).mount('#app')
