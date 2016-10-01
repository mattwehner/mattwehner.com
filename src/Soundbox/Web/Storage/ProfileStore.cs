using System.Collections.Generic;
using Web.Services.DataContracts;

namespace Web.Storage
{
    public class ProfileStore : IProfileStore
    {
        public Profile Get(string id)
        {
            return new Profile
            {
                Id = "030E7D50",
                Username = "Dungeon Master",
                Campaigns = Campaigns,
                Characters = Characters,
            };
        }

        private static readonly List<string> Campaigns = new List<string> {"2EA6C9C5"};
        private static readonly List<string> Characters = new List<string> { "E7F61483", "9F508E6D", "C5476D07", "F2C665D4"};
    }
}