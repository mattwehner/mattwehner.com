using System.Collections.Generic;

namespace Web.Services.DataContracts
{
    public class Campaign
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Image { get; set; }

        public List<Character> Characters { get; set; }
        public List<Playlist> Playlists { get; set; }
        public List<Soundboard> Soundboards { get; set; }
    }
}