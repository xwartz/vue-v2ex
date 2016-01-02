import Vue from 'vue'
import Router from 'vue-router'
import { length, fromNow } from './filter'

import App from './components/App.vue'
import ListView from './components/ListView.vue'

Vue.use(Router)

Vue.config.debug = true

Vue.filter('fromNow', fromNow)
Vue.filter('length', length)

// routing
var router = new Router()

router.map({
  '/': {
    component: ListView
  }
})

router.start(App, '#app')
