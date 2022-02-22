<template lang="">  
    <div class="m-4 lg:w-1/3">
        <div class="text-center border border-slate-300 rounded-lg plan-card">
            <div class="overflow-hidden">
                <img :src="planContext.background_img" class="w-full rounded-t-lg">
            </div>
            <div class="relative bottom-12">
                <img :src="planContext.content_img" class="m-auto">    
            </div>
            <div class="relative bottom-12">
                <p class="text-xl text-slate-600 mb-4 font-medium">{{ planContext.card_title }}</p>
                <p class="text-xl text-slate-600 mb-4 font-medium">{{ planContext.price }}</p>
                <button class="rounded-md border bg-white text-slate-400 py-2 px-5 text-sm font-medium mb-2"
                    :class="{
                        'text-blue-900 border border-blue-900 font-medium' : planContext.isActive
                    }"
                    @click="openPlanModal(true)"
                >
                    {{ planContext.btn_title }}
                </button>
                <div class="mb-6 border-0 border-t border-t-gray-300 m-4">
                    <ul class="w-60 m-auto font-medium text-left text-slate-600 list-reset p-4 mb-6 text-sm">
                        <li v-for="(list, index) in planContext.list_content" :key="index" class="flex leading-10">
                            <img src="../assets/img/plan/check.svg" class="pr-2">
                            {{ list }}
                        </li>
                    </ul>
                </div>
            </div> 
        </div>
    </div>
</template>
<script>

export default {
    name: "Billing",
    props: {
        planContext: Object
    },
    methods: {
        openPlanModal(val) {
            alert()
            this.$emit('modal-open', val)
        }
    }
}
</script>
<style lang="css">
    .plan-card {
        min-height: 805px;
    }
</style>