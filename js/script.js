$(function () {
  const lenis = new Lenis();

  lenis.on("scroll", (e) => {
    // console.log(e);
  });

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);
});

// For Circle Rotation
const orbitAnimation = gsap.timeline({ repeat: -1, ease: "linear" });
orbitAnimation.to(".orbit", {
  rotation: 360,
  duration: 10,
  repeat: "-1",
  scrub: 3,
});

const smallOrbitAnimation = gsap.timeline({ repeat: -1, ease: "linear" });
smallOrbitAnimation.to(".orbit.small", {
  rotation: -360,
  duration: 20,
  repeat: "-1",
  scrub: 3,
});

orbitAnimation.play();
smallOrbitAnimation.play();

gsap.to(".rotateImage, .rotateImageMob", {
  rotation: -360,
  repeat: -1,
  repeatDelay: 0,
  duration: 25,
  ease: "none",
});

const tl = gsap.timeline();
// Loader animations
tl.to(".loader svg path", {
  opacity: 1,
  duration: 1,
  stagger: 0.3,
});

tl.to(".loader svg path", {
  fill: "#1C6FF4",
  stroke: "#1C6FF4",
});

tl.to(".loader svg", {
  width: "min-content",
  height: "40px",
});

tl.from(".loader p", {
  opacity: 0,
  scale: 2,
  y: 200,
});

tl.to(".loader", {
  opacity: 0,
  delay: 2,
  display: "none",
});
// Loader animations

gsap.from(".hero_section", {
  opacity: 0,
  duration: 1.4,
  scrollTrigger: {
    trigger: ".hero_section",
    pin: true,
    start: "top top",
    end: "bottom -300%",
  },
});

const heroPage = gsap.timeline({
  scrollTrigger: {
    trigger: ".logoDiv img",
    start: "top 20%",
    end: "bottom -50%",
    yoyo: true,
    scrub: 4,
  },
});

heroPage.to(
  ".logoDiv img",
  {
    x: "58vw",
    y: 100,
    duration: 2,
    width: "217.12px",
  },
  "a"
);

heroPage.to(
  ".HeroImage",
  {
    x: "-35vw",
    y: 80,
    duration: 2,
    width: "250px",
    borderRadius: "100%",
  },
  "a"
);

heroPage.to(
  ".HeroImagetwo",
  {
    opacity: 1,
    duration: 2,
  },
  "a"
);

heroPage.to(
  ".heroImageTwoDiv span",
  {
    x: 300,
    y: -100,
    duration: 2,
    opacity: 1,
  },
  "a"
);

heroPage.to(
  ".halfCircleCss",
  {
    rotate: 45,
    duration: 2,
  },
  "a"
);

heroPage.to(
  ".hero_section .descDiv p",
  {
    opacity: 0,
    duration: 2,
  },
  "a"
);

gsap.from(".page1LastPart", {
  opacity: 0,
  x: 1000,
  duration: 3,
  scrollTrigger: {
    trigger: ".page1LastPart",
    // markers: true,
    start: "top -250%",
    end: "bottom top",
    yoyo: true,
    scrub: 3,
  },
});

// let mm = gsap.matchMedia();

// mm.add("(min-width: 1024px)", () => {
//   heroPage.to(".logoDiv img", {
//     x: 500,
//     y: 100,
//     duration: 2,
//     width: "217.12px",
//     scrollTrigger: {
//       trigger: ".logoDiv img",
//       start: "top top",
//       end: "bottom -50%",
//       yoyo: true,
//       markers: true,
//       scrub: 4,
//     },
//   });
// });

const secondPage = gsap.timeline({
  paused: true,
});

gsap.from(".work_section", {
  // opacity: 0,
  scrollTrigger: {
    trigger: ".work_section",
    start: "top center",
    end: "bottom top",
    onEnter: () => {
      secondPage.play();
      document.querySelector(".scrollToExplore").style.display = "none";
    },
    yoyo: true,
    scrub: 2,
  },
});

secondPage.from([".whatWeDoSectionOne h2", ".whatWeDoSectionOne p"], {
  opacity: 0,
  duration: 1,
  height: 0,
  overflow: "hidden",
  y: -50,
  ease: "power2.out",
  yoyo: true,
  scrub: true,
  stagger: 0.4,
});

