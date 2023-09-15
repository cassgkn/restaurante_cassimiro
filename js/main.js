//ativa o carousel do plugin slick
$(document).ready(function(){
    //ativa o a máscara ou formato do telefone atraves do plugin jquery mask
    $('#telefone').mask('(00) 00000-0000')

    //valida formulario, cria a obrigatoriedade de preenchimento atraves do plugin jquery validate
    $('form').validate({
        rules: {
            nome: {
                required: true,
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true,
            },
            mensagem: {
                required: true,
            }
        },

        //customiza a mensagem do plugin jquery messages
        messages: {
            nome: 'Por favor, insira seu nome completo',
            telefone: 'Por favor, insira seu telefone',
            email: 'Por favor, insira seu email corretamente',
            mensagem: 'Por favor, insira uma mensagem'
        },
        submitHandler: function(form) {
            console.log(form)
        },

        //escuta e intercepta apos clicar em botao enviar que existem campos a preencher
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })
})