/**
 * @author Josélio de S. C. Júnior <joseliojrx25@gmail.com>
 * @copyright Josélio de S. C. Júnior 2021
 */
`use strict`
import data from './data.js';

const main = {
    ids: {
        mainMovie: document.getElementById('main-movie'),
        mainMovieTitle: document.getElementById('main-movie-title'),
        mainMovieDescp: document.getElementById('main-movie-description'),
        watch: document.getElementById('watch'),
        vContainer: document.getElementById('v-container'),
        back: document.getElementById('back'),
        video: document.getElementById('video'),
        carousel: document.getElementById('carousel'),
    },
    coverUrl: './res/carousel-img/cover/',
    coverUrlMin: './res/carousel-img/cover-min/',
    titleUrl: './res/carousel-img/titles/',
    css: {
        BG_COVER: 'background-size: cover;',
        FADE_IN: 'transition: 0.8s ease all; opacity: 100%;',
        FADE_OUT: 'transition: 0.8s ease all; opacity: 0;',
        SHADOW: 'var(--shadow)'
    }
};

/** Random movie icons */
const movies = data.map(({ id }) =>
    `<div id="item${id}" class="item">
        <img class="carousel-img" src="./res/carousel-img/icons/${id}.jpg">
    </div>`).sort(() => Math.random() - 0.5);

main.ids.carousel.innerHTML = `<div class="owl-carousel owl-theme">${movies.join('')}</div>`;

/** Randomized icons id number */
const movieOrder = [...movies.map(x => +x.match(/\d+/)[0])];

/**
 * Sets main movie exhibition.
 * @param {number} item The icon id number.
 */
const mainMovieCard = item => {
    const { titleAlt, titleImg, description, play } = data[item],
    { coverUrl, coverUrlMin, titleUrl, ids, css } = main,
    { BG_COVER, FADE_IN, SHADOW } = css,
    { mainMovie, mainMovieTitle, mainMovieDescp, watch, video, vContainer } = ids;

    if (window.innerWidth < 500) {
        // Minor background image.
        mainMovie.style.cssText = `background: ${SHADOW}, url(${coverUrlMin}${item}.jpg); ${BG_COVER}`;        
    } else {
        // Regular background image.
        mainMovie.style.cssText = `background: ${SHADOW}, url(${coverUrl}${item}.jpg); ${BG_COVER}`;
    }

    watch.addEventListener('click', () => {
        vContainer.classList = 'container column';
        setTimeout(() => vContainer.style.cssText = FADE_IN, 1);
        video.innerHTML = play;
    });

    mainMovieTitle.innerHTML = `<img src="${titleUrl}${titleImg}" alt="${titleAlt}">`;
    mainMovieDescp.innerHTML = description;
}

// Go back to main screen.
main.ids.back.addEventListener('click', () => {
    const { ids, css } = main;
    ids.vContainer.style.cssText = css.FADE_OUT;
    setTimeout(() => ids.vContainer.classList = 'gone', 800);
});

// Showing off first movie of the list.
mainMovieCard(movieOrder[0]);

// Each movie icon receives a listener.
movieOrder.forEach(e => {
    document.getElementById(`item${e}`).addEventListener('click', () => {
        const scrolling = setInterval(() => {
            scroll(0, scrollY - 4);
            if (scrollY === 0)
                window.clearInterval(scrolling);
        }, 1);
        mainMovieCard(e);
    });
});

// jQuery carousel set.
$('.owl-carousel').owlCarousel({
    // Loop is disabled due event listeners issues.
    loop: false,
    dots: false,
    responsive: {
        0: { items: 1 },
        500: { items: 3 },
        1000: { items: 5 }
    }
});