<template>
  <div class="custom-layout-grouping">
    <div>
      <button @click="test" class="custom-button-normal">
        Hello World
      </button>
      <span class="text-white p-2">{{ result }}</span>

    </div>

    <div>
      <button class="custom-button-danger grid grid-cols-2">
        <div class="">
          <svg class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
          </svg>

        </div>
        <div class="pt-1">
          <label class="">
            Delete
          </label>
        </div>
      </button>
    </div>

    <div>
      <button class="custom-button-danger">Delete</button>
    </div>

    <div>
      <button class="custom-button-save">Save</button>
    </div>
  </div>
</template>

<script>

export default {
  name: "Buttons",
  data() {
    return {
      result: 'not set'
    }
  },
  methods: {
    test() {
      this.result = 'clicked'
    }
  }
}
</script>