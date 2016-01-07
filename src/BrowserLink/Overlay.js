/// <reference path="_intellisense/browserlink.intellisense.js" />

(function (browserLink, $) {
    /// <param name="browserLink" value="bl" />
    /// <param name="$" value="jQuery" />

    var _id = "__browserSyncOverlay";

    function showOverlay() {

        // Create <div>
        var overlay = document.createElement("div");
        overlay.id = _id;
        overlay.innerHTML =
            "<h3>" +
                "<img width=\"16\" height=\"16\" alt=\"\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAGFBMVEVMaXH29vb29vb29vb29vZCQkKGhoaRkZErhFTDAAAABHRSTlMA7zDf2AcIsQAAAEZJREFUeNp1jdEOwCAIA1dX8f//eGQdZKLe211CuXY0kJzcuqE4xRvcgzXkyaAoI3f7v6VXfMVtLuyB4RDE0EkAS89leeUBL8YCOyTsbeoAAAAASUVORK5CYIJ8Alcwz7MXD8MgyrIUdV0vGQm4qrh6a6CdeA99368M/BEOAy44P1E3TWOKojBd1xlab9JKWbsMBAqsTDCHIss7EffFWBkACBK1TfaMTBFnE2jjd/Byi4C2Bh1Ce69Zlo1vBngDe3AmZHD+TxccUMEW0Zn4HlgbGqSA5K8vMQVKDv/Al0cvccTCGxyHEE8EbikOVJECZQAAAABJRU5ErkJggg==\" />" +
                " Browser Sync for Visual Studio" +
            "</h3>" +
            "<p>" +
                "You can now use <strong>CTRL+Alt+Enter</strong> to sync all browsers connected to Visual Studio." +
                " <a href=\"https://visualstudiogallery.msdn.microsoft.com/5741a548-5179-4a77-ad96-fca71535774d\">Learn more</a>" +
            "</p>";

        // Create <section>
        var section = document.createElement("section");
        section.innerHTML =
            "<input type=\"checkbox\" id=\"__browserSyncHide\" /> " +
            "<label for=\"__browserSyncHide\">Don't show this again</label>";

        // Create <button>
        var button = document.createElement("button");
        button.innerHTML = "Thanks, got it";
        button.onclick = function () {
            var checkbox = document.getElementById("__browserSyncHide");
            browserLink.invoke("HideOverlay", checkbox.checked);
            hideOverlay();
        };

        section.appendChild(button);
        overlay.appendChild(section);

        // Create <style>
        var style = document.createElement("style");
        style.innerHTML =
        "#" + _id + " {" +
        "    position: fixed;" +
        "    top: 50%;" +
        "    left: 50%;" +
        "    width: 360px;" +
        "    margin-left: -180px;" +
        "    margin-top: -75px;" +
        "    color: black;" +
        "    background: white;" +
        "    z-index: 2147483638;" +
        "    border: 1px solid #c0c0c0;" +
        "    border-radius: 5px;" +
        "    font: 15px/1 arial;" +
        "    box-shadow: 5px 5px 5px #ccc;" +
        "}" +

        "#" + _id + " h3 {" +
        "    padding: 6px 10px;" +
        "    margin: 0;" +
        "    background: #ddd;" +
        "    border-radius: 5px 5px 0 0;" +
        "    font-size: 18px;" +
        "}" +

        "#" + _id + " p {" +
        "    padding: 10px;" +
        "    margin: 0;" +
        "    line-height: 1.5;" +
        "}" +

        "#" + _id + " section {" +
        "    margin: 10px;" +
        "}" +

        "#" + _id + " button {" +
        "    position: absolute;" +
        "    right: 10px;" +
        "    bottom: 10px;" +
        "    padding: 3px 6px;" +
        "}" +

        "#" + _id + " label {" +
        "    display: inline;" +
        "    font-weight: normal;" +
        "}";

        overlay.appendChild(style);

        // Show it on the page
        document.body.appendChild(overlay);
    }

    function hideOverlay() {
        var overlay = document.getElementById(_id);

        if (overlay) {
            overlay.parentNode.removeChild(overlay);
        }
    }

    return {
        showOverlay: showOverlay,
        hideOverlay: hideOverlay
    };
});