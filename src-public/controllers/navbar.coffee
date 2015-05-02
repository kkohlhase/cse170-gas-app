app.controller 'NavbarCtrl', ($scope, $auth) ->
  $scope.isAuthenticated = ->
    $auth.isAuthenticated();
