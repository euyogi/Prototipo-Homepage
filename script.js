function change_steve(src) {
    steve.src = src;

    return true;
}

function move_steve(x = 0) {
    let steve_pos = steve.getBoundingClientRect();

    // If the steve is inside de nav move it, if it is in the border don't.
    if (x > 0 && steve_pos.right < nav_pos.width + nav_pos.left)
        steve.style.transform = `translateX(${steve_pos.left - initial_left_pos + x}px)`;
    else if (x < 0 && steve_pos.left > nav_pos.left)
        steve.style.transform = `scaleX(-1) translateX(${-(steve_pos.left - initial_left_pos + x)}px)`;

    return true;
}

// After DOM has been loaded.
document.addEventListener("DOMContentLoaded", function() {
    // Gets the nav positions.
    let nav = document.getElementsByTagName("nav")[0];
    nav_pos = nav.getBoundingClientRect();

    // Gets the steve positions.
    steve = document.getElementById("steve");
    initial_left_pos = steve.getBoundingClientRect().left;

    a_btn = document.getElementById("a");
    d_btn = document.getElementById("d");

    let idx = 0;

    document.addEventListener("keydown", function(event) {
        if (idx > 5)
            idx = 0;

        // Change the image to the next one whenever you press w or a or s or d.
        if (event.key == "d" || event.key == "a") {
            steve.src = `images/steve/${idx}.png`
            idx++;
        }
        
        // Moves the steve if you press w or a or s or d.
        if (event.key == "a") {
            move_steve(-6);
            a_btn.style.color = "white";
            a_btn.style.backgroundColor = "#197278";
        }
        else if (event.key =="d") {
            move_steve(6);
            d_btn.style.color = "white";
            d_btn.style.backgroundColor = "#197278";
        }
    });

    document.addEventListener("keyup", function(event) {
        if (event.key == "a") {
            a_btn.style.color = "";
            a_btn.style.backgroundColor = "";
        }
        else if (event.key =="d") {
            d_btn.style.color = "";
            d_btn.style.backgroundColor = "";
        }
    });
});
