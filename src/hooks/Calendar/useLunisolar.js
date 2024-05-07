import lunisolar from 'lunisolar';
import dayjs from 'dayjs';
// import { ref } from 'vue';
import holiday from './holiday.json';
export default function () {
  // const nowDate1 = ref(dayjs().format('YYYY/MM/DD'));
  const formatter = day => {
    const { date } = day;
    day.bottomInfo = lunisolar(date).format('lD');
    const dateValue = dayjs(date).format('YYYY-MM-DD');
    holiday.days.forEach(item => {
      if (dateValue === item.date) {
        day.topInfo = item.name;
      }
    });
    return day;
  };
  return {
    formatter,
  };
}
