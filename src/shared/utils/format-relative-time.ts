const MINUTE = 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;
const WEEK = DAY * 7;
const MONTH = DAY * 30;
const YEAR = DAY * 365;

export function formatRelativeTime(date: Date | string): string {
  const now = new Date();
  const then = new Date(date);
  const seconds = Math.floor((now.getTime() - then.getTime()) / 1000);

  if (seconds < 0) {
    return "just now";
  }

  if (seconds < MINUTE) {
    return "just now";
  }

  if (seconds < HOUR) {
    const minutes = Math.floor(seconds / MINUTE);
    return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
  }

  if (seconds < DAY) {
    const hours = Math.floor(seconds / HOUR);
    return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
  }

  if (seconds < WEEK) {
    const days = Math.floor(seconds / DAY);
    return `${days} ${days === 1 ? "day" : "days"} ago`;
  }

  if (seconds < MONTH) {
    const weeks = Math.floor(seconds / WEEK);
    return `${weeks} ${weeks === 1 ? "week" : "weeks"} ago`;
  }

  if (seconds < YEAR) {
    const months = Math.floor(seconds / MONTH);
    return `${months} ${months === 1 ? "month" : "months"} ago`;
  }

  const years = Math.floor(seconds / YEAR);
  return `${years} ${years === 1 ? "year" : "years"} ago`;
}
