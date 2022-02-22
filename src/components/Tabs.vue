<template lang="">
   <div
  >
    <ul
      class="list-none text-center overflow-auto whitespace-nowrap"
      :class="{
        'flex items-center mb-6': variant === 'vertical',
      }"
    >
      <li
        v-for="(tab, index) in tabList"
        :key="index"
        class="w-full p-7 text-lg font-medium  bg-red-50"
        :class="{
          'text-blue-600 border-b-2 border-b-blue-600': index + 1 === activeTab,
          'text-slate-700': index + 1 !== activeTab,
        }"
      >
        <label
          :for="`${index}`"
          v-text="tab"
          class="cursor-pointer block"
        />
        <input
          :id="`${index}`"
          type="radio"
          :value="index + 1"
          v-model="activeTab"
          class="hidden"
        />
      </li>
    </ul>
    <template v-for="(tab, index) in tabList">
      <div
        :key="index"
        v-if="index + 1 === activeTab"
        class=""
      >
        <slot :name="`tabPanel-${index + 1}`" />
      </div>
    </template>
  </div>
</template>
<script>
export default {
    name: 'Tabs',
    props: {
    tabList: {
      type: Array,
      required: true,
    },
    variant: {
      type: String,
      required: false,
      default: () => "vertical",
      validator: (value) => ["horizontal", "vertical"].includes(value),
    },
  },
  data() {
    return {
      activeTab: 1,
    };
  },
}
</script>
<style lang="">
    
</style>