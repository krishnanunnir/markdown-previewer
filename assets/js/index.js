$(document).ready(function(){
    $("#markdown-textarea").keyup(function(){
        var text = $('#markdown-textarea').val();
        $("#markdown-view").html(marked(text));
    });
 });