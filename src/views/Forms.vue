<template>
  <div>
    <div class="custom-layout-grouping my-4 ">
      <div class="space-y-4 space-x-4">
        <div class="inline-block text-white">Input</div>

        <div class="inline-block ">
          <input class="custom-input">
        </div>
      </div>

      <div class="space-y-4 space-x-4">
        <div class="inline-block text-white">Input</div>

        <div class="inline-block">
          <input>
        </div>
      </div>
    </div>

    <div class="custom-layout-grouping">
      <div>
        <label class="m-4">Sample form</label>
      </div>
      <div class="grid grid-cols-1 md:gap-8 m-4">
        <label class="text-gray-400">Input 1</label>
        <input>
      </div>

      <div class="grid grid-cols-2  md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-5">
        <label class="text-gray-400">Input 1</label>
        <input>
        <label class="text-gray-400">Input 1</label>
        <input>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Forms"
}
</script>

<style scoped>

</style>