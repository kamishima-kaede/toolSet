import { ref, reactive, nextTick } from 'vue';
import dayjs from 'dayjs';
import lunisolar from 'lunisolar';

export default function () {
  const columnsType = ['year', 'month'];
  const calendar = ref();
  const lunisolarDay = ref(lunisolar(new Date()).format('lM(lL)lD'));
  // 初始化日期选择器
  const nowDate = ref(dayjs().format('YYYY-MM'));
  let days = dayjs().daysInMonth();

  let dateConfig = reactive({
    minDate: new Date(dayjs().year(), dayjs().month(), 1),
    maxDate: new Date(dayjs().year(), dayjs().month(), days),
    currentDate: nowDate.value.split('-'),
  });

  const showBottom = ref(false);
  const getLunisolarDay = () => {
    const day = calendar.value.getSelectedDate();
    lunisolarDay.value = lunisolar(day).format('lM(lL)lD');
  };
  const handleConfirm = ({ selectedValues }) => {
    nowDate.value = selectedValues.join('-');
    const currentDate = nowDate.value.split('-');
    const days = dayjs(nowDate.value).daysInMonth();
    const minDate = new Date(dayjs(nowDate.value).year(), dayjs(nowDate.value).month(), 1);
    const maxDate = new Date(dayjs(nowDate.value).year(), dayjs(nowDate.value).month(), days);
    dateConfig = Object.assign(dateConfig, { currentDate, minDate, maxDate });
    showBottom.value = false;
    nextTick(() => {
      getLunisolarDay();
    });
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
    nextTick(() => {
      getLunisolarDay();
    });
  };
  // 选择年
  const setYear = type => {
    if (!type) return;
    const { currentDate } = dateConfig;
    const currentDateStr = currentDate.join('-');
    let date, days, minDate, maxDate;
    if (type === 'prev') {
      date = dayjs(currentDateStr).subtract(1, 'year').format('YYYY-MM');
      nowDate.value = date;
    } else if (type === 'next') {
      date = dayjs(currentDateStr).add(1, 'year').format('YYYY-MM');
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
    nextTick(() => {
      getLunisolarDay();
    });
  };
  const selectDate = () => {
    getLunisolarDay();
  };

  return {
    columnsType,
    nowDate,
    dateConfig,
    showBottom,
    handleConfirm,
    setMonth,
    setYear,
    calendar,
    lunisolarDay,
    selectDate,
  };
}
