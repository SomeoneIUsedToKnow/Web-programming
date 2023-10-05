<script setup lang="ts">
//copy from his home as well
import {ref} from 'vue';
const newTask = ref('');
const tasks = ref([] as string[]);

function addTask(){
  tasks.value.push(newTask.value);
  newTask.value = '';
}
</script>

<template>
  <main>
    <h1 class="title">Home</h1>
    <h2 class="subtitle">welcome to vuejs and typescript</h2>
    <nav class="panel">
  <p class="panel-heading">
    Repositories
  </p>
  <div class="panel-block">
    <p class="control has-icons-left">
      <input class="input" type="text" placeholder="Search">
      <span class="icon is-left">
        <i class="fas fa-search" aria-hidden="true"></i>
      </span>
    </p>
  </div>
  <p class="panel-tabs">
    <a class="is-active">All</a>
    <a>Public</a>
    <a>Private</a>
    <a>Sources</a>
    <a>Forks</a>
  </p>
 
  <label class="panel-block">
    <input type="checkbox">
    remember me
  </label>
 
</nav>
  </main>
</template>
