﻿using System.Web.Optimization;

namespace Web
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/Scripts/core")
                .Include(
                    "~/Scripts/jquery/jquery-{version}.js",
                    "~/Scripts/bootstrap/bootstrap.js",
                    "~/Scripts/modernizr/modernizr-2.6.2.js"
                ));

            bundles.Add(new ScriptBundle("~/Scripts/angularjs")
                .Include(
                    "~/Scripts/angularjs/angular.js",
                    "~/Scripts/angularjs/angular-route.js",
                    "~/Scripts/angularjs/angular-resource.js",
                    "~/Scripts/angularjs/angular-animate.js",
                    "~/Scripts/angularjs/angular-messages.js",
                    "~/Scripts/angularjs/angular-sanitize.js",
                    "~/Scripts/angular-ui-router/angular-ui-router.js",
                    "~/Scripts/angular-ui-bootstrap/ui-bootstrap.js",
                    "~/Scripts/angular-ui-bootstrap/ui-bootstrap-tpls.js",
                    "~/App/*.js",
                    "~/App/Controllers/*.js",
                    "~/App/Services/*.js",
                    "~/App/Directives/*.js"
                ));

            bundles.Add(new StyleBundle("~/Content/css")
                .Include(
                    "~/Content/bootstrap/bootstrap.css",
                    "~/Content/theme/styles.css"
                ));


            BundleTable.EnableOptimizations = false;
        }
    }
}