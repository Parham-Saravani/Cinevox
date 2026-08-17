const changeDurationFormat = (time, type) => {
  if (time % 60 === 0) {
    return `${time / 60}h`;
  } else {
    const hour = Math.floor(time / 60);
    const minute = time - hour * 60;
    if (type === "movie") {
      return `${hour}h ${minute}m`;
    } else {
      return `${hour ? `${hour}h` : ""} ${minute}m per Episode`;
    }
  }
};
export default changeDurationFormat;
