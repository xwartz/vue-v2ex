import Vue from 'vue'
import Router from 'vue-router'
import { length, fromNow } from './filter'

import routers from './routers'
import App from './components/App.vue'

Vue.use(Router)

Vue.config.debug = true

Vue.filter('fromNow', fromNow)
Vue.filter('length', length)

// routing
var router = new Router()

routers(router)

router.start(App, '#app')
