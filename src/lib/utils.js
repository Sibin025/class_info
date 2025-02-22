export const getMonthData = (year, month) => {
  const daysInMonth = new Date(year, month + 1, 0).getDate(); // Get number of days in the month
  // return getDaysAndInfoOFAMonth(daysInMonth, year, month);

  if (daysInMonth >= 30) {
    return getDaysAndInfoOFAMonth(daysInMonth, year, month);
  } else {
    return getInfoOfmonthLessThan30(daysInMonth, year, month);
  }
};

function getDaysAndInfoOFAMonth(daysCount, year, month) {
  const days = [];
  const classData = {};

  let nightClassDayCount = 1;
  let morningClassDayCount = 1;

  let nightClassDayGap = 0;
  let morningClassDayGap = 0;

  for (let day = 1; day <= daysCount; day++) {
    const date = new Date(year, month, day); // Month is 0-indexed
    const dayOfWeek = date.toLocaleString("en", { weekday: "long" }); // Get day of the week

    // setting the basic data of a day.
    const obj = {
      date: day < 10 ? "0" + day : day,
      month: month,
      year: year,
      day: dayOfWeek,
    };

    // not adding any class info if the day is suday.
    if (dayOfWeek === "Sunday") {
      days.push(obj);
      continue;
    }

    // adding the night_class_info for the 1st or 2nd day of the month.
    if (
      (day === 1 && dayOfWeek !== "Sunday") ||
      (day === 2 && dayOfWeek === "Monday")
    ) {
      obj["night_class_info"] = {
        day: nightClassDayCount,
        class: "Night",
      };

      nightClassDayCount++;

      days.push(obj);

      continue;
    }

    if (nightClassDayCount === 8) {
      if (nightClassDayGap === 1) {
        nightClassDayCount = 1;
        nightClassDayGap = 0;
      } else {
        nightClassDayGap++;
      }
    } else {
      obj["night_class_info"] = {
        day: nightClassDayCount,
        class: "Night",
      };

      nightClassDayCount++;
    }

    if (morningClassDayCount === 8) {
      if (morningClassDayGap == 1) {
        morningClassDayCount = 1;
        morningClassDayGap = 0;
      } else {
        morningClassDayGap++;
      }
    } else {
      obj["morning_class_info"] = {
        day: morningClassDayCount,
        class: "Morning",
      };

      morningClassDayCount++;
    }

    days.push(obj);
  }

  return days;
}

function getInfoOfmonthLessThan30(daysCount, year, month) {
  const days = [];
  const classData = {};

  let nightClassDayCount = 1;
  let morningClassDayCount = 1;

  let nightClassDayGap = 0;
  let morningClassDayGap = 0;

  let nightBatch = 0;
  let morningBatch = 0;

  for (let day = 1; day <= daysCount; day++) {
    const date = new Date(year, month, day); // Month is 0-indexed
    const dayOfWeek = date.toLocaleString("en", { weekday: "long" }); // Get day of the week

    // setting the basic data of a day.
    const obj = {
      date: day < 10 ? "0" + day : day,
      month: month,
      year: year,
      day: dayOfWeek,
    };

    // not adding any class info if the day is suday.
    if (dayOfWeek === "Sunday") {
      days.push(obj);
      continue;
    }

    // adding the night_class_info for the 1st or 2nd day of the month.
    if (
      (day === 1 && dayOfWeek !== "Sunday") ||
      (day === 2 && dayOfWeek === "Monday")
    ) {
      obj["night_class_info"] = {
        day: nightClassDayCount,
        class: "Night",
      };

      nightClassDayCount++;

      days.push(obj);

      continue;
    }

    if (nightClassDayCount === 8) {
      if (nightClassDayGap === 1) {
        nightClassDayCount = 1;
        nightBatch++;
        nightClassDayGap = 0;
      } else {
        nightClassDayGap++;
      }
    }

    if (nightBatch !== 3 && nightClassDayCount < 8) {
      obj["night_class_info"] = {
        day: nightClassDayCount,
        class: "Night",
      };

      nightClassDayCount++;
    }

    if (morningClassDayCount === 8) {
      if (morningClassDayGap === 1) {
        morningClassDayCount = 1;
        morningBatch++;
        morningClassDayGap = 0;
      }else{
        morningClassDayGap++;
      }
    }

    if (morningBatch !== 3 && morningClassDayCount < 8) {
      obj["morning_class_info"] = {
        day: morningClassDayCount,
        class: "Morning",
      };

      morningClassDayCount++;
    }

    days.push(obj);
  }

  return days;
}
