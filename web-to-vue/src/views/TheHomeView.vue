<script setup>
import { ref, computed } from 'vue';
import TheUsers from '../components/TheUsers.vue';
import TheFilter from '../components/TheFilter.vue';
import { fetchUsers, allUsers } from '../data/data.js';

// Tableau qui contiendra les utilisateurs à afficher
let users = ref([]);

// Stockage de tous les utilisateurs originaux pour pouvoir filtrer dessus
let originalUsers = ref([]);

const genderFilter = ref('all');
const ageFilter = ref(100);
const searchFilter = ref('');

const getUsers = () => {
  try {
    fetchUsers();
    originalUsers.value = [...allUsers.value]; // Sauvegarde de tous les utilisateurs
    users.value = [...allUsers.value]; // Affichage initial de tous les utilisateurs
    console.log("Utilisateurs chargés:", users.value);
  } catch (error) {
    console.error("Erreur lors de la récupération des utilisateurs:", error);
  }
};

// Méthode pour filtrer les utilisateurs par genre
const handleFilterGender = (value) => {
  genderFilter.value = value;

  if (value === 'all') {
    users.value = [...originalUsers.value];
  } else {
    users.value = originalUsers.value.filter(user => user.gender === value);
  }
  console.log('Filtre par genre appliqué:', value, 'Résultat:', users.value.length, 'utilisateurs');
};

// Méthode pour filtrer les utilisateurs par âge
const handleFilterAge = (value) => {
  ageFilter.value = value;
  users.value = originalUsers.value.filter(user => user.dob.age <= value);
};

// Méthode pour filtrer les utilisateurs par âge
const handleFilterSearch = (value) => {
  searchFilter.value = value;
  users.value = originalUsers.value.filter(user => user.name.first.toLowerCase().includes(value.toLowerCase()) || user.name.last.toLowerCase().includes(value.toLowerCase()));
  console.log(searchFilter.value)
};

</script>

<template>
  <main>
    <TheFilter @fetch-users="getUsers" @filter-gender="handleFilterGender" @filter-age="handleFilterAge" @filter-search="handleFilterSearch"></TheFilter>
    <table id="tbl-users">
      <thead>
        <tr>
          <th>Photo</th>
          <th class="name">
            Nom
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="lucide lucide-chevron-down">
              <path d="m6 9 6 6 6-6" />
            </svg>
          </th>
          <th class="gender">
            Genre
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="lucide lucide-chevron-down">
              <path d="m6 9 6 6 6-6" />
            </svg>
          </th>
          <th class="age">
            Age
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="lucide lucide-chevron-down">
              <path d="m6 9 6 6 6-6" />
            </svg>
          </th>
          <th class="mail">Email</th>
          <th class="tel">Tel</th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="users.length === 0">
          <td colspan="6">Aucun utilisateur trouvé</td>
        </tr>
        <tr v-else v-for="user in users" :key="user.email">
          <TheUsers :thumbnail="user.picture.thumbnail" :firstname="user.name.first" :lastname="user.name.last"
            :gender="user.gender" :email="user.email" :age="user.dob.age" :phone="user.phone">
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
  transform: rotate(180deg);
}
</style>