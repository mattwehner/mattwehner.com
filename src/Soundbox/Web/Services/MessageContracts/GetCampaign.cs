using ServiceStack;

namespace Web.Services.MessageContracts
{
    [Route(@"/campaigns/{Id}", @"GET")]
    public class GetCampaign : IReturn<GetCampaignResponse>
    {
        public string Id { get; set; }
    }
}