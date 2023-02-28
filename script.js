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

function move_el(id, x = 0, y = 0) {
    // Gets the element.
    let el = document.getElementById(id)

    // Checks if it exists.
    if (el == null) {
        console.error("There's no element with id = " + id);
        return false;
    }

    let pos = el.getBoundingClientRect();
    
    // Moves that image horizontally by the value of x and vertically by the value of y.
    if (x != 0)
        el.style.left = pos.left + x + "px";

    if (y != 0)
        el.style.top = pos.top + y + "px";

    return true;
}

// After DOM has been loaded.
document.addEventListener("DOMContentLoaded", function() {
    let img_id = "steve"

    // Each 1s changes the image and moves it.
    let idx = 0;
    interval = setInterval(function () {
        if (idx > 5)
            idx = 0;

        // Change the src in the <img> tag.
        if (!change_img(img_id, `images/${img_id}/${idx}.png`))
            clearInterval(interval);

        idx++;

        // Move the <img> a little bit.
        if (!move_el(img_id, 3))
            clearInterval(interval);
    }, 100);
    

    // Repeat until the image gets on the div end



    // When it reaches the div end



    // Do the same as ine 3 to line 7 but from div end to div start and with mirrored images


});