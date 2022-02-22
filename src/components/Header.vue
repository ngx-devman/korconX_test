<template>
    <div class="bg-white">
        <nav class="flex items-center justify-between flex-wrap bg-teal">
            <div class="flex items-center flex-no-shrink mr-6">
                <span class="font-semibold text-2xl tracking-tight text-blue-900">
                    Administration
                </span>
            </div>
            <DropDown :options="dropdownOptions" :isOptionsExpanded="optionsExpanded" :isSideBar="isSideBar" />
        </nav>
    </div>
</template>
<script>
import DropDown from "../components/DropDown.vue";
import avatar from "../assets/img/profileImage.svg";
export default {
    name: 'Header',
    components: {
        DropDown
    },
    data() {
        return {
            optionsExpanded: false,
            isSideBar: false,
            dropdownOptions: [
                {
                  img: avatar,
                  option_title: "Michael Scott"
                },
                {
                  img: "",
                  option_title: "Setting"
                },
                {
                  img: "",
                  option_title: "Sign Out"
                },   
            ]
        }
    }
}
</script>
<style lang="">
    
</style>