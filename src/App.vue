<template>
  <div class="bg-gray-300 font-sans leading-normal tracking-normal mx-auto">
    <div>
      <DarkNavBar/>
    </div>
    <div id="app" class="">
      <router-view/>
    </div>
    <br/>
    <div class="container w-full mx-auto pt-20 bg-black-alt">
      Normal Button
      <div/>
      <NormalButton/>
    </div>
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
  </div>
</template>

<script>
import NormalButton from "@/components/NormalButton";
import DarkNavBar from "@/components/DarkNavBar";

export default {
  name: 'App',
  components: {
    DarkNavBar,
    NormalButton
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #0051ff;
  margin-top: 60px;
}
</style>
