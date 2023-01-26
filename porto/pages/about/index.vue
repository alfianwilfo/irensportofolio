<script>
import Navbar from "~~/components/Navbar.vue";
import right from "@/components/global/right.svg";
export default {
  name: "about",
  components: { Navbar, right },
  data() {
    return {
      from: "about",
    };
  },
  methods: {
    next() {
      this.$router.push({ name: "about-more" });
    },
  },
};
</script>

<template>
  <div class="h-screen grid grid-rows-6">
    <div>
      <Navbar :from="from" />
    </div>
    <div class="grid grid-cols-12 row-start-3">
      <div class="col-start-2 col-end-6">
        <div class="text-[110px] poirto">
          Hi,<br />
          I'm Irene.
        </div>
      </div>
      <div class="jakarta col-start-6 col-end-12">
        <div
          class="flex flex-col gap-y-[50px] text-[18px] font-medium tracking-wide"
        >
          <div>
            I am a Digital Enthusiast based in Banten, Indonesia. <br />
            A Forever learner, Full time IT Project Manager and Part time UI-UX.
          </div>
          <div>
            I am a Professional IT Project Manager with experience in leading
            successful
            <br />
            projects through project management process such as initiation,
            planning, <br />
            execution, monitoring, and project close.
          </div>
          <div>
            Work based on research and data to create helpful and useful
            product. <br />
            Technology for Humanity...
          </div>
          <div class="flex flex-row gap-x-[30px] text-[16px]">
            <div class="flex flex-row">
              <div class="grid content-center">
                <div>
                  <nuxt-icon name="point" filled />
                </div>
              </div>
              <div>Serang, Indonesia</div>
            </div>
            <div class="flex flex-row">
              <div class="grid content-center">
                <div>
                  <nuxt-icon name="email" filled />
                </div>
              </div>
              <div class="ml-1">irennesiregar13@gmail.com</div>
            </div>
            <div class="flex flex-row">
              <div class="grid content-center">
                <div>
                  <nuxt-icon name="linkedind" filled />
                </div>
              </div>
              <div class="ml-1">
                <a
                  class="hover:underline"
                  href="linkedin.com/in/romiwitaireneklarita"
                  >linkedin.com/in/romiwitaireneklarita</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="grid content-center">
        <div class="flex justify-center">
          <div>
            <!-- <nuxt-icon name="right" filled /> -->
            <right class="w-7 h-10" @click="next" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
