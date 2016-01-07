using System.ComponentModel.Composition;
using System.IO;
using Microsoft.VisualStudio.Web.BrowserLink;

namespace BrowserSync
{
    [Export(typeof(IBrowserLinkExtensionFactory))]
    public class OverlayFactory : IBrowserLinkExtensionFactory
    {
        public BrowserLinkExtension CreateExtensionInstance(BrowserLinkConnection connection)
        {
            if (VSPackage.Options.ShowOverlay && VSPackage.Options.EnableNavigationHotkeys)
            {
                return new OverlayExtension();
            }

            return null;
        }

        public string GetScript()
        {
            using (Stream stream = GetType().Assembly.GetManifestResourceStream("BrowserSync.BrowserLink.Overlay.js"))
            using (StreamReader reader = new StreamReader(stream))
            {
                return reader.ReadToEnd();
            }
        }
    }

    public class OverlayExtension : BrowserLinkExtension
    {
        private static bool _showInCurrentVsSession = true;

        public override void OnConnected(BrowserLinkConnection connection)
        {
            if (_showInCurrentVsSession)
            {
                Browsers.Client(connection).Invoke("showOverlay");
                base.OnConnected(connection);
            }
        }

        [BrowserLinkCallback] // This method can be called from JavaScript
        public void HideOverlay(bool dontShowAgain)
        {
            if (dontShowAgain)
            {
                VSPackage.Options.ShowOverlay = false;
                VSPackage.Options.SaveSettingsToStorage();
            }
            else
            {
                _showInCurrentVsSession = false;
            }

            Browsers.All.Invoke("hideOverlay");
        }
    }
}
