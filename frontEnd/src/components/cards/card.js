const Card = (title, slug, type, genres, poster, isSlider) => {
  return `
    <div class="group  h-60! max-lg:h-55! max-md:h-50! max-sm:h-45! ${isSlider ? "swiper-slide" : ""} ${isSlider ? "w-45! max-xl:w-40! max-md:w-38! max-sm:w-32!" : "w-full"}">
        <a href="${type === "movie" ? `/movie.html?title=${slug}` : `/serie.html?title=${slug}`}" class="relative h-full">
            <img class="animate-fadeIn object-cover h-full w-full rounded-xl card-image bg-gray-900" src="public${poster}" alt="" loading="lazy">
            <div class="hidden absolute opacity-0 group-hover:opacity-100 transition-normal duration-300 top-0 w-full h-full bg-black/50 z-10">
                <div class="relative h-full w-full">
                    <div class="absolute flex justify-center flex-wrap left-0 right-0 mx-auto w-fit top-0 bottom-0 my-auto h-fit px-2 gap-2 card-genre-cover">
                        ${genres.map((genre) => {
                          return `<span class="rounded-xl px-2 max-lg:px-1.5 py-1 text-text-primary border border-text-secondary text-[10px] max-lg:text-[9px] max-md:text-[8px]">${genre}</span>`;
                        })}
                    </div>
                </div>
            </div>
        </a>
    </div>
    `;
};

export default Card;
