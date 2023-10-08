<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { SetItem, GetItem } from './lib/Service/LocalStorage/localstorage';
import { SetCoockie } from './lib/Service/Cookies/cookies';

if (GetItem("JWTKey") === null) {
  SetItem("JWTKey", "asdasdasdsadsasdas");
}

</script>

<template>
  <RouterView />
</template>
