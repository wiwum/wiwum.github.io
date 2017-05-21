$(document).ready(function(){
    $("button").click(function(){
        $.get("https://wiwum.github.io/multiplayer-game/P1-client-side/index.html", function(data, status){
            alert("Data: " + data + "\nStatus: " + status);
        });
    });
});
