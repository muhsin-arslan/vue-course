<template>
  <section class="container">
    <!-- <h2>{{{{ user.firstName }} {{ user.lastName }}}}</h2>
    <h3>{{ user.age }}</h3>
    <button @click="increaseAge">Increase Age</button> -->
    <h2>{{ fullName }}</h2>
    <div>
      <input type="text" placeholder="First Name" v-model="firstName" />
      <input type="text" placeholder="Last Name" v-model="lastName" />
    </div>
  </section>
</template>

<script>
import { ref, computed, watch } from 'vue';

export default {
  setup() {
    const firstName = ref('');
    const lastName = ref('');

    const fullName = computed(function () {
      return `${firstName.value} ${lastName.value}`;
    });

    watch(fullName, function (newValue, oldValue) {
      console.log(`New: ${newValue} ----- Old: ${oldValue}`);
    });

    // const userName = ref('Muhsin');
    // const age = ref(28);
    // setTimeout(function () {
    //   (userName.value = 'Mhs'), (age.value = 29);
    // }, 2500);

    // const user = reactive({
    //   firstName: 'Michael',
    //   lastName: 'Jordan',
    //   age: 58,
    // });

    // setTimeout(function () {
    //   user.firstName = 'James';
    //   user.lastName = 'Harden';
    //   user.age = 31;
    // }, 2500);

    // function increaseAge() {
    //   user.age += 1;
    // }

    return { firstName, lastName, fullName };
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

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>