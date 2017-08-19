angular
  .module('ticketSys.newTicket')
  .config(NewTicketConfig);

function NewTicketConfig($stateProvider) {
  $stateProvider.state({
    name: 'newTicket',
    url: '/newTicket',
    templateUrl: 'ticketSys/features/newTicket/newTicket.html',
    controller: 'NewTicketCtrl',
    controllerAs: 'NewTicketVM'
  })
}
