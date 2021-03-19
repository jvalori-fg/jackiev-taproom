import { restockAlerts } from './components/modal.js';

$(document).ready(function(){
    restockAlerts();

    $('[data-buy-now-button]').on('click', function(e){
        buyNowButton(e)
    })
})
let $this,
    prodID,
    productData;

function buyNowButton(e){
    $this = e.target;
    prodID = $($this).attr('data-variant-id');

    productData = {
        items: [
            {
            quantity: 1,
            id: prodID
            }
        ]
    }

    $.ajax({
        type: 'POST',
        url: '/cart/add.js',
        data: productData,
        dataType: "json",
        beforeSend: function(){
            $($this).attr("disabled", true)
            $($this).html("Loading...")
        },
        success: function(){
            $($this).attr("disabled", false)
            $($this).html("Buy Now")
            updateCartCount();
        },
        error: function(){
            alert("Error!")
        }
    })
    

}

function updateCartCount(){

    $.getJSON('/cart.js', function(cart){
        console.log(cart.item_count)
                $("#CartCount").find('[data-cart-count]').html(cart.item_count)
                if ( cart.item_count > 0 ){
                    $('#CartCount').removeClass('hide')
                } else {
                    $('#CartCount').removeClass('hide')
                }
            }
    )
}