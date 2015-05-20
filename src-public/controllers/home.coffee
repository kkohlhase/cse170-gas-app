app.controller 'HomeCtrl', ($scope, $auth, $alert) ->
  $scope.isAuthenticated = ->
    $auth.isAuthenticated();

