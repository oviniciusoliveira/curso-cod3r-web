import Vue from 'vue'
import App from './App'

new Vue({
    render: h => h(App)

    // alternativa ao render: h => h(App)
    // render(createElement) {
    //     return createElement(App)
    // }
}).$mount('#app')

// .$mount('#app') == el: '#app'