import Vue from 'vue'
import App from './App.vue'
// 因为文件夹里面命名为index所以不需要使用后面的index.js在vue内部做了相关操作
import router from './router'
import store from './store'

Vue.config.productionTip = false

// 渲染主组件
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')