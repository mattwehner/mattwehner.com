using System.Collections.Generic;
using Web.Services.DataContracts;

namespace Web.Services.MessageContracts
{
    public class SearchTrackResponse
    {
        public List<Track> Tracks { get; set; }
    }
}