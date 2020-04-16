import { add } from 'date-fns';

export const calcDate = (etaArray:number[]) => {
  let date: Date | undefined;

  const getEndDate = (remainingTimeArray: number[]): Date => {
    let [remainingSeconds, remainingMinutes, remainingHours, remainingDays]: number[] = remainingTimeArray;
    if (remainingSeconds === undefined) { remainingSeconds = 0 }
    if (remainingMinutes === undefined) { remainingMinutes = 0 }
    if (remainingDays === undefined) { remainingDays = 0 }
    if (remainingHours === undefined) { remainingHours = 0 }
    const date: Date = new Date();
    return add(date, {
      days: remainingDays,
      hours: remainingHours,
      minutes: remainingMinutes,
      seconds: remainingSeconds
    });
  }

  date = getEndDate(etaArray.reverse());
  return date;
}
