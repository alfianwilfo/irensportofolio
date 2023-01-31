<script>
import dwcklt from "@/assets/icons/dwcklt.svg";
import dwpt from "@/assets/icons/dwpt.svg";
export default {
  name: "Navbar",
  props: ["from"],
  created() {
    console.log(this.from, "<");
  },
  methods: {
    resume() {
      if (this.dd === false) {
        this.dd = true;
      } else {
        this.dd = false;
      }
    },
  },
  data() {
    return {
      dd: false,
    };
  },
  components: { dwcklt, dwpt },
};
</script>

<template>
  <div
    v-if="from === 'about'"
    class="h-[50px] flex flex-row text-black gap-[30px] ml-[40px]"
  >
    <div class="grid content-center"><button>Home</button></div>
    <div class="grid content-center"><button>About</button></div>
    <div class="grid content-center"><button>Work</button></div>
    <div class="grid content-center static" @click="resume">
      <div>
        <button>Resume</button>
      </div>
      <div
        class="absolute top-10 bg-[#795548] text-white italic p-[20px] flex justify-center flex-col"
        v-if="this.dd === true"
      >
        <div class="flex justify-center">
          <div>
            <dwpt class="w-4 h-4" />
          </div>
        </div>
        <div>Download resume</div>
      </div>
    </div>
  </div>

  <div v-else class="h-[50px] flex flex-row text-white gap-[30px] ml-[40px]">
    <div class="grid content-center"><button>Home</button></div>
    <div class="grid content-center"><button>About</button></div>
    <div class="grid content-center"><button>Work</button></div>
    <div class="grid content-center static" @click="resume">
      <div>
        <button>Resume</button>
      </div>
      <div
        class="absolute top-10 bg-white text-[#795548] italic p-[20px] flex justify-center flex-col"
        v-if="this.dd === true"
      >
        <div class="flex justify-center">
          <div>
            <dwcklt class="w-4 h-4" />
          </div>
        </div>
        <div>Download resume</div>
      </div>
    </div>
  </div>
</template>
