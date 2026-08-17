const spoilLabel = document.querySelector(".spoil-label");
const spoilCheckbox = document.querySelector("#spoil-checkbox");
const submitCommentBtn = document.querySelector(".submit-comment");
const commentInput = document.querySelector(".comment-input");
let isSpoilActive = false;
const addNewCommnets = (event) => {
  event.preventDefault();
  const commentText = commentInput.value.trim();
  if (commentText.length <= 15) {
    console.log("type more than 15 letters");
  } else {
    console.log("Submited");
  }
};

const spoilActivityHandler = (event) => {
  if (spoilCheckbox.checked) {
    isSpoilActive = true;
    spoilLabel.classList.add("spoil-active");
  } else {
    isSpoilActive = false;
    spoilLabel.classList.remove("spoil-active");
  }
};
spoilCheckbox.addEventListener("change", spoilActivityHandler);
submitCommentBtn.addEventListener("click", addNewCommnets);
