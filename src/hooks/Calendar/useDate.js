import { ref, reactive } from 'vue';
import dayjs from 'dayjs';

export default function () {
  const columnsType = ['year', 'month'];
  // 初始化日期选择器
  const nowDate = ref(dayjs().format('YYYY-MM'));
  let days = dayjs().daysInMonth();

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

  return {
    columnsType,
    dateConfig,
    showBottom,
    nowDate,
    handleConfirm,
    setMonth,
  };
}
