window.onunload = function () {
    window.scrollTo(0,0);
};


// Email Newsletter Sub. Modal Popup on Load/Toggle Script:
document.getElementById('e-close-id').addEventListener("click", function() {
    document.querySelector('.e-modal').style.transition = ".3s";
    document.querySelector('.e-modal').style.opacity = "0";
    document.querySelector('.e-modal').style.visibility = "hidden";
    document.querySelector('.e-modal-box').style.transform = "translateY(150%)";
    document.querySelector('.e-modal-box').style.transition = ".3s";
    document.querySelector('body').style.overflow = "visible";
  });

window.onload = function() {
  setTimeout(function () {
    document.getElementById('e-pop').style.opacity = "1";
    document.getElementById('e-pop').style.visibility = "visible";
    document.querySelector('.e-modal-box').style.opacity = "1";
    document.querySelector('.e-modal-box').style.transform = "translateY(0%)";
    document.querySelector('.nav-overlay').style.opacity = "0";
    document.querySelector('.nav-overlay').style.visibility = "hidden";
    document.querySelector('.nav-overlay').style.transition = ".5s";
    document.querySelector('.nav-links').style.transform = "translateX(150%)";
    document.getElementById('open-id').style.opacity = "1";
    document.querySelector('body').style.overflow = "hidden";
  }, 3000);
}


// Fixed/Sticky Navbar w/ Glass Backdrop appear on Scroll:
const nav = document.querySelector('.n1');
const navbar = document.querySelector(".navbar");
const navOver = document.querySelector(".nav-overlay");
const openV = document.querySelector(".open");
const closeV = document.querySelector(".close");
const backdrop = document.querySelector(".backdrop");

window.onscroll = function() {
    var top = window.scrollY;
    console.log(top);
    if (top >= 50){
        navbar.classList.add('active-logo')
        openV.classList.add('active-open')
        closeV.classList.add('active-close')
        backdrop.classList.add('active-bk-drop')
    } else {
        navbar.classList.remove('active-logo')
        openV.classList.remove('active-open');
        closeV.classList.remove('active-close');
        backdrop.classList.remove('active-bk-drop');
    }
}


// Nav Overlay/Nav Toggle Script:
document.getElementById('open-id').addEventListener("click", function() {
    document.querySelector('.nav-overlay').style.opacity = "1";
    document.querySelector('.nav-overlay').style.visibility = "visible";
    document.querySelector('.nav-links').style.transform = "translateX(0%)";
    document.querySelector('.open').style.opacity = "0";
    document.querySelector('.close').style.opacity = "1";
    document.querySelector('body').style.overflow = "hidden";
  });

document.getElementById('close-id').addEventListener("click", function() {
    document.querySelector('.open').style.opacity = "1";
    document.querySelector('.nav-overlay').style.opacity = "0";
    document.querySelector('.nav-overlay').style.visibility = "hidden";
    document.querySelector('.nav-overlay').style.transition = ".1s";
    document.querySelector('.nav-links').style.transform = "translateX(150%)";
    document.querySelector('body').style.overflow = "visible";
  });

document.getElementById('hid-overlay').addEventListener("click", function() {
    document.querySelector('.open').style.opacity = "1";
    document.querySelector('.nav-overlay').style.opacity = "0";
    document.querySelector('.nav-overlay').style.visibility = "hidden";
    document.querySelector('.nav-overlay').style.transition = ".1s";
    document.querySelector('.nav-links').style.transform = "translateX(150%)";
    document.querySelector('body').style.overflow = "visible";
  });

document.getElementById('menu-a').addEventListener("click", function() {
  document.querySelector('.open').style.opacity = "1";
  document.querySelector('.nav-overlay').style.opacity = "0";
  document.querySelector('.nav-overlay').style.visibility = "hidden";
  document.querySelector('.nav-overlay').style.transition = ".1s";
  document.querySelector('.nav-links').style.transform = "translateX(150%)";
  document.querySelector('body').style.overflow = "visible";
  });
document.getElementById('menu-b').addEventListener("click", function() {
  document.querySelector('.open').style.opacity = "1";
  document.querySelector('.nav-overlay').style.opacity = "0";
  document.querySelector('.nav-overlay').style.visibility = "hidden";
  document.querySelector('.nav-overlay').style.transition = ".1s";
  document.querySelector('.nav-links').style.transform = "translateX(150%)";
  document.querySelector('body').style.overflow = "visible";
  });
document.getElementById('menu-c').addEventListener("click", function() {
  document.querySelector('.open').style.opacity = "1";
  document.querySelector('.nav-overlay').style.opacity = "0";
  document.querySelector('.nav-overlay').style.visibility = "hidden";
  document.querySelector('.nav-overlay').style.transition = ".1s";
  document.querySelector('.nav-links').style.transform = "translateX(150%)";
  document.querySelector('body').style.overflow = "visible";
  });
