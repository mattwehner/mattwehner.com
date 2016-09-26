using System.Collections.Generic;

namespace Web.Services.DataContracts
{
    public interface ITrackCollection
    {
        string Id { get; set; }
        string Name { get; set; }
        List<Track> Tracks { get; set; }
    }
}