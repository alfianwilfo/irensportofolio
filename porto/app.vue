<script>
import Home from "./views/Home.vue";
export default {
  name: "App",
  components: { Home },
};
</script>
<template>
  <div class="bg-[#795548] h-screen container mx-auto px-4 grid grid-rows-10">
    <div class="row-span-1">
      <Home />
    </div>
    <div class="row-start-2">
      <div class="grid grid-cols-8">
        <div class="text-[100px] col-start-2 col-end-7">
          Romiwita <br />
          Irene Klarita
        </div>
      </div>
    </div>
  </div>
</template>