// Click event handler
$("#goToSlider").on("click", function () {
  gsap.to(".whatWeDoSectionOne", {
    duration: 1.4,
    scrub: 4,
    position: "absolute",
    transform: "translateX(-2000px)",
    opacity: 0,
  });
  gsap.to(".whatWeDoSectionTwo", {
    opacity: 1,
    duration: 1.4,
    scrub: 4,
    transform: "translateX(0)",
    zIndex: 2,
  });
});

// parallex Effect on Hover
// function addParalax(element) {
//   let plusMinus = 1;
//   $(element).each(function (item, index) {
//     plusMinus = plusMinus == 1 ? -1 : 1;
//     $(this).attr("koef", plusMinus);
//   });

//   if ($(window).width() >= 992) {
//     $(window).on("mousemove", function (event) {
//       $(element).each(function (item, index) {
//         let el = $(this);
//         let ee = parseInt($(this).attr("koef"));
//         let coef = $(this).width() / 300;
//         transX = (event.pageX / $(window).width()) * 10 * ee * coef;
//         transY = (event.pageY / $(window).height()) * 10 * ee * coef;
//         if (el.parents("div").hasClass("heron__miletus")) {
//           $(".paralaxE").css(
//             "transform",
//             "translateX(" +
//               transX.toFixed(1) +
//               "px) translateY(" +
//               transY.toFixed(1) +
//               "px)"
//           );
//         }
//         el.css(
//           "transform",
//           "translateX(" +
//             transX.toFixed(1) +
//             "px) translateY(" +
//             transY.toFixed(1) +
//             "px)"
//         );
//       });
//     });
//   }
// }
// addParalax($(".logoDiv.paralax"));

// $("aside span").click(function () {
//   var panelToShow = $(this).attr("rel");
//   $(this).addClass("active").siblings().removeClass("active");

//   // Using GSAP for animation
//   gsap.to("main .panel.active", {
//     opacity: 0,
//     duration: 0.6,
//     onComplete: function () {
//       $(this.target).removeClass("active");
//       $("#" + panelToShow).addClass("active");
//       gsap.to("#" + panelToShow, { opacity: 1, duration: 0.6 });
//     },
//   });
// });

const sliderItems = [
  {
    imageSrc: "/images/1.png",
    title: "Techno Economic Viability (TEV) Studies​",
    description:
      "Data insights around demand, supply, pricing etc. to evaluate risks of a project to help developers, lender and investors gauge technological and market risks of a project.",
  },
  {
    imageSrc: "/images/2.png",
    title: "Go No-Go Study | To Build, Sell or Hold ?​",
    description:
      "Your land parcel is unique and it requires data and analysis of the catchment and the city as a whole, to determine whether you should build now or later, or maybe liquidate for better opportunities? Consider this, we’ll crunch at least a million data points to answer your question, clubbed with decades of experience​​",
  },
  {
    imageSrc: "/images/3.png",
    title: "Feasibility 2.0 | What to Build Here ?​",
    description:
      "Historical data points towards residential development but oversupply in future points at commercial possibilities. And then RAW team combines demographics to suggest maybe Co-living should be the focus here. Possibilities are endless, it is data that will guide us to your best decision.​​",
  },
  {
    imageSrc: "/images/4.png",
    title: "Product Planning​",
    description:
      "Floor plates and unit sizes are being determined by what is selling / leasing in the catchment, and RAW has it all. Amenities are evolving and so are parking configurations. Is your project, to be delivered 3 years from now, in sync with the demand that will arise at that time ?​​",
  },
  {
    imageSrc: "/images/5.png",
    title: "Benchmarking​",
    description:
      "The best projects and developers are succeeding because of unit level economics – unit sizes are in tune with demand. Brand mix in malls is no more confined to which floor F&B should be at? We are answering which brand should be next to each other to optimize Mall revenue. Say hello to Benchmarking 4.0​",
  },
  {
    imageSrc: "/images/6.png",
    title: "Valuations – Precise, Authentic & Smart​",
    description:
      "The best projects and developers are succeeding because of unit level economics – unit sizes are in tune with demand. Brand mix in malls is no more confined to which floor F&B should be at? We are answering which brand should be next to each other to optimize Mall revenue. Say hello to -Benchmarking 4.0​",
  },
];

