import toastHandler from "../../toast/toast";
import { apiRequest } from "../../services/apiRequest.js";
import Comment from "../../../components/comment/comment.js";
import renderComments from "./renderComments.js";

const spoilLabel = document.querySelector(".spoil-label");
const spoilCheckbox = document.querySelector("#spoil-checkbox");
const submitCommentBtn = document.querySelector(".submit-comment");
const commentInput = document.querySelector(".comment-input");
const commentsContainer = document.querySelector(".comments-container");
const userUsername = document.querySelector(".comments-user-username");
const userEmail = document.querySelector(".comments-user-email");

let isSpoilActive = false;

const addNewCommnets = (event) => {
  const params = new URLSearchParams(location.search)
  const slug = params.get('title')
  console.log(slug);
  
  event.preventDefault();
  const commentText = commentInput.value.trim();
  if (commentText.length <= 15) {
    toastHandler("You have to enter at least 15 character!", "fail");
  } else {
    const username = userUsername.value.trim();
    const commentText = commentInput.value.trim();
    toastHandler("Your comment submited.", "success");
    renderComments({
      author: username,
      date: new Date(),
      text: commentText,
      isSpoil: isSpoilActive,
    });
    commentInput.value = "";
    apiRequest('/api/comment', null , "POST", {slug,author:username,text:commentText})
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
