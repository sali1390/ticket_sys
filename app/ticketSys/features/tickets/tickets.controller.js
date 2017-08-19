angular
  .module('ticketSys.tickets')
  .controller('TicketsCtrl', TicketsCtrl);

function TicketsCtrl($http, $state) {
  var vm = this;
  vm.userInfo = {};

  var userEmail = sessionStorage.getItem('userEmail');
  var userPassword = sessionStorage.getItem('userPassword');

  console.log("Logged in as " + userEmail);

  $http({
    method: 'GET',
    url: '/api/tickets'
  }).then(function successCallback(res){
    console.log(res.data);

    var tickets = [];

    for(var i = 0; i < res.data.length; i++){
        tickets.push(res.data[i]);

        vm.tickets = tickets
    }
  });

  vm.newTicket = function(){
    $state.go('newTicket')
  }

}
