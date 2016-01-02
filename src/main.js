import Vue from 'vue'
import Router from 'vue-router'
import { fromNow } from './filter'

import App from './components/App.vue'
import ListView from './components/ListView.vue'

Vue.use(Router)

Vue.config.debug = true

Vue.filter('fromNow', fromNow)

// routing
var router = new Router()

router.map({
  '/': {
    component: ListView
  }
})

// router.redirect({
//   '*': '/'
// })

router.start(App, '#app')
