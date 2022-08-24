
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
  for (const sheet of document.styleSheets) {
    currentCss = sheet;
    // console.log(sheet)//.href.substring(sheet.href.lastIndexOf('/') + 1));
  }

  // pull the name of the active stylesheet and set class accordingly
  // NOTE: this approach might become tedious if the class names are ever changed
  switch (currentCss.href.lastIndexOf('/') + 1) {
    case 'sm.css':
      console.log('sm')

      topImg.classList.remove("med", "lg");
      topImg.classList.add("sm");
      case 'med.css':
      console.log('med')
      topImg.classList.remove("sm", "lg");
      topImg.classList.add("med");
      case 'lg.css':
      console.log('lg')
      topImg.classList.remove("sm", "med");
      topImg.classList.add("lg");

  }
}