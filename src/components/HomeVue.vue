<template>
  <main class="w-full h-screen no">
    <div
      class="text-black text-lg w-full h-full bg-gray-50 flex justify-center items-center fixed z-50"
      v-if="mount"
    >
      <transition-group
        appear
        @before-enter="letterBefore"
        @enter="letter"
        tag="div"
      >
        <span
          v-for="(letter, index) in letters"
          :data-index="index"
          :key="letter.id"
          class="mr-4"
        >
          <span class="text-4xl">{{ letter.let }}</span>
        </span>
      </transition-group>
    </div>
    <nav
      class="w-full h-20 text-white uppercase flex justify-between items-center font-bold text-3xl p-12 relative top-4"
    >
      <Transition appear @enter="logo">
        <div class="relative right-36">TXK</div>
      </Transition>

      <div class="tracking-widest">...</div>
    </nav>

    <section class="w-full h-screen">
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
    <section class="w-full">
      <div
        class="w-full h-40 m-auto pl-10 pr-10 flex justify-between items-center border-t-2 border-b-2 border-t-hidden border-b-hidden"
      >
        <span class="text-4xl text-hidden font-bold">/02</span>
        <Transition appear @before-enter="workBefore" @enter="work">
          <span
            class="text-8xl text-white font-extrabold hover:text-textHidden abc"
            >Works</span
          >
        </Transition>
      </div>
    </section>
    <div class="w-full h-2vh flex justify-center items-center">
      <div class="w-4/5 h-95 flex justify-between items-center">
        <div
          class="w-42 h-90 relative bottom-20 flex flex-col justify-between items-center"
        >
          <div class="image">
            <span class="font-bold text-4xl trans -mr-16 text-textHidden"
              >/001</span
            >

            <div class="w-90 full wrapper1">
              <span class="mb-5 text-textHidden relative z-10">
                <a href="https://haerinshop.netlify.app/" target="_blank">
                  Demo</a
                >
              </span>
            </div>
          </div>

          <div class="image">
            <span class="font-bold text-4xl trans -mr-16 text-textHidden"
              >/002</span
            >
            <div class="w-90 full wrapper2">
              <span class="mb-5 text-textHidden relative z-10">
                <a
                  href="https://doanchuyennganh-vuejs-php.netlify.app/"
                  target="_blank"
                >
                  Demo</a
                >
              </span>
            </div>
          </div>
        </div>
        <div
          class="w-42 h-90 relative top-20 flex flex-col justify-between items-center"
        >
          <div class="image">
            <span class="font-bold text-4xl trans -mr-16 text-textHidden"
              >/003</span
            >
            <div class="w-90 full wrapper3">
              <span class="mb-5 text-textHidden relative z-10">
                <a
                  href="https://newjeans-music-app.netlify.app/"
                  target="_blank"
                >
                  Demo</a
                >
              </span>
            </div>
          </div>
          <div class="image">
            <span class="font-bold text-4xl trans -mr-16 text-textHidden"
              >/004</span
            >
            <div class="w-90 full wrapper4">
              <span class="mb-5 text-textHidden relative z-10">
                <a href="https://rehtaew-app.netlify.app/" target="_blank">
                  Demo</a
                >
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section class="w-full h-auto">
      <div
        class="w-full h-80 m-auto pl-10 pr-10 flex items-center justify-end border-t-2 border-b-2 border-t-hidden border-b-hidden"
      >
        <Transition appear @before-enter="viewBefore" @enter="view">
          <div class="float-right text-end tt pr-8">
            <span key="lorem1x" class="stroke-text text-7xl"
              >View all work
            </span>
            <span key="lorem2x" class="text-white text-7xl"
              >\View all work\</span
            >

            <span key="lorem3x" class="stroke-text text-7xl"
              >View all work</span
            >
          </div>
        </Transition>
      </div>
      <div
        class="w-full h-40 m-auto pl-10 pr-10 flex justify-between items-center border-t-2 border-b-2 border-t-hidden border-b-hidden"
      >
        <span class="text-4xl text-hidden font-bold">/03</span>
        <Transition appear @before-enter="workBefore" @enter="work">
          <span
            class="text-8xl text-white font-extrabold hover:text-textHidden abc"
            >About</span
          >
        </Transition>
      </div>
    </section>
    <section class="w-full h-full flex justify-center items-center">
      <div class="w-90 h-70 text-textHidden flex justify-between items-center">
        <Transition appear @before-enter="workBefore" @enter="work">
          <div
            class="person w-47 h-full bg-slate-400"
            :style="{
              backgroundImage:
                'url(' +
                'https://images2.thanhnien.vn/528068263637045248/2023/11/13/winteraespaxinhdep6-16999183398611277680095.jpeg' +
                ')',
              backgroundSize: 'cover',
            }"
          ></div>
        </Transition>

        <div class="w-47 h-full">
          <Transition appear @before-enter="workBefore" @enter="work">
            <span class="text-white text-6xl relative right-52 top-12">
              I'm TraXuan
            </span>
          </Transition>
          <Transition appear @before-enter="viewBefore" @enter="view">
            <div class="relative top-20 text-lg">
              I am engaged in website layout, from landing pages to online
              stores, in compliance with all modern standards. I carry out the
              work exactly on time.
              <br />
              <br />
              I am also engaged in the development of turnkey online stores. The
              project takes into account the opinion of the customer, since the
              goal is to create not only an ideal website, but also a satisfied
              client.
            </div>
          </Transition>
        </div>
      </div>
    </section>
    <div
      class="w-full h-96 m-auto pl-10 pr-10 flex items-center justify-end border-t-2 border-b-2 border-t-hidden border-b-hidden"
    >
      <Transition appear @before-enter="viewBefore" @enter="view">
        <div class="float-right text-end tt pr-8">
          <div key="lorem1x" class="stroke-text text-8xl">Technology</div>
          <div key="lorem2x" class="text-white text-8xl">Stack</div>
        </div>
      </Transition>
    </div>

    <Transition appear>
      <section class="w-90 h-3/2vh flex justify-center items-center m-auto">
        <transition-group
          appear
          @before-enter="socialBefore"
          @enter="social"
          tag="div"
          class="w-90 h-90 grid grid-cols-2 grid-rows-3 gap-32"
        >
          <div
            v-for="(skill, index) in skills"
            :key="skill.id"
            :data-index="index"
            class="w-full h-72 bg-black border-t-2 border-t-white flex justify-around items-center p-3 hover:bg-white transition duration-500 hover:text-black"
          >
            <div class="text-white w-2/6 flex justify-center items-center mr-2">
              <img :src="skill.img" alt="" width="70px" height="200px" />
            </div>
            <div class="w-4/5">
              <div class="text-textHidden mb-2">{{ skill.number }}</div>
              <div class="text-white mb-2">
                {{ skill.skill }}
              </div>
              <div class="text-textHidden">{{ skill.descrip }}</div>
            </div>
          </div>
        </transition-group>
      </section>
    </Transition>
    <div
      class="w-full h-80 mr-auto ml-auto mt-20 pl-10 pr-10 flex items-center justify-end border-t-2 border-b-2 border-t-hidden border-b-hidden"
    >
      <Transition appear @before-enter="viewBefore" @enter="view">
        <div class="float-right text-end tt pr-8">
          <div key="lorem1x" class="stroke-text text-8xl">Steps Create</div>
          <div key="lorem2x" class="text-white text-8xl">Project</div>
        </div>
      </Transition>
    </div>
    <section class="w-full h-auto pt-28 pb-28 pl-10 pr-10">
      <div v-for="(item, index) in items" :key="index" class="mb-12">
        <span class="text-white text-lg">{{ item.number }}</span>
        <span class="text-6xl stroke-text relative top-10 left-20">{{
          item.text
        }}</span>
        <button
          @click="toggleCollapse(index)"
          class="text-white text-6xl float-right relative top-10 right-8"
        >
          {{ isOpen ? "-" : "+" }}
        </button>
        <div
          v-show="item.isOpen"
          class="text-white text-2xl relative top-28 pb-28 transition duration-500"
        >
          <!-- Collapsible content goes here -->
          <p>Nah nah nah nah</p>
        </div>
      </div>
    </section>
    <div
      class="w-full h-40 m-auto pl-10 pr-10 flex justify-between items-center border-t-2 border-b-2 border-t-hidden border-b-hidden"
    >
      <span class="text-4xl text-hidden font-bold">/04</span>
      <Transition appear @before-enter="workBefore" @enter="work">
        <span
          class="text-8xl text-white font-extrabold hover:text-textHidden abc"
          >Contact</span
        >
      </Transition>
    </div>
    <section class="w-full h-75 flex items-center justify-center">
      <div class="w-90 h-90">
        <input type="text" name="" id="" placeholder="Name" class="input" />
        <input type="text" name="" id="" placeholder="Email" class="input" />
        <textarea
          type="text"
          name=""
          id=""
          placeholder="Message"
          class="h-48 w-full block bg-black text-white placeholder:text-white"
        ></textarea>
        <div>
          <span class="stroke-text text-6xl">Get in touch</span> <br />
          <span class="text-4xl text-white">khuongtranxuan9@gmail.com</span>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { gsap } from "gsap";
