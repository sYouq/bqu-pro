<template>
  <div id="app">

    <keep-alive>
      <router-view></router-view>
    </keep-alive>

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

<style scoped lang="scss">
	#app{
		width: 100%;
		height: 100%;
	}
</style>
