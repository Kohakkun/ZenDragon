const book = document.querySelector(".book");
const pages = document.querySelectorAll(".pages");
const apages = document.querySelectorAll(".apage");
const cover = document.querySelector(".cover");
const texts = document.querySelectorAll(".storyLine");
const page1 = document.querySelector(".page1");
const page2 = document.querySelector(".page2");
const page3 = document.querySelector(".page3");
const page4 = document.querySelector(".page4");
const page5 = document.querySelector(".page5");
const page6 = document.querySelector(".page6");
const apage1 = document.querySelector(".apages1");
const apage2 = document.querySelector(".apages2");
const apage3 = document.querySelector(".apages3");
const apage4 = document.querySelector(".apages4");
const apage5 = document.querySelector(".apages5");
const backCover = document.querySelector(".back-cover");
const btnBack = document.querySelector(".btnBack");
const map = document.querySelector(".mapDiv");
const fullView = document.querySelector(".FullViewBtn");
const mapCover = document.querySelector(".mapCover");
const bookPart = document.querySelector(".bookPart");
const newwidth = cover.offsetWidth + 200;
let flip1 = false;
let flip2 = false;
let flip3 = false;
let flip4 = false;
let flip5 = false;

let coverAnimation = false;
let apage5Animation = false;

for (let i = 0; i < pages.length - 1; i++) {
  const page = pages[i];
  page.addEventListener("mouseenter", () => {
    if (!apage5Animation && !coverAnimation) {
      backCover.style.boxShadow = "0px 0px 20px 5px rgb(255, 255, 255)";
    }
  });

  page.addEventListener("mouseleave", () => {
    backCover.style.boxShadow = "none";
  });
}

bookPart.addEventListener("mouseenter", () => {
  const coverStyle = window.getComputedStyle(cover);
  if (coverStyle.getPropertyValue("z-index") === "0" && !apage5Animation) {
    coverAnimation = true;
    let currentPage = -21;
    cover.style.transform = `translateX(${newwidth - 50}px)`;
    cover.style.transitionDuration = "0.6s";
    apages.forEach((apage, index) => {
      setTimeout(() => {
        apage.style.transitionDuration = "0.6s";
        apage.style.transform = `translateX(${newwidth - 50}px)`;
      }, 1000 + index * 300);
    });
    setTimeout(() => {
      cover.style.zIndex = -20;
      apages.forEach((apage, index) => {
        setTimeout(() => {
          apage.style.zIndex = currentPage--;
        }, 1000 + index * 300);
      });
      setTimeout(() => {
        cover.style.transform = `translateX(0px)`;
        apages.forEach((apage, index) => {
          setTimeout(() => {
            apage.style.transform = `translateX(0px)`;
          }, 1000 + index * 300);
        });
      }, 100);
    }, 400);
    setTimeout(() => {
      coverAnimation = false;
    }, 4000);
  }
});

cover.addEventListener("mouseenter", () => {
  const coverStyle = window.getComputedStyle(cover);
  if (coverStyle.getPropertyValue("z-index") === "0" && !apage5Animation) {
    coverAnimation = true;
    let currentPage = -21;
    cover.style.transform = `translateX(${newwidth - 50}px)`;
    cover.style.transitionDuration = "0.6s";
    apages.forEach((apage, index) => {
      setTimeout(() => {
        apage.style.transitionDuration = "0.6s";
        apage.style.transform = `translateX(${newwidth - 50}px)`;
      }, 1000 + index * 300);
    });
    setTimeout(() => {
      cover.style.zIndex = -20;
      apages.forEach((apage, index) => {
        setTimeout(() => {
          apage.style.zIndex = currentPage--;
        }, 1000 + index * 300);
      });
      setTimeout(() => {
        cover.style.transform = `translateX(0px)`;
        apages.forEach((apage, index) => {
          setTimeout(() => {
            apage.style.transform = `translateX(0px)`;
          }, 1000 + index * 300);
        });
      }, 100);
    }, 400);
    setTimeout(() => {
      coverAnimation = false;
    }, 4000);
  }
});

