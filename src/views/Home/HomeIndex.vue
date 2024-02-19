<template>
  <div class="home">
    home
    <button @click="goto">click</button>
  </div>
</template>

<script setup>
  import { useRouter } from 'vue-router';

  const router = useRouter();

  const goto = () => {
    router.push({
      path: '/oilPrice',
    });
  };
</script>

<style lang="less" scoped></style>
