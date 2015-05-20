app.controller 'ResetPasswordCtrl', ($scope, $auth, $window, Parse) ->
  $scope.resetPassword = ->
    $window.location.href = '/'
    Parse.User.resetPassword($scope.email,
      success: ->
        $window.location.href = '/'
      error: ->
    ).then(
      ->
        $window.location.href = '/'
    )
