let navbar = gsap.from(".navbar-brand", { opacity: 0, y: -50, duration: 1 })
let link = gsap.from(".nav-link", { opacity: 0, x: -50, duration: 0.5, stagger: 0.2 })
let section = gsap.from("section", { opacity: 0, y: 100, duration: 1, stagger: 0.3, onComplete: () => masterTl.play() })
let image = gsap.to(".image",{duration: 7,rotation:720, repeat: -1, repeatDelay: 1, ease: "bounce", backgroundColor: "#ffffff", boxShadow: '0 0 20px 5px rgba(255, 255, 255, 0.8)'})

const words = ["Charith Samarathunga.","A Software Engineer."]

let cursor = gsap.to('.cursor', {opacity: 0, ease: "power2.inOut", repeat: -1})

let masterTl = gsap.timeline({repeat: -1}).pause()

words.forEach(word => {
    let tl = gsap.timeline({repeat: 1, yoyo: true, repeatDelay: 1})
    tl.to('.text',{duration: 1, text: word})
    masterTl.add(tl)
})