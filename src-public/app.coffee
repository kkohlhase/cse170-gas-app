'use strict'

app = angular.module 'angularParseBoilerplate', [
  'ng'
  'ngResource'
  'ui.router'
  'ui.bootstrap'
  'app.templates'
  'Parse'
  'angulartics'
  'angulartics.google.analytics'
]

app.config (
  $locationProvider
  $stateProvider
  $urlRouterProvider
  ParseProvider
) ->

  $locationProvider.hashPrefix '!'

  $stateProvider
  .state 'task',
    url: '/:locale'
    controller: 'TaskCtrl'
    templateUrl: 'task.html'

  $urlRouterProvider.otherwise '/fr'

  ParseProvider.initialize(
    "H3mf7FlzKF0fZdNIvGntzqI1TWn0y3gWXjB2FIth", # Application ID
    "ZKYUey7Kir4adRsIEfPFzlUtrh2FwwjC3dfT8yNB"  # REST API Key
  )

app.run ($rootScope, $state) ->
  $rootScope.$state = $state
