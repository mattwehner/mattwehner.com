namespace Web.Storage
{
    public interface ISoundboxStore
    {
        IProfileStore Profiles { get; }
        ICampaignsStore Campaigns { get; }
    }
}