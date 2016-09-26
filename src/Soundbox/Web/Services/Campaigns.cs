using System.Collections.Generic;
using ServiceStack;
using Web.Services.DataContracts;
using Web.Services.MessageContracts;
using Web.Storage;

namespace Web.Services
{
    public class Campaigns : Service
    {
        public IStore<Campaign> Store { get; set; }

        public GetCampaignResponse Get(GetCampaign request)
        {
            var campaign = Store.Get(request.Id);

            return new GetCampaignResponse
            {
                Campaign = campaign
            };
        }
    }
}