  // =================================================
// create a responsive navbar component ===============
// =====================================================
const mobile_nav = document.querySelector(".mobile-navbar-btn");
const headerElem = document.querySelector(".header");

mobile_nav.addEventListener("click", () => {
  headerElem.classList.toggle("active");
 });


// =================================================
// create a project tabbed component ===============
// =====================================================

const p_btns = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll(".p-btn");
const p_img_elem = document.querySelectorAll(".img-overlay");




p_btns.addEventListener('click', (e) => {
    const p_btn_clicked = e.target;
    console.log(p_btn_clicked);

    if (!p_btn_clicked.classList.contains("p-btn")) return;

    p_btn.forEach((curElem) => curElem.classList.remove("p-btn-active"));

    p_btn_clicked.classList.add("p-btn-active");

    // to find the number in data atrr ............
    const btn_num = p_btn_clicked.dataset.btnNum;
    console.log(btn_num);

    const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);


    p_img_elem.forEach((curElem) => curElem.classList.add("p-img-not-active"));
    
    img_active.forEach((curElem) => curElem.classList.remove("p-img-not-active"));  
});
//   sweper js code......... /''

      var swiper = new Swiper(".mySwiper", {
        slidesPerView: 2,
        spaceBetween: 30,
        // autoplay:{
        //   delay:2500,
        //  },    
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });

     const myJsmedia = (widthSize) => {
      if(widthSize.matches){
        new Swiper(".mySwiper",{
          slidesPerView: 1,
          spaceBetween: 30,
        });
      }else{
        new Swiper(".mySwiper", {
          slidesPerView: 2,
          spaceBetween: 30,
        });
      }
     };
     const widthSize = window.matchMedia("(max-width:780px)");
    //  call listener function at run time ===========
    myJsmedia(widthSize);
    // attach listener function on state changes ======
     widthSize.addEventListener("change", myJsmedia);

      // scrooll to top buttom......==============
      // ==========================================

      const herosection = document.querySelector(".section-hero");
      const footerElem = document.querySelector(".section-footer");

      const scroollElement = document.createElement("div");
      scroollElement.classList.add("scroolltop-style");

      scroollElement.innerHTML = `<ion-icon name="arrow-up-outline" class="scrolltop">
      </ion-icon>`;

      footerElem.after(scroollElement);

      const scroolltop = () => {
        herosection.scrollIntoView({behavior:"smooth"});
      };

      scroollElement.addEventListener("click", scroolltop);

      // animate number counter ================================

      const counterNum = document.querySelectorAll(".counter-number");


      const speed = 200;

      counterNum.forEach((curElem) => {
        const updateNumber = () => {
          const targetNumber = parseInt(curElem.dataset.number);
          // console.log(targetNumber);
          const initialNum = parseInt(curElem.innerText);
          // console.log(initialNum)

          const incrementNumber = Math.trunc(targetNumber / speed);
          //  console.log( incrementNumber);

           if (initialNum < targetNumber){
             curElem.innerText = `${initialNum + incrementNumber}+`;
             setTimeout(updateNumber, 10);
           }

        };

       updateNumber();
      });
      
      

        
      
