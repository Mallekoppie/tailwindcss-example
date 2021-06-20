<template>
  <div class="bg-gray-300 font-sans leading-normal tracking-normal mx-auto h-screen">
    <div>
      <DarkNavBar/>
    </div>
    <div id="app" class="">
      <router-view/>
    </div>
    <br/>
    <div class="container w-full mx-auto pt-20 bg-black-alt h-auto">
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

