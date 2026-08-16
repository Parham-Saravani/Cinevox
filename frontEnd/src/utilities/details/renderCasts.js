const castContainer = document.querySelector(".page-cast");

const createCasts = (cast) => {
  cast.forEach((item) => {
    castContainer.insertAdjacentHTML(
      "afterbegin",
      `
        <div class="swiper-slide w-18! mr-1.5!">
            <div class="w-fit flex flex-col items-center">
                <img class="size-14 rounded-full object-cover bg-gray-900 animate-pulse cast-images" src="${item.image}" alt="">
                <h4 class="text-text-primary text-[10px] mt-1.5 w-17 text-center">${item.title}</h4>
            </div>
        </div>
        `,
    );
  });
};
export default createCasts;
