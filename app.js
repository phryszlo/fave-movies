
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
  }
}

window.addEventListener("DOMContentLoaded", () => {
  const topImg = document.querySelector(".top-img");
  topImg.src = movies.wargames.images.title;
})