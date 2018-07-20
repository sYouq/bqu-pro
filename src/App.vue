<template>
  <div id="app">
    
    <router-view></router-view>
    
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import FooterBar from "@/components/common/Footer.vue";
export default {
  name: 'App',
  components : {
    FooterBar,
  }
}
</script>

<style scoped>

</style>