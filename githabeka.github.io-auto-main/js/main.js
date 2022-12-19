$(function(){

    $('.carousel__inner').slick({
        arrows: false,
        dots: true,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 841,
                settings: {
                    slidesToShow: 2
                 }
             },
             {
                breakpoint: 601,
                settings: {
                    slidesToShow: 1
                 }
             },
        ]
    });

});

function togglePopup(){
    document.getElementById("popup-1").classList.toggle("active");
}

function removePopup() {
    document.getElementById("popup-1").classList.remove("active");
}

