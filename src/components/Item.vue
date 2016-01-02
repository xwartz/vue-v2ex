<template>
  <div class="item">
    <a :href="userUrl" class="avatar">
      <img :src="avatarUrl" />
    </a>
    <div class="detail">
        <a :href="topicUrl" class="title">{{{item.title}}}</a>
        <p>
          <a class="node" :href="nodeUrl">{{item.node.name}}</a>
          <span>•</span>
          <a :href="userUrl">{{item.member.username}}</a>
          <span>•</span>
          <span>{{item.last_modified | fromNow}}</span>
        </p>
        <a :href="topicUrl" class="replies">{{item.replies}}</a>
    </div>
  </div>
</template>


<script>
export default {
  name: 'Item',
  props: {
    item: Object
  },
  computed: {
    userUrl () {
      return 'http://www.v2ex.com/member/' + this.item.member.username
    },
    avatarUrl () {
      return this.item.member.avatar_normal
    },
    topicUrl () {
      return this.item.url
    },
    nodeUrl () {
      return this.item.node.url
    }
  }
}
</script>

<style lang='sass'>
.item {
  .detail {
    display: inline-block;
  }
}
</style>
