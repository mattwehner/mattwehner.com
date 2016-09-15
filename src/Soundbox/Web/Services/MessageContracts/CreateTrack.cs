using ServiceStack;

namespace Web.Services.MessageContracts
{
    [Route("/tracks", "POST")]
    public class CreateTrack : IReturn<CreateTrackResponse>
    {
        public string Url { get; set; }
    }
}