function change_img(id, src) {
    // Gets the image element.
    let img = document.getElementById(id);

    // Checks if it exists.
    if (img == null) {
        console.error("There's no element with id = " + id);
        return false;
    }

    // Changes the src of that image.
    if (img.tagName != "IMG") {
        console.error("The element with id = " + id + " isn't an image");
        return false;
    }

    img.src = src;

    return true;
}

function move_steve(x = 0, y = 0) {
    // Gets the nav positions.
    let nav = document.getElementsByTagName("nav")[0];
    let nav_pos = nav.getBoundingClientRect();

    // Gets the steve positions.
    let steve = document.getElementById("steve");
    let steve_pos = steve.getBoundingClientRect();
    
    // If the steve is inside de nav move it, if it is in the border don't.
    if (x > 0 && steve_pos.right < nav_pos.width + nav_pos.left || x < 0 && steve_pos.left > nav_pos.left)
        steve.style.left = steve_pos.left + x + "px";

    if (y > 0 && steve_pos.bottom < nav_pos.height + nav_pos.top || y < 0 && steve_pos.top > nav_pos.top)
        steve.style.top = steve_pos.top + y + "px";

    return true;
}

// After DOM has been loaded.
document.addEventListener("DOMContentLoaded", function() {
    let img_id = "steve", idx = 0;
    
    document.addEventListener("keypress", function(event) {
        if (idx > 5)
            idx = 0;

        // Change the image to the next one whenever you press w or a or s or d.
        if (event.key == "w" || event.key == "a" || event.key == "s" || event.key == "d") {
            change_img(img_id, `images/${img_id}/${idx}.png`);

            idx++;
        }

        // Moves the steve if you press w or a or s or d.
        switch (event.key) {
            case "w":
                move_steve(0, -3);
                break;
            case "a":
                move_steve(-3);
                break;
            case "s":
                move_steve(0, 3);
                break;
            case "d":
                move_steve(3);
                break;
        }
    });
    for (let el of document.getElementsByName("wasd_btns")){
        el.addEventListener("click", function() {
            if (idx > 5)
                idx = 0;

            // Change the image to the next one whenever you press w or a or s or d.
            change_img(img_id, `images/${img_id}/${idx}.png`);

            idx++;
            console.log(el.innerHTML);
            // Moves the steve if you press w or a or s or d.
            switch (el.innerHTML) {
                case "w":
                    move_steve(0, -3);
                    break;
                case "a":
                    move_steve(-3);
                    break;
                case "s":
                    move_steve(0, 3);
                    break;
                case "d":
                    move_steve(3);
                    break;
            }
        });
    }
});
