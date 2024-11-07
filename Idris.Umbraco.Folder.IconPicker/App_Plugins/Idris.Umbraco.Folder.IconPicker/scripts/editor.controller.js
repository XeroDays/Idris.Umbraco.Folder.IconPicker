(function () {

    angular.module('umbraco')
        .controller('idris.foldericoneditorcontroller', ['editorService', 'assetsService', '$http', '$scope', icomoonEditorController]);

    function icomoonEditorController(editorService, assetsService, $http, $scope) {

        const $this = this;
        $this.edit = edit;

        function edit() {
            var foldername = $scope.model.config.folderName;  

            const options = {
                title: 'Select icon from folder : wwwroot/' + foldername,
                view: '/app_plugins/Idris.Umbraco.Folder.IconPicker/views/panel.html',
                size: 'small',
                folder : foldername,
                submit: submit,
                close: close,
                value: $scope.model.value
            }

            editorService.open(options);
        }

        function submit(value) {

            $scope.model.value = value;
            close();
        }

        function close() {

            editorService.close();
        }

        function init() {
        }

        init();
    }
})()