import { ref, onMounted, onBeforeMount } from "vue";
import hoverEffect from "hover-effect";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export default {
  setup() {
    const mount = ref(true);
    const overflowStyle = ref("visible");
    gsap.registerPlugin(ScrollTrigger);

    onMounted(() => {
      console.log("on mount");
      setTimeout(() => {
        mount.value = false;
      }, 5500);
      setTimeout(() => {
        overflowStyle.value = "hidden";
      }, 6000);
      const liquid1 = new hoverEffect({
        parent: document.querySelector(".wrapper1"),
        intensity: 0.5,
        image1:
          "https://live.staticflickr.com/65535/53544381861_9e6ac1c7ed.jpg",
        image2:
          "https://live.staticflickr.com/65535/53543511012_b366ba9db1.jpg",
        displacementImage:
          "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f19dc2f7-eebb-4bb0-9e32-f77d0b9301a1/dchk6qb-e81c8d02-e299-424d-a6b0-4dd25d911443.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2YxOWRjMmY3LWVlYmItNGJiMC05ZTMyLWY3N2QwYjkzMDFhMVwvZGNoazZxYi1lODFjOGQwMi1lMjk5LTQyNGQtYTZiMC00ZGQyNWQ5MTE0NDMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.vLtLaWoKAh3a_jKuDAIGp5oXaZsCMP9LzhOCTv5Z_TE",
      });
      const liquid2 = new hoverEffect({
        parent: document.querySelector(".wrapper2"),
        intensity: 0.5,
        image1:
          "https://live.staticflickr.com/65535/53544708919_334dde6c19.jpg",
        image2:
          "https://live.staticflickr.com/65535/53543511042_52e2592ebd.jpg",
        displacementImage:
          "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f19dc2f7-eebb-4bb0-9e32-f77d0b9301a1/dchk6qb-e81c8d02-e299-424d-a6b0-4dd25d911443.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2YxOWRjMmY3LWVlYmItNGJiMC05ZTMyLWY3N2QwYjkzMDFhMVwvZGNoazZxYi1lODFjOGQwMi1lMjk5LTQyNGQtYTZiMC00ZGQyNWQ5MTE0NDMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.vLtLaWoKAh3a_jKuDAIGp5oXaZsCMP9LzhOCTv5Z_TE",
      });
      const liquid3 = new hoverEffect({
        parent: document.querySelector(".wrapper3"),
        intensity: 0.5,

        image1:
          "https://live.staticflickr.com/65535/53543511052_3e5f837051_n.jpg",
        image2:
          "https://live.staticflickr.com/65535/53544816430_dc89e4e3fd_n.jpg",
        displacementImage:
          "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f19dc2f7-eebb-4bb0-9e32-f77d0b9301a1/dchk6qb-e81c8d02-e299-424d-a6b0-4dd25d911443.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2YxOWRjMmY3LWVlYmItNGJiMC05ZTMyLWY3N2QwYjkzMDFhMVwvZGNoazZxYi1lODFjOGQwMi1lMjk5LTQyNGQtYTZiMC00ZGQyNWQ5MTE0NDMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.vLtLaWoKAh3a_jKuDAIGp5oXaZsCMP9LzhOCTv5Z_TE",
      });
      const liquid4 = new hoverEffect({
        parent: document.querySelector(".wrapper4"),
        intensity: 0.5,
        image1:
          "https://live.staticflickr.com/65535/53544381791_cb87e91a30_n.jpg",
        image2:
          "https://live.staticflickr.com/65535/53544816425_448b8d6086_n.jpg",
        displacementImage:
          "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f19dc2f7-eebb-4bb0-9e32-f77d0b9301a1/dchk6qb-e81c8d02-e299-424d-a6b0-4dd25d911443.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2YxOWRjMmY3LWVlYmItNGJiMC05ZTMyLWY3N2QwYjkzMDFhMVwvZGNoazZxYi1lODFjOGQwMi1lMjk5LTQyNGQtYTZiMC00ZGQyNWQ5MTE0NDMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.vLtLaWoKAh3a_jKuDAIGp5oXaZsCMP9LzhOCTv5Z_TE",
      });
      // const liquid5 = new hoverEffect({
      //   parent: document.querySelector(".person"),
      //   intensity: 0.5,
      //   image1:
      //     "https://live.staticflickr.com/65535/53545423390_d439b3490f_n.jpg",
      //   image2:
      //     "https://live.staticflickr.com/65535/53545423395_91b1cb5e75_n.jpg",
      //   displacementImage:
      //     "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f19dc2f7-eebb-4bb0-9e32-f77d0b9301a1/dchk6qb-e81c8d02-e299-424d-a6b0-4dd25d911443.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2YxOWRjMmY3LWVlYmItNGJiMC05ZTMyLWY3N2QwYjkzMDFhMVwvZGNoazZxYi1lODFjOGQwMi1lMjk5LTQyNGQtYTZiMC00ZGQyNWQ5MTE0NDMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.vLtLaWoKAh3a_jKuDAIGp5oXaZsCMP9LzhOCTv5Z_TE",
      // });
    });
    const logo = (el) => {
      gsap.to(el, {
        duration: 0.4,
        right: 0,
        delay: 6,
        ease: "sine.in",
      });
    };
    const rotate = (el) => {
      gsap.to(el, {
        rotate: 360,
        duration: 20,
        repeat: -1,
        delay: 6,
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
        delay: 6,
        ease: "power1.in",
      });
    };
    const blogBefore = (el) => {
      gsap.to(el, {
        yPercent: 100,
        opacity: 1,
        duration: 0.4,
        delay: 6,
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
        ease: "bounce.in",
        opacity: 1,
        delay: 6 + el.dataset.index * 0.3,
      });
    };
    const letterBefore = (el) => {
      el.style.transform = "translateY(50px)";
      el.style.opacity = 0;
    };
    const letter = (el) => {
      gsap.to(el, {
        transform: "translateY(0px)",
        duration: 0.5,
        ease: "bounce.in",
        opacity: 1,
        delay: el.dataset.index * 0.3,
      });
    };
    const workBefore = (el) => {
      el.style.transform = "translateY(-150px)";
      el.style.opacity = 0;
    };
    const work = (el) => {
      gsap.to(el, {
        y: 0,
        opacity: 1,
        ease: "elastic.in",
        duration: 0.5,
        scrollTrigger: {
          trigger: el,
          start: "top 30%",
          end: "top 50%",
          scrub: 1,
        },
      });
    };
    const viewBefore = (el) => {
      el.style.transform = "translateX(-100px)";
      el.style.opacity = 0;
    };
    const view = (el) => {
      gsap.to(el, {
        x: 0,
        duration: 0.5,
        ease: "sine.out",
        opacity: 1,
        scrollTrigger: {
          trigger: el,
          start: "top center",
          end: "top 50%",
          scrub: 2,
        },
      });
    };
    const skills = ref([
      {
        id: 1,
        number: "/001",
        skill: "HTML5",
        img: "https://folio-nd.approvecode.com/img/stack/st1.png",
        descrip:
          "Proficient in structuring web pages using HTML to create well-organized and semantically meaningful content.",
      },
      {
        id: 2,
        number: "/002",
        img: "https://folio-nd.approvecode.com/img/stack/st2.png",
        skill: "CSS3 & SCSS",
        descrip:
          "Skilled in styling web pages with CSS to enhance visual presentation and ensure cross-browser compatibility.",
      },
      {
        id: 3,
        number: "/003",
        img: "https://folio-nd.approvecode.com/img/stack/st3.png",

        skill: "JavaScript",
        descrip:
          "Experienced in building dynamic and interactive web applications using JavaScript to add functionality and interactivity.",
      },
      {
        id: 4,
        number: "/004",
        img: "https://folio-nd.approvecode.com/img/stack/st4.png",

        skill: "VueJS",
        descrip:
          "Proficient in developing modern web applications with Vue.js, leveraging its reactivity and component-based architecture.",
      },
      {
        id: 5,
        number: "/005",
        img: "https://folio-nd.approvecode.com/img/stack/st5.png",

        skill: "Tailwind CSS",
        descrip:
          "Familiar with Tailwind CSS utility-first framework, enabling rapid UI development with pre-designed components and styles.",
      },
      {
        id: 6,
        number: "/006",
        img: "https://folio-nd.approvecode.com/img/stack/st6.png",

        skill: "PHP, MySQL",
        descrip:
          "Skilled in backend development with PHP and MySQL, capable of building dynamic websites and web applications.",
      },
    ]);
    // const change = (el) => {
    //   gsap.to(el, {
    //     scrollTrigger: {
    //       trigger: el,
    //       start: "top top",
    //       scrub: 4,
    //       toggleClass: "change",
    //       markers: true,
    //     },

    //     ease: "power4.out",
    //     duration: 0.5,
    //   });
    // };
    const items = ref([
      { isOpen: false, number: "/001", text: "Speak" },
      { isOpen: false, number: "/002", text: "Create Design" },
      { isOpen: false, number: "/003", text: "Create Site" },
      { isOpen: false, number: "/004", text: "Testing" },
    ]);
    const toggleCollapse = (index) => {
      items.value[index].isOpen = !items.value[index].isOpen;
    };
    const letters = ref([
      { let: "L", id: 1 },
      { let: "o", id: 2 },
      { let: "a", id: 3 },
      { let: "d", id: 4 },
      { let: "i", id: 5 },
      { let: "n", id: 6 },
      { let: "g", id: 7 },
      { let: "P", id: 8 },
      { let: "a", id: 9 },
      { let: "g", id: 10 },
      { let: "e", id: 11 },
      { let: ".", id: 12 },
      { let: ".", id: 13 },
      { let: ".", id: 14 },
      { let: ".", id: 15 },
      { let: ".", id: 16 },
    ]);
    return {
      overflowStyle,
      letterBefore,
      letter,
      letters,
      mount,
      items,
      toggleCollapse,
      logo,
      rotate,
      intro,
      introBefore,
      blog,
      blogBefore,
      socials,
      socialBefore,
      social,
      workBefore,
      work,
      viewBefore,
      view,
      skills,
    };
  },
};
</script>

<style></style>
