const walw = document.querySelectorAll('.walw'),
    clouds = document.querySelectorAll('.cloud'),
    sun = document.querySelectorAll('.suns_deg'),
    birds = document.querySelectorAll('.bird'),
    fly = document.querySelector('.fly'),
    bigCloud = document.querySelectorAll('.cloud_8')


window.addEventListener('scroll', () => {
    let windowY = window.scrollY
    walw.forEach(walw => {
        let speed = walw.getAttribute('speed')
        walw.style.transform = `translateX(${windowY * speed}px)`
        walw.style.transition = `0.5s`
    })

    
    clouds.forEach(cloud => {
        let speed = cloud.getAttribute('speed')
        cloud.style.transform = `translateX(-${windowY * speed}px)`
        cloud.style.transition = `0.5s`
    })

    bigCloud.forEach(bigCloud => {
        let speed = bigCloud.getAttribute('speed')
        bigCloud.style.transform = `translate(-${windowY * speed}px)`
        bigCloud.style.transition = `0.5s`
    })

    sun.forEach(suns_deg => {
        let speed = suns_deg.getAttribute('speed')
        suns_deg.style.transform = `translateY(${windowY * speed}px)`
        suns_deg.style.transition = `0.5s`
    })


    birds.forEach(bird => {
        let speed = bird.getAttribute('speed')
        bird.style.transform = `translateX(-${windowY * speed}px)`
        bird.style.transition = `0.5s`
    })
})