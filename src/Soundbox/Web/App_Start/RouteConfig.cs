using System.Web.Mvc;
using System.Web.Routing;

namespace Web
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");
            routes.IgnoreRoute("api/{*pathInfo}");

            //Angular Route handled urls
            routes.MapRoute("Home", "Partials/Home/Home", new
                      {
                          controller = "Home",
                          action = "Home",
                      });

            routes.MapRoute("About", "Partials/Home/About", new
                      {
                          controller = "Home",
                          action = "About",
                      });

            routes.MapRoute("Campaign", "Partials/Home/Campaign", new
                      {
                          controller = "Home",
                          action = "Campaign",
                      });




            //User Entered Urls
            routes.MapRoute("Home/About", "About", new
            {
                controller = "Home",
                action = "Index",
            });
            
            routes.MapRoute("Campaigns/Campaign", "Campaign/{campaignId}", new
            {
                controller = "Home",
                action = "Index",
                campaignId = UrlParameter.Optional,
            });


            //Default
            routes.MapRoute("Default", "{controller}/{action}/{id}", new
            {
                controller = "Home",
                action = "Index",
                id = UrlParameter.Optional
            });
        }
    }
}