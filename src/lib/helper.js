import class_data from '../constants/mockData/monthwise_topic_data.json';

export function getDaysInMonth(year, month) {
  const daysInMonth = new Date(year, month + 1, 0).getDate(); // Get number of days in the month
  const days = [];
  const classData = getClassData(month);

  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(year, month, day); // Month is 0-indexed
    const dayOfWeek = date.toLocaleString("en", { weekday: "long" }); // Get day of the week

    const obj = {
      date: day < 10 ? "0" + day : day,
      month: month,
      year: year,
      day: dayOfWeek,
    };

    if(classData){
       obj['data'] = getTopicsData(day, classData)
    }
    days.push(obj);
  }
  
  return days;
}

export const getRowNum = (firstDay, totalDays) => {
  if (
    (firstDay === "Friday" && totalDays > 30) ||
    (firstDay === "Saturday" && totalDays > 29)
  ) {
    return 6;
  }

  return 5;
};

const getClassData = (month) => {
    const item = class_data?.filter((ele)=> ele["month"] === month)

    if(item?.length > 0){
        return item[0]?.data
    }

    return null;
};

const getTopicsData = (date,data) => {
    const item = data?.filter((ele) => ele["date"] === date)

    if(item?.length > 0){
        return item[0]
    }

    return null;
};