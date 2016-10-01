using Funq;
using ServiceStack;
using Web.Storage;

namespace Web
{
    public class AppHost : AppHostBase
    {
        public AppHost()
            : base("Soundbox", typeof(AppHost).Assembly)
        {
        }

        public override void Configure(Container container)
        {
            SetConfig(new HostConfig { HandlerFactoryPath = "api" });

            container.Register<ISoundboxStore>(x => new SoundboxStore
            {
                Profiles = new ProfileStore(),
                Campaigns = new CampaignsStore(),
            });
        }
    }
}
