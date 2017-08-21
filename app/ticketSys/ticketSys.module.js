angular
    .module('ticketSys', [
        // Global Dependencies
        'ui.router',

        //Features
        'ticketSys.signin',
        'ticketSys.tickets',
        'ticketSys.newTicket'
    ])
    .config(ticketSysConfig);

function ticketSysConfig($urlRouterProvider) {
    $urlRouterProvider.otherwise('/signin')
}