document.getElementById('menu-d').addEventListener("click", function() {
  document.querySelector('.open').style.opacity = "1";
  document.querySelector('.nav-overlay').style.opacity = "0";
  document.querySelector('.nav-overlay').style.visibility = "hidden";
  document.querySelector('.nav-overlay').style.transition = ".1s";
  document.querySelector('.nav-links').style.transform = "translateX(150%)";
  document.querySelector('body').style.overflow = "visible";
  });
document.getElementById('menu-e').addEventListener("click", function() {
  document.querySelector('.open').style.opacity = "1";
  document.querySelector('.nav-overlay').style.opacity = "0";
  document.querySelector('.nav-overlay').style.visibility = "hidden";
  document.querySelector('.nav-overlay').style.transition = ".1s";
  document.querySelector('.nav-links').style.transform = "translateX(150%)";
  document.querySelector('body').style.overflow = "visible";
  });

document.getElementById('mu-icons').addEventListener("click", function() {
  document.querySelector('.open').style.opacity = "1";
  document.querySelector('.nav-overlay').style.opacity = "0";
  document.querySelector('.nav-overlay').style.visibility = "hidden";
  document.querySelector('.nav-overlay').style.transition = ".1s";
  document.querySelector('.nav-links').style.transform = "translateX(150%)";
  document.querySelector('body').style.overflow = "visible";
  });

document.getElementById('nav-lay-btn').addEventListener("click", function() {
    document.querySelector('.nav-overlay').style.opacity = "0";
    document.querySelector('.nav-overlay').style.visibility = "hidden";
    document.querySelector('.nav-links').style.transform = "translateX(150%)";
    document.querySelector('.open').style.opacity = "1";
    document.querySelector('.sign-form').style.opacity = "1";
    document.querySelector('.sign-form').style.visibility = "visible";
    document.querySelector('.sign-box').style.transform = "translateY(0)";
  });

document.getElementById('main-nav-btn').addEventListener("click", function() {
    document.querySelector('.sign-form').style.opacity = "1";
    document.querySelector('.sign-form').style.visibility = "visible";
    document.querySelector('.sign-box').style.transform = "translateY(0)";
    document.querySelector('body').style.overflow = "hidden";
  });


// Sign-Up/Log-In Form Appear from Landing Page CTA Buttons Script:
document.getElementById('s1-btn').addEventListener("click", function() {
  document.querySelector('.sign-form').style.opacity = "1";
  document.querySelector('.sign-form').style.visibility = "visible";
  document.querySelector('.sign-box').style.transform = "translateY(0)";
  document.querySelector('body').style.overflow = "hidden";
});

document.getElementById('s3-btn').addEventListener("click", function() {
  document.querySelector('.sign-form').style.opacity = "1";
  document.querySelector('.sign-form').style.visibility = "visible";
  document.querySelector('.sign-box').style.transform = "translateY(0)";
  document.querySelector('body').style.overflow = "hidden";
});

document.getElementById('s4-btn').addEventListener("click", function() {
  document.querySelector('.sign-form').style.opacity = "1";
  document.querySelector('.sign-form').style.visibility = "visible";
  document.querySelector('.sign-box').style.transform = "translateY(0)";
  document.querySelector('body').style.overflow = "hidden";
});


// Sign-up Form/Log-in Toggle Script:
document.getElementById('log-head-id').addEventListener("click", function() {
  document.querySelector('.log-head').style.backgroundColor = "#f1f2fd";
  document.getElementById('log-head-h3').style.color = "#242d52";
  document.getElementById('log-head-hr').style.display = "block";
  document.querySelector('.log-head').style.transition = ".3s";
  document.getElementById('log-form-ct').style.display = "block";
  document.querySelector('.sign-up-head').style.backgroundColor = "#3c4cc4";
  document.getElementById('sign-up-h3').style.color = "#f1f2fd";
  document.getElementById('sign-up-hr').style.display = "none";
  document.querySelector('.sign-up-head').style.transition = ".3s";
  document.getElementById('sign-up-form-ct').style.opacity = "0";
  document.getElementById('sign-up-form-ct').style.visibility = "hidden";
  document.getElementById('sign-up-no').style.opacity = "0";
  document.getElementById('sign-up-no').style.visibility = "hidden";
});

