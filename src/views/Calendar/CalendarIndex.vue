<template>
  <div class="wrap-content">
    <van-nav-bar
      title="日历"
      left-arrow
      @click-left="router.go(-1)"
      :safe-area-inset-top="true"
      :safe-area-inset-bottom="true"
      :fixed="true"
      :placeholder="true"
    />
    <van-calendar
      class="calendar"
      :poppable="false"
      :show-confirm="false"
      :min-date="dateConfig.minDate"
      :max-date="dateConfig.maxDate"
      :formatter="formatter"
    >
      <template #title>
        <div class="title">
          <div class="select-month" @click="setMonth('prev')">上一月</div>
          <div @click="showBottom = true">
            {{ nowDate }}
            <i class="iconfont icon-arrow-down"></i>
          </div>
          <div class="select-month" @click="setMonth('next')">下一月</div>
        </div>
      </template>
    </van-calendar>
    <van-popup v-model:show="showBottom" position="bottom">
      <van-date-picker
        v-model="dateConfig.currentDate"
        title="选择日期"
        :columns-type="columnsType"
        @confirm="handleConfirm"
      />
    </van-popup>
  </div>
</template>

<script setup>
  import useRouter from '@/hooks/Calendar/useRouter.js';
  import useDate from '@/hooks/Calendar/useDate.js';
  import useLunisolar from '@/hooks/Calendar/useLunisolar.js';

  const { router } = useRouter();
  const { dateConfig, showBottom, nowDate, handleConfirm, setMonth,columnsType } = useDate();
  const { formatter } = useLunisolar();

</script>

<style lang="less" scoped>
  .wrap-content {
    padding: 0 10px;

    .header {
      display: flex;
      align-items: center;

      > i {
        font-size: 11px;
      }
    }

    .calendar {
      :deep(.van-calendar__header) {
        box-shadow: none;
      }

      .title {
        padding: 0 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .select-month {
          font-weight: normal;
          color: #2c9678;
        }
      }

      :deep(.van-calendar__header-subtitle) {
        display: none;
      }
    }
  }
</style>
