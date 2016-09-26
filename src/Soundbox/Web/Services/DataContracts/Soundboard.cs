using System.Collections.Generic;

namespace Web.Services.DataContracts
{
    public class Soundboard : ITrackCollection
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public List<Track> Tracks { get; set; }
    }
}