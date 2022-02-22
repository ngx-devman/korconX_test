<template lang="">
    <router-link class="flex text-lg font-medium leading-12 py-2 my-1 pl-3
        capitalize cursor-pointer hover:bg-gray-100 hover:rounded-md" :to="`/${navItem.link_name}`">
        <img :src="navItem.ico_url" alt="">
        <p class="pl-4">{{ navItem.link_name }}</p>
    </router-link>
</template>
<script>
export default {
    name: "NavItem",
    props: {
        navItem: Object
    }
}
</script>
<style lang="">
    
</style>