apage5.addEventListener("click", () => {
  const coverStyle = window.getComputedStyle(cover);
  if (!coverAnimation && !flip1) {
    let counter = -5;
    const transitionDuration = 0.6;
    const delayIncrement = 200; 
    const delayBeforeCoverAnimation = 2000; 

    for (let index = 5; index > 0; index--) {
      const pageIndex = apages.length - 1 - index;
      if (pageIndex >= 0) {
        const delayBeforeTransition = 500 * index;
        setTimeout(() => {
          apages[
            pageIndex
          ].style.transition = `transform ${transitionDuration}s ease`;
          apages[pageIndex].style.transform = `translateX(${newwidth}px)`;
          setTimeout(() => {
            setTimeout(() => {
              apages[pageIndex].style.zIndex = counter++;
              apages[
                pageIndex
              ].style.transition = `transform ${transitionDuration}s ease`;
              apages[pageIndex].style.transform = `translateX(0px)`;
            }, delayIncrement);
          }, delayBeforeCoverAnimation);
        }, delayBeforeTransition);
      }
    }

    setTimeout(() => {
      cover.style.transition = `transform ${transitionDuration}s ease`;
      cover.style.transform = `translateX(${newwidth}px)`;
      setTimeout(() => {
        cover.style.zIndex = 0;
        cover.style.transition = `transform ${transitionDuration}s ease`;
        cover.style.transform = `translateX(0px)`;
        setTimeout(() => {
          apage5Animation = false;
        }, 1000);
      }, 1000);
    }, 4000);
  }
});

page1.addEventListener("click", () => {
  const text1 = document.querySelector(".page1 .storyLine1");
  const img1 = document.querySelector(".imgStory1");
  if (!apage5Animation) {
    if (!flip1) {
      page1.style.transitionDuration = "1.2s";
      page1.style.transform = `translateX(${newwidth}px)`;
      setTimeout(() => {
        page1.style.zIndex = -26;
        setTimeout(() => {
          page1.style.transform = `translateX(0px)`;
        }, 100);
      }, 400);

      flip1 = true;
    } else if (flip1) {
      page1.style.transitionDuration = "2s";
      page1.style.transform = `translateX(${newwidth}px)`;
      page1.style.zIndex = -6;
      setTimeout(() => {
        page1.style.transform = `translateX(0px)`;
      }, 1300);
      flip1 = false;
    }
  }
});

page2.addEventListener("click", () => {
  const text2 = document.querySelector(".page2 .storyLine2");
  const img2 = document.querySelector(".imgStory2");
  if (!apage5Animation) {
    if (!flip2) {
      page2.style.transitionDuration = "1.2s";
      page2.style.transform = `translateX(${newwidth}px)`;
      setTimeout(() => {
        page2.style.zIndex = -27;
        setTimeout(() => {
          page2.style.transform = `translateX(0px)`;
        }, 100);
      }, 400);

      flip2 = true;
    } else if (flip2) {
      page2.style.transitionDuration = "2s";
      page2.style.transform = `translateX(${newwidth}px)`;
      page2.style.zIndex = -7;
      setTimeout(() => {
        page2.style.transform = `translateX(0px)`;
      }, 1300);
      flip2 = false;
    }
  }
});

page3.addEventListener("click", () => {
  const text3 = document.querySelector(".page3 .storyLine3");
  const img3 = document.querySelector(".imgStory3");
  if (!apage5Animation) {
    if (!flip3) {
      page3.style.transitionDuration = "1.2s";
      page3.style.transform = `translateX(${newwidth}px)`;
      setTimeout(() => {
        page3.style.zIndex = -28;
        setTimeout(() => {
          page3.style.transform = `translateX(0px)`;
        }, 100);
      }, 400);

      flip3 = true;
    } else if (flip3) {
      page3.style.transitionDuration = "2s";
      page3.style.transform = `translateX(${newwidth}px)`;
      page3.style.zIndex = -8;
      setTimeout(() => {
        page3.style.transform = `translateX(0px)`;
      }, 1300);
      flip3 = false;
    }
  }
});

page4.addEventListener("click", () => {
  const text4 = document.querySelector(".page4 .storyLine4");
  const img4 = document.querySelector(".imgStory4");
  if (!apage5Animation) {
    if (!flip4) {
      page4.style.transitionDuration = "1.2s";
      page4.style.transform = `translateX(${newwidth}px)`;
      setTimeout(() => {
        page4.style.zIndex = -29;
        setTimeout(() => {
          page4.style.transform = `translateX(0px)`;
        }, 100);
      }, 400);

      flip4 = true;
    } else if (flip4) {
      page4.style.transitionDuration = "2s";
      page4.style.transform = `translateX(${newwidth}px)`;
      page4.style.zIndex = -9;
      setTimeout(() => {
        page4.style.transform = `translateX(0px)`;
      }, 1300);
      flip4 = false;
    }
  }
});

