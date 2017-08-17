angular
    .module('ticketSys', [
    ])
    .config(ticketSysConfig)
    .run(ticketSysRun);

function ticketSysConfig($urlRouterProvider) {
    $urlRouterProvider.otherwise('/')
}