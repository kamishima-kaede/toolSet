<template>
  <div class="app-wrap-content">
    <van-nav-bar
      v-if="navBar"
      :title="title"
      left-arrow
      @click-left="router.go(-1)"
      :safe-area-inset-top="true"
      :safe-area-inset-bottom="true"
      :fixed="true"
      :placeholder="true"
    />
    <router-view></router-view>
  </div>
</template>

<script setup>
  import { ref, watchEffect } from 'vue';
  import useRouter from '@/hooks/common/useRouter.js';
  const { router, route } = useRouter();
  const navBar = ref(false);
  const title = ref('');
  watchEffect(() => {
    if (route.path === '/home' || route.path === '/404') {
      navBar.value = false;
    } else {
      navBar.value = true;
      title.value = route.meta.name;
    }
  });
</script>

<style lang="less">
  #app {
    position: absolute;
    width: 100%;
    height: 100%;
  }
</style>
<style lang="less" scoped>
  .app-wrap-content {
    .header {
      display: flex;
      align-items: center;

      > i {
        font-size: 11px;
      }
    }
  }
</style>
