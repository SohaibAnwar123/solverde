$(document).ready(function () {
    if(document.querySelector('.filterSec')){
        $(".filterIcon").click(function () {
            $(".filterSec").addClass("filterSec__");
            $("body").addClass("bodyFixed");
        });
    
        $(".crossIcon").click(function () {
            console.log("clicked")
            $(".filterSec").removeClass("filterSec__");
            $("body").removeClass("bodyFixed");
        });
        $(".filterSec .form-check").click(function () {
            $(".filtersMob").addClass("filtersMob_");
        });
    
    
        // Function to handle the intersection of the section and hidden-section
        function handleIntersection(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Section is in view, hide the hidden section
                    $(".filterFixedBtn").fadeOut();
                } else {
                    // Section is out of view, show the hidden section
                    $(".filterFixedBtn").fadeIn();
                }
            });
        }
    
        const options = {
            threshold: 0 // Trigger when section is completely out of view
        };
    
        const observer = new IntersectionObserver(handleIntersection, options);
        observer.observe(document.querySelector('.careers-page-header'));
    }
});

// Fixed Header Script 
window.onscroll = function() {
    const header = document.querySelector(".site-header");
    if (window.pageYOffset > 100) {
        header.classList.add('fixed-top')
    } else {
        header.classList.remove('fixed-top')
    }
};

$(document).ready(function(){
    var owl = $(".owl-carousel");

    if(owl.length > 0){
        owl.owlCarousel({
            loop: true,
            nav: true,
            responsive:{
                0:{
                    items: 2,
                    margin: 16,
                },
                600:{
                    items: 3,
                    margin: 16,
                },
                1000:{
                    items: 4,
                    margin: 32,
                }
            },
            onInitialized: function(event){
                setOwlScript(event);
            }
        });

        function setOwlScript(event){
            var nonClonedItemsCount = event.item.count;
            var carouselSlidebar = $(event.target).next('.carousel-slidebar');
            carouselSlidebar.find('.slide-length').text(Math.floor(nonClonedItemsCount));
            
            if(nonClonedItemsCount > 1){
                carouselSlidebar.find('.active-slide').text(1);
            }
            $(event.target).next().find('.slide-length').text(nonClonedItemsCount);
        }

        owl.on('changed.owl.carousel', function(event) {
            var nonClonedItemsCount = event.item.count;
            var totalNonClonedItems = nonClonedItemsCount - (nonClonedItemsCount - event.item.count);
            
            var currentIndex = event.item.index - event.relatedTarget._clones.length / 2;
            currentIndex = (currentIndex < 0 ? totalNonClonedItems + currentIndex : currentIndex) % totalNonClonedItems;
    
            $(this).next().find('.active-slide').text(currentIndex + 1);
    
            var newPosition = (currentIndex / totalNonClonedItems) * 100;
            newPosition = newPosition + (1.25 * currentIndex);
            $(this).next('.carousel-slidebar').find('.slide-thumb').css('left', newPosition + '%');
            if(newPosition > 84 ){
                $(this).next('.carousel-slidebar').find('.slide-thumb').css('left', '90%');
            }
        });
    }
});


$(document).ready(function(){
    var currentUrl = window.location.href;
    $('.nav-list .nav-link').each(function(){
        if(this.href === currentUrl){
            $(this).addClass('active');
        }
    });
});
