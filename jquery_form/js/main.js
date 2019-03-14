$(document).ready(function(){
    $(".user-form").hide().delay(2000).show("slow");
    $("#message").attr("maxlength", "1000");
    $("#name__img").hide();
    $("#email__img").hide();
    $("#phone__img").hide();

    $("#name").focus(function(){
       $("#name").css("border-color", "#fff");
    });
    $("#email").focus(function(){
        $("#email").css("border-color", "#fff");     
     });
     $("#tel").focus(function(){
        $("#tel").css("border-color", "#fff");     
     });

    $("#btn__user-form_enter").click(function(){
       if ($("#name").val() !== "" && $("#email").val() !== "" && $("#phone").val() !== "") {
           $("#name__img").show(1000);
           $("#email__img").show(1000);
           $("#phone__img").show(1000);
       }
       else {
            $("#name").css("border-color", "red");
            $("#email").css("border-color", "red");
            $("#tel").css("border-color", "red");
            alert("Пустое поле");
       }
    });

    $("#btn__user-form_cansel").click(function(){
        $("#name").val("");
        $("#email").val("");
        $("#tel").val("");
        $("#name__img").hide();
        $("#email__img").hide();
        $("#phone__img").hide();
    });
});
