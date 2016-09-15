using ServiceStack;

namespace Web.Services.MessageContracts
{
    [Route("/tracks", "GET")]
    public class SearchTrack : IReturn<SearchTrackResponse>
    {
        public string Tags { get; set; }
    }
}