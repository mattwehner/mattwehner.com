using Funq;
using ServiceStack;

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
        }
    }
}