const lazyVideos = document.querySelectorAll(".lazy-video-top");

const videoObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {

      const video = entry.target;

      // load video source
      video.src = video.dataset.src;

      // autoplay when loaded
      video.play();

      // stop observing this video
      observer.unobserve(video);
    }
  });
}, { threshold: 0.25 });

lazyVideos.forEach(video => videoObserver.observe(video));
