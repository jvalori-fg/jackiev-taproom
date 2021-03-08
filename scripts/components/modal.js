export function restockAlerts(){
    
    var modal = $("#restockModal");
    var btn = $(".getUpdates");
    var modalClose = $(modal).find(".close");
    var modalForm = $(modal).find("form");
    var targetProductName,
        targetProductID; 

    // Open the modal
    $(btn).on('click', function(){
        // reset form
        $(modalForm).trigger("reset")
        $(modalForm).show()
        $('.modal-body').find('.confirmation-message').hide()
        $(modalForm).find('.form-error').hide()

        // Product Data
        targetProductName = $(this).attr('data-product-notifications-name');
        targetProductID = $(this).attr('data-product-notifications-id');
        $(modal).find('.product').html(targetProductName);
        $(modal).find('#productID').val(targetProductID);

        // Show Form
        $(modal).addClass('open');
        $(modal).attr('aria-hidden', "false")
    })

    // Close modal
    $(modalClose).on('click', function(){
        $(modal).removeClass('open');
        $(modal).attr('aria-hidden', "true")
    })

    if ( $(modal).hasClass('open') ){
        $(".modal").on('click', function(event){
            $(modal).removeClass('open');
                $(modal).attr('aria-hidden', "true")
            console.log('clicked ' + event.target)
            if ($(event.target) == $(modal)) {
                
            }
        }) 
    }

    // Submit
    $(modalForm).on('submit', function(e){
        e.preventDefault()
        if ( $('#restock-email').val() != "" ){
            $(modalForm).slideUp();
            $('.modal-body').find('.confirmation-message').slideDown();
        } else {
            $(modalForm).find('.form-error').slideDown();
        }
    })
}