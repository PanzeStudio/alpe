// Wrap jQuery code
(function ($) {
    $(document).ready(function () {
        

        let quoteModal = `
        <div class="modal">
            <form class="modal__body modal__large inquiry-form">
                <div class="modal__header">
                    <h6 class="fw-medium mb-0">Ask your question</h6>
                </div>
                <div class="modal__content">
                    <div class="row g-2">
                        <div class="col-md-6">
                            <input type="text" class="input__control mb-2" placeholder="Name" required>
                        </div>
                        <div class="col-md-6">
                                <input type="email" class="input__control mb-2" placeholder="Email Address" required>
                        </div>
                        <div class="col-md-6">
                            <select class="select__control mb-2" required>
                                <option value="" disabled selected>Select country</option>
                                <option value="usa">United States</option>
                                <option value="canada">Canada</option>
                                <option value="uk">United Kingdom</option>
                                <!-- Add more country options as needed -->
                            </select>
                        </div>
                        <div class="col-md-6">
                            <input type="tel" class="input__control mb-2" placeholder="(+964)" pattern="^\+964\d{9,10}$" required>
                        </div>
                        <div class="col-md-6">
                            <select class="select__control mb-2" required>
                                <option value="" disabled selected>Preference</option>
                                <option value="usa">United States</option>
                                <option value="canada">Canada</option>
                                <option value="uk">United Kingdom</option>
                                <!-- Add more country options as needed -->
                            </select>
                        </div>
                        <div class="col-md-6">
                            <select class="select__control mb-2" required>
                                <option value="" disabled selected>Preference</option>
                                <option value="usa">United States</option>
                                <option value="canada">Canada</option>
                                <option value="uk">United Kingdom</option>
                                <!-- Add more country options as needed -->
                            </select>
                        </div>
                        <div class="col-md-12">
                            <textarea name="message" id="message" class="input__control" placeholder="Question" rows="5" ></textarea>
                        </div>
                        <div class="col-md-12">
                            <label class="checkbox__label mt-2">
                                <input type="checkbox" class="checkbox__control" required>
                                I agree with <a href="/terms" target="_blank">Terms & Conditions</a>
                            </label>
                        </div>
                    </div> 
                </div>
                <div class="modal__footer">
                    <button type="submit" class="primary__button size__lg">Quote now</button>
                    <a href="/" class="link__button modal__close">Cancel</a>
                </div>
            </form>
        </div>
    `;

          $('.buyer_quote_action').on('click', function () {
              // Check if the modal already exists
              if ($('.modal').length === 0) {
                  // Append the modal to the body
                  $('body').append(quoteModal);
              }
              return false;
          });




    });


})(jQuery);