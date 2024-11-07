(function () {

    angular.module('umbraco')
        .controller('idris.foldericonpanelcontroller', ['$scope','$http','umbRequestHelper' ,icomoonPanelController]);

    function icomoonPanelController($scope, $http,umbRequestHelper) {

        const $this = this;
        $this.close = close;
        $this.select = select; 
        //get folder here from editor controller

        $this.icons = [];

        function close() {

            $scope.model.close();
        }

        function select(icon) {
            $scope.model.submit(icon);
        }

        function init() { 
            umbRequestHelper.resourcePromise( 
                $http.get("/umbraco/backoffice/idris/UmbracoFolderIconPicker/GetAssetIcons?folder="+$scope.model.folder ),
                    'Failed to retrieve images' ).then(function (response) { 
                    $scope.icons = response.map(function (item) {
                    $this.icons.push(item);
                }); 
             }); 
        }

        init();
    }
})()