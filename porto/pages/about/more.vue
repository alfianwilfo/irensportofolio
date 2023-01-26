<script>
import Navbar from "~~/components/Navbar.vue";
import left from "@/components/global/left.svg";
export default {
  name: "more",
  components: { Navbar, left },
  data() {
    return { from: "about" };
  },
};
</script>
<template>
  <div class="h-screen">
    <div>
      <Navbar :from="from" />
    </div>
    <div class="grid grid-cols-12">
      <div class="grid content-center">
        <div class="flex justify-center">
          <div>
            <!-- <nuxt-icon name="right" filled /> -->
            <button @click="next">
              <left class="w-7 h-10" />
            </button>
          </div>
        </div>
      </div>
      <div>
        <div class="poirto text-[100px]">
          Fun <br />
          Fact <br />
          About <br />
          Me
        </div>
      </div>
      <div></div>
    </div>
  </div>
</template>
