let projects = [
    {
        name: "CLICK ME:",
        class:"p1",
        portfolio:"https://oshwlab.com/jednalig/integrated-circuit-kit",
        lbl:"Integrated Circuit Board"
    },
    {
        name: "CLICK ME:",
        class:"p2",
        portfolio:"https://easyeda.com/account/user/projects/index/detail?project=7826fa8b095f4eaf807df8f4ddfc3d8b&folder=all",
        lbl:"UV light Control"
      },
    {
        name: "CLICK ME:",
        class:"p3",
        portfolio:"",
        lbl:"Arduino Weighing Scale with Load Cell & HX711 Module - Full Calibration"
    },
    {
        name: "CLICK ME:",
        class:"p4",
        portfolio:"",
        lbl:"Score Board Using At89c2051"
    },
    {
        name: "CLICK ME:",
        class:"p5",
        portfolio:"",
        lbl:"Lock System Using Fingerprint and Atmega"
    },
    {
        name: "CLICK ME:",
        class:"p6",
        portfolio:"",
        lbl:"Mini conveyor segrator using Sensors"
    },
   
]
let projects2 = [
  {
    name: "CLICK ME:",
    class:"g1",
    portfolio:"",
    tip:"Laundry Management System with SMS API"
},
{
    name: "CLICK ME:",
    class:"g2",
    portfolio:"",
    tip:"E-Calendar Management System"
},
{
    name: "CLICK ME:",
    class:"g3",
    portfolio:"",
    tip:"Attendance Face Recognition System(Machine Learning)"
},
{
    name: "CLICK ME:",
    class:"g4",
    portfolio:"",
    tip:"Online House Rental"
},
{
    name: "CLICK ME:",
    class:"g5",
    portfolio:"https://jednalig.github.io/Event-management/",
    tip:"Event Management Using QR code"
},
{
    name: "CLICK ME:",
    class:"g6",
    portfolio:"https://jednalig.github.io/eportfolio/",
    tip:"E-Magazine Travel Phil."
}
   
]



const projectContainer = document.querySelector('.mycontainourteam');

projects.forEach(project => {
    projectContainer.innerHTML += `
    <div class="block">
    <div class="wrapper">
    <div class="lid one"></div>
    <div class="lid two"></div>
    <div class="envelope tooltip" > <span class="tooltiptext">${project.lbl}</span></div>
    <div class="${project.class} letter">
    <a class="eport" href="${project.portfolio}">${project.name}</a>
    </div>
  </div>
  </block>
    `;
})
const projectContainer2 = document.querySelector('.mycontainourteam2');

projects2.forEach(project => {
    projectContainer2.innerHTML += `
    <div class="block">
    <div class="wrapper">
    <div class="lid one"></div>
    <div class="lid two"></div>
    <div class="envelope tooltip" > <span class="tooltiptext">${project.tip}</span></div>
    <div class="${project.class} letter">
    <a class="eport" href="${project.portfolio}">${project.name}</a>
    </div>
  </div>
  </block>
    `;
})

function shiftLeft() {
    const boxes = document.querySelectorAll(".box");
    const tmpNode = boxes[0];
    boxes[0].className = "box move-out-from-left";

    setTimeout(function() {
        if (boxes.length > 5) {
            tmpNode.classList.add("box--hide");
            boxes[5].className = "box move-to-position5-from-left";
        }
        boxes[1].className = "box move-to-position1-from-left";
        boxes[2].className = "box move-to-position2-from-left";
        boxes[3].className = "box move-to-position3-from-left";
        boxes[4].className = "box move-to-position4-from-left";
        boxes[0].remove();

        document.querySelector(".cards__container").appendChild(tmpNode);

    }, 500);

}

// skill
const carouselImages = document.querySelector('.carousel__images');
const images = document.querySelectorAll('.carousel__images img');
const carouselButtons = document.querySelectorAll('.carousel__button');
const numberOfImages = document.querySelectorAll('.carousel__images img').length;
let imageIndex = 1;
let translateX = 0;

carouselButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    if (event.target.id === 'previous') {
      if (imageIndex !== 1) {
        imageIndex--;
        translateX += 250;
      }
    } else {
      if (imageIndex !== numberOfImages) {
        imageIndex++;
        translateX -= 250;
      }
    }
    
    carouselImages.style.transform = `translateX(${translateX}px)`;
    images.forEach((image, index) => {
      if (index === imageIndex - 1) {
        image.classList.add('active');
      } else {
        image.classList.remove('active');
      }
    });
  });
});
