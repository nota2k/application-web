import { ref } from 'vue';

let allUsers = ref([]);

const fetchUsers = async () => {
     try {
          const response = await fetch('https://randomuser.me/api/?results=20');
          const { results } = await response.json();
          allUsers.value = [...allUsers.value, ...results];
          return allUsers.value;
     } catch (error) {
          console.error('Error fetching users:', error);
          throw error;
     }
};

// fetchUsers();

export { fetchUsers, allUsers };