document.getElementById('sign-head-id').addEventListener("click", function() {
  document.querySelector('.log-head').style.backgroundColor = "#3c4cc4";
  document.getElementById('log-head-h3').style.color = "#f1f2fd";
  document.getElementById('log-head-hr').style.display = "none";
  document.querySelector('.log-head').style.transition = ".3s";
  document.getElementById('log-form-ct').style.display = "none";
  document.querySelector('.sign-up-head').style.backgroundColor = "#f1f2fd";
  document.getElementById('sign-up-h3').style.color = "#242d52";
  document.getElementById('sign-up-hr').style.display = "block";
  document.querySelector('.sign-up-head').style.transition = ".3s";
  document.getElementById('sign-up-form-ct').style.opacity = "1";
  document.getElementById('sign-up-form-ct').style.visibility = "visible";
  document.getElementById('sign-up-no').style.opacity = "1";
  document.getElementById('sign-up-no').style.visibility = "visible";
});

document.getElementById('sign-up-no').addEventListener("click", function() {
  document.querySelector('.sign-form').style.opacity = "0";
  document.querySelector('.sign-form').style.visibility = "hidden";
  document.querySelector('.sign-box').style.transform = "translateY(-150%)";
  document.querySelector('.sign-box').style.transition = ".3s";
  document.querySelector('body').style.overflow = "visible";
});

document.getElementById('cancel').addEventListener("click", function() {
  document.querySelector('.sign-form').style.opacity = "0";
  document.querySelector('.sign-form').style.visibility = "hidden";
  document.querySelector('.sign-box').style.transform = "translateY(-150%)";
  document.querySelector('.sign-box').style.transition = ".3s";
  document.querySelector('body').style.overflow = "visible";
});

document.getElementById('forgot-pw-id').addEventListener("click", function() {
  document.querySelector('.sign-form').style.opacity = "0";
  document.querySelector('.sign-form').style.visibility = "hidden";
  document.querySelector('.sign-box').style.transform = "translateY(-150%)";
  document.querySelector('.sign-box').style.transition = ".3s";
  document.querySelector('body').style.overflow = "visible";
});


// Modals to disappear on click outside Script:
const modal = document.querySelector(".modal");
const modalE = document.querySelector(".e-modal");
const modalE2 = document.querySelector(".e-modal-box");
const modalS = document.querySelector(".sign-form");
const modalS2 = document.querySelector(".sign-box");
const body = document.querySelector("body");

window.addEventListener("click", (e) => {
  if(e.target === modalE) {
      modalE.style.transition = ".3s";
      modalE.style.opacity = "0";
      modalE.style.visibility = "hidden";
      modalE2.style.transform = "translateY(150%)";
      modalE2.style.transition = ".3s";
      body.style.overflow = "visible";
  }
})

window.addEventListener("click", (e) => {
  if(e.target === modalS) {
      modalS.style.transition = ".3s";
      modalS.style.opacity = "0";
      modalS.style.visibility = "hidden";
      modalS2.style.transform = "translateY(-150%)";
      modalS2.style.transition = ".3s";
      body.style.overflow = "visible";
  }
})


// Testimonial Slider (Dots Selection): 
var dots = document.getElementsByClassName("dots");
const slide = document.getElementById("slide");

dots[0].onclick = function() {
    slide.style.transform = "translateX(0px)";
    for(i=0; i<4; i++){
        dots[i].classList.remove("active-dot");
    }
    this.classList.add("active-dot");
}
dots[1].onclick = function() {
    slide.style.transform = "translateX(-360px)";
    for(i=0; i<4; i++){
        dots[i].classList.remove("active-dot");
    }
    this.classList.add("active-dot");
}
dots[2].onclick = function() {
    slide.style.transform = "translateX(-697px)";
    for(i=0; i<4; i++){
        dots[i].classList.remove("active-dot");
    }
    this.classList.add("active-dot");
}
dots[3].onclick = function() {
    slide.style.transform = "translateX(-1060px)";
    for(i=0; i<4; i++){
        dots[i].classList.remove("active-dot");
    }
    this.classList.add("active-dot");
}


// Form Validation:
const email = document.querySelector('email');
const email2 = document.getElementById('email-pop-ip');
const userL = document.getElementById('user-log');
const pwL = document.getElementById('pw-log');
const userS = document.getElementById('user-sign');
const pwS = document.getElementById('pw-sign');
const pwS2 = document.getElementById('pw-sign-2');
const formFoot = document.querySelector('.form-e-ft');
const formEMod = document.querySelector('.form-e-mod');
const formL = document.querySelector('.form-login');
const formS = document.querySelector('.form-signup');
const small = document.querySelector('small');
const errorElement1 = document.getElementById('error-1');

    formFoot.addEventListener('submit', (e) => {

    });

    formEMod.addEventListener('submit', (e) => {
       
    });

    formL.addEventListener('submit', (e) => {
        
    });

    formS.addEventListener('submit', (e) => {
      
    });
