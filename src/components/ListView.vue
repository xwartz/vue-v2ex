<template>
  <div class="list">
    <item
      v-for="item in items"
      :item="item"
      track-by="id">
    </item>
  </div>
</template>

<script>
import store from '../store'
import Item from './Item.vue'

export default {
  name: 'ListView',
  components: {
    Item
  },
  data () {
    return {
      tab: 'latest',
      items: []
    }
  },
  methods: {
    getList () {
      store.fetchItemsByTab(this.tab).then(items => {
        this.items = items || []
      })
    }
  },
  route: {
    data ({ to }) {
      this.tab = to.query.tab || 'latest'
      this.getList()
    }
  }
}
</script>
