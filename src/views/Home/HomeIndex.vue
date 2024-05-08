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
  import { useRouter } from 'vue-router';
  import { routes } from '@/router';

  const apps = routes
    .filter(item => item.meta)
    .map(({ meta, path }) => {
      return { ...meta, path };
    });

  const router = useRouter();
  const goto = item => {
    const { path } = item;
    router.push({ path });
  };
</script>

<style lang="less" scoped>
  .home {
    padding: 20px 30px 0;
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
        color: #2c9678;
        font-size: 32px;
      }

      .name {
        font-size: 12px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 90%;
        text-align: center;
      }
    }
  }
</style>
