/// <reference path="_intellisense/browserlink.intellisense.js" />

(function (browserLink, $) {
    /// <param name="browserLink" value="bl" />
    /// <param name="$" value="jQuery" />

    function syncNavigation(url, xpos, ypos) {

        if (location.href !== url) {
            location.href = url;
        } else {
            window.scrollTo(xpos, ypos);
        }
    }

    function syncForm(dto) {

        var data = JSON.parse(dto);
        var element = $(data.selector);

        if (element.length) {
            var tagName = element[0].tagName;

            if (tagName === "INPUT" || tagName === "TEXTAREA" || tagName === "SELECT") {

                if (element.attr("type") === "checkbox") {
                    element[0].checked = data.value;
                } else {
                    element.val(data.value);
                }
            } else if (element[0].contentEditable) {
                element.html(data.value);
            }

            element.blur();
        }
    }

    function connectionHandler() {

        document.onkeydown = function (e) {
            var evt = e || event;

            if (evt.altKey && evt.ctrlKey && evt.keyCode === 13) {
                evt.preventDefault();
                browserLink.invoke("Navigate", window.pageXOffset, window.pageYOffset);
            }
        };

        $("body").on("change input blur", "input, textarea, select, [contenteditable]", function () {
            var self = $(this);
            var id = self.attr("id");
            var name = self.attr("name");
            var dto = {};

            // Abort when insecure and the browsers will throw an exception
            if (this.type === "file")
                return;

            if (id) {
                dto.selector = "#" + id;
            } else if (name) {
                dto.selector = self[0].tagName + "[name='" + name + "']";
            }

            if (dto.selector) {

                if (self.attr("type") === "checkbox") {
                    dto.value = self.is(":checked"); // jQuery always returns "on" for checkbox.val()
                } else if (self.attr("type") === "radio") {
                    dto.value = [self.val()]; // Radio button value has to be an array
                } else {
                    dto.value = self.val() || self.html();
                }

                browserLink.invoke("FormSync", JSON.stringify(dto));
            }
        });
    }

    return {
        onConnected: connectionHandler, // Fires automatically when Browser Link connects
        syncNavigate: syncNavigation, // Called by SyncEngine.cs
        syncForm: syncForm  // Called by SyncEngine.cs
    };
});