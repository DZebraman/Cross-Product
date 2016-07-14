var MAIN_MODULE = angular.module('MAIN', []);
MAIN_MODULE.controller('MAIN_CONTROLLER', ['$scope',function($scope){
    this.MAX_SIZE = 50;
    this.output = [
        "hello",
        "test",
        "butts",
        "Vestibulum posuere purus quis efficitur suscipit. Cras viverra urna a arcu tempus dignissim. Praesent quis massa suscipit, tincidunt justo eget, sodales dui. Etiam ultricies libero eu massa ornare elementum. Aliquam eleifend mi vitae eros placerat rhoncus. Maecenas consequat quis felis vel commodo. Etiam fermentum fringilla tortor id accumsan. Aliquam aliquet magna vel quam lobortis pharetra. Sed a diam porta, pretium orci a, cursus arcu. Pellentesque viverra et nibh id sollicitudin. Vivamus eu sem venenatis sem ullamcorper varius ut sed massa."
    ];

    this.postOutput = function(s_input){
        this.output.push(s_input);//(0,0,s_input);
        if(this.output.length > this.MAX_SIZE){
            this.output.splice(0,1);
        }
        $scope.consoleInput = "";
    }

    this.autoScroll = function(){
        var console = document.getElementById('textConsole');
        console.scrollTop = console.scrollHeight;
    }
}]);