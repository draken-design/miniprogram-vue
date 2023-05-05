type DatePickerMode = "year" | "month" | "date" | "hour" | "minute";
type A = Record<DatePickerMode, Array<number>>;
export const getDateMargin = (
  currentTime: number,
  dateSelectRange: number[],
  array: DatePickerMode[]
): A => {
  if (dateSelectRange.length !== 2 || dateSelectRange[0] >= dateSelectRange[1])
    throw new Error("日期范围格式错误");
  const obj: A = {} as A;
  const currentDate = new Date(currentTime);
  const minDate = new Date(dateSelectRange[0]);
  const maxDate = new Date(dateSelectRange[1]);
  const currentYear = currentDate.getFullYear();
  const minYear = minDate.getFullYear();
  const maxYear = maxDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const minMonth = minDate.getMonth();
  const maxMonth = maxDate.getMonth();
  const currentDat = currentDate.getDate();
  const minDat = minDate.getDate();
  const maxDat = maxDate.getDate();
  const currentHour = currentDate.getHours();
  const minHour = minDate.getHours();
  const maxHour = maxDate.getHours();
  const minMinute = minDate.getMinutes();
  const maxMinute = maxDate.getMinutes();
  array.forEach((ele) => {
    obj[ele] = [];
    let current = 0;
    let length = 12;
    switch (ele) {
      case "year":
        for (let i = minYear; i <= maxYear; i++) {
          obj.year.push(i);
        }
        break;
      case "month":
        if (minYear === currentYear) current = minMonth;
        else if (maxYear === currentYear) length = maxMonth;
        for (let i = current; i < length; i++) {
          obj.month.push(i + 1);
        }
        break;
      case "date":
        current = 1;
        length = new Date(currentYear, currentMonth + 1, 0).getDate();
        if (minYear === currentYear && minMonth === currentMonth)
          current = minDat;
        else if (maxYear === currentYear && maxMonth === currentMonth)
          length = maxDat;
        for (let i = current; i <= length; i++) {
          obj.date.push(i);
        }
        break;
      case "hour":
        length = 23;
        if (
          minYear === currentYear &&
          minMonth === currentMonth &&
          minDat === currentDat
        )
          current = minHour;
        else if (
          maxYear === currentYear &&
          maxMonth === currentMonth &&
          maxDat === currentDat
        )
          length = maxHour;
        for (let i = current; i <= length; i++) {
          obj.hour.push(i + 1);
        }
        break;
      case "minute":
        length = 59;
        if (
          minYear === currentYear &&
          minMonth === currentMonth &&
          minDat === currentDat &&
          minHour === currentHour
        )
          current = minMinute;
        else if (
          maxYear === currentYear &&
          maxMonth === currentMonth &&
          maxDat === currentDat &&
          maxHour === currentHour
        )
          length = maxMinute;
        for (let i = current; i <= length; i++) {
          obj.minute.push(i);
        }
        break;
      default:
        break;
    }
  });
  return obj;
};
