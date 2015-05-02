app.controller 'LoginCtrl', ($scope, $auth, $alert) ->
  $scope.authenticate = (provider) ->
    $auth.authenticate(provider)
      .then( ->
          $alert(
            content: 'You have successfully logged in',
            animation: 'fadeZoomFadeDown',
            type: 'material',
            duration: 3
          )
      )
      .catch((response) ->
        $alert(
          content: if response.data then response.data.message else response,
          animation: 'fadeZoomFadeDown',
          type: 'material',
          duration: 3
        )
      )
