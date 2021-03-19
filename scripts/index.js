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
            console.log("Success!")
            $($this).attr("disabled", false)
            $($this).html("Buy Now")
        },
        error: function(){
            alert("Error!")
        }
    })
    

}