// document.addEventListener("DOMContentLoaded", function () {
//   let index = 0;
//   let sliderContent = `<div class="whatWeDOSlider"><img src="${sliderItems[index].imageSrc}" alt="Image"><h3>${sliderItems[index].title}</h3><p>${sliderItems[index].description}​</p></div>`;
//   document.getElementById("whatWeDoMain").innerHTML = sliderContent;

//   function nextSlide() {
//     index = Math.min(index + 1, sliderItems.length - 1);
//     updateSliderContent();
//     toggleButtonVisibility();
//   }

//   function previousSlide() {
//     index = Math.max(index - 1, 0);
//     updateSliderContent();
//     toggleButtonVisibility();
//   }

//   function updateSliderContent() {
//     let sliderContent = `<div class="whatWeDOSlider whatWeDOSlider${index}"><img src="${sliderItems[index].imageSrc}" alt="Image"><h3>${sliderItems[index].title}</h3><p>${sliderItems[index].description}​</p></div>`;
//     document.getElementById("whatWeDoMain").innerHTML = sliderContent;
//     gsap.from(".whatWeDOSlider img", {
//       opacity: 0,
//       duration: 1,
//       ease: "power2.out",
//       scale: 0.7,
//       // scrub: 3,
//       // y: 50,
//     });

//     gsap.from([".whatWeDOSlider h3", ".whatWeDOSlider p"], {
//       opacity: 0,
//       duration: 1.3,
//       // height: 0,
//       overflow: "hidden",
//       // y: -50,
//       // yoyo: true,
//       ease: "power2.out",
//       scrub: 3,
//       // stagger: 0.4,
//     });
//   }

//   function toggleButtonVisibility() {
//     if (index === sliderItems.length - 1) {
//       console.log("hello");
//       document.getElementById("next").style.display = "none"; // Hide the "Next" button at the last slide
//     } else {
//       console.log("hello");
//       document.getElementById("next").style.display = "block"; // Show the "Next" button for other slides
//     }

//     if (index === 0) {
//       console.log("hello");
//       document.getElementById("prev").style.display = "none"; // Hide the "Previous" button at the first slide
//     } else {
//       console.log("hello");
//       document.getElementById("prev").style.display = "block"; // Show the "Previous" button for other slides
//     }
//   }

//   document.getElementById("next").addEventListener("click", nextSlide);
//   document.getElementById("prev").addEventListener("click", previousSlide);
// });

const thirdPage = gsap.timeline({
  paused: true,
});

// gsap.from(".reports_section", {
//   opacity: 0,
//   scrollTrigger: {
//     start: "top top",
//     end: "bottom bottom",
//     scrob: 3,
//     yoyo: true,
//   },
// });

gsap.from(".reports_section", {
  // opacity: 0,
  scrollTrigger: {
    trigger: ".reports_section",
    start: "top 20%",
    end: "bottom bottom",
    onEnter: () => {
      thirdPage.play();
    },
    scrub: 2,
  },
});

thirdPage.from(
  ".reportsSectionL",
  {
    x: 100,
    opacity: 0,
    duration: 1,
  },
  "b"
);

thirdPage.from(
  "img.layer",
  {
    opacity: 0,
    duration: 1,
  },
  "b"
);

thirdPage.from(
  ".reportsSectionR",
  {
    y: 100,
    opacity: 0,
    duration: 1,
  },
  "b"
);

thirdPage.from(
  ".boxShadowCircle",
  {
    x: 1000,
    duration: 1,
    opacity: 0,
  },
  "b"
);

const reportData = [
  {
    imageSrc: "/images/office.png",
    title: "Office Reports",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
  },
  {
    imageSrc: "/images/residential.png",
    title: "Residential Reports",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
  },
  {
    imageSrc: "/images/retail.png",
    title: "Retail Reports",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
  },
  {
    imageSrc: "/images/warehouse.png",
    title: "Warehousing Reports",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
  },
  {
    imageSrc: "/images/re.png",
    title: "RE Loans",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
  },
];

