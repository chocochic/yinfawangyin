let options = {
  root: null,
  rootMargin: "0px",
  threshold: 1.0,
}

let callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log(entry)
      entry.target.style.opacity = 1
      observer.unobserve(entry.target)
    }
  })
}

let observer = new IntersectionObserver(callback)

let targets = document.querySelectorAll(".text-transition")
targets.forEach((target) => observer.observe(target))
