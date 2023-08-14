let scrollContainer = document.querySelector(".gallery");
let backbtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");
 
scrollContainer.addEventListener("wheel", (e) => {
    e.preventDefault();
    scrollContainer.scrollLeft += e.deltaY;  /*The deltaY property returns a positive value when scrolling down, and a negative value when scrolling up, otherwise 0.*/
    scrollContainer.style.scrollBehavior = "auto";

})

nextBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth" 
    scrollContainer.scrollLeft += 900;   // 900 becuase it is the width of the gallery

})


backBtn.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft -= 900;
});