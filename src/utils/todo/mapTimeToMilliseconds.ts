import { Moment } from "moment";

const mapTimeToMilliseconds = (time: Moment) => {
  return (
    time.seconds() * 1000 +
    time.minutes() * 60 * 1000 +
    time.hours() * 60 * 60 * 1000
  );
};

export default mapTimeToMilliseconds;