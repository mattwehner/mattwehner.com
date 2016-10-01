using ServiceStack;
using Web.Services.DataContracts;
using Web.Services.MessageContracts;
using Web.Storage;

namespace Web.Services
{
    public class Users : Service
    {
        public ISoundboxStore Store { get; set; }

        public GetUserProfileResponse Get(GetUserProfile request)
        {
            var profile = Store.Profiles.Get(request.Id);

            return new GetUserProfileResponse
            {
                Profile = profile
            };
        }
    }
}