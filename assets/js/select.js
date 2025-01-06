// Initialize AOS
AOS.init({
    duration: 1200, // Animation duration in milliseconds
    once: true,     // Animation should happen only once
});

// Wrap jQuery code
(function ($) {
    $(document).ready(function () {
        $('.country__select').each(function () {
            var $select = $(this); // Reference to the original select element
            var $input = $select.siblings('input[type="tel"]'); // Reference to the phone input field

            // Create custom dropdown elements
            var $customDropdown = $('<div class="select-dropdown">');
            var $selected = $('<div class="selected-option">');
            var $ul = $('<ul class="country-list">');

            // Hide the original select
            $select.hide();

            // Loop through options and create custom list items
            $select.find('option').each(function (index) {
                var $option = $(this);
                var countryCode = $option.data('phone-code'); // Get phone code from data attribute
                var $li = $(
                    `<li class="country-option" 
                            data-value="${$option.val()}" 
                            data-flag="${$option.data('flag')}" 
                            data-phone-code="${countryCode}">
                            <span class="flag ${$option.data('flag')}"></span>${$option.text()}
                        </li>`
                );

                // Mark the first option as selected by default
                if (index === 0) {
                    $selected.html(
                        `<span class="flag ${$option.data('flag')}"></span>
                             <span class="name">${$option.text()}</span>`
                    );
                    $select.val($option.val());
                    if (countryCode) {
                        $input.attr('placeholder', `${countryCode}`); // Set initial placeholder
                    }
                }

                $ul.append($li);
            });

            // Append selected option and options list to the custom dropdown
            $customDropdown.append($selected).append($ul);
            $select.siblings('.country__select-dropdown').append($customDropdown);

            // Toggle the options list when the selected option is clicked
            $selected.on('click', function () {
                $ul.toggle();
            });

            // Handle country selection
            $ul.on('click', '.country-option', function () {
                var selectedValue = $(this).data('value');
                var selectedText = $(this).text();
                var selectedFlag = $(this).data('flag');
                var countryCode = $(this).data('phone-code');

                // Update original select value
                $select.val(selectedValue);

                // Update selected option display
                $selected.html(
                    `<span class="flag ${selectedFlag}"></span>
                         <span class="name">${selectedText}</span>`
                );

                // Update phone input placeholder
                if (countryCode) {
                    $input.attr('placeholder', `${countryCode}`);
                }

                // Hide the options list
                $ul.hide();
            });

            // Close the dropdown if clicked outside
            $(document).on('click', function (e) {
                if (!$(e.target).closest('.select-dropdown').length) {
                    $ul.hide();
                }
            });
        });
        $('.custom__select').each(function () {
            var $main = $(this);
            var $select = $(this).find('select'); // Reference to the original select element
            var $customDropdown = $('<div class="select__dropdown" tabindex="0">');
            var $selected = $('<div class="select__item" role="button">');
            var $ul = $('<ul class="select__list" role="listbox">');
        
            $select.hide();
        
            // Loop through options and create custom list items
            $select.find('option').each(function (index) {
                var $option = $(this);
                var $li = $(`<li class="select-option" data-value="${$option.val()}" role="option">${$option.text()}</li>`);
        
                if (index === 0) {
                    $selected.html($option.text());
                    $select.val($option.val());
                }
                $ul.append($li);
            });
        
            $customDropdown.append($selected).append($ul);
            $select.after($customDropdown);
        
            // Toggle dropdown visibility
            $selected.on('click', function () {
                $ul.toggle();
                $main.toggleClass('open');
            });
        
            // Update selected option
            $ul.on('click', '.select-option', function () {
                var selectedValue = $(this).data('value');
                var selectedText = $(this).text();
            
                // Update original select value
                $select.val(selectedValue).trigger('change');
            
                // Update selected option display
                $selected.html(selectedText);
            
                // Add active class to the clicked option and remove from others
                $ul.find('.select-option').removeClass('active');
                $(this).addClass('active');
            
                // Hide the options list
                $ul.hide();
                $main.removeClass('open');
            });
        
            // Close dropdown on outside click
            $(document).on('click', function (e) {
                if (!$(e.target).closest('.select__dropdown').length) {
                    $ul.hide();
                    $main.removeClass('open');
                }
            });
        });
        
    });
})(jQuery);

