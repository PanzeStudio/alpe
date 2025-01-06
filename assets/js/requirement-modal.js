// Wrap jQuery code
(function ($) {
    $(document).ready(function () {
        

        let requirementModal = `
        <div class="modal">
            <form class="modal__body modal__small requirement-form">
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

          $('.post-requirements-from').on('submit', function () {
              // Check if the modal already exists
              if ($('.modal').length === 0) {
                  // Append the modal to the body
                  $('body').append(requirementModal);
              }

              return false;
          });




    });


})(jQuery);