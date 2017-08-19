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
    //.run(ticketSysRun);

function ticketSysConfig($urlRouterProvider) {
    $urlRouterProvider.otherwise('/signin')
}