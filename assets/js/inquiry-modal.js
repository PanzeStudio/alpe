// Wrap jQuery code
(function ($) {
    $(document).ready(function () {
        

        let inquiryModal = `
        <div class="modal">
            <form class="modal__body modal__small inquiry-form">
                <div class="modal__header">
                    <h6 class="fw-medium mb-0">What are you looking for?</h6>
                </div>
                <div class="modal__content">
                    <input type="text" class="input__control mb-2" placeholder="Name" required>
                    <input type="text" class="input__control mb-2" placeholder="Company Name" required>
                    <input type="email" class="input__control mb-2" placeholder="Email Address" required>
                    <select class="select__control mb-2" required>
                        <option value="" disabled selected>Select country</option>
                        <option value="usa">United States</option>
                        <option value="canada">Canada</option>
                        <option value="uk">United Kingdom</option>
                        <!-- Add more country options as needed -->
                    </select>

                    <input type="tel" class="input__control mb-2" placeholder="(+964)" pattern="^\+964\d{9,10}$" required>

                    <label class="checkbox__label mt-4">
                        <input type="checkbox" class="checkbox__control" required>
                        I agree with <a href="/terms" target="_blank">Terms & Conditions</a>
                    </label>
                </div>

                <div class="modal__footer">
                    <button type="submit" class="primary__button size__lg">Submit Details</button>
                    <a href="/" class="link__button modal__close">Cancel</a>
                </div>
            </form>
        </div>
    `;

          $('.inquiry__form').on('submit', function () {
              // Check if the modal already exists
              if ($('.modal').length === 0) {
                  // Append the modal to the body
                  $('body').append(inquiryModal);
              }

              return false;
          });




    });


})(jQuery);