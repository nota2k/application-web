<script setup>
import { ref, onMounted } from 'vue';
import TheUsers from './TheUsers.vue';
import TheFilter from './TheFilter.vue';
import { fetchUsers, allUsers } from '../data/data.js';

let users = ref([]);

const updateUsers = async () => {
  try {
			users.value = allUsers.value
  } catch (error) {
    console.error("Erreur lors de la récupération des utilisateurs:", error);
  }
};

</script>

<template>
  <main>
    <TheFilter @fetch-users="updateUsers"></TheFilter>
    <table id="tbl-users">
      <thead>
        <tr>
          <th>Photo</th>
          <th class="name">Nom<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="lucide lucide-chevron-down">
              <path d="m6 9 6 6 6-6" />
            </svg></th>
          <th class="gender">Genre<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="lucide lucide-chevron-down">
              <path d="m6 9 6 6 6-6" />
            </svg></th>
          <th class="age">Age<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="lucide lucide-chevron-down">
              <path d="m6 9 6 6 6-6" />
            </svg></th>
          <th class="mail">Email</th>
          <th class="tel">Tel</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.email">
          <TheUsers 
            :thumbnail="user.picture.thumbnail" 
            :firstname="user.name.first" 
            :lastname="user.name.last"
            :gender="user.gender" 
            :email="user.email" 
            :age="user.dob.age" 
            :phone="user.phone">
          </TheUsers>
        </tr>
      </tbody>
    </table>
  </main>
</template>

<style scoped>
    thead th {
      cursor: pointer;
    }
  
    thead th:hover {
      text-decoration: underline;
    }
  
    thead th svg {
      transition: 0.2s ease-in-out all;
    }
  
    thead th svg.rotate {
      rotate: 180deg;
    }

</style>