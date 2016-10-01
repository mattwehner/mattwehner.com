using ServiceStack;
using Web.Services.MessageContracts;
using Web.Storage;

namespace Web.Services
{
    public class Campaigns : Service
    {
        public ISoundboxStore Store { get; set; }

        public GetCampaignResponse Get(GetCampaign request)
        {
            var campaign = Store.Campaigns.Get(request.Id);

            return new GetCampaignResponse
            {
                Campaign = campaign
            };
        }

        public ListForCallerCampaignsResponse Get(ListForCallerCampaigns request)
        {
            var campaigns = Store.Campaigns.ListForCaller();

            return new ListForCallerCampaignsResponse
            {
                Campaigns = campaigns,
            };
        }
    }
}