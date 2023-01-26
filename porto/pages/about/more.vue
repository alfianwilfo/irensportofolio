<script>
import Navbar from "~~/components/Navbar.vue";
import left from "@/components/global/left.svg";
export default {
  name: "more",
  components: { Navbar, left },
  data() {
    return { from: "about" };
  },
  methods: {
    before() {
      this.$router.push({ name: "about" });
    },
  },
};
</script>
<template>
  <div class="h-screen grid grid-rows-6">
    <div>
      <Navbar :from="from" />
    </div>
    <div class="grid grid-cols-12 row-start-2 row-span-4">
      <div class="grid content-center">
        <div class="flex justify-center">
          <div>
            <!-- <nuxt-icon name="right" filled /> -->
            <button @click="before">
              <left class="w-7 h-10" />
            </button>
          </div>
        </div>
      </div>
      <div class="col-start-2 col-span-3 font-medium">
        <div
          class="ml-[70px] poirto text-[100px] leading-[130px] border-b-4 border-black"
        >
          Fun <br />
          Fact <br />
          About <br />
          Me
        </div>
        <div></div>
      </div>
      <div class="col-start-6 col-span-6 grid content-center text-[21px]">
        <div class="flex flex-col jakarta gap-[30px]">
          <div>I’m just a human..</div>
          <div>
            Born in Jambi, 30 November 1997 and currently based in Banten,
            Indonesia. Alumna of Universitas Advent Indonesia with majoring in
            Informatics Engineering, Batch 2020.
          </div>
          <div>
            I am a social butterfly, easy going personality and adaptable.
          </div>
          <div>
            a Basketballers, PUBGM player, a KPop fans, a beach lover, a fashion
            connoisseur and Movie addict.
          </div>
          <div>
            Dream to spend the rest of my life in the village as a farmer ..
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
