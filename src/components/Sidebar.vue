<template lang="">
    <div class="bg-white text-neutral-500 main-shadow w-80">
        <div class="top-area main-shadow items-center">
            <div class="main-logo p-5">
                <img src="../assets/img/KoreConXmain_logo.svg" alt="logo">
            </div>
            <DropDown :options="dropdownOptions" :isOptionsExpanded="optionsExpanded" :isSideBar="isSideBar" />
        </div>
        <div class="nav-items mx-6 my-8">
            <NavItem v-for="(nav, index) in navLists" :key="index" :navItem="nav" />
        </div>
    </div>
</template>
<script>

import NavItem from "../components/NavItem.vue";
import DropDown from "../components/DropDown.vue";
import homeIcon from "../assets/img/home_icon.svg";
import portfolioIcon from "../assets/img/portfolio_icon.svg";
import profileIcon from "../assets/img/profile_icon.svg";
import adminIcon from "../assets/img/admin_icon.svg";
import avatar from "../assets/img/profileImage.svg";

export default {
    name: "Sidebar",
    components: {
        NavItem, DropDown
    },
    data() {
        return {
            optionsExpanded: false,
            isSideBar: true,
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
            ],
            navLists: [
                {
                    link_name: "home",
                    ico_url: homeIcon
                },
                {
                    link_name: "portfolio",
                    ico_url: portfolioIcon
                },
                {
                    link_name: "profile",
                    ico_url: profileIcon
                },
                {
                    link_name: "administration",
                    ico_url: adminIcon
                }
            ]
        };
    },
    methods: {
    },
};
</script>
<style lang="css">
.ease-custom {
  transition-timing-function: cubic-bezier(0.61, -0.53, 0.43, 1.43);
}
</style>