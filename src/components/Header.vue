<template>
  <!-- header -->
  <section class="nav">
    <ul class="list-ul">
      <a v-link="{ name:'topics', query: { tab:'latest'} }">最新</a>
      <a v-link="{ name:'topics', query: { tab:'hot'} }">最热</a>
    </ul>
  </section>

</template>

<style lang="sass">
  .nav {
    background-color: #fff;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    padding: 10px;
    font-size: 12px;
    line-height: 150%;
    text-align: left;

    a {
      color: #778087;
      text-decoration: none;
      word-break: break-all;
      display: inline-block;
      font-size: 13px;
      line-height: 13px;
      padding: 5px 8px 5px 8px;
      margin-right: 5px;
      border-radius: 3px;
      color: #555;

      &.active {
        display: inline-block;
        font-size: 13px;
        line-height: 13px;
        padding: 5px 8px 5px 8px;
        margin-right: 5px;
        border-radius: 3px;
        background-color: #334;
        color: #fff;
      }
    }
  }
</style>
