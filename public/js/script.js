slideTime = 10000;
pos = 1;

$(document).ready(function(){
    slider = $('#slideshow__main').lightSlider({
        gallery: false,
        item: 1,
        controls: false,
        list: false,
        pager: false,
        thumbItem: 7,
        enableDrag: true,
        enableTouch: true,
        autoWidth: false,
        adaptiveHeight: true,
        auto: true,
        slideMargin: 300,
        pause: slideTime,
        loop:true,
        onAfterSlide: function(){
            changeMenuSliderPosition();
        },
      
    });

    slider_navigation = $('#slideshow__mainnavigation').lightSlider({
        gallery: false,
        controls: false,
        list: false,
        pager: false,
        enableDrag: true,
        item: 6,
        enableTouch: true,
        autoWidth: true,
        adaptiveHeight: true,
        auto: true,
        pause: slideTime,
        slideMargin: 0,
        centerSlide:true,  
        loop: true,
        
    });


    $('#slideshowflex').lightSlider({
        gallery: false,
        item: 7,
        controls: false,
        list: false,
        loop:true,
        pager: false,
        thumbItem: 1,
        enableDrag: true,
        enableTouch: true,
        auto: true,
        slideMargin: 50,
        pause: 2600,
        adaptiveHeight: true,
        responsive:[
            {
                breakpoint:1080,
                settings: {
                    item:5,
                    slideMove:1,
                    slideMargin:6,
                  }
            },
            {
                breakpoint:768,
                settings: {
                    item:3,
                    slideMove:1,
                    slideMargin:6,
                  }
            },
            {
                breakpoint:550,
                settings: {
                    item:2,
                    slideMove:1,
                    slideMargin:6,
                  }
            },
        ],

        onBeforeSlide: function(){
        }
    });
});

function slideTo(pos){
    slider.goToSlide(pos);
    slider_navigation.goToSlide(pos);
}

function slidePrev(){
    backgroundSlide.goToPrevSlide()
    slider_navigation.goToPrevSlide();
}

function slideNext(){
    backgroundSlide.goToNextSlide()
    slider_navigation.goToNextSlide();
}

function changeMenuSliderPosition(){
    slider_navigation.goToSlide(slider.getCurrentSlideCount());
}