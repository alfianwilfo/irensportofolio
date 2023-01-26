<script>
import Navbar from "~~/components/Navbar.vue";
export default {
  name: "about",
  components: { Navbar },
  data() {
    return {
      from: "about",
    };
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
        <div class="text-[100px] poirto">
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
          <div>serang</div>
        </div>
      </div>
    </div>
  </div>
</template>
