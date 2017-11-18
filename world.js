/*global $*/$(document).ready(function(){
    
    $("#lookup").click(function(){
        $.ajax({
            method: "GET",
            url: "world.php",
            data: { country: $("#country").val(), all: $("#all").prop("checked") }
        }).done(function(msg){
            $("#result").html(msg);
        });
    });
});