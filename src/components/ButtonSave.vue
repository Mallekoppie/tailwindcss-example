<template>
  <button
      class="bg-green-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:bg-green-500 mr-1 mb-1 ease-linear transition-all duration-150">
    {{ message }}
  </button>
</template>

<script>
export default {
  name: "ButtonSave",
  props: {
    message: {
      type: String,
      default: 'Not set'
    }
  }
}
</script>
