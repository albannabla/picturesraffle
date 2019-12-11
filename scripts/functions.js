var current_list = [];
function start_list() {
    current_list = initial_list.slice();
    document.getElementById("lista").innerHTML = current_list.length + "<br>"+ current_list;
    document.getElementById("foto").src = "image/start.jpg";
}
function draw_name() {if (current_list.length > 0)
    {
    var pick = Math.floor(Math.random() * current_list.length);
    var chosen = current_list.splice(pick,1);
    document.getElementById("lista").innerHTML = current_list.length + "<br>"+ current_list; 
    document.getElementById("picked").innerHTML = chosen[0] + "<br>";
    document.getElementById("foto").src = "image/"+ chosen[0] +".jpg";
    }
}
    