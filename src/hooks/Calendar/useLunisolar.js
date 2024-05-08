import lunisolar from 'lunisolar';
import dayjs from 'dayjs';
import holiday from './holiday.json';

export default function () {
  const formatter = day => {
    const { date } = day;
    console.log();
    const solarTerm = lunisolar(date).solarTerm
    day.bottomInfo = solarTerm ? solarTerm.name : lunisolar(date).format('lD');
    const dateValue = dayjs(date).format('YYYY-MM-DD');
    const getDay = date.getDay();
    if (getDay === 0 || getDay === 6) {
      day.className = 'holiday';
    }
    holiday.days.forEach(item => {
      if (dateValue === item.date) {
        if (item.isOffDay) {
          day.topInfo = item.name;
          day.className = 'holiday';
        } else {
          day.className = '';
        }
      }
    });
    return day;
  };

  return {
    formatter
  };
}