page5.addEventListener("click", () => {
  const text5 = document.querySelector(".page5 .storyLine5");
  const img5 = document.querySelector(".imgStory5");
  if (!apage5Animation) {
    if (!flip5) {
      page5.style.transitionDuration = "1.2s";
      page5.style.transform = `translateX(${newwidth}px)`;
      setTimeout(() => {
        page5.style.zIndex = -30;
        setTimeout(() => {
          page5.style.transform = `translateX(0px)`;
        }, 100);
      }, 400);
      flip5 = true;
    } else if (flip5) {
      page5.style.transform = `translateX(${newwidth}px)`;
      page5.style.zIndex = -10;
      setTimeout(() => {
        page5.style.transform = `translateX(0px)`;
      }, 1300);
      flip5 = false;
    }
  }
});

btnBack.addEventListener("click", () => {
  page5.click();
  setTimeout(() => {
    page4.click();
  }, 1000);
  setTimeout(() => {
    page3.click();
  }, 2000);
  setTimeout(() => {
    page2.click();
  }, 3000);
  setTimeout(() => {
    page1.click();
  }, 4000);
  setTimeout(() => {
    apage5.click();
  }, 5000);
});

let fV = false;
fullView.addEventListener("click", () => {
  fullView.classList.add("active");
  btnBack.classList.add("active");

  setTimeout(() => {
    map.classList.add("active");
  }, 200);

  page6.style.zIndex = 12;
  fV = true;
});

document.body.addEventListener("click", (event) => {
  if (!mapCover.contains(event.target) && fV) {
    map.classList.remove("active");
    map.style.backgroundSize = "cover";
    mapCover.style.backgroundColor = "transparent";
    btnBack.classList.remove("active");
    setTimeout(() => {
      fullView.classList.remove("active");
    }, 200);
    setTimeout(() => {
      page6.style.zIndex = -11;
    }, 200);
    fV = false;
  }
});

const parentTerrs = document.querySelectorAll(".terr");
let activeImg;

parentTerrs.forEach((parentTerr, index) => {
  parentTerr.addEventListener("mouseenter", (event) => {
    event.stopPropagation();

    const img = parentTerr.querySelector("img");
    const title = parentTerr.querySelector(".terTitle");
    const text = parentTerr.querySelector(".terrStory");

    if (!img || !title || !text) {
      console.error("Required elements not found");
      return;
    }

    let translateValue = "";
    function updateTransformations() {
      if (window.innerWidth > 1070) {
        translateValue = index % 2 === 0 ? "360px" : "-350px";
      } else if (window.innerWidth <= 420) {
        translateValue = index % 2 === 0 ? "80px" : "-80px";
      } else if (window.innerWidth <= 580) {
        translateValue = index % 2 === 0 ? "110px" : "-110px";
      } else if (window.innerWidth <= 820) {
        translateValue = index % 2 === 0 ? "190px" : "-190px";
      } else if (window.innerWidth <= 1070) {
        translateValue = index % 2 === 0 ? "260px" : "-260px";
      }

      img.classList.add("active");
      img.style.transform = `translateX(${translateValue})`;
      title.classList.add("active");
      text.classList.add("active");

      setTimeout(() => {
        applyTransformations(window.innerWidth, index, title, text);
      }, 100);

      activeImg = img;
    }

    updateTransformations();
    setInterval(updateTransformations, 50);
  });
});

function applyTransformations(windowWidth, index, title, text) {
  let translateX = 0;
  if (windowWidth > 1070) {
    translateX = index % 2 === 0 ? "-210px" : "220px";
  } else if (windowWidth <= 420) {
    translateX = index % 2 === 0 ? "-65px" : "65px";
  } else if (windowWidth <= 580) {
    translateX = index % 2 === 0 ? "-80px" : "80px";
  } else if (windowWidth <= 820) {
    translateX = index % 2 === 0 ? "-95px" : "95px";
  } else if (window.innerWidth <= 1070) {
    translateX = index % 2 === 0 ? "-175px" : "175px";
  }
  title.style.transform = `translateX(${translateX})`;
  text.style.transform = `translateX(${translateX})`;
}