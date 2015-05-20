app.controller 'CalendarCtrl', ($scope, moment) ->
  $scope.calendarView = 'month'
<<<<<<< HEAD
  $scope.shit = "fuck the police"
=======
>>>>>>> ac34261edd27c0d7e185b7902ba393d6d12384a9
  $scope.calendarDay = new Date()
  $scope.events = [
    {
      title: 'Event 1'
      type: 'warning'
      startsAt: moment().startOf('week').subtract(2, 'days').add(8, 'hours').toDate()
      endsAt: moment().startOf('week').add(1, 'week').add(9, 'hours').toDate()
    }
    {
      title: 'Event 2'
      type: 'info'
      startsAt: moment().subtract(1, 'day').toDate()
      endsAt: moment().add(5, 'days').toDate()
    }
    {
      title: 'This is a really long event title'
      type: 'important'
      startsAt: moment().startOf('day').add(5, 'hours').toDate()
      endsAt: moment().startOf('day').add(19, 'hours').toDate()
    }
  ]
<<<<<<< HEAD
  return
=======
  return
>>>>>>> ac34261edd27c0d7e185b7902ba393d6d12384a9
