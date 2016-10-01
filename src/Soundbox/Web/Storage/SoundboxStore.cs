namespace Web.Storage
{
    public class SoundboxStore : ISoundboxStore
    {
        public IProfileStore Profiles { get; set; }

        public ICampaignsStore Campaigns { get; set; }
    }
}