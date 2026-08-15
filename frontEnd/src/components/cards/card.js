const Card = (title, slug, type, genres, poster) => {
  return `
    <div class="group w-full">
        <a href="${type === "movie" ? `/movie.html?title=${slug}` : `/serie.html?title=${slug}`}" class="relative block rounded-xl overflow-hidden">
            <img class="object-cover" src="public${poster}" alt="" loading="lazy">
            <div class="absolute opacity-0 group-hover:opacity-100 transition-normal duration-300 top-0 w-full h-full bg-black/50 z-10">
                <div class="relative h-full w-full">
                    <div class="absolute flex justify-center flex-wrap left-0 right-0 mx-auto w-fit top-0 bottom-0 my-auto h-fit px-2 gap-2 card-genre-cover">
                        ${genres.map((genre) => {
                          return ` <span class="rounded-xl px-2 max-lg:px-1.5 py-1 text-text-primary border border-text-secondary text-[10px] max-lg:text-[9px] max-md:text-[8px]">${genre}</span>`;
                        })}
                    </div>
                </div>
            </div>
            <div class="swiper-lazy-preloader"></div>
        </a>
        <a href="${type === "movie" ? `/movie.html?title=${slug}` : `/serie.html?title=${slug}`}" class="mt-2 text-text-primary text-center block transition-colors duration-300 hover:text-text-secondary font-semibold max-lg:text-sm max-md:text-xs text-movie-card-title">${title}</a>
    </div>
    `;
};
