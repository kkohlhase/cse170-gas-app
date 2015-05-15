app.controller 'ResetPasswordCtrl', ($scope, $auth, $window, Parse) ->
  $scope.resetPassword = ->
    Parse.User.resetPassword($scope.email,
      success: ->
        $window.location.href = '/'
      error: ->
    ).then(
      ->
        $window.location.href = '/'
    )
