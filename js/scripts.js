$(document).ready(function(){
    $('#design-fig').click(function(){
        $('#design').toggle();
        $('#design-icon').toggle();
    })
    $('#dev-fig').click(function(){
        $('#development').toggle();
        $('#dev-icon').toggle();
    })
    $('#products-fig').click(function(){
        $('#product').toggle();
        $('#products-icon').toggle();
    })
    $('#submit').click(function() {
        let name = $('#name').val();
        alert(name + ' we have received your message. Thank you for reaching out to us.');
    })
})