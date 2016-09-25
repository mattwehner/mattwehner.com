using Funq;
using ServiceStack;
using Web.Services;
using Web.Services.DataContracts;
using Web.Storage;

namespace Web
{
    public class AppHost : AppHostBase
    {
        public AppHost() : base("Soundbox", typeof (AppHost).Assembly)
        {
        }

        public override void Configure(Container container)
        {
            SetConfig(new HostConfig {HandlerFactoryPath = "api"});

            container.RegisterAutoWiredAs<ProfileStore, IStore<Profile>>();
        }
    }
}