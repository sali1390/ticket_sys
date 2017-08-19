angular
  .module('ticketSys.tickets')
  .config(ticketsConfig);

function ticketsConfig($stateProvider) {
  $stateProvider.state({
    name: 'tickets',
    url: '/tickets',
    templateUrl: 'ticketSys/features/tickets/tickets.html',
    controller: 'TicketsCtrl',
    controllerAs: 'TicketsVM'
  })
}
