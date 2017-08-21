angular
  .module('ticketSys.newTicket')
  .controller('NewTicketCtrl', NewTicketCtrl);

function NewTicketCtrl($http, $state) {
  var vm = this;

  var userEmail = sessionStorage.getItem('userEmail');
  var userPassword = sessionStorage.getItem('userPassword');
  var userId = sessionStorage.getItem('userId');

  console.log(userId);

  vm.propContinue = function(req, res) {
    $http({
      method: 'POST',
      url: '/newTicket',
      data: {
        title: vm.tixInfo.title,
        body: vm.tixInfo.body,
        userId: userId
      }
    }).then(function successCallback(res) {
      console.log("success");
      $state.go("tickets");
    })
  };

}
