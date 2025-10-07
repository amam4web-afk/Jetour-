/**
 * Custom JavaScript for the Jetour T2 Elementor Theme
 *
 * This file includes functionality replicated from the original site,
 * like the interactive car color changer.
 */
(function($) {
    'use strict';

    // This function will run when the document is ready.
    $(function() {

        /**
         * Car Color Changer Functionality
         *
         * This code powers the section where users can click on a color
         * swatch to change the displayed car image and background.
         *
         * How to use in Elementor:
         * 1. Create the layout with your car images and color swatches.
         * 2. Give the container of the color swatches a class of 'car-color-selector'.
         * 3. Give each clickable color swatch (e.g., a list item) a class of 'color-option'.
         * 4. Add a data attribute `data-color-hex` to each swatch with the gradient/color value (e.g., "linear-gradient(-30deg, #7e8a98, #a3acb6)").
         * 5. Give the container of the car images a class of 'car-image-container'.
         * 6. Place your car images inside this container. They will be controlled by this script.
         * 7. Give the element whose background you want to change (e.g., a section or column) a class of 'car-background-target'.
         */
        if ($('.car-color-selector').length) {
            const colorButtons = $('.car-color-selector .color-option');
            const carImages = $('.car-image-container .car-image');
            const backgroundTarget = $('.car-background-target');
            const carNameTarget = $('.car-name-target'); // Element to display the color name
            const carDescriptionTarget = $('.car-description-target'); // Another element to display the color name


            // Hide all car images except the first one initially
            carImages.not(':first').hide();
            colorButtons.first().addClass('active');


            colorButtons.on('click', function() {
                const $this = $(this);
                const index = $this.index();
                const bgColor = $this.data('color-hex');
                const carName = $this.data('name');

                // Toggle active class on buttons
                colorButtons.removeClass('active');
                $this.addClass('active');

                // Fade out all images, then fade in the correct one
                carImages.fadeOut(200).promise().done(function() {
                    carImages.eq(index).fadeIn(300);
                });

                // Update the background color/gradient
                if (bgColor) {
                    backgroundTarget.css('background', bgColor);
                }
                
                // Update car name text
                if (carName) {
                    carNameTarget.text(carName);
                    carDescriptionTarget.text(carName);
                }
            });
        }

    });

})(jQuery);
