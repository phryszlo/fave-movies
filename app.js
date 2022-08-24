
const movies = {
  wargames: {

    quotes: {
      synopsis: "A young computer whiz kid accidentally connects into a top secret super-computer which has complete control over the U.S. nuclear arsenal. It challenges him to a game between America and Russia, and he innocently starts the countdown to World War 3. Can he convince the computer he wanted to play a game and not the real thing ?",
      helpfulComment: "In no way is this one of the greatest movies ever made. But there's no question that it achieves the rare quality of transcending it's genre.",

    },

    images: {
      title: "images/wargames/title.png",
      allyMatthew: "images/wargames/wargames-ally_matthew.jfif",
      broderick: "images/wargames/broderick.jpg",
      falken: "images/wargames/Stephen_Falken.webp",
      sheedy: "images/wargames/sheedy_ally1.jpg"
    }
  },

  cube: {

    quotes: {
      synopsis: "",
      helpfulComment: "",

    },

    images: {
      title: "images/cube/cube-name.jpg",
      allyMatthew: "images/wargames/wargames-ally_matthew.jfif",
      broderick: "images/wargames/broderick.jpg",
      falken: "images/wargames/Stephen_Falken.webp",
      sheedy: "images/wargames/sheedy_ally1.jpg"
    }
  }
}

window.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("resize", windowResize);
  const topImg = document.querySelector(".top-img");
  topImg.src = movies.wargames.images.title;
})

const windowResize = () => {
  const topImg = document.querySelector(".top-img");

  // just wanted to know how to get vw from js
  // const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
  // console.log(`window innerWidth: ${window.innerWidth} vs document.documentElement.clientWidth${vw}`);

  let currentCss;

  // this doesn't work because it always lists all three sheets & in the same order
  for (const sheet of document.styleSheets) {
    console.log(sheet.href.substring(sheet.href.lastIndexOf('/') + 1));
    currentCss = sheet.href.substring(sheet.href.lastIndexOf('/') + 1);
  }

  /* so I'm doing this instead:
        hold the media break and the name of the css file in a key:value (a class) array
        so we can line them up ourselves.
     Concern: this seems like a bunch of work to do on every resize event,
              but I'm thinking that doesn't happen too very often? Don't know.
  */
  class mediaBreak {
    constructor(href, media) {
      this.href = href;
      this.media = media;
    }
  }

  // make an array to hold the css link attributes
  const mediaBreaks = [];

  const links = document.querySelectorAll('link');
  links.forEach(link => {
    console.log(link.getAttribute('media')
      .substring(link.getAttribute('media').lastIndexOf(": ") + 2,
        link.getAttribute('media').lastIndexOf(')')));

    mediaBreaks.push(
      new mediaBreak(
        link.getAttribute('href'),
        link.getAttribute('media')
          .substring(link.getAttribute('media').lastIndexOf(": ") + 2,
            link.getAttribute('media').lastIndexOf(')')
          )
      )
    )
  });

  console.log(mediaBreaks)







  // pull the name of the active stylesheet and set class accordingly
  // NOTE: this approach might become tedious if the class names are ever changed
  switch (currentCss) {
    case 'sm.css':
      console.log('sm')

      topImg.classList.remove("med", "lg");
      topImg.classList.add("sm");
      break;
    case 'med.css':
      console.log('med')
      topImg.classList.remove("sm", "lg");
      topImg.classList.add("med");
      break;
    case 'lg.css':
      console.log('lg')
      topImg.classList.remove("sm", "med");
      topImg.classList.add("lg");
      break;
    default:
      break;

  }
}