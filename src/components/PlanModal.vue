<template>
  <div class="h-full mx-auto animated fadeIn">
    <div class="flex justify-center">
      <div
        v-show="isOpen"
        class="
          fixed
          inset-0
          flex
          items-center
          justify-center
          bg-gray-700 bg-opacity-50
          overflow-y-auto
        "
      >
        <div class="container-md max-w-screen-md p-6 mx-4 bg-white rounded-md shadow-xl">
          <div class="flex items-center justify-between">
            <h1 class="text-4xl">Add Plan</h1>
            <div class="flex cursor-pointer" @click="$emit('close')">
                <span class="text-md text-gray-900 items-center font-medium p-2">Close</span>
                <img src="../assets/img/plan/icons/close.svg" alt="">
            </div>   
          </div>
          <div class="mt-4">
            <multi-step-form></multi-step-form>
            <!-- <button
              @click="$emit('close')"
              class="px-6 py-2 text-blue-800 border border-blue-600 rounded"
            >
              Cancel
            </button> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MultiStepForm from "../components/MultiStepForm.vue";
export default {
  name: "PlanModal",
  components: {
    MultiStepForm
  },
  props: {
    isOpen: {
      type:Boolean,
      default: false
    }
  },
  methods: {
    
  }
};
</script>