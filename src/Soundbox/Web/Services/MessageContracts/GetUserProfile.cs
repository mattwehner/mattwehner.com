using System;
using ServiceStack;

namespace Web.Services.MessageContracts
{
    [Route(@"/users/{Id}/profile", @"GET")]
    public class GetUserProfile : IReturn<GetUserProfileResponse>
    {
        public String Id { get; set; }
    }
}