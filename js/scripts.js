$(document).ready(function(){
/*ACTIVAR DROP*/
    $(".navbar_btn").click(function(){
        if($(".navbar ul").css("height")=='0px')
            {
                $(".navbar ul").css({"height":'auto'});
            }
        else{
                $(".navbar ul").css({"height":''});
            }
    });
    $(".navbar ul").mouseleave(function(){
        $(".navbar ul").css({"height":''});
    });
    $(".navbar ul, section").click(function(){
            $(".navbar ul").css({"height":''});
    });
/*INGRESAR FORM*/
    $(".btn_ingresar").click(function(){
        if($(".form_login").css("display")=='none')
            {
                $(".form_login, .cortina").css({"display":'block'});
            }
        else{
                $(".form_login, .cortina").css({"display":'none'});
            }
    });
/*OCULTAR FORMULARIO */
    $(".form_login").mouseleave(function(){
        $(".form_login, .cortina").fadeOut("fast");
    });
    $("#carousel-banner").mouseover(function(){
        $(".form_login, .cortina").fadeOut("fast");
    });
    $(".cortina, .in").click(function(){
        $(".form_login, .cortina").fadeOut("fast");
    });
/*ESTADO LOGIN*/
    $(".log").click(function(){
        $(".form_login, .btn_ingresar").fadeOut("slow",
            function(){
                $(".estado_login").fadeIn("fast");
            }
        );
    });
/*ESTADO LOGOUT*/
    $(".logout").click(function(){
        $(".estado_login").fadeOut("slow",
            function(){
                $(".btn_ingresar").fadeIn("fast");
            }
        );
    });
/*ESTADO LOGIN BANDEJA DE CONFIGURACION ABIERTA*/
    $(".cog").click(function(){
        if($(".configuracion").css("display")=='none')
            {
                $(".configuracion").css({"display":'block'});
                $(".cog").css({
                    "backgroundColor":'#d6012f',
                    "color":'#ffffff'
                });
            }
        else{
                $(".configuracion").css({"display":''});
                $(".cog").css({
                    "backgroundColor":'',
                    "color":''
                });
            }
    });
    $(".guardar, .cancelar").click(function(){
        $(".configuracion").fadeOut("fast");
    });
/*FIX VISUAL ENLACE A CURSO*/
    $(".link").mouseover(function(){
        $(".huincha i").css({"color": '#d6012f'});
        $(".link").css({"color": '#d6012f'});
    });
    $(".link").mouseleave(function(){
        $(".huincha i").css({"color": ''});
        $(".link").css({"color": ''});
    });

});

