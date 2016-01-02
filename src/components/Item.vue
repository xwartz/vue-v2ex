<template>
  <div class="item">
    <a :href="userUrl" class="avatar">
      <img :src="avatarUrl" />
    </a>
    <div class="detail">
        <a :href="topicUrl" class="title">{{{item.title | length}}}</a>
        <p>
          <a class="node" :href="nodeUrl">{{item.node.name}}</a>
          <span>•</span>
          <a :href="userUrl" class="author">{{item.member.username}}</a>
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

<style lang="sass">
.item {
  position: relative;
  padding: 10px;
  border-bottom: 1px solid #e2e2e2;

  .detail {
    display: inline-block;
    padding-left: 10px;

    p {
      padding-top: 5px;
    }

    span {
      color: #ccc;
      font-size: 12px;
    }
  }

  .avatar:hover {
    text-decoration: none;
  }

  .node {
    display: inline-block;
    background-color: #f5f5f5;
    font-size: 10px;
    line-height: 10px;
    padding: 4px 4px 4px 4px;
    border-radius: 2px;
    color: #999;

    &:hover {
      text-decoration: none;
      background-color: #e2e2e2;
      color: #777;
    }
  }

  .author {
    font-weight: bold;
    font-size: 12px;
  }

  .replies {
    position: absolute;
    right: 10px;
    top: 45%;

    line-height: 12px;
    font-weight: bold;
    color: white;
    background-color: #aab0c6;
    display: inline-block;
    padding: 2px 10px 2px 10px;
    border-radius: 12px;
    margin-right: 5px;
    word-break: keep-all;

    &:visited {
      color: white;
      background-color: #e5e5e5;
      text-decoration: none;
    }

    &:hover {
      color: white;
      background-color: #969cb1;
      text-decoration: none;
    }
  }
}

@media screen and (max-width: 680px) {
  .detail {
    width: 75%;
  }
}
</style>
