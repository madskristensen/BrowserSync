/// <reference path="_intellisense/browserlink.intellisense.js" />

(function (browserLink, $) {
    /// <param name="browserLink" value="bl" />
    /// <param name="$" value="jQuery" />

    var _id = "__browserSync";

    function showOverlay() {
        var overlay = createOverlay();
        document.body.appendChild(overlay);

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

    function createOverlay() {

        // Blur the background
        var overlay = document.createElement("div");
        overlay.id = _id;

        // Create <div>
        var modal = document.createElement("aside");
        modal.innerHTML =
            "<h3>Browser Sync for Visual Studio</h3>" +
            "<p>" +
                "You can now use <strong>CTRL + Alt + Enter</strong> directly in the browser to synchronize two or more browsers connected to Visual Studio." +
                "<br /><br />" +
                "<a href=\"https://visualstudiogallery.msdn.microsoft.com/5741a548-5179-4a77-ad96-fca71535774d\" target=\"_blank\">Learn more</a>" +
            "</p>";

        overlay.appendChild(modal);

        // Create <section>
        var section = document.createElement("section");
        section.innerHTML =
            "<input type=\"checkbox\" id=\"__browserSyncHide\" /> " +
            "<label for=\"__browserSyncHide\">Don't show this again</label>";

        modal.appendChild(section);

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
        "    z-index: 2147483638;" +
        "    background: rgba(0, 0, 0, .4);" +
        "}" +

        "#" + _id + " aside {" +
        "    position: fixed;" +
        "    top: 50%;" +
        "    left: 50%;" +
        "    width: 320px;" +
        "    margin-left: -160px;" +
        "    margin-top: -150px;" +
        "    color: black;" +
        "    background: white;" +
        "    font: 15px/1 arial;" +
        "    text-align: left;" +
        "    border: 1px solid #c0c0c0;" +
        "}" +

        "#" + _id + " aside h3 {" +
        "    padding: 20px;" +
        "    margin: 0;" +
        "    font-size: 20px;" +
        "}" +

        "#" + _id + " aside p {" +
        "    padding: 20px;" +
        "    margin: 0;" +
        "    min-height: 200px;" +
        "    line-height: 1.7;" +
        "}" +

        "#" + _id + " aside a {" +
        "    color: dodgerblue;" +
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

        modal.appendChild(style);

        return overlay;
    }

    return {
        showOverlay: showOverlay,
        hideOverlay: hideOverlay
    };
});