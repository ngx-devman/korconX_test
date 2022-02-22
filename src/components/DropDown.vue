<template lang="">
    <div class="drop-down flex items-center justify-center"
        :class="[
            isSideBar ? 'py-5' : 'py-2'
        ]"
    >
        <div class="relative text-lg w-72 px-2"
            :class="[
                isSideBar ? 'w-72' : 'w-60'
            ]"
        >
            <button
                class="flex items-center justify-between px-3 py-2 bg-white w-full"
                :class="{
                    'border border-gray-300 rounded-lg' : isSideBar
                }"
                @click="isOptionsExpanded = !isOptionsExpanded"
                @blur="isOptionsExpanded = false"
            >  
                <img :src="selectedOption.img" alt="">
                <span class="font-semibold text-blue-900">{{ selectedOption.option_title }}</span>
                <svg
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="h-4 w-4 transform transition-transform duration-200 ease-in-out text-blue-900"
                :class="isOptionsExpanded ? 'rotate-180' : 'rotate-0'"
                >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                />
                </svg>
            </button>
            <transition
                enter-active-class="transform transition duration-500 ease-custom"
                enter-class="-translate-y-1/2 scale-y-0 opacity-0"
                enter-to-class="translate-y-0 scale-y-100 opacity-100"
                leave-active-class="transform transition duration-300 ease-custom"
                leave-class="translate-y-0 scale-y-100 opacity-100"
                leave-to-class="-translate-y-1/2 scale-y-0 opacity-0"
            >
                <ul
                    v-show="isOptionsExpanded"
                    class="absolute left-0 right-0 mb-4 bg-white divide-y rounded-lg shadow-lg overflow-hidden"
                >
                    <li
                        v-for="(option, index) in options"
                        :key="index"
                        class="flex px-3 py-2 items-center transition-colors duration-300 hover:bg-gray-200"
                        @mousedown.prevent="setOption(option)"
                    >
                        <img :src="option.img" alt="" class="pr-3">
                        {{ option.option_title }}
                    </li>
                </ul>
            </transition>
        </div>
    </div>
</template>
<script>
export default {
    name: "DropDown",
    props: {
        options: Array,
        isOptionsExpanded: Boolean,
        isSideBar: Boolean
    },
    data() {
        return {
            selectedOption: this.options[0],
        };
    },
    methods: {
        setOption(option) {
            this.selectedOption = option;
            this.isOptionsExpanded = false;
        },
    },
}
</script>
<style lang="">
    
</style>