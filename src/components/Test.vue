<style scoped>

</style>

<script>
export default {
  name: 'test',
  props: {
    msg: {
      type: String,
      default: 'Default',
    },
  },
  data() {
    return {
      title: 'Hello World',
      user: {
        first_name: 'John',
        last_name: 'Doe',
      },
      showName: false,
      items: [
        { title: 'Item1' },
        { title: 'Item2' },
        { title: 'Item3' },
        { title: 'Item4' },
        { title: 'Item5' },
      ],
    };
  },
  methods: {
    greet() {
      alert('Hello!');
    },
    pressKey(e) {
      console.log(e.target.value);
    },
    enterHit() {
      console.log('You hit enter');
    },
  },
  computed: {
    fullName() {
      return `${this.user.first_name} ${this.user.last_name}`;
    },
  },
};
</script>

<template>
  <div class="test">
    <h1>{{title}}</h1>
    <input type="text" v-model="title"> <br>
    <p v-if="showName"> {{user.first_name}} </p>
    <p v-else>Nobody</p>
    <ul>
      <li v-for="(item, index) in items" :key="index">
        {{ item.title }}
      </li>
    </ul>
    <button @click="greet">Say Greet</button> <br>
    <input type="text" @keyup="pressKey($event)" @keyup.enter="enterHit">
    <hr>
    <label for="first">First name</label>
    <input type="text" v-model="user.first_name">
    <br>
    <label for="last">Last name</label>
    <input type="text" v-model="user.last_name">
    <h3>{{ fullName }} </h3>
    <h2>{{ msg }}</h2>
  </div>
</template>



