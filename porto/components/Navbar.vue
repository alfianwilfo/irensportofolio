<script>
export default {
  name: "Navbar",
  props: ["from"],
  created() {
    console.log(this.from);
  },
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
    <div class="grid content-center"><button>Resume</button></div>
  </div>

  <div v-else class="h-[50px] flex flex-row text-white gap-[30px] ml-[40px]">
    <div class="grid content-center"><button>Home</button></div>
    <div class="grid content-center"><button>About</button></div>
    <div class="grid content-center"><button>Work</button></div>
    <div class="grid content-center"><button>Resume</button></div>
  </div>
</template>
