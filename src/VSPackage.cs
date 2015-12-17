using System;
using System.Runtime.InteropServices;
using Microsoft.VisualStudio.Shell;
using Microsoft.VisualStudio.Shell.Interop;

namespace BrowserSync
{
    [PackageRegistration(UseManagedResourcesOnly = true)]
    [InstalledProductRegistration("#110", "#112", VERSION, IconResourceID = 400)]
    [ProvideMenuResource("Menus.ctmenu", 1)]
    [ProvideAutoLoad(UIContextGuids80.SolutionExists)]
    [ProvideOptionPage(typeof(Options), "Web", NAME, 101, 102, true, new string[0], ProvidesLocalizedCategoryName = false)]
    [Guid(PackageGuids.guidBrowserSyncPackageString)]
    public sealed class VSPackage : Package
    {
        public const string VERSION = "1.0";
        public const string NAME = "Browser Sync";
        public static Options Options;

        protected override void Initialize()
        {
            Options = (Options)GetDialogPage(typeof(Options));

            Logger.Initialize(this, NAME);
            Telemetry.Initialize(this, VERSION, "5f7a8b5c-b600-46df-9014-b4cadd33d146");

            EnableSyncCommand.Initialize(this);

            base.Initialize();
        }
    }
}
