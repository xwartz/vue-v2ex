<template>
  <div id="topics">
    <v-header></v-header>
    <router-view
      class="view">
    </router-view>

  </div>
</template>

<script>
import vHeader from './Header.vue'
export default {
  name: 'AppView',
  components: {
    vHeader
  }
}
</script>

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
  width: 680px;
  margin: 0 auto;
}

a {
  text-decoration: none;
  color: #778087;
  &:hover {
    text-decoration: underline;
    color: #4d5256;
  }
}

@media screen and (max-width: 680px) {
  body {
    width: 100%;
  }
}

</style>
