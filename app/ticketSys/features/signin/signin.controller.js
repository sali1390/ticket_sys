angular
  .module('ticketSys.signin')
  .controller('SigninCtrl', SigninCtrl);

function SigninCtrl($http, $state) {
  var vm = this;
  vm.userInfo = {};

  vm.continue = function(req, res) {

    sessionStorage.setItem('userEmail', vm.userInfo.email);
    sessionStorage.setItem('userPassword', vm.userInfo.password);

    var userEmail = sessionStorage.getItem('userEmail');
    var userPassword = sessionStorage.getItem('userPassword');

    var userId;

    function checkUser() {
      $http({
        method: 'GET',
        url: '/api/users'
      }).then(function successCallback(res) {

        for (i = 0; i < res.data.length; i++) {
          if (res.data[i].email == userEmail && res.data[i].password == userPassword) {
            userId = res.data[i]._id;

            sessionStorage.setItem('userId', userId);
            sessionStorage.setItem('userName', res.data[i].firstName);
          //  if(res.data[i].landlord === true) {
          //    $state.go("properties");
          //  } else {
          //    $state.go("requests")
          //  }
          //  return;
          //} else {
          //  $state.go("signup")

            console.log(userId);
          }
        }
      })
    }
    checkUser();
  };

  //vm.signup = function() {
  //  $state.go("signup");
  //}
}
