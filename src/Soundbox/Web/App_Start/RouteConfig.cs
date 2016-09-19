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
            routes.MapRoute("Home/About", "About", new
            {
                controller = "Home",
                action = "Index",
            });

            routes.MapRoute("Default", "{controller}/{action}/{id}", new
            {
                controller = "Home",
                action = "Index",
                id = UrlParameter.Optional
            });
        }
    }
}