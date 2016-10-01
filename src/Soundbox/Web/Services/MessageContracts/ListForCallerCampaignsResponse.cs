using System.Collections.Generic;
using Web.Services.DataContracts;

namespace Web.Services.MessageContracts
{
    public class ListForCallerCampaignsResponse
    {
        public List<Campaign> Campaigns { get; set; }
    }
}