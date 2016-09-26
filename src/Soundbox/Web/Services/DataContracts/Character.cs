using System.Collections.Generic;

namespace Web.Services.DataContracts
{
    public class Character
    {
        public string Id { get; set; }
        public string Name { get; set; }

        public string Image { get; set; }

        public List<Playlist> Playlists { get; set; }
        public List<Soundboard> Soundboards { get; set; }
    }
}