<template>
  <div class="bg-gray-900 border border-gray-800 rounded shadow p-2 container max-w-full">
    <div>
      <button-normal message="Hello world" @click="test"/>
      <span class="text-white p-2">{{result}}</span>

    </div>

    <div>
      <button-danger message="Delete"/>
    </div>

    <div>
      <button-save message="Save"/>
    </div>
  </div>
</template>

<script>
import ButtonNormal from "@/components/ButtonNormal";
import ButtonDanger from "@/components/ButtonDanger";
import ButtonSave from "@/components/ButtonSave";

export default {
  name: "Buttons",
  data(){
    return {
      result:'not set'
    }
  },
  components: {ButtonSave, ButtonDanger, ButtonNormal},
  methods:{
    test(){
      this.result = 'clicked'
    }
  }
}
</script>