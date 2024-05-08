<template>
  <div class="wrap-content">
    <van-calendar
      ref="calendar"
      class="calendar"
      :poppable="false"
      :show-confirm="false"
      :min-date="dateConfig.minDate"
      :max-date="dateConfig.maxDate"
      :formatter="formatter"
      @select="selectDate"
      switch-mode="year-month"
    >
      <template #title>
        <div class="title">
          <div>
            <div class="select-day" @click="setYear('prev')">
              <van-icon name="arrow-double-left" />
            </div>
            <div class="select-day" @click="setMonth('prev')"><van-icon name="arrow-left" /></div>
          </div>
          <div @click="showBottom = true">
            {{ nowDate }}
          </div>
          <div>
            <div class="select-day" @click="setMonth('next')"><van-icon name="arrow" /></div>
            <div class="select-day" @click="setYear('next')">
              <van-icon name="arrow-double-right" />
            </div>
          </div>
        </div>
      </template>
    </van-calendar>
    <div class="date-box">
      <div class="nongli">农历</div>
      <div class="nongli-right">
        <div class="day">
          <span class="noliriqi">{{ lunisolarDay }}</span>
        </div>
        <!-- <span class="holidayDes">世界红十字日 微笑日 </span> -->
      </div>
    </div>
  </div>
  <van-popup v-model:show="showBottom" position="bottom">
    <van-date-picker
      v-model="dateConfig.currentDate"
      title="选择日期"
      :columns-type="columnsType"
      @confirm="handleConfirm"
    />
  </van-popup>
</template>

<script setup>
  import useDate from '@/hooks/Calendar/useDate.js';
  import useLunisolar from '@/hooks/Calendar/useLunisolar.js';

  const {
    columnsType,
    nowDate,
    dateConfig,
    showBottom,
    handleConfirm,
    setMonth,
    setYear,
    calendar,
    lunisolarDay,
    selectDate
  } = useDate();
  const { formatter } = useLunisolar();
</script>

<style lang="less" scoped>
  .wrap-content {
    background: #f8f9fb;

    .header {
      display: flex;
      align-items: center;

      > i {
        font-size: 11px;
      }
    }

    .calendar {
      padding: 0 10px;

      :deep(.van-calendar__header) {
        box-shadow: none;
      }

      .title {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .select-day {
          font-weight: normal;
          color: #2c9678;
          display: inline-block;
        }
      }

      :deep(.van-calendar__header-subtitle) {
        display: none;
      }

      :deep(.holiday) {
        color: red;

        .van-calendar__bottom-info {
          color: #000;
        }
      }
    }

    .date-box {
      background: #fff;
      padding: 0 10px;
      display: flex;
      margin-bottom: 7.5px;
      margin-top: 10px;

      .nongli {
        text-align: center;
        color: #cd3938;
        background-color: rgb(205 57 56 / 10%);
        border-radius: 3px;
        width: 14px;
        height: 30px;
        margin-right: 6px;
        display: flex;
        align-items: center;
        padding: 3px 6px;
        font-size: 13px;
      }

      .nongli-right {
        margin-top: 4.5px;
        width: 180px;
        display: flex;
        flex-flow: column;
        justify-content: center;

        .day {
          font-size: 28px;
          color: #cd3938;
        }

        .holidayDes {
          color: #666;
          font-size: 12px;
          margin-top: 5px;
        }
      }
    }
  }
</style>
