<template>
  <div class="relative flex min-h-screen">
    <Sidebar />
    <div class="flex-1 mx-20">
      <Header />
      <div class="mt-10 font-extrabold min-h-screen main-shadow rounded-xl border border-slate-200">
        <div class="p-8 flex items-center">
          <img src="../assets/img/CompanyImage.svg" alt="content-logo">
          <p class="px-8 text-3xl items-center font-bold text-blue-900">Company Name</p>
        </div>
        <div>
          <tabs :tabList="tabList">
            <template v-slot:tabPanel-1>
              <div class="lg:flex lg:items-center rounded-xl border border-gray m-8">
                <Billing v-for="(plan, index) in planList" :key="index" :planContext="plan" @modal-open="openModal" />
              </div>
            </template>
            <template v-slot:tabPanel-2>
              <div class="lg:flex lg:items-center rounded-xl border border-gray m-8">
              </div>
            </template>
            <template v-slot:tabPanel-3>
              <div class="lg:flex lg:items-center rounded-xl border border-gray m-8">
              </div>
            </template>
          </tabs>
        </div>
      </div>
      <router-view />
    </div>
  </div>
  <PlanModal :is-open="isOpen" @close="isOpen= false" />
</template>

<script>
import Sidebar from "../components/Sidebar.vue";
import Header from "../components/Header.vue";
import Tabs from "../components/Tabs.vue";
import Billing from "../components/Billing.vue";
import PlanModal from "../components/PlanModal.vue";
import freeForever from "../assets/img/plan/back_free.svg";
import shareHolder from "../assets/img/plan/back_shareholder.svg";
import backPrivate from "../assets/img/plan/back_private.svg";
import freeConImg from "../assets/img/plan/freeForever.svg";
import shareConImg from "../assets/img/plan/shareholderMGMT.svg";
import privateConImg from "../assets/img/plan/WhiteLabel.svg";

export default {
    name: "Layout",
    components: { Sidebar, Header, Tabs, Billing, PlanModal },
    data() {
      return {
        isOpen: false,
        tabList: ["Billing & Subscription", "Invitations", "Data Logs"],
        planList: [
          {
            background_img: freeForever,
            content_img: freeConImg,
            card_title: "Free Forever",
            price: "FREE",
            isActive: false,
            btn_title: "Current Plan",
            list_content: [
              "Predictive Dialer", "Campaign and List Management", "Progressive Dialer",
              "Datalake", "Web Callback", "Cloud APIs", "Sidekick", "CTI and Screen Pop"
            ]
          },
          {
            background_img: shareHolder,
            content_img: shareConImg,
            card_title: "Shareholder Management",
            price: "$150/mo",
            isActive: true,
            btn_title: "+ Add to Plan",
            list_content: [
              "Everything in Free Forever", "Omnichannel", "Chat",
              "Speech Recognition", "Cloud APIs", "Mobile Customer Care", "Predictive Dialer", "Sidekick", "Quality Monitoring"
            ]
          },
          {
            background_img: backPrivate,
            content_img: privateConImg,
            card_title: "Private Label",
            price: "$200/mo",
            isActive: true,
            btn_title: "+ Add to Plan",
            list_content: [
              "Everything in Free Forever", "Datalake", "TCPA Compliance",
              "Servicenow", "CTI and Screen Pop"
            ]
          }
        ]
      }
    },
    methods: {
      openModal () {
        console.log("It's clicked")
        this.isOpen = !this.isOpen
      }
    }
}
</script>

<style scoped>
</style>
