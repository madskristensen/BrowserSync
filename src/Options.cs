using System.ComponentModel;
using Microsoft.VisualStudio.Shell;

namespace BrowserSync
{
    public class Options : DialogPage
    {
        [Category("General")]
        [DisplayName("Enable form sync")]
        [Description("Determines if form fields are automatically synced when typing in them.")]
        [DefaultValue(true)]
        public bool EnableFormSync { get; set; } = true;

        [Category("General")]
        [DisplayName("Enable navigation hotkeys")]
        [Description("Determines if the keybord hotkeys (CTRL+ALT+Enter) in the browser should trigger navigational sync.")]
        [DefaultValue(true)]
        public bool EnableNavigationHotkeys { get; set; } = true;

        [Category("Welcome")]
        [DisplayName("Show browser overlay")]
        [Description("Shows the overlay in the browsers containing info about the shortcut key.")]
        [DefaultValue(true)]
        public bool ShowOverlay { get; set; } = true;
    }
}
