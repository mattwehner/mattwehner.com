using System.Collections.Generic;

namespace Web.Services.DataContracts
{
    public class Campaign
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Image { get; set; }

        public List<string> Characters { get; set; }
        public List<string> Playlists { get; set; }
        public List<string> Soundboards { get; set; }
    }
}