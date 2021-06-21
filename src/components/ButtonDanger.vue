<template>
  <button
      class="bg-red-500 text-white font-bold uppercase text-xs px-4 py-2 rounded hover:bg-red-400 mr-1 mb-1 ease-linear transition-all duration-150">
    {{ message }}
  </button>
</template>

<script>
export default {
  name: "ButtonDanger",
  props: {
    message: {
      type: String,
      default: 'Not set'

    }
  }
}
</script>