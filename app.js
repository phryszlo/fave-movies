
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
      title: "images/cube/title.jpg",
      allyMatthew: "images/wargames/wargames-ally_matthew.jfif",
      broderick: "images/wargames/broderick.jpg",
      falken: "images/wargames/Stephen_Falken.webp",
      sheedy: "images/wargames/sheedy_ally1.jpg"
    }
  }
}


// ====================================================================




window.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("resize", windowResize);
  const topImg = document.querySelector(".top-img");
  topImg.src = movies.wargames.images.title;
  initVars();
  findCurrentCssRequirements();
})

let currentCss;
const mediaBreaks = [];


const initVars = () => {

  // this doesn't work because it always lists all three sheets & in the same order
  for (const sheet of document.styleSheets) {
    console.log(sheet.href.substring(sheet.href.lastIndexOf('/') + 1));
    currentCss = sheet.href.substring(sheet.href.lastIndexOf('/') + 1);
  }


  class mediaBreak {
    constructor(href, media) {
      this.href = href;
      this.media = media;
    }
  }

  // make an array to hold the css link attributes

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
            link.getAttribute('media').lastIndexOf(')') - 2
          )
      )
    )
  });

  console.log(mediaBreaks)

  let currentBreak = mediaBreaks.find(item => item.href === currentCss)
  console.log(`currentBreak = ${currentBreak.media}`)

}

const topImg = document.querySelector(".top-img");

const findCurrentCssRequirements = () => {
  
  const sm = mediaBreaks.find(item => item.href === 'sm.css').media;
  console.log(`sm = ${sm}`)
  const med = mediaBreaks.find(item => item.href === 'med.css').media;
  console.log(`med = ${med}`)
  const lg = mediaBreaks.find(item => item.href === 'lg.css').media;
  console.log(`lg = ${lg}`)

  // figure out which where our current width falls in the range

  const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
  console.log(`window innerWidth: ${window.innerWidth} vs document.documentElement.clientWidth${vw}`);

  // i'm not sure if vw is (as got ^^^) is what the @media query compares, but it seems probable

  if (vw < sm) {
    currentCss = sm;
    console.log('sm')
    topImg.src = movies.wargames.images.title;
    topImg.classList.remove("med", "lg");
    topImg.classList.add("sm");
  }
  else if (vw < med) {
    currentCss = med;
    console.log('med')
    topImg.src = movies.cube.images.title;
    topImg.classList.remove("sm", "lg");
    topImg.classList.add("med");
  }
  else {
    currentCss = lg;
    console.log('lg')
    topImg.src = movies.wargames.images.title;
    topImg.classList.remove("sm", "med");
    topImg.classList.add("lg");
  }
}

/*
  WINDOW RESIZE ()
*/
const windowResize = () => {
  findCurrentCssRequirements();
}



  // just wanted to know how to get vw from js
  // const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
  // console.log(`window innerWidth: ${window.innerWidth} vs document.documentElement.clientWidth${vw}`);