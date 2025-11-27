//For Hamburger
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  navMenu.classList.toggle("active");
});


// VIDEO ELEMENT
const video = document.querySelector(".video-ctrl");

// PLAY TRIGGERS
const playWrapper = document.querySelector(".play-icon-wrapper");
const playIcon = document.querySelector(".play-icon");

// BACKDROP + CLOSE ELEMENTS (created dynamically)
let videoOverlay = null;
let closeBtn = null;

// FUNCTION: SHOW VIDEO
function showVideo() {
  if (!videoOverlay) {
    videoOverlay = document.createElement("div");
    videoOverlay.classList.add("video-overlay");

    closeBtn = document.createElement("div");
    closeBtn.classList.add("video-close-btn");
    closeBtn.innerHTML = "×";

    document.body.appendChild(videoOverlay);
    document.body.appendChild(closeBtn);

    // close event
    closeBtn.addEventListener("click", hideVideo);
    videoOverlay.addEventListener("click", hideVideo);
  }

  video.style.display = "block";
  videoOverlay.style.display = "block";
  closeBtn.style.display = "block";

  video.currentTime = 0; // start fresh
  video.play();
}

// FUNCTION: HIDE VIDEO
function hideVideo() {
  video.pause();
  video.style.display = "none";
  videoOverlay.style.display = "none";
  closeBtn.style.display = "none";
}

// CLICK EVENTS
playWrapper.addEventListener("click", showVideo);
playIcon.addEventListener("click", showVideo);

function integerr() {
  let int = 5;
  console.log(int * int);
}

integerr();

function square(number) {
  return number * number;
}
square();

// Courses We Offer DATA

const programsData = [
  {
    title: "Hatha Yoga Basics / Power Yoga",
    price: "₹699 / Monthly",
    shortDesc:
      "Gentle, foundational yoga practice focused on alignment, breath, and mindful movement.",

    list: [
      "Improves flexibility and posture",
      "Reduces stress and enhances inner calm",
      "Builds foundational strength",
      "Safe, alignment-focused postures",
      "Breath awareness and relaxation techniques",
      "Supportive environment for beginners",
    ],

    duration: ["60 minutes"],

    timing: ["Monday to Friday", "8-9 AM | 6-7 PM"],

    difficultyLevel: ["Beginner to Advance"],

    btnLink: "#",
  },

  {
    title: "Vinyasa Flow",
    price: "Price Included in Group Yoga",
    shortDesc:
      "Dynamic movement synchronized with breath, ideal for improving stamina and mobility.",

    list: [
      "Strength & flexibility training",
      "Creative flow sequences",
      "Boosts cardiovascular health",
      "60-minute sessions",
      "All-level friendly",
    ],

    duration: ["60 minutes"],

    timing: ["Midday Slots", "Evening Slots"],

    difficultyLevel: ["All Levels"],

    btnLink: "#",
  },

  {
    title: "Face Yoga Session",
    price: "₹199 / Monthly",
    shortDesc:
      "Natural facial toning routine that enhances skin health, glow, and relaxation.",

    list: [
      "Gentle facial muscle exercises",
      "Relieves stress & tension",
      "Self-massage techniques",
      "Improves facial circulation",
      "Suitable for beginners",
    ],

    duration: ["30 minutes"],

    timing: ["Tueday | Thursday | Friday", "7:00 PM - 7:30 PM"],

    difficultyLevel: ["Beginner Friendly"],

    btnLink: "#",
  },

  {
    title: "Personal Coaching",
    price: "Custom Pricing",
    shortDesc:
      "One-on-one personalized yoga classes designed around your goals and body.",

    list: [
      "Goal-focused training",
      "Posture correction",
      "Therapy-based sequences",
      "Flexible timings",
      "45-60 min sessions",
    ],

    duration: ["45-60 minutes"],

    timing: ["Flexible Scheduling"],

    difficultyLevel: ["Customized per Client"],

    btnLink: "#",
  },
];

// =========================
// RENDER CARDS
// =========================
const programWrapper = document.getElementById("programCards");

programsData.forEach((program) => {
  const features = program.list
    .map((featureItem) => `<li>${featureItem}</li>`)
    .join("");

  const durationHTML = program.duration
    .map((durationItem) => `<li>${durationItem}</li>`)
    .join("");

  const timingHTML = program.timing
    .map((timeItem) => `<li>${timeItem}</li>`)
    .join("");

  const difficultyHTML = program.difficultyLevel
    .map((diffItem) => `<li>${diffItem}</li>`)
    .join("");

  const cardHTML = `
    <div class="program-card swiper-slide">

        <span class="program-card-title">${program.title}</span>
        <p class="program-card-price">${program.price}</p>
        <p class="program-card-short">${program.shortDesc}</p>

        <h5 class="features_expectation_title">Benefits + Expectations</h5>
        <ul class="program-card-list">
            ${features}
        </ul>


        <h5 class="features_expectation_title">Timing</h5>
        <ul class="timing-list"> 
            ${timingHTML}
        </ul>


      <div class="diff_timi">
          <div>
            <h5 class="duration_title">Duration</h5>
            <ul class="duration-list"> 
            ${durationHTML}
            </ul>
          </div>

         <div> 
          <h5 class="difficulty_title">Difficulty Level</h5>
          <ul class="difficulty-list"> 
              ${difficultyHTML}
          </ul>
         </div>
      </div>

        

        <a href="${program.btnLink}" target="_blank">
           <button class="primary-btn program-btn">Enquire Now</button>
        </a>

    </div>
  `;

  programWrapper.innerHTML += cardHTML;
});

