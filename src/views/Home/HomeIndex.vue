<template>
  <div class="home">
    <ul class="wrap">
      <li class="item-content" v-for="(item, index) in apps" :key="index" @click="goto(item)">
        <div class="iconfont" :class="'icon-' + item.icon"></div>
        <div class="name">{{ item.name }}</div>
      </li>
    </ul>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import data from '@/views/Home/apps.json';

  const apps = ref(data);
  const router = useRouter();
  const goto = item => {
    const { path } = item;
    router.push({ path });
  };
</script>

<style lang="less" scoped>
  .home {
    padding: 20px 30px 0 30px;
  }
  .wrap {
    display: flex;
    flex-flow: row wrap;
    .item-content {
      display: flex;
      flex-flow: column;
      align-items: center;
      width: 25%;
      margin-top: 18px;
      .iconfont {
        color: rgb(44, 150, 120);
        font-size: 32px;
      }
      .name {
        font-size: 12px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 60%;
        text-align: center;
      }
    }
  }
</style>
