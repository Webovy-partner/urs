first = true;
lastPosition = 0;
function scrollToChildElement(pos, child) {
    // if posiiton is last then click on next lements, but after change, disable smooth, and chage position to cnenter of that element
    // Init center items 

    console.log();
    count = $('#slideshow__mainnavigation > div').length / 3;
    min_count = count;
    max_count = count+7;
    pos += count;

    // Get a reference to the parent container
    const parentContainer = document.querySelector('#slideshow__mainnavigation');
  
    // Get a reference to the child element with the given ID
    const childElement = document.querySelector('.slnav__item:nth-child('+pos+')');
    $('.slnav__item.active').removeClass('active');
    $('.slnav__item:nth-child('+pos+')').addClass('active');
  
    // Calculate the scroll position to scroll to the child element
    const parentWidth = parentContainer.offsetWidth;
    const childWidth = childElement.offsetWidth;
    const childLeftOffset = childElement.offsetLeft - parentContainer.offsetLeft;
    const scrollPosition = childLeftOffset - (parentWidth - childWidth) / 2;
  
    // Scroll the parent container to the child element

    // if lastPosition == 7 {first elemnt} => next position == 
    if(first == false){
        parentContainer.scroll({
            left: scrollPosition,
            behavior: 'auto'
        });
    }
    else{
        parentContainer.scroll({
            left: scrollPosition,
            behavior: 'auto'
        });
        first = false;
    }

    lastPosition = pos;
}


function slideTo(pos){
    slider.goToSlide(pos);
    scrollToChildElement(pos);
    //slider_navigation.goToSlide(pos);
}

function slidePrev(){
    backgroundSlide.goToPrevSlide()
    //slider_navigation.goToPrevSlide();
}

function slideNext(){
    backgroundSlide.goToNextSlide()
    //slider_navigation.goToNextSlide();
}

function changeMenuSliderPosition(){
    //slider_navigation.goToSlide(slider.getCurrentSlideCount())
    scrollToChildElement(slider.getCurrentSlideCount());
}

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

    $('.related__slideshow').lightSlider({
        gallery: false,
        item: 5,
        controls: false,
        list: false,
        loop:true,
        pager: false,
        thumbItem: 1,
        enableDrag: true,
        enableTouch: true,
        auto: true,
        slideMargin: 19,
        pause: 2600,
        responsive:[
            {
                breakpoint:1200,
                settings: {
                    item:4,
                    slideMove:1,
                  }
            },
            {
                breakpoint:900,
                settings: {
                    item:3,
                    slideMove:1,
                  }
            },
            {
                breakpoint:800,
                settings: {
                    item:2,
                    slideMove:1,
                  }
            },
            {
                breakpoint:550,
                settings: {
                    item:1,
                    slideMove:1,
                  }
            },
        ],

        onBeforeSlide: function(){
        }
    });


    changeMenuSliderPosition();
});