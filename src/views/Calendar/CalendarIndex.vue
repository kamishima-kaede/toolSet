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
  import { ref, reactive } from 'vue';
  import { useRouter } from 'vue-router';
  import dayjs from 'dayjs';
  import lunisolar from 'lunisolar';

  // 初始化日期选择器
  const nowDate = ref(dayjs().format('YYYY-MM'));
  const nowDate1 = ref(dayjs().format('YYYY/MM/DD'));
  console.log(lunisolar(nowDate1.value).format('lY年 lM(lL)lD lH時'));
  let days = dayjs().daysInMonth();
  const columnsType = ['year', 'month'];
  let dateConfig = reactive({
    minDate: new Date(dayjs().year(), dayjs().month(), 1),
    maxDate: new Date(dayjs().year(), dayjs().month(), days),
    currentDate: nowDate.value.split('-'),
  });
  const showBottom = ref(false);
  const handleConfirm = ({ selectedValues }) => {
    nowDate.value = selectedValues.join('-');
    const currentDate = nowDate.value.split('-');
    const days = dayjs(nowDate.value).daysInMonth();
    const minDate = new Date(dayjs(nowDate.value).year(), dayjs(nowDate.value).month(), 1);
    const maxDate = new Date(dayjs(nowDate.value).year(), dayjs(nowDate.value).month(), days);
    dateConfig = Object.assign(dateConfig, { currentDate, minDate, maxDate });
    showBottom.value = false;
  };
  // 选择月份
  const setMonth = type => {
    if (!type) return;
    const { currentDate } = dateConfig;
    const currentDateStr = currentDate.join('-');
    let date, days, minDate, maxDate;
    if (type === 'prev') {
      date = dayjs(currentDateStr).subtract(1, 'month').format('YYYY-MM');
      nowDate.value = date;
    } else if (type === 'next') {
      date = dayjs(currentDateStr).add(1, 'month').format('YYYY-MM');
      nowDate.value = date;
    }
    days = dayjs(date).daysInMonth();
    minDate = new Date(dayjs(date).year(), dayjs(date).month(), 1);
    maxDate = new Date(dayjs(date).year(), dayjs(date).month(), days);
    dateConfig = Object.assign(dateConfig, {
      minDate,
      maxDate,
      currentDate: date.split('-'),
    });
  };
  const router = useRouter();
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
