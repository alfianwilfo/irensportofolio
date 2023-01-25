<script>
import Navbar from "~~/components/Navbar.vue";
export default {
  name: "Home",
  components: { Navbar },
};
</script>
<template>
  <div
    class="static bg-[#795548] h-screen container mx-auto px-4 grid grid-rows-6"
  >
    <div
      class="bg-[url('~/assets/iren.png')] row-span-6 grid grid-rows-6 bg-no-repeat bg-center bg-contain"
    >
      <div class="row-span-1">
        <Navbar />
      </div>
      <div class="row-start-2">
        <div class="grid grid-cols-12">
          <div class="text-[150px] text-white col-start-2 col-end-9 poirto">
            Romiwita <br />
            Irene Klarita
          </div>
        </div>
      </div>

      <div
        class="text-white grid grid-cols-12 row-start-6 text-[20px] text-right px-[10px]"
      >
        <div class="col-start-9 col-span-4 jakarta">
          A woman who enjoy learning, loves challenges <br />
          and want to keep creating a great things.
        </div>
      </div>
    </div>
  </div>
</template>