//Swiper JS

var swiper = new Swiper(".mySwiper", {
  //loop: false, // infinite loop
  speed: 5000, // smooth scrolling speed

  slidesPerView: 1,
  spaceBetween: 0,

  breakpoints: {
    500: { slidesPerView: 1 },
    768: { slidesPerView: 1 },
    1024: { slidesPerView: 3 },
    1440: { slidesPerView: 3 },
  },
});

// OPEN MODAL
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("program-btn")) {
    e.preventDefault();
    document.querySelector(".form-spree-parent").classList.add("show");
  }
});

// CLOSE MODAL
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("modal-close")) {
    document.querySelector(".form-spree-parent").classList.remove("show");
  }
});

// INTERCEPT FORM SUBMISSION
document.getElementById("yogaForm").addEventListener("submit", function (e) {
  e.preventDefault(); // STOP FORM FROM GOING TO FORMSPREE

  const form = this;
  const formData = new FormData(form);

  fetch(form.action, {
    method: "POST",
    body: formData,
    headers: { Accept: "application/json" },
  }).then(() => {
    // Show thank-you inside modal
    form.innerHTML = `
      <h2 style="text-align:center;">Thank You!</h2>
      <p style="text-align:center;">
        Form submitted successfully.<br>
        Our team will call you within 24 hours.
      </p>
    `;

    // Redirect back to same page
    setTimeout(() => {
      window.location.href = window.location.origin + window.location.pathname;
    }, 5000);
  });
});



// Faqs Section starts here
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  const question = item.querySelector(".faq-question");

  question.addEventListener("click", () => {

    // Close others
    faqItems.forEach(i => {
      if (i !== item) i.classList.remove("active");
    });

    // Toggle selected
    item.classList.toggle("active");
  });
});





// Testimonials Starts Here - Images + Video
// Row 1 → IMAGES
const imageData = [
  { img: "./images/feedback/testi-1.jpeg" },
  { img: "./images/feedback/testi-2.jpeg" },
  { img: "./images/feedback/testi-3.jpeg" },
  { img: "./images/feedback/testi-4.jpeg" },
  { img: "./images/feedback/testi-5.jpeg" },
  { img: "./images/feedback/testi-6.jpeg" }
];

// Row 2 → VIDEOS
const videoData = [
  { video: "./images/videos/yoga-video-1.mp4" },
  { video: "./images/videos/yoga-video-2.mp4" },
  { video: "./images/videos/yoga-video-3.mp4" },
  { video: "./images/videos/yoga-video-4.mp4" },
  { video: "./images/videos/yoga-video-2.mp4" },
  { video: "./images/videos/yoga-video-3.mp4" }
];

// Duplicate for infinite scroll
const row1Data = [...imageData, ...imageData];
const row2Data = [...videoData, ...videoData];

const row1 = document.getElementById("row1");
const row2 = document.getElementById("row2");

// ------------------------
// RENDER ROW 1 (IMAGES)
// ------------------------
row1Data.forEach(item => {
  row1.innerHTML += `
    <div class="testimonial-card">
      <img 
        data-src="${item.img}" 
        class="testimonial-img lazy-img" 
        alt="testimonial"
      />
    </div>
  `;
});

// ------------------------
// RENDER ROW 2 (VIDEOS)
// ------------------------
row2Data.forEach(item => {
  row2.innerHTML += `
    <div class="testimonial-card">
      <video 
        data-src="${item.video}"
        class="testimonial-video lazy-video"
        muted 
        playsinline 
        loop
      ></video>
    </div>
  `;
});

// ------------------------------------------------
// LAZY LOADING FOR IMAGES
// ------------------------------------------------
const lazyImages = document.querySelectorAll(".lazy-img");

const imageObserver = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src; // load image
      img.classList.remove("lazy-img");
      obs.unobserve(img);
    }
  });
}, { threshold: 0.2 });

lazyImages.forEach(img => imageObserver.observe(img));

// ------------------------------------------------
// LAZY LOADING FOR VIDEOS
// ------------------------------------------------
const lazyVideos = document.querySelectorAll(".lazy-video");

const videoObserver = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const video = entry.target;
      video.src = video.dataset.src;  // load video
      video.play();                   // start autoplay
      obs.unobserve(video);
    }
  });
}, { threshold: 0.2 });

lazyVideos.forEach(video => videoObserver.observe(video));







// Contact Form Section
const form = document.getElementById("yogaFormm");

form.addEventListener("submit", async function (e) {
  e.preventDefault(); // Stop normal redirect

  const formData = new FormData(form);

  const response = await fetch(form.action, {
    method: "POST",
    body: formData,
    headers: { Accept: "application/json" }
  });

  // Replace form with success message
  form.innerHTML = `
    <h3 style="text-align:center; color:#1e2945;">Message Sent Successfully</h3>
    <p style="text-align:center; margin-top:8px;">
      We will contact you as soon as possible.
    </p>
  `;

  // Redirect to same page after 3 seconds
  setTimeout(() => {
    window.location.href = window.location.href;
  }, 3000);
});



// lazy loading
 