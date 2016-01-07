/// <reference path="_intellisense/browserlink.intellisense.js" />

(function (browserLink, $) {
    /// <param name="browserLink" value="bl" />
    /// <param name="$" value="jQuery" />

    var _id = "__browserSync";

    function showOverlay() {
        var modal = createModal();
        document.body.appendChild(modal);

        // Close the modal on ESC
        $(document).on("keyup.browsersync", function (e) {
            if (e.keyCode === 27) {
                browserLink.invoke("HideOverlay", false);
                hideOverlay();
            }

            $(document).off("keyup.browsersync");
        });
    }

    function hideOverlay() {
        var overlay = document.getElementById(_id);

        if (overlay) {
            overlay.parentNode.removeChild(overlay);
        }
    }

    function createModal() {

        // Blur the background
        var background = document.createElement("div");
        background.id = _id;

        // Create <div>
        var overlay = document.createElement("aside");
        overlay.innerHTML =
            "<h3>Browser Sync for Visual Studio</h3>" +
            "<p>" +
                "You can now use <strong>CTRL + Alt + Enter</strong> directly in the browser to synchronize all browsers connected to Visual Studio." +
                "<br /><br />" +
                "<a href=\"https://visualstudiogallery.msdn.microsoft.com/5741a548-5179-4a77-ad96-fca71535774d\" target=\"_blank\">Learn more</a>" +
            "</p>";

        background.appendChild(overlay);

        // Create <section>
        var section = document.createElement("section");
        section.innerHTML =
            "<input type=\"checkbox\" id=\"__browserSyncHide\" /> " +
            "<label for=\"__browserSyncHide\">Don't show this again</label>";

        overlay.appendChild(section);

        // Create <button>
        var button = document.createElement("button");
        button.innerHTML = "Thanks, got it";
        button.onclick = function () {
            var checkbox = document.getElementById("__browserSyncHide");
            browserLink.invoke("HideOverlay", checkbox.checked);
            hideOverlay();
        };

        section.appendChild(button);

        // Create <style>
        var style = document.createElement("style");
        style.innerHTML =
        "#" + _id + " {" +
        "    position: fixed;" +
        "    top: 0;" +
        "    left: 0;" +
        "    bottom: 0;" +
        "    right: 0;" +
        "    background: rgba(0, 0, 0, .4);" +
        "}" +

        "#" + _id + " aside {" +
        "    position: fixed;" +
        "    top: 50%;" +
        "    left: 50%;" +
        "    width: 360px;" +
        "    margin-left: -180px;" +
        "    margin-top: -150px;" +
        "    color: black;" +
        "    background: white;" +
        "    z-index: 2147483638;" +
        "    font: 15px/1 arial;" +
        "    border: 1px solid #c0c0c0;" +
        "}" +

        "#" + _id + " aside h3 {" +
        "    padding: 20px 20px 20px 60px;" +
        "    margin: 0;" +
        "    font-size: 20px;" +
        "    background: no-repeat 20px center url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAA9lBMVEVMaXH+/v7+/v7////+/v7+/v7////////+/v7+/v7////+/v7+/v7+/v7////+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7////+/v7+/v7+/v7////+/v7+/v7+/v7+/v7////+/v7+/v7+/v7+/v7+/v7+/v7///9nIXmzkLx1NoZpJHtuK39/RI7x6vL9/P3n3Orz7vT6+PulfLDby9+8ncTUwNlzMoTDqMp4OYiSYJ+ES5LKstHNttOqg7SecapsKH2jeK7i1ebWxNu3lsDp4Oy6msKxjbqof7KGTpTPudWXZ6O1k76NWZucbqfu5/CQXJ3CCcnHAAAAKHRSTlMAo4cEr1QwGPv3PI/ztyg4g5vji2xwp+9gv+toRCQs02QMfMPn189MZxzgQwAAAQBJREFUeNplzud6gjAYBeC4Criqdu85ThAEVIZt3d27938z/RKUQjy/yHkfTsLUnNWKpxpbjXbiPLi4OD9W+nrrp8OjGVm2L+94bS5iStAaR3FfqvoRT0CrGNg/FP2mHto8gYrRC97m+gFjeYws/g8IadV+RzOHQHa3SzDl8RN4kR933RR800+TV1FYj0AKTI9EzvjIAkjkDFRwOuLY76lAvcz9Uxb61H99iMIeZoAyc90Jj+eWMJzSKwPU9jCO5xZQhDOOQuQLhW08S1kAWysCxi6jbGBgpYAot85ktvTRNIFMSrpvqxCnXJ23ufU76KrA6pceta3mDVOjXV03xJV/09RC1IOM3FEAAAAASUVORK5CYIK8BQPdw9xiGVEC9dCESXBa7tSuxvS09sHFvenQ+OIjtyyMKAHdoSF4QKQfJOXGwfGMKNge6sNsBqiV7ycWQv65YpiZ0nCrGJaAOmeZzVzHUguGK/ZCdEoYfbTKUa9j08IhKM6fz5jDULKFsFIqld4b3GUeAZG++DkQYPDbiP6Ow3xoFV/CRXYMlYtjN+wgL1rlbbUd/HI96sEJPpqDSkti+wFe7I1SYqBQfj6J4wRUNp0bwO9RKtpO1T5uhHxFMei0Ou4RY/KpwIuapVJpGA59MHgeHnfOD07gnNPoP+kf4auR3zhsUtaFMHnJPFEMqp6bRKDvGh6O+AR7ahKxAahklljKlkm7Whl+2u3TY7PZ2qHmoK2StkxqbdpClwQm8MD30tfXMSDUFL4Xxkcm0MQ2/R7UPVTI//htkaGqcEi/LSWo0rkSA/wBXFSn91c8Gb0AAAAASUVORK5CYII=);" +
        "}" +

        "#" + _id + " aside p {" +
        "    padding: 20px;" +
        "    margin: 0;" +
        "    min-height: 200px;" +
        "    line-height: 1.7;" +
        "}" +

        "#" + _id + " aside section {" +
        "    margin: 0;" +
        "    padding: 20px;" +
        "    border-top: 1px solid #ccc;" +
        "    background: #eee;" +
        "}" +

        "#" + _id + " aside section button {" +
        "    position: absolute;" +
        "    right: 10px;" +
        "    padding: 3px 6px;" +
        "}" +

        "#" + _id + " aside section label {" +
        "    display: inline;" +
        "    font-weight: normal;" +
        "}";

        overlay.appendChild(style);

        return background;
    }

    return {
        showOverlay: showOverlay,
        hideOverlay: hideOverlay
    };
});