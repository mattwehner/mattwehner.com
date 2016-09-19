using System.Web.Mvc;

namespace Web.Controllers
{
    public class HomeController : Controller
    {
        [AllowAnonymous]
        public ActionResult Index()
        {
            return View();
        }

        [AllowAnonymous]
        public ActionResult Home()
        {
            return PartialView();
        }

        [AllowAnonymous]
        public ActionResult About()
        {
            return PartialView();
        }
    }
}