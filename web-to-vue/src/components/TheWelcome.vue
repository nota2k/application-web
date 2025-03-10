<script setup>
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'

const openReadmeInEditor = () => fetch('/__open-in-editor?file=README.md')
</script>

<template>
  <main>
    <div>
      <h1>Vanilla JS Example</h1>
      <hr>
      <button id="fetch-users">Fetch Users</button>
      <div class="filter-wrapper">
        <select id="filter">
          <option value="all">Tous</option>
          <option value="male">Homme</option>
          <option value="female">Femme</option>
        </select>
        <input type="text" id="search" placeholder="Rechercher">
        <input type="range" id="age" min="0" max="100" step="1" value="100">
        <span id="age-value">100</span>
      </div>
    </div>
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
      <tbody></tbody>
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