$(".navDots li").click(function () {
  var panelToShow = $(this).attr("rel");
  $(this).addClass("active").siblings().removeClass("active");
  $(".reportsSectionL img.active").removeClass("active");
  $("#" + panelToShow).addClass("active");
  $(".reportsSectionRInner").removeClass("active");
  $(".reportsSectionRInner[data-panel='" + panelToShow + "']").addClass(
    "active"
  );

  // GSAP animation for both elements
  gsap.fromTo(
    [".reportsSectionL img.active"],
    { opacity: 0, scale: 1 },
    { opacity: 1, scale: 1, duration: 1, ease: "power2.out" }
  );

  gsap.from(".reportsSectionRInner.active h2", {
    opacity: 0,
    duration: 1,
  });

  gsap.from(".reportsSectionRInner.active p", {
    opacity: 0,
    duration: 1,
  });
});

const forthPage = gsap.timeline({
  paused: true,
});

gsap.from(".ourServiceSection", {
  // opacity: 0,
  scrollTrigger: {
    trigger: ".ourServiceSection",
    start: "top top",
    end: "bottom bottom",
    onEnter: () => {
      forthPage.play();
    },
    onEnterBack: () => {
      forthPage.play();
    },
    // yoyo: true,
    // pin: true,
    scrub: 2,
  },
});

const fifthPage = gsap.timeline({
  paused: true,
});

gsap.to(".ourServiceSection", {
  scrollTrigger: {
    trigger: ".ourServiceSection",
    start: "top 10%",
    end: "bottom 50%",
    scrub: 2,
    // markers: true,
  },
});

const sixPage = gsap.timeline({
  paused: true,
});

gsap.to(".ourTeamSection", {
  scrollTrigger: {
    trigger: ".ourTeamSection",
    start: "top 10%",
    end: "bottom 50%",
    scrub: 2,
    // markers: true,
  },
});

const sevenPage = gsap.timeline({
  paused: true,
});

gsap.to(".reactUsSection", {
  scrollTrigger: {
    trigger: ".reactUsSection",
    start: "top 10%",
    end: "bottom 50%",
    scrub: 2,
    // markers: true,
  },
});

document.addEventListener("DOMContentLoaded", function () {
  let currentIndex = 0;
  const ourTeam = [
    {
      imgPath: "/images/team/1.png",
      name: "Abhishek Kiran Gupta",
      designation: "Co-founder & CEO",
    },
    {
      imgPath: "/images/team/2.png",
      name: "Abhishek Tiwari",
      designation: "Co-founder",
    },
    {
      imgPath: "/images/team/3.png",
      name: "Saurav Loharuka",
      designation: "Co-founder",
    },
    {
      imgPath: "/images/team/4.png",
      name: "Pranav Bhalla",
      designation: "Head - Research & Consulting",
    },
  ];

  function updateTeamSlider() {
    const teamMember = ourTeam[currentIndex];
    const sliderContent = `
      <div class="ourTeamSliderInner">
        <img src="${teamMember.imgPath}" alt="${teamMember.name}">
        <h2>${teamMember.name}</h2>
        <p>${teamMember.designation}</p>
      </div>
    `;
    document.querySelector(".ourTeamSlider").innerHTML = sliderContent;
    gsap.from(".ourTeamSlider img", {
      opacity: 0,
      duration: 1.2,
      ease: "power2.out",
      scrub: 5,
      // y: 50,
    });

    gsap.from([".ourTeamSlider h2", ".ourTeamSlider p"], {
      opacity: 0,
      duration: 1.3,
      // height: 0,
      overflow: "hidden",
      // y: -50,
      // yoyo: true,
      ease: "power2.out",
      scrub: 5,
      stagger: 0.4,
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % ourTeam.length;
    updateTeamSlider();
  }

  function previousSlide() {
    currentIndex = (currentIndex - 1 + ourTeam.length) % ourTeam.length;
    updateTeamSlider();
  }

  // Initial setup
  updateTeamSlider();

  // Event listeners for next and previous buttons
  document.querySelector(".next-team").addEventListener("click", nextSlide);
  document.querySelector(".prev-team").addEventListener("click", previousSlide);
});

// Search Dropdown
$(document).on("click", function (event) {
  if (
    !$(event.target).closest(
      ".searchDropdownContent, .searchDropdownInputWithIcon"
    ).length
  ) {
    $(".searchDropdownContent").removeClass("show");
    $(".searchDropdownMain").removeClass("borderReaiusClass");
  }
});

$(".searchDropdownInputWithIcon input").click(function (event) {
  event.stopPropagation(); // Prevent event from bubbling up to document
  $(".searchDropdownContent").addClass("show");
  $(".searchDropdownMain").addClass("borderReaiusClass");
});

$(".searchDropdownContent .w3-black button").on("click", function (event) {
  let panelToShow = $(this).attr("rel");
  // console.log(panelToShow)
  $(".serviceContent").removeClass("active");
  $("#" + panelToShow).addClass("active");
  // console.log($(".ourServiceL button[rel='" + panelToShow + "']"));
  $(".ourServiceL button[rel='" + panelToShow + "']")
    .addClass("active")
    .siblings()
    .removeClass("active");
});

// Define array of objects for services

const Developers = [
  { name: "Valuations", passing_name: "ValuationsDeveloper" },
  { name: "Feasibility Study", passing_name: "FeasibilityDeveloper" },
  { name: "Highest & Best Use Study", passing_name: "HBUDeveloper" },
  { name: "Predictive Analytics", passing_name: "PredictiveDeveloper" },
  { name: "Product Planning", passing_name: "ProductDeveloper" },
  { name: "Financial Feasibility", passing_name: "FinancialDeveloper" },
  { name: "Macro-market Research", passing_name: "MacroDeveloper" },
  { name: "TEV Study", passing_name: "TEVDeveloper" },
  { name: "Site Selection & Location Strategy", passing_name: "SiteDeveloper" },
  { name: "Strategic Planning for Growth", passing_name: "StrategicDeveloper" },
];

const Occupier = [
  { name: "Rental Benchmarking", passing_name: "RentalBenchmarkingOccupier" },
  { name: "Location Strategy", passing_name: "LocationStrategyOccupier" },
];

const Investors = [
  { name: "Investment Advisory", passing_name: "InvestmentAdvisoryInvestor" },
  { name: "Valuations", passing_name: "ValuationsInvestor" },
  { name: "Feasibility Study", passing_name: "FeasibilityInvestor" },
  { name: "Predictive Analytics", passing_name: "PredictiveInvestor" },
  { name: "Macro-market Research", passing_name: "MacroInvestor" },
];

const renderList = (data, listId, clickHandler) => {
  const listData = data.map(
    (val) =>
      `<li onClick="${clickHandler}('${val.passing_name}')">${val.name}</li>`
  );
  $(`#${listId} ul`).html(listData);
};

const filterList = (data, listId) => {
  const searchTerm = $("#searchInput").val().toLowerCase();
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm)
  );
  renderList(filteredData, listId);
};

renderList(Developers, "Developers", "openTabDeveloper");
renderList(Investors, "Investors", "openTabInvestor");
renderList(Occupier, "Occupier", "openTabOccupier");
// renderList(Banks, "Banks");
// renderList(Brokers, "Brokers");

$("#searchInput").on("input", function () {
  filterList(Developers, "Developers", "openTabDeveloper");
  filterList(Investors, "Investors", "openTabInvestor");
  filterList(Occupier, "Occupier", "openTabOccupier");
  // filterList(Banks, "Banks");
  // filterList(Brokers, "Brokers");
});

function selectTabs(cityName) {
  var i;
  var x = document.getElementsByClassName("city");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(cityName).style.display = "block";
}

// Modal JS
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
var btn = document.querySelector(".myBtn");

btn.onclick = function () {
  var modal = document.querySelector(".modal");
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

$(".ourServiceL button").click(function () {
  var panelToShow = $(this).attr("rel");
  $(this).addClass("active").siblings().removeClass("active");

  // Using GSAP for animation
  $(".serviceContent").removeClass("active");
  $("#" + panelToShow).addClass("active");
});

let researchDataEndpoint = "http://3.7.95.255:81";

$(document).ready(function () {
  // Initialize the page number
  let currentPage = 1;
  let reportType = 1;

  // Function to fetch data and update UI
  function fetchDataAndUpdateUI(pageNumber, reportType) {
    var form = new FormData();
    form.append("data[page]", pageNumber);
    form.append("no_of_records", "8");
    form.append("data[industry][]", reportType);

    const settings = {
      url: `${researchDataEndpoint}/api/research/get_reports_list`,
      method: "POST",
      timeout: 0,
      processData: false,
      mimeType: "multipart/form-data",
      contentType: false,
      data: form,
    };

    $.ajax(settings).done(function (response) {
      let parseResponse = JSON.parse(response);
      let data = parseResponse.data;

      // Looping Data
      let responseHTML = "";
      for (let i = 0; i < data.length; i++) {
        let responseDiv = `<div id=${data[i].id} class="viewReportsSectionRInner"><img src=${data[i].thumbnail_1_url} alt=${data[i].title}></div>`;
        responseHTML += responseDiv;
      }
      document.querySelector(".viewReportsSectionRMain").innerHTML =
        responseHTML;

      // Pagination Logic
      let total_count = parseResponse.total_count;
      let elementsPerPage = 8;
      let totalPages = Math.ceil(total_count / elementsPerPage);
      let paginationList = document.querySelector(".pagination");
      paginationList.innerHTML = "";

      for (let i = 1; i <= totalPages; i++) {
        let listItem = document.createElement("li");
        if (i === pageNumber) {
          listItem.classList.add("active");
        }
        paginationList.appendChild(listItem);

        listItem.addEventListener("click", function () {
          currentPage = i;
          fetchDataAndUpdateUI(currentPage, reportType);
        });
      }
    });
  }

  // Initial call to fetch data with default reportType
  fetchDataAndUpdateUI(currentPage, reportType);

  // Event listener for changing reportType
  $(".viewReportsSectionL ul li").on("click", function () {
    $(this).addClass("active").siblings().removeClass("active");
    // $(".viewReportsModalTwo").css("display", "none");
    gsap.to(".viewReportsModalTwo", {
      opacity: 0,
      visibility: "hidden",
      display: "none",
      duration: 1.7,
    });
    reportType = $(this).attr("data-val");
    fetchDataAndUpdateUI(currentPage, reportType);
  });
});

$(".btnGroup .withNoBg").on("click", function () {
  $(".viewReportsSection").css({
    display: "block",
    opacity: 1,
    visibility: "visible",
  });
  // gsap.to(".viewReportsSection", {
  //   display: "block",
  //   opacity: 1,
  //   visibility: "visible",
  //   // duration: 1.5,
  // });
});

$("#goBackToReport").on("click", function () {
  // gsap.to(".viewReportsSection", {
  //   display: "none",
  //   opacity: 0,
  //   visibility: "hidden",
  //   // duration: 1.5,
  // });
  $(".viewReportsSection").css({
    display: "none",
    opacity: 0,
    visibility: "hidden",
  });
});

$(document).ready(function () {
  $("body").on("click", ".viewReportsSectionRInner", function () {
    let currentElement = $(this).attr("id");

    var form = new FormData();
    var settings = {
      url: `${researchDataEndpoint}/api/research/report_details/${currentElement}`,
      method: "GET",
      timeout: 0,
      processData: false,
      mimeType: "multipart/form-data",
      contentType: false,
      data: form,
    };

    $.ajax(settings).done(function (response) {
      let parseResponse = JSON.parse(response);
      let data = parseResponse.data.report_details;
      let specificElementData = `<div class="viewReportsSectionRModalL position-relative"><img src=${
        data.thumbnail_2_url
      } alt=${data.report_name}> <span>
      ${parseResponse.data.insights_type[data.insights_type]}
      |
      ${parseResponse.data.industry[data.industry]} 
      </span> 
      <h2>${data.report_name}</h2><h3>${
        data.report_date
      }</h3><button data-id=${currentElement}>Download</button></div><div class="viewReportsSectionRModalR"><p>${
        data.long_desc
      }</p></div>`;
      $(".viewReportsSectionRModal").html(specificElementData);
      $(".downloadModal #reportHiddenId").val(window.btoa(currentElement));

      $(document).ready(function () {
        // Show modal on button click
        $(".viewReportsSectionRModalL button").on("click", function () {
          $("#downloadReport").css("display", "grid");
        });

        // Close modal when close button is clicked
        $(".close").on("click", function () {
          $("#downloadReport").css("display", "none");
        });

        // Close modal when clicking outside the modal
        $(window).on("click", function (event) {
          if ($(event.target).is("#downloadReport")) {
            $("#downloadReport").css("display", "none");
          }
        });
      });

      // gsap.to(".viewReportsModalTwo", {
      //   opacity: 1,
      //   visibility: "visible",
      //   display: "block",
      //   // duration: 1.7,
      // });
      $(".viewReportsModalTwo").css({
        display: "block",
        opacity: 1,
        visibility: "visible",
      });

      $("#goBackToReportMain").on("click", function () {
        // gsap.to(".viewReportsModalTwo", {
        //   opacity: 0,
        //   visibility: "hidden",
        //   display: "none",
        //   duration: 1.7,
        // });
        $(".viewReportsModalTwo").css({
          display: "none",
          opacity: 0,
          visibility: "hidden",
        });
      });
    });
  });
});

// captcha
function get_action(form) {
  var v = grecaptcha.getResponse();
  if (v.length == 0) {
    document.getElementById("captcha").innerHTML =
      "You can't leave Captcha Code empty";
    return false;
  } else {
    document.getElementById("captcha").innerHTML = "Captcha completed";
    return true;
  }
}

$(document).ready(function () {
  $("body").on("submit", "#downloadReport form", function (e) {
    e.preventDefault();
    var formData = $(this).serialize();
    var mobile = $("#mobileNumber").val();
    if (mobile && mobile.length === 10) {
      $.ajax({
        url: `${researchDataEndpoint}/api/download-report/add`,
        type: "POST",
        data: formData,
        success: function (response) {
          let parseResponse = JSON.parse(response);
          if (parseResponse.error.length > 0) {
            $(".errBox").css("display", "block");
            $(".errBox").css("background", "red");
            $(".errBox").text(parseResponse.error[0]);
            setTimeout(() => {
              $(".errBox").css("display", "none");
            }, 4000);
          } else {
            let data = parseResponse.data.download_link;
            let downloadLink = `http://3.7.95.255:81${data}`;
            let successMsg = data.success;
            window.open(downloadLink, "_blank");
            $(".errBox").css("display", "block");
            $(".errBox").css("background", "#1c6ff4");
            $(".errBox").text(parseResponse.success[0]);
            setTimeout(() => {
              $(".errBox").css("display", "none");
            }, 4000);
          }
        },
      });
    }
  });
});

// Form Submit
$(document).ready(function () {
  $("#myForm2").submit(function (e) {
    e.preventDefault();

    var errorMessages = {
      full_name: "Please enter your full name",
      email: "Please enter a valid email address",
      phone: "Mobile Number must be 10 digits",
      company: "Please enter your company name",
      message: "Please enter your message",
    };

    $(".errmsg").text("");

    function clearErrorMessage(inputField) {
      $(inputField).next(".errmsg").text("");
    }
    $("input, textarea").on("input", function () {
      clearErrorMessage(this);
    });

    // Validate each input field
    let isValid = true;
    $("#myForm2 input, #myForm2 textarea").each(function () {
      var fieldName = $(this).attr("name");
      var errorMessage = errorMessages[fieldName];
      if (!$(this).val()) {
        $(this).next(".errmsg").text(errorMessage);
        isValid = false;
      }
    });

    // Validate email
    var email = $('input[name="email"]').val();
    if (email && !isValidEmail(email)) {
      $('input[name="email"]')
        .next(".errmsg")
        .text("Please enter a valid email address");
      isValid = false;
    }

    // Validate mobile number
    var mobile = $("#mobileNumber").val();
    if (mobile && mobile.length !== 10) {
      $("#mobileNumber").next(".errmsg").text("Phone number must be 10 digits");
      isValid = false;
    }

    if (isValid) {
      $(".formInner button").prop("disabled", true);
      var formData = $(this).serialize();
      $.ajax({
        url: `${researchDataEndpoint}/api/download-report/add`,
        type: "POST",
        data: formData,
        success: function (data, textStatus, jqXHR) {
          let thankYouDiv = `<div class="thankYouContainer"><img src="images/cre.svg" alt="CRE Matrix & RAW"><h4>Thanks for Reaching Out!</h4><img src="images/hands.png" alt="CRE Matrix & RAW" class="shakeHands"><h4>We'll be in touch soon to <br> discuss how RAW can help you.</h4></div>`;
          $(".ourServiceR").html(thankYouDiv);
          gsap.to(".thankYouContainer", {
            opacity: 1,
            display: "block",
            transform: "rotateY(0deg)",
          });
          $(".formInner button").prop("disabled", false);
          $("#myForm")[0].reset();
        },
        error: function (jqXHR, textStatus, errorThrown) {
          $("#myForm")[0].reset();
          $(".errBox").css("display", "block");
          $(".errBox").text("Something went wrong");
          setTimeout(() => {
            $(".errBox").css("display", "none");
          }, 4000);
        },
      });
    }
  });

  function isValidEmail(email) {
    var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  }
});

$(".serviceContentLists ul li").on("click", function () {
  $(this).addClass("active").siblings().removeClass("active");
  gsap.from(".serviceContent h2", {
    opacity: 0,
    y: -20,
    duration: 1.9,
    ease: "power4.out",
  });
  gsap.from(".serviceContent p", {
    opacity: 0,
    y: -20,
    duration: 1.9,
    ease: "power4.out",
  });
});

function openTab(tabName, tabContentClass) {
  $(".searchDropdownContent").removeClass("show");
  $(".searchDropdownMain").removeClass("borderReaiusClass");
  var tabcontent = document.getElementsByClassName(tabContentClass);
  for (var i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  // console.log(tabName, tabContentClass);
  document.querySelector(`[data-id='${tabName}']`).style.display = "block";
  event.currentTarget.classList.add("active");
}

function openTabDeveloper(tabName) {
  openTab(tabName, "developerTabcontent");
}

function openTabInvestor(tabName) {
  openTab(tabName, "investorTabcontent");
}

function openTabOccupier(tabName) {
  openTab(tabName, "occupierTabcontent");
}

let heroSection = document
  .querySelector(".hero_section")
  .getBoundingClientRect();

let workSection = document
  .querySelector(".work_section")
  .getBoundingClientRect();

let reportsSection = document
  .querySelector(".reports_section")
  .getBoundingClientRect();

let ourServiceSection = document
  .querySelector(".ourServiceSection")
  .getBoundingClientRect();

$(".searchDropdownTabContent").on("click", function () {
  // $(window).scrollTo(0, 5120.7998046875);
  window.scrollTo({
    top: ourServiceSection.top,
    left: 0,
    behavior: "smooth",
  });
});

let ourTeamSection = document
  .querySelector(".ourTeamSection")
  .getBoundingClientRect();

let reactUsSection = document
  .querySelector(".reactUsSection")
  .getBoundingClientRect();

$(window).scroll(function (event) {
  let scroll = $(window).scrollTop();
  if (scroll < workSection.top) {
    $("aside .asideTab1").addClass("active").siblings().removeClass("active");
  }
});

$(window).scroll(function (event) {
  let scroll = $(window).scrollTop();
  console.log(scroll, workSection.top);
  if (scroll > workSection.top && scroll < workSection.bottom) {
    $("aside .asideTab2").addClass("active").siblings().removeClass("active");
  }
});

$(window).scroll(function (event) {
  let scroll = $(window).scrollTop();
  if (scroll >= reportsSection.top && scroll < reportsSection.bottom) {
    $("aside .asideTab3").addClass("active").siblings().removeClass("active");
  }
});

$(window).scroll(function (event) {
  let scroll = $(window).scrollTop();
  if (scroll >= ourServiceSection.top && scroll < ourServiceSection.bottom) {
    $("aside .asideTab4").addClass("active").siblings().removeClass("active");
  }
});

$(window).scroll(function (event) {
  let scroll = $(window).scrollTop();
  if (scroll >= ourTeamSection.top && scroll < ourTeamSection.bottom) {
    $("aside .asideTab5").addClass("active").siblings().removeClass("active");
  }
});

$(window).scroll(function (event) {
  let scroll = $(window).scrollTop();
  if (scroll >= ourTeamSection.bottom) {
    $("aside .asideTab6").addClass("active").siblings().removeClass("active");
  }
});

$("aside a").on("click", function () {
  setTimeout(() => {
    $(this).addClass("active").siblings().removeClass("active");
  }, 50);
  $(".viewReportsSection").css("display", "none");
  $(".viewReportsModalTwo").css("display", "none");
});

$(".ourServiceL button").on("click", function () {
  $(this).addClass("active").siblings().removeClass("active");
});

$(".searchDropdownContent button").on("click", function () {
  $(this).addClass("active").siblings().removeClass("active");
});

new Glide(".glide.workSectioGlide", {
  type: "carousel",
  startAt: 0,
  focusAt: "center",
  perView: 2.5,
  breakpoints: {
    1199: {
      perView: 1.9
    },
    1024: {
      perView: 1
    },
    // Add more breakpoints as needed
  }
}).mount();
