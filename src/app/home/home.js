/**
 * Each section of the site has its own module. It probably also has
 * submodules, though this boilerplate is too simple to demonstrate it. Within
 * `src/app/home`, however, could exist several additional folders representing
 * additional modules that would then be listed as dependencies of this one.
 * For example, a `note` section could have the submodules `note.create`,
 * `note.delete`, `note.edit`, etc.
 *
 * Regardless, so long as dependencies are managed correctly, the build process
 * will automatically take take of the rest.
 *
 * The dependencies block here is also where component dependencies should be
 * specified, as shown below.
 */
angular.module( 'ngBoilerplate.home', [
  'ui.router',
  'plusOne'
])

/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */
.config(function config( $stateProvider ) {
  $stateProvider.state( 'home', {
    url: '/home',
    views: {
      "main": {
        controller: 'HomeCtrl',
        templateUrl: 'home/home.tpl.html'
      }
    },
    data:{ pageTitle: 'Home' }
  });
})

/**
 * And of course we define a controller for our route.
 */
.controller( 'HomeCtrl', function HomeController( $scope,$location,$anchorScroll ) {
 
$scope.scrollTo = function(id) {
      $location.hash(id);
      $anchorScroll();
   };
   $scope.showing = "commercial";
  $scope.showPortfolio = false;

  $scope.tabFlip = function(item) {
  
    if (item=="private") {

       $('.back').show();
    }
    if (item=="commercial") {
       $('.front').show();
    }
    if ((item=="commercial" && $scope.showing!=="commercial") || (item=="commercial" && $scope.showPortfolio===true)) {
        if ($scope.showing!=="commercial") {
      $('#flip-toggle').toggleClass('hover');
    }
      $scope.showing="commercial";
      $('.flip-container').removeClass('private');
      $('.flip-container').addClass('commercial');
    }
    else if ((item=="private" && $scope.showing!=="private") || (item=="private" && $scope.showPortfolio===true)) {
      if ($scope.showing!=="private") {
       $('#flip-toggle').toggleClass('hover');
    }
      $scope.showing="private";
      $('.flip-container').removeClass('commercial');
      $('.flip-container').addClass('private');
    }
     if (item=="private" || item=="commercial") {
      $scope.showPortfolio=false;

    }
    
    if (item=="portfolio") {
    
      $scope.showPortfolio = true;
     
       $('.flip-container').removeClass('commercial');
        $('.flip-container').removeClass('private');
      $('.front').hide();
      $('.back').hide();
      
    
    }
  };
});

