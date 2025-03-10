<script setup>

</script>

<template>
      <tbody>
        
      </tbody>
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