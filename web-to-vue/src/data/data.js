import { ref } from 'vue';

let allUsers = ref([]);
let filteredUsers = ref([]);
let filteredByAgeUsers = ref([]);
let filteredByGenderUsers = ref([]);

async function fetchUsers() {
     try {
          const response = await fetch('https://randomuser.me/api/?results=20');
          const { results } = await response.json();
          allUsers.value = results;
          filteredByGenderUsers.value = results;
          filteredByAgeUsers.value = results;
          filteredUsers.value = results;
     } catch (error) {
          console.error('Error fetching users:', error);
     }
}

fetchUsers();

export { allUsers, fetchUsers };