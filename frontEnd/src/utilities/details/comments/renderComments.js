import Comment from "../../../components/comment/comment.js";

const renderComments = (comment) => {
  const commentsContainer = document.querySelector(".comments-container");
  const commnetEmptyState = document.querySelector(".comment-empty-state");
  if (commnetEmptyState) commnetEmptyState.remove();
  commentsContainer.insertAdjacentHTML("beforeend", Comment(comment));
};
export default renderComments;
