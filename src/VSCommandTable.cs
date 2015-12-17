namespace BrowserSync
{
    using System;
    
    /// <summary>
    /// Helper class that exposes all GUIDs used across VS Package.
    /// </summary>
    internal sealed partial class PackageGuids
    {
        public const string guidBrowserSyncPackageString = "557a6900-91ba-4097-99d0-c0ad2a12a92c";
        public const string guidBrowserSyncPackageCmdSetString = "44f3346d-7059-4428-9d81-2f16be71e28e";
        public const string guidBrowserLinkCmdSetString = "30947ebe-9147-45f9-96cf-401bfc671a82";
        public static Guid guidBrowserSyncPackage = new Guid(guidBrowserSyncPackageString);
        public static Guid guidBrowserSyncPackageCmdSet = new Guid(guidBrowserSyncPackageCmdSetString);
        public static Guid guidBrowserLinkCmdSet = new Guid(guidBrowserLinkCmdSetString);
    }
    /// <summary>
    /// Helper class that encapsulates all CommandIDs uses across VS Package.
    /// </summary>
    internal sealed partial class PackageIds
    {
        public const int EnableSyncCommandId = 0x0100;
        public const int IDG_BROWSERLINK_COMMANDS = 0x2001;
    }
}
