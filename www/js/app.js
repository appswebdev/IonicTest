var app = angular.module('starter', ['ionic']);

app.controller('redditCtrl', function($scope, $http){
  $scope.reddits = [];
  $http.get('https://www.reddit.com/r/Android/new/.json').
  success(function(response){
    var children = response.data.children;
/*
    for (var i = 0; i <children.length; i++) {
      //console.log(children[i].data.title);
       $scope.reddits.push(children[i].data);
    }
*/
    angular.forEach(children, function(item){
       $scope.reddits.push(item.data);
    });
  });
  

  // $scope.reddits = [ 
  //   {title:'First Reddit'},
  //   {title:'2nd Reddit'},
  //   {title:'3rd Reddit'},
  // ];
});


app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
