<script setup>
import { ref } from 'vue';

const emits = defineEmits(['fetch-users','filter-gender','filter-age','filter-search']);
const ageValue = ref(100);

const handleAgeChange = (event) => {
  const value = event.target.value;
  ageValue.value = value;
  emits('filter-age', value);
};

</script>

<template>
  <div>
    <h1>Vanilla JS Example</h1>
    <hr>
    <button @click="$emit('fetch-users')" id="fetch-users">Fetch Users</button>
    <div class="filter-wrapper">
      <select @change="$emit('filter-gender', $event.target.value)" id="filter">
        <option value="all">Tous</option>
        <option value="male">Homme</option>
        <option value="female">Femme</option>
      </select>
      <input @keyup="$emit('filter-search', $event.target.value)" type="text" id="search" placeholder="Rechercher">
      <input @change="handleAgeChange" type="range" id="age" min="0" max="100" step="1" value="100">
      <span id="age-value">{{ ageValue }}</span>
    </div>
  </div>
</template>

<style scoped>
  .filter-wrapper {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    gap: 20px;
  }

  .filter-wrapper>* {
    flex: 1;
  }
</style>