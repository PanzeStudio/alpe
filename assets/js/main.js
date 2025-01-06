// Initialize AOS
AOS.init({
    duration: 1200, // Animation duration in milliseconds
    once: true,     // Animation should happen only once
});

// Wrap jQuery code
(function ($) {
    $(document).ready(function () {

        
        $('.accordions').each(function () {
            // Default: Open the first item within each accordion set
            $(this).find('.accordion:first-child .ac__content').slideDown();
            $(this).find('.accordion:first-child .ac__title').addClass('active');
    
            // Add click event for titles in this accordion set
            $(this).find('.ac__title').on('click', function () {
                var content = $(this).next('.ac__content');
    
                // Close other content within the same accordion set
                $(this).closest('.accordions').find('.ac__content').not(content).slideUp();
                $(this).closest('.accordions').find('.ac__title').not(this).removeClass('active');
    
                // Toggle active class and open/close the current content
                $(this).toggleClass('active');
                content.stop(true, true).slideToggle();
            });
        });


        $('.incoterm__items').each(function () {
            // Default: Open the first item within each accordion set
            $(this).find('.incoterm__item:first-child .incoterm__content').slideDown();
            $(this).find('.incoterm__item:first-child .incoterm__title').addClass('active');
    
            // Add click event for titles in this incoterm__item set
            $(this).find('.incoterm__title').on('click', function () {
                var content = $(this).next('.incoterm__content');
    
                // Close other content within the same incoterm__item set
                $(this).closest('.incoterm__items').find('.incoterm__content').not(content).slideUp();
                $(this).closest('.incoterm__items').find('.incoterm__title').not(this).removeClass('active');
    
                // Toggle active class and open/close the current content
                $(this).toggleClass('active');
                content.stop(true, true).slideToggle();
            });
        });


        $(".alpe__tabs .tab").click(function (event) {
            event.preventDefault();

            // Remove active class from all tabs and contents
            $(".tab").removeClass("active");
            $(".tab__content").removeClass("active");

            // Add active class to the clicked tab
            $(this).addClass("active");

            // Get the target content's ID from the href attribute
            const target = $(this).attr("href");

            // Add active class to the corresponding content
            $(target).addClass("active");
        });

        // Toggle visibility of sibling 'ul' when a .toggle__arrow is clicked
        $('.toggle__arrow').on('click', function () {
            $(this).siblings('ul').slideToggle();
            $(this).toggleClass('active'); // Toggle the 'active' class for the arrow icon (up/down)
        });

        // Toggle visibility of .menu__column inside the same .row when a .toggle__button is clicked
        $('.toggle__button').on('click', function () {
            $(this).closest('.sticky__row').find('.menu__column').slideToggle();
            $(this).toggleClass('active'); // Toggle the 'active' class for the button
            $(this).find('i').toggleClass('alpe-icon-388 alpe-icon-1069');
        });



        // Add click event listener to close the modal
        $('body').on('click', '.modal__close', function () {
            // Remove the modal
            $('.modal').remove();
            return false;
        });

        $('.input__control[type="tel"]').on('input', function () {
            // Allow only numbers, spaces, and symbols (+, -, (), whitespace)
            $(this).val($(this).val().replace(/[^0-9+\-()\s]/g, ''));
        });


    });

    $(window).scroll(function () {
        // Calculate the scroll position and the height of the document
        var scrollTop = $(window).scrollTop();
        var documentHeight = $(document).height();
        var windowHeight = $(window).height();

        // Check if the scroll position is at least 50% of the document height
        if (scrollTop >= (documentHeight / 2) - windowHeight) {
            // Add 'z-up' class to the footer
            $('.footer__section').addClass('z-footer');
        } else {
            // Remove 'z-footer' class if scroll position is less than 50%
            $('.footer__section').removeClass('z-footer');
        }
        if (scrollTop >= windowHeight - 100) {
            // Add 'z-up' class to the footer
            $('.sticky__navbar').addClass('sticky');
        } else {
            // Remove 'sticky' class if scroll position is less than 50%
            $('.sticky__navbar').removeClass('sticky');
        }
    });
})(jQuery);

