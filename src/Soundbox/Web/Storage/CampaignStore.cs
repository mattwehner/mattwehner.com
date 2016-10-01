using System.Collections.Generic;
using Web.Services.DataContracts;

namespace Web.Storage
{
    public class CampaignsStore : ICampaignsStore
    {
        private static readonly List<string> Characters = new List<string> { "E7F61483", "9F508E6D", "C5476D07", "F2C665D4" };

        public Campaign Get(string id)
        {
            return new Campaign
            {
                Id = "030E7D50",
                Name = "Approaching Darkness",
                Image = "http://www.spyderonlines.com/images/wallpapers/fantasy-forest-wallpapers/fantasy-forest-wallpapers-3.jpg",
                Characters = Characters,
            };
        }

        public List<Campaign> ListForCaller()
        {
            return new List<Campaign>
            {
                new Campaign
                {
                    Id = "030E7D50",
                    Name = "Approaching Darkness",
                    Image = "http://www.spyderonlines.com/images/wallpapers/fantasy-forest-wallpapers/fantasy-forest-wallpapers-3.jpg",
                    Characters = Characters,
                },
                new Campaign
                {
                    Id = "9F508E6D",
                    Name = "Campaign 2",
                    Image = "http://www.spyderonlines.com/images/wallpapers/fantasy-forest-wallpapers/fantasy-forest-wallpapers-3.jpg",
                    Characters = Characters,
                }
            };
        }
    }
}
