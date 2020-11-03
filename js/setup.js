$('.owl-carousel').owlCarousel({
    loop:true, //define se fica em loop ou nao
    margin:10, // deixa a margin entre um elemento e outro
    nav:false, //define se coloca botoes de navegação
    responsive:{ //define a reposividade do site
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})