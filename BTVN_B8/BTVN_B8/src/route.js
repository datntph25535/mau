var myApp = angular.module("myApp", ["ngRoute"]);

myApp.config(function ($routeProvider, $locationProvider) {
  // xoa khoang trang
  $locationProvider.hashPrefix("");
  // chuyen trang
  $routeProvider
    .when("/home", {
      templateUrl: "./pages/home.html",
      controller: DongHoController,
    })
    .when("/watches/:name", {
      templateUrl: "./pages/watches.html",
      controller: HienThi,
    })
    .when("/about", {
      templateUrl: "./pages/about.html",
    })
    .when("/contact-us", {
      templateUrl: "./pages/contact-us.html",
    })
    .when("/details", {
      templateUrl: "./pages/details.html",
      controller: DongHoController,
    })
    .otherwise({
      redirectTo: "/home",
    });
});
