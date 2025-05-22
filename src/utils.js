export function cn(...classes) {
  return classes.filter(Boolean).join(" ")
}

export function smoothScrollTo(elementId) {
  const element = document.getElementById(elementId)
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }
}
