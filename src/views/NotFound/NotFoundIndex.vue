<template>
  <div class="not-found">
    <span class="text">Ooops!</span>
    <span class="iconfont icon-not-found"></span>
    <span class="text2">我嘞个擦！页面不见鸟~~</span>
    <van-button
      class="button"
      type="primary"
      color="linear-gradient(120deg, #f6d365 0%, #fda085 100%)"
      block
      @click="goHome"
    >
      返回首页
    </van-button>
  </div>
</template>

<script setup>
  import { useRouter } from 'vue-router';

  const router = useRouter();
  const goHome = () => {
    router.push({ path: '/' });
  };
</script>

<style lang="less" scoped>
  .not-found {
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-flow: column;
    padding: 0 30px;
    align-items: center;

    .text {
      margin-top: 13vh;
      font-size: 30px;
    }

    .iconfont {
      font-size: 240px;
    }

    .text2 {
      font-size: 14px;
    }

    .button {
      margin-top: 5vh;
    }
  }
</style>
