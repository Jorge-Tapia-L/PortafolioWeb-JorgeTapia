if (window.particlesJS) {
  particlesJS("particles-js", {
    particles: {
      number: { value: window.innerWidth < 768 ? 30 : 60, density: { enable: true, value_area: 900 } },
      color: { value: "#60a5fa" },
      shape: { type: "circle" },
      opacity: { value: 0.35 },
      size: { value: 2.5, random: true },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#3b82f6",
        opacity: 0.18,
        width: 1
      },
      move: { enable: true, speed: 1.2 }
    },
    interactivity: {
      detect_on: "window",
      events: {
        onhover: { enable: true, mode: "grab" },
        resize: true
      },
      modes: {
        grab: { distance: 160, line_linked: { opacity: 0.4 } }
      }
    },
    retina_detect: true
  });
}
