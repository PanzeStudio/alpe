// Wrap jQuery code
(function ($) {
    $(document).ready(function () {
        let offerModal = `<div class="modal">
                <div class="modal__body">
                    <div class="modal__header">
                        <h6 class="fw-medium mb-0">Bandar Imam Petrochemical Company</h6>
                    </div>
                    <div class="modal__content">
                        <table class="table__one">
                            <tbody>
                                <tr>
                                    <td>
                                        <div class="label">Release date & time</div>
                                        <div class="row align-items-center text">
                                            <div class="col">17/12/2024</div>
                                            <div class="col"><span class="line-x"></span></div>
                                            <div class="col">10:41 AM</div>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="label">Product brand name</div>
                                        <div class="text">Basra Oil Company (BOC)</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="label">Product Symbol</div>
                                        <div class="text">ALPGEGW018765</div>
                                    </td>
                                    <td>
                                        <div class="label">Supplier broker</div>
                                        <div class="text">Al-Iraqia Petroleum Trading</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="label">Supplier</div>
                                        <div class="text">Basra Oil Company (BOC)</div>
                                    </td>
                                    <td>
                                        <div class="label">Manufacturer</div>
                                        <div class="text">Basra Oil Company (BOC)</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="row">
                                            <div class="col-8">
                                                <div class="label">Maximum increase in supply volume</div>
                                                <div class="text">A person</div>
                                            </div>
                                            <div class="col-4">
                                                <div class="label">Display size</div>
                                                <div class="text">12,000 tons</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="label">Product Specification</div>
                                        <div class="text">According to the prospectus & offer notice</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="label">Maximum order price change</div>
                                        <div class="text">$0.01 <small>(According to the mechanism approved by the Board of Directors of Iraq Energy Exchange)</small></div>
                                    </td>
                                    <td>
                                        <div class="label">Base price</div>
                                        <div class="text">$5200.00 <small>(According to the mechanism approved by the Board of Directors of Iraq Energy Exchange)</small></div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="label">Transaction type</div>
                                        <div class="text">Salaf</div>
                                    </td>
                                    <td>
                                        <div class="label">Minimum purchase to find out the price</div>
                                        <div class="text">1500 tons</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="row">
                                            <div class="col">
                                                <div class="label">Minimum purchase ton</div>
                                                <div class="text">5,000 tons</div>
                                            </div>
                                            <div class="col">
                                                <div class="label">Maximum purchase ton</div>
                                                <div class="text">15,000 tons</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="label">Allocation base unit</div>
                                        <div class="text">Tone</div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="modal__footer">
                        <a href="/" class="primary__button size__lg">
                            Report Creation
                        </a>
                        <a href="/" class="link__button modal__close">
                            Cancel
                        </a>
                    </div>
                </div>
            </div>
        `;




        // Add click event listener to rows in the .offer__table
        $('.offer__table tr').on('click', function () {
            // Check if the modal already exists
            if ($('.modal').length === 0) {
                // Append the modal to the body
                $('body').append(offerModal);
            }
        });



    });


})(jQuery);