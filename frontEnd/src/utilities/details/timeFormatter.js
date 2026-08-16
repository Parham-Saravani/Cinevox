const durationEl = document.querySelector(".page-duration");

const changeDurationFormat = (time, type) => {
  if (time % 60 === 0) {
    durationEl.textContent = `${time / 60}h`;
  } else {
    const hour = Math.floor(time / 60);
    const minute = time - hour * 60;
    if (type === "movie") {
      durationEl.textContent = `${hour}h ${minute}m`;
    } else {
      durationEl.textContent = `${hour ? `${hour}h` : ""} ${minute}m per Episode`;
    }
  }
};
export default changeDurationFormat;
