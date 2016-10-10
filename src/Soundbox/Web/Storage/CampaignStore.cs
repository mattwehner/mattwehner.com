using System.Collections.Generic;
using Web.Services.DataContracts;

namespace Web.Storage
{
    public class CampaignsStore : ICampaignsStore
    {
        public Campaign Get(string id)
        {
            return TestData.ApproachingDarkness;
        }

        public List<Campaign> ListForCaller()
        {
            return new List<Campaign>
            {
                TestData.ApproachingDarkness,
                TestData.SaintsLight,
            };
        }
    }
}
