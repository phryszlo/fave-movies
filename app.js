
const movies = {
  wargames: {
    quotes: {
      synopsis: "A young computer whiz kid accidentally connects into a top secret super-computer which has complete control over the U.S. nuclear arsenal. It challenges him to a game between America and Russia, and he innocently starts the countdown to World War 3. Can he convince the computer he wanted to play a game and not the real thing ?",
      helpfulComment: "In no way is this one of the greatest movies ever made. But there's no question that it achieves the rare quality of transcending it's genre."
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
      synopsis: "Without remembering how they got there, several strangers awaken in a prison of cubic cells, some of them booby-trapped. There's onetime cop Quentin, scientist Holloway, young math genius Leaven, master of escapes Rennes, autistic savant Kazan  and architect Worth, who might have more information on the maze than he lets on. The prisoners must use their combined skills if they are to escape.",
      helpfulComment: "Another shining example of how my inadequacy in mathematics could be the end of me. I used to skip math class."
    },
    images: {
      title: "images/cube/title.jpg",
      kazan: "images/cube/kazan.png",
      what: "images/cube/cube-what.webp"
    }
  },
  darkcrystal: {
    quotes: {
      synopsis: "Jen, raised by the noble race called the Mystics, has been told that he is the last survivor of his own race, the Gelflings. He sets out to try to find a shard of the dark crystal, a powerful gem that once provided balance to the universe. After the crystal was broken, the evil Skeksis used sinister means to gain control. Jen believes that he can repair the dark crystal and bring peace back to the world, if he can only find the remaining shard.",
      helpfulComment: "I have read that DARK CRYSTAL was a commercial flop because it was released during the ET days, and not many people went to see it."
    },
    images: {
      title: "images/darkcrystal/title.png",
      mystic: "images/darkcrystal/mystic.jpg",
      skeksis: "images/darkcrystal/The_Emperor.webp"
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
  console.log(currentCss);

  let currentBreak = mediaBreaks.find(item => item.href === currentCss)
  console.log(`currentBreak = ${currentBreak.media}`)

}

const topImg = document.querySelector(".top-img");
const topBox = document.querySelector(".top-box");

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
    console.log(`sm... ${topBox}`)
    topImg.src = movies.wargames.images.title;
    topBox.classList.remove("med", "lg");
    topBox.classList.add("sm");
  }
  else if (vw < med) {
    console.log(`med... ${topBox}`)

    topImg.src = movies.cube.images.title;
    topBox.classList.remove("sm", "lg");
    topBox.classList.add("med");
  }
  else if (vw < lg){
    console.log(`lg... ${topBox}`)

    topImg.src = movies.darkcrystal.images.title;
    topBox.classList.remove("sm", "med");
    topBox.classList.add("lg");
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