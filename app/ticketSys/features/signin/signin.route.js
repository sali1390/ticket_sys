angular
  .module('ticketSys.signin')
  .config(signinConfig);

function signinConfig($stateProvider) {
  $stateProvider.state({
    name: 'signin',
    url: '/signin',
    templateUrl: 'ticketSys/features/signin/signin.html',
    controller: 'SigninCtrl',
    controllerAs: 'SigninVM'
  })
}
