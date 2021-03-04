<template>
  <router-view v-slot="slotProps">
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
  <!-- <div class="container">
    <div class="block" :class="{ animate: animatedBlock }"></div>
    <button @click="animateBlock">Animate</button>
  </div>

  <div class="container">
    <list-data></list-data>
  </div>

  <div class="container">
    <transition
      :css="false"
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
      @enter-canceled="enterCancel"
      @leave-canceled="leaveCancel"
    >
      <p v-if="paragraphIsVisible">This is only sometimes visible...</p>
    </transition>
    <button @click="toggleParagraph">Toggle paragraph</button>
  </div>

  <div class="container">
    <transition name="fade-button" mode="out-in">
      <button @click="showUsers" v-if="!usersAreVisible">Show Users</button>
      <button @click="hideUsers" v-else>Hide Users</button>
    </transition>
  </div>

  <base-modal @close="hideDialog" :open="dialogIsVisible">
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>

  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div> -->
</template>  

<script>
// import ListData from './components/ListData.vue';
export default {
  // components: { ListData },
  data() {
    return {
      animatedBlock: false,
      dialogIsVisible: false,
      paragraphIsVisible: false,
      usersAreVisible: false,
      enterTransitionInterval: null,
      leaveTransitionInterval: null,
    };
  },
  methods: {
    enterCancel() {
      clearInterval(this.enterTransitionInterval);
    },
    leaveCancel() {
      clearInterval(this.leaveTransitionInterval);
    },
    beforeEnter(el) {
      console.log('Before enter from transititon component.');
      console.log(el);
      el.style.opacity = 0;
    },
    enter(el, done) {
      this.leaveCancel();
      console.log('On enter from transition component.');
      console.log(el);

      let round = 1;
      this.enterTransitionInterval = setInterval(() => {
        el.style.opacity = round * 0.01;
        round++;
        if (round > 100) {
          clearInterval(this.enterTransitionInterval);
          done();
        }
      }, 20);
    },
    afterEnter(el) {
      console.log('After enter from transition component.');
      console.log(el);
    },
    beforeLeave(el) {
      console.log('Before leave from transition component.');
      console.log(el);

      el.style.opacity = 1;
    },
    leave(el, done) {
      this.enterCancel();
      console.log('On leave from transition component.');
      console.log(el);

      let round = 1;
      this.leaveTransitionInterval = setInterval(() => {
        el.style.opacity = 1 - round * 0.01;
        round++;
        if (round > 100) {
          clearInterval(this.leaveTransitionInterval);
          done();
        }
      }, 20);
    },
    afterLeave(el) {
      console.log('After leave from transition component.');
      console.log(el);
    },
    animateBlock() {
      this.animatedBlock = true;
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    toggleParagraph() {
      this.paragraphIsVisible = !this.paragraphIsVisible;
    },
    showUsers() {
      this.usersAreVisible = true;
    },
    hideUsers() {
      this.usersAreVisible = false;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}

.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /* transition: transform 0.3s ease-out; */
}

.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}

.animate {
  /* transform: translateX(-150px); */
  animation: slide-scale 0.5s ease-out forwards;
}

.route-enter-from,
.route-enter-active {
  animation: trans-page-opening 1s ease-out;
}

.route-leave-from,
.route-leave-active {
  animation: trans-page-closing 0.5s ease-in;
}

.fade-button-enter-from,
.fade-button-leave-to {
  opacity: 0;
}
.fade-button-enter-active {
  transition: opacity 0.3s ease-out;
}
.fade-button-leave-active {
  transition: opacity 0.3s ease-in;
}

.fade-button-enter-to,
.fade-button-leave-from {
  opacity: 1;
}

@keyframes slide-scale {
  0% {
    transform: translateX(0) scale(1);
  }

  70% {
    transform: translateX(-120px) scale(1.2);
  }

  100% {
    transform: translateX(-150px) scale(1);
  }
}

@keyframes trans-page-opening {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes trans-page-closing {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}
</style>