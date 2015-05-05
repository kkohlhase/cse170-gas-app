app.controller 'SignupCtrl', ($scope, $auth) ->
  Scope.signup = ->
    $auth.signup(
      displayName: $scope.displayName,
      email: $scope.email,
      password: $scope.password
    )
