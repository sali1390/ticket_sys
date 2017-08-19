angular
    .module('ticketSys', [
        // Global Dependencies
        'ui.router',

        //Features
        'ticketSys.signin'
    ])
    .config(ticketSysConfig);
    //.run(ticketSysRun);

function ticketSysConfig($urlRouterProvider) {
    $urlRouterProvider.otherwise('/signin')
}