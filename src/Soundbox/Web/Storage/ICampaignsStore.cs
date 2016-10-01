using System.Collections.Generic;
using Web.Services.DataContracts;

namespace Web.Storage
{
    public interface ICampaignsStore
    {
        Campaign Get(string id);

        List<Campaign> ListForCaller();
    }
}