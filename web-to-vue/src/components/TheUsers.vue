<script setup>
import { onMounted } from 'vue';

let props = defineProps({
  thumbnail: String,
  firstname: String,
  lastname: String,
  gender: String,
  age: Number,
  email: String,
  phone: String

})

</script>

<template>
  <td><img :src="props.thumbnail" :alt="`${props.firstname} Photo`"></td>
  <td class="firstname">{{props.firstname}} {{props.lastname}}</td>
  <td class="gender">{{props.gender}}</td>
  <td class="age">{{props.age}}</td>
  <td class="email">{{props.email}}</td>
  <td class="phone">{{props.phone}}</td>
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