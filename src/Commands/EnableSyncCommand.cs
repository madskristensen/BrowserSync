using System;
using System.ComponentModel.Design;
using Microsoft.VisualStudio.Shell;

namespace BrowserSync
{
    internal sealed class EnableSyncCommand
    {
        private readonly Package _package;

        private EnableSyncCommand(Package package)
        {
            if (package == null)
            {
                throw new ArgumentNullException("package");
            }

            _package = package;

            OleMenuCommandService commandService = this.ServiceProvider.GetService(typeof(IMenuCommandService)) as OleMenuCommandService;
            if (commandService != null)
            {
                var id = new CommandID(PackageGuids.guidBrowserSyncPackageCmdSet, PackageIds.EnableSyncCommandId);
                var cmd = new OleMenuCommand(Execute, id);
                cmd.BeforeQueryStatus += BeforeQueryStatus;
                commandService.AddCommand(cmd);
            }
        }

        public static EnableSyncCommand Instance
        {
            get;
            private set;
        }

        private IServiceProvider ServiceProvider
        {
            get { return _package; }
        }

        public static void Initialize(Package package)
        {
            Instance = new EnableSyncCommand(package);
        }

        private void BeforeQueryStatus(object sender, EventArgs e)
        {
            var button = (OleMenuCommand)sender;

            button.Checked = VSPackage.Options.EnableFormSync || VSPackage.Options.EnableNavigationHotkeys;
        }

        private void Execute(object sender, EventArgs e)
        {
            var button = (OleMenuCommand)sender;

            VSPackage.Options.EnableFormSync = !button.Checked;
            VSPackage.Options.EnableNavigationHotkeys = !button.Checked;
            VSPackage.Options.SaveSettingsToStorage();
        }
    }
}
