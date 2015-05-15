'use strict';

angular.module('PaycoinRpiWallet')
    .controller('MintingCtrl', function ($scope, $rootScope, $localStorage, $state, $stateParams, paycoind) {
        $rootScope.app.curTitle = "Minting";

        paycoind.listMinting()
            .then(function(response){
                $localStorage.listMinting = response;
                $rootScope.listMinting = response;
            });

        $state.reload = function reload() {
            $state.transitionTo($state.current, $stateParams, { reload: true, inherit: true, notify: true });
        };
    }
);
