$(document).ready(function() {
    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#btn-cancelar').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e){
        e.preventDefault();
        const idNewImage = $('#id-new-image').val();
        console.log(idNewImage)
        const novoItem = $('<li style="display: none"></li>');
        $(`<img src="${idNewImage}" />`).appendTo(novoItem);
        $(`
            <div class="rodape-imagem">
                <a href="${idNewImage}" target="_blank" title="Ver imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('#id-new-image').val('');
    })
})