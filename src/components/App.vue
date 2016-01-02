<template>
  <div id="topics">
    <!-- header -->
    <section class="nav">
      <ul class="list-ul">
        <li v-link="{ query: {tab:'latest'} }">最新</li>
        <li v-link="{ query: {tab:'hot'} }">最热</li>
      </ul>
    </section>

    <router-view
      class="view">
    </router-view>

  </div>
</template>
