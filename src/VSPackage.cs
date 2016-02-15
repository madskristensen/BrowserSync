using System;
using System.Runtime.InteropServices;
using Microsoft.VisualStudio.Shell;
using Microsoft.VisualStudio.Shell.Interop;

namespace BrowserSync
{
    [PackageRegistration(UseManagedResourcesOnly = true)]
    [InstalledProductRegistration("#110", "#112", Vsix.Version, IconResourceID = 400)]
    [ProvideMenuResource("Menus.ctmenu", 1)]
    [ProvideAutoLoad(UIContextGuids80.SolutionExists)]
    [ProvideOptionPage(typeof(Options), "Web", Vsix.Name, 101, 102, true, new string[0], ProvidesLocalizedCategoryName = false)]
    [Guid(PackageGuids.guidBrowserSyncPackageString)]
    public sealed class VSPackage : Package
    {
        public static Options Options;

        protected override void Initialize()
        {
            Options = (Options)GetDialogPage(typeof(Options));

            Logger.Initialize(this, Vsix.Name);
            Telemetry.Initialize(this, Vsix.Version, "5f7a8b5c-b600-46df-9014-b4cadd33d146");

            EnableSyncCommand.Initialize(this);

            base.Initialize();
        }
    }
}
