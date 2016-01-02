<template>
  <div id="topics">
    <!-- header -->
    <section class="nav">
      <ul class="list-ul">
        <a v-link="{ query: {tab:'latest'} }">最新</a>
        <a v-link="{ query: {tab:'hot'} }">最热</a>
      </ul>
    </section>

    <router-view
      class="view">
    </router-view>

  </div>
</template>

<style lang="sass">
html, body, div, span, p, a, img, ul, li {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: middle;
  box-sizing: border-box;
}
ul, li {
  list-style: none;
}

body {
  font-family: "Helvetica Neue", "Luxi Sans", "DejaVu Sans", Tahoma, "Hiragino Sans GB", "Microsoft Yahei", sans-serif;
  font-size: 16px;
  color: #4d5256;
}

a {
  text-decoration: none;
  color: #778087;
  &:hover {
    text-decoration: underline;
    color: #4d5256;
  }
}

</style>
