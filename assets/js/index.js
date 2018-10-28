$(document).ready(function(){
    $("#markdown-textarea").keydown(function(){
        var text = $('#markdown-textarea').val();
        $("#markdown-view").html("<p>"+text+"</p>")
    });
 });