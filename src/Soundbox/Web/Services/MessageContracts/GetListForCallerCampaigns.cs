using ServiceStack;

namespace Web.Services.MessageContracts
{
    [Route(@"/campaigns", @"GET")]
    public class ListForCallerCampaigns : IReturn<ListForCallerCampaigns>
    {
        public string Id { get; set; }
    }
}