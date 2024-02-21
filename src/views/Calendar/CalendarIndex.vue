<template>
  <div class="wrap-content">
    <van-nav-bar
      left-arrow
      @click-left="router.go(-1)"
      :safe-area-inset-top="true"
      :fixed="true"
      :placeholder="true"
    >
      <template #title>
        <div @click="showBottom = true">{{ now }}</div>
      </template>
    </van-nav-bar>

    <van-calendar :poppable="false" :show-confirm="false" :style="{ height: '100%' }" />
    <van-popup v-model:show="showBottom" position="bottom">
      <van-date-picker v-model="currentDate" title="选择日期" :columns-type="columnsType" />
    </van-popup>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import dayjs from 'dayjs';

  const now = ref(dayjs().format('YYYY/MM'));
  const currentDate = ref(['2021', '01']);
  const columnsType = ['year', 'month'];
  const showBottom = ref(false);
  const router = useRouter();
</script>

<style lang="less" scoped>
  .wrap-content {
    // padding: 20px 20px 0 20px;
    .header {
      height: 50px;
      background-color: red;
    }
  }
</style>
