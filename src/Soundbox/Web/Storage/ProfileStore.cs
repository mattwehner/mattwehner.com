using Web.Services.DataContracts;

namespace Web.Storage
{
    public class ProfileStore : IStore<Profile>
    {
        public Profile Get(string id)
        {
            return new Profile
            {
                Id = "030E7D50-A040-45B9-845E-F60648C1BED0",
                Username = "Dungeon Master"
            };
        }
    }
}