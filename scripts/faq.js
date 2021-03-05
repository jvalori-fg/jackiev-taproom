$(document).ready(function(){
    faqToggle();
})

let targetAnswer;

function faqToggle(){
    $('.faq-section__item-question').on('click', function(){
        targetAnswer = $(this).attr('aria-controls')
        console.log( targetAnswer.scrollHeight )

        if ( $(this).attr('aria-expanded') == "false") {
            
            $(this).attr('aria-expanded', "true");
            $(targetAnswer).attr('aria-hidden', "false")
            $(targetAnswer).slideDown();
            
        } else if ( $(this).attr('aria-expanded') == "true") {
            
            $(this).attr('aria-expanded', "false");
            $(targetAnswer).attr('aria-hidden', "true")
            $(targetAnswer).slideUp();
        }
        


    })
}