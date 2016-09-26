using System.Collections.Generic;
using Web.Services.DataContracts;

namespace Web.Storage
{
    public class CampaignStore : IStore<Campaign>
    {
        private static readonly List<string> Characters = new List<string> { "E7F61483", "9F508E6D", "C5476D07", "F2C665D4" };

        public Campaign Get(string id)
        {
            return new Campaign
            {
                Id = "030E7D50",
                Name = "Approaching Darkness",
                Image = "http://gilbertsollars.com/images/wallpapers/fantasy-forest-wallpaper/fantasy-forest-wallpaper-13.jpg",
                Characters = Characters,
            };
        }
    }
}
