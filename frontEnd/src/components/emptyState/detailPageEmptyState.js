const emptyStateHandler = () => {
  document.body.innerHTML = "";
  document.body.classList.add("h-screen");
  document.body.insertAdjacentHTML(
    "afterbegin",
    `
      <div class="w-full h-full flex flex-col justify-center items-center">
        <div class="eyes-container" id="eyesContainer">
          <div class="eye">
              <div class="pupil"></div>
          </div>
          <div class="eye">
            <div class="pupil"></div>
          </div>
        </div>
        <div class="mt-10 text-text-primary text-center">
          <h2 class="font-bold text-3xl">Opps...</h2>
          <p class="mt-2 text-xl">We couldn't find anything.</p>
        </div>
        <button class="mt-4 w-40 py-3 rounded-xl bg-cta-primary hover:bg-cta-hover text-text-primary text-sm transition-colors duration-300 cursor-pointer reload-btn">Back to Home</button>
      
      </div>
      `,
  );
  reloadPageBtn();
  rotatePupils();
};
const reloadPageBtn = () => {
  document.querySelector(".reload-btn").addEventListener("click", () => {
    location.replace("/index.html");
  });
};
const rotatePupils = () => {
  document.querySelectorAll(".pupil").forEach((pupil) => {
    const directions = ["-94%, -15%", "-11%, -84%", "-94%, -15%" , "-9%, -15%" , "-94%, -84%" , "-9%, -15%"];
    let i = 0;
    const rotate = setInterval(() => {
      if (i === directions.length) {
        i = 0;
      }
      pupil.style.transform = `translate(${directions[i]})`;
      i++;
    }, 4000);
  });
};
export default emptyStateHandler;