<template lang="">
  <div class="p-8">
    <header class="grid grid-cols-4 mx-auto">
      <div
        class="flex col-span-1 items-center"
        :class="{ active: index === formPosition }"
        v-for="(step, index) in formGroup"
        :key="'step' + index"
      >
        <a
          class="items-center justify-center cursor-pointer tracking-wider sm:px-2 sm:w-auto sm:justify-start"
        >
          <!-- <img v-if="formPosition === index" :src="step.tabIcon" alt=""> -->
          <img src="../assets/img/plan/icons/stepIcon_circle.svg" alt="" />
          <p class="text-sm text-blue-600">{{ step.title }}</p>
        </a>
        <!-- <div class="w-3/5 mx-3 border-b-2 border-b-gray-100"></div> -->
        <div class="w-3/5 mx-3 border-b-2 border-b-blue-400"></div>
      </div>
    </header>
    <p class="text-2xl my-5 font-semibold text-blue-900">Adding to Plan</p>
    <FormHeader />
    <div :class="animation">
      <h2 class="text-2xl my-5 font-semibold text-blue-900">
        {{ formGroup[formPosition].title }}
      </h2>
      <div
        class="grid mb-8"
        :class="{
          'grid-cols-2 gap-8': formGroup[formPosition].fields.length > 4,
        }"
      >
        <div
          v-for="(field, index) in formGroup[formPosition].fields"
          :key="'field' + index"
        >
          <div class="flex flex-col">
            <label
              for="name"
              class="inline-flex text-md mb-2 text-gray-700 font-normal"
              >{{ field.label }}</label
            >
            <input
              name=""
              type="text"
              class="w-full px-3 py-3 text-gray-800 border rounded-lg outline-none bg-gray-50 focus:ring ring-indigo-300 mb-4"
              v-model="field.value"
            />

          </div>
           <textarea
            v-if="formGroup[formPosition].textArea"
              name=""
              type="text"
              class="w-full px-3 py-3 text-gray-800 border rounded-lg outline-none bg-gray-50 focus:ring ring-indigo-300"
              v-model="field.value"
            ></textarea>
        </div>
        
      </div>
      <div class="flex items-center mt-6">
        <div class="mx-auto flex gap-3">
          <button
            @click="prevStep"
            class="flex px-6 py-2 text-lg text-blue-900 rounded-lg border border-blue-900 hover:bg-blue-700 hover:text-white ring-indigo-300"
          >
            <img
              src="../assets/img/plan/icons/chevrons-left.svg"
              alt=""
              class="p-[2x]"
            />
            <p class="">Previous Step</p>
          </button>
          <button
            class="flex px-6 py-2 text-lg text-blue-900 rounded-lg border border-blue-900 hover:bg-blue-700 hover:text-white ring-indigo-300"
            @click="nextStep"
          >
            <p>Next Step</p>
            <img
              src="../assets/img/plan/icons/chevrons-right.svg"
              alt=""
              class="p-[2px]"
            />
          </button>
          <button v-if="formPosition + 1 === formGroup.length - 1">
            Enter
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import FormHeader from "../components/FormHeader.vue";
import stepIcon1 from "../assets/img/plan/icons/stepIcon_1.svg";
import stepIcon2 from "../assets/img/plan/icons/stepIcon_2.svg";
import stepIcon3 from "../assets/img/plan/icons/stepIcon_3.svg";
import stepIcon4 from "../assets/img/plan/icons/stepIcon_4.svg";

export default {
  components: {
    FormHeader,
  },
  name: "MultiStepForm",
  data: () => {
    return {
      formPosition: 0,
      animation: "animate-in",
      formGroup: [
        {
          title: "Funding Information",
          tabIcon: stepIcon1,
          textArea: false,
          fields: [
            { label: "Funding Method", value: "" },
            { label: "Promo Code", value: "" },
          ],
        },
        {
          title: "Billing Information",
          tabIcon: stepIcon2,
          textArea: false,
          fields: [
            { label: "First Name", value: "" },
            { label: "Last Name", value: "" },
            { label: "Country", value: "" },
            { label: "<State/Province>", value: "" },
            { label: "City", value: "" },
            { label: "Address 1", value: "" },
            { label: "Address 2", value: "" },
            { label: "<Zip/Postal Code>", value: "" },
          ],
        },
        {
          title: "Subscription Agreement",
          tabIcon: stepIcon3,
          textArea: true,
          fields: [
            { label: "", value: "" },
            { label: "Name", value: "" },
          ],
        },
        {
          title: "Review & Finish",
          tabIcon: stepIcon4,
          fields: [],
        },
      ],
    };
  },
  methods: {
    nextStep() {
      this.animation = "animate-out";
      setTimeout(() => {
        this.animation = "animate-in";
        this.formPosition += 1;
      }, 600);
    },
    prevStep() {
      this.animation = "animate-out";
      setTimeout(() => {
        this.animation = "animate-in";
        this.formPosition -= 1;
      }, 600);
    },
  },
};
</script>
<style lang="css">
.animation-in {
  transform-origin: left;
  animation: in 0.6s ease-in-out;
}
.animation-out {
  transform-origin: bottom left;
  animation: out 0.6s ease-in-out;
}
</style>
