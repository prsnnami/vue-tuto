<script>
import axios from 'axios';

export default {
  name: 'users',
  data() {
    return {
      newUser: {},
      users: [],
    };
  },
  methods: {
    deleteUser(index) {
      this.users.splice(index, 1);
    },
    addUser() {
      this.users.push({
        name: this.newUser.name,
        email: this.newUser.email,
        contacted: false,
      });
      this.newUser = {};
    },
  },
  created() {
    axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
      this.users = res.data;
    });
  },
};
</script>

<template>
  <div class="users">
    <h1>Users</h1>
    <form @submit.prevent="addUser">
      <input type="text" v-model="newUser.name" placeholder="Name"> <br>
      <input type="text" v-model="newUser.email" placeholder="Email"> <br>
      <button type="submit">Submit</button>
    </form>
    <ul>
      <li v-for="(user, index) in users" :key="index">
        <input type="checkbox" class="toggle" v-model="user.contacted" name="toggle" id="">
        <span :class="{contacted: user.contacted}">
          {{user.name}} : {{user.email}} <button @click="deleteUser(index)">X</button>
        </span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
  .contacted{
    text-decoration: line-through;
  }
</style>


