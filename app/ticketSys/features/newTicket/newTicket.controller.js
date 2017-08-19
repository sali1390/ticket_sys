angular
  .module('ticketSys.newTicket')
  .controller('NewTicketCtrl', NewTicketCtrl);

function NewTicketCtrl($http, $state) {
  var vm = this;

  var userEmail = sessionStorage.getItem('userEmail');
  var userPassword = sessionStorage.getItem('userPassword');
  var userId = sessionStorage.getItem('userId');
  var propId = sessionStorage.getItem('propertyId');

  console.log("Logged in as " + userEmail);

  vm.propContinue = function(req, res) {
    $http({
      method: 'POST',
      url: '/api/tickets',
      data: {
        title: vm.tixInfo.title,
        body: vm.tixInfo.body,
        tenantid: userId,
        propertyid: propId
      }
    }).then(function successCallback(res) {
      console.log("success");
      $state.go("trequests");
    })
  };

}
