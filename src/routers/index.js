import ListView from '../components/ListView.vue'

export default function (router) {
  router.map({
    '/': {
      name: 'topics',
      component: ListView
    },
    '/topics': {
      name: 'topics',
      component: ListView
    }

  })
}
