<template>
  <div class="custom-layout-grouping">
    <div>
      <button @click="test" class="custom-button-normal">
        Hello World
      </button>
      <span class="text-white p-2">{{result}}</span>

    </div>

    <div>
      <button class="custom-button-danger">Delete </button>
    </div>

    <div>
      <button class="custom-button-save">Save</button>
    </div>
  </div>
</template>

<script>

export default {
  name: "Buttons",
  data(){
    return {
      result:'not set'
    }
  },
  methods:{
    test(){
      this.result = 'clicked'
    }
  }
}
</script>