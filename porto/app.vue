<script>
import iren from "./assets/iren.png";
import Home from "./views/Home.vue";
export default {
  name: "App",
  components: { Home, iren },
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
        <Home />
      </div>
      <div class="row-start-2">
        <div class="grid grid-cols-12">
          <div class="text-[130px] text-white col-start-2 col-end-8 poirto">
            Romiwita <br />
            Irene Klarita
          </div>
        </div>
      </div>

      <div
        class="text-white grid grid-cols-12 row-start-6 text-[20px] text-right px-[10px]"
      >
        <div class="col-start-9 col-span-4">
          A woman who enjoy learning, loves challenges and want to keep creating
          a great things.
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poiret+One&display=swap");
.poirto {
  font-family: "Poiret One", cursive;
}
</style>
