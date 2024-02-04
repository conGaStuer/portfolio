<template>
  <main class="w-screen h-screen yes overflow-x-hidden">
    <nav
      class="w-full h-20 text-white uppercase flex justify-between items-center font-bold text-3xl p-12 relative top-4"
    >
      <Transition appear @enter="logo">
        <div class="relative right-36">TXK</div>
      </Transition>

      <div class="tracking-widest">...</div>
    </nav>
    <section class="w-screen h-screen">
      <Transition appear @enter="intro" @before-enter="introBefore">
        <div
          class="w-4/6 h-80 mx-auto relative top-20 right-24 text-white flex flex-col justify-between text-8xl"
        >
          <span key="lorem1" class="stroke-text text-transparent hover-text"
            >Tra Xuan</span
          >
          <span key="lorem2" class="stroke-text">Stuer</span>
          <span key="lorem3" class="stroke-text text-transparent hover-text"
            >Front-end Dev</span
          >
        </div>
      </Transition>

      <Transition appear @enter="rotate">
        <img
          src="../assets/circlee.png"
          alt=""
          width="300px"
          class="relative bottom-48 float-right right-80"
        />
      </Transition>
      <Transition appear @enter="blog" @before-enter="blogBefore">
        <span
          class="text-white text-6xl tracking-widest rotate-90 float-right relative left-72 bottom-36"
          >BLOG
        </span>
      </Transition>
      <transition-group
        appear
        @before-enter="socialBefore"
        @enter="social"
        tag="div"
        class="flex justify-between items-center w-1/4"
      >
        <div
          v-for="(social, index) in socials"
          :key="social.id"
          :data-index="index"
          class="relative left-12 top-52 text-2xl mr-8"
        >
          <span class="text-white inline">
            <a :href="social.link" target="_blank">{{ social.social }}</a>
          </span>
        </div>
      </transition-group>
    </section>
    <section class="w-full h-screen bg-slate-100">
      <div
        class="w-full h-40 m-auto pl-10 pr-10 flex justify-between items-center border-t-2 border-b-2 border-gray-300"
      >
        <span class="text-4xl text-gray-600 font-bold">/02</span>
        <span class="text-8xl text-white font-extrabold hover:text-gray-700"
          >Works</span
        >
      </div>
    </section>
  </main>
</template>

<script>
import { gsap } from "gsap";
import { ref } from "vue";

export default {
  setup() {
    const logo = (el) => {
      gsap.to(el, {
        duration: 0.4,
        right: 0,

        ease: "sine.in",
      });
    };
    const rotate = (el) => {
      gsap.to(el, {
        rotate: 360,
        duration: 20,
        repeat: -1,

        ease: "sine.in",
      });
    };
    const introBefore = (el) => {
      el.style.transform = "translateY(150px)";
      el.style.opacity = 0;
    };
    const intro = (el) => {
      gsap.to(el, {
        y: 0,
        opacity: 1,
        duration: 0.5,

        ease: "power1.in",
      });
    };
    const blogBefore = (el) => {
      gsap.to(el, {
        yPercent: 100,
        opacity: 1,
        duration: 0.4,
        delay: 0.5,
        ease: "power1.in",
      });
    };
    const blog = (el) => {
      el.style.yPercent = "50%";
      el.style.opacity = 0;
    };
    const socials = ref([
      {
        id: 1,
        social: "facebook",
        link: "https://www.facebook.com/tra.moon.10",
      },
      {
        id: 2,
        social: "instagram",
        link: "https://www.instagram.com/jujiminnnn/",
      },
      {
        id: 1,
        social: "github",
        link: "https://github.com/conGaStuer",
      },
    ]);
    const socialBefore = (el) => {
      el.style.transform = "translateY(50px)";
      el.style.opacity = 0;
    };
    const social = (el) => {
      gsap.to(el, {
        transform: "translateY(0px)",
        duration: 0.5,
        ease: "power1.in",
        opacity: 1,
        delay: el.dataset.index * 0.2,
      });
    };
    return {
      logo,
      rotate,
      intro,
      introBefore,
      blog,
      blogBefore,
      socials,
      socialBefore,
      social,
    };
  },
};
</script>

<style></style>
