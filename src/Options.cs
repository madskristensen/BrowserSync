using System.ComponentModel;
using Microsoft.VisualStudio.Shell;

namespace BrowserSync
{
    public class Options : DialogPage
    {
        [Category("Browser Sync")]
        [DisplayName("Enable Form Sync")]
        [Description("Determines if form fields are automatically synced when typing in them.")]
        [DefaultValue(true)]
        public bool EnableFormSync { get; set; } = true;

        [Category("Browser Sync")]
        [DisplayName("Enable Navigation hotkeys")]
        [Description("Determines if the keybord hotkeys (CTRL+ALT+Enter) in the browser should trigger navigational sync.")]
        [DefaultValue(true)]
        public bool EnableNavigationHotkeys { get; set; } = true;
    }
}
