import Vue from 'vue'
import App from './App'

new Vue({
    // el: '#app', alternativa ao $mount
    render: h => h(App)
    // alternativa à arrow function acima
    // render(createElement) {
    //     return createElement(App)
    // }
}).$mount("#app")