// Reavel Animation 

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal(`.profile__pic`)
sr.reveal(`.profile__name`, {delay:500})
sr.reveal(`.links`, {delay:600})
sr.reveal(`.link`, {delay:700})