const commentsEmptyState = () => {
  const commentsContainer = document.querySelector(".comments-container");
  commentsContainer.innerHTML = "";
  commentsContainer.insertAdjacentHTML('beforeend',
    `
    <div class="mt-5 py-4 text-center rounded-xl text-text-primary comment-empty-state">
        <h1 class="font-bold text-lg">No reviews yet</h1>
        <p class="text-sm max-sm:text-xs">Be the first viewer to share your thoughts about this title.</p>
    </div>
    `
  )
};
export default commentsEmptyState;