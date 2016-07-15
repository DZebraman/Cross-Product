var MAIN_MODULE = angular.module('MAIN', []);
MAIN_MODULE.controller('MAIN_CONTROLLER', ['$scope',function($scope){
    this.MAX_SIZE = 6;
    this.count = 0;
    this.output = [
        {input:"test",output:"test response"},
    ];
    this.reInput = this.output.length-1;

    this.postOutput = function(s_input){
        //process input;
        this.count++;
        this.output.push({input:s_input,output:this.randomText()});//(0,0,s_input);
        if(this.output.length > this.MAX_SIZE){
            this.output.splice(0,1);
        }
        $scope.consoleInput = "";
        this.reInput = this.output.length-1; 
    }

    this.randomText = function(){
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        }

        switch(getRandomInt(0,5)){
            case 0:
                return "modo ante nec tempor. Sed faucibus purus sit amet dui elementum rutrum. Phasellus nec lectus felis. Integer sit amet mauris non ipsum pellentesque pharetra non vehicula magna. Donec eu quam sed neque eleifend imperdiet. Nullam eget egestas felis. Nulla sit amet metus augue. Fusce vel lacinia diam."
            case 1:
                return "Curabitur laoreet libero lorem. Vestibulum te";
            case 2: 
                return "nc at neque vehicula facilisis. Nunc sem elit, dictum eget aliquam id, consectetur vitae sem. Duis tempus augue massa, id ornare ligula condimentum eu. In eros nulla, molestie ac ultricies eget, blandit nec tellus. In nulla purus, bibendum a aliquet vitae, lacinia sit amet sapien. Duis et libero congue, consectetur magna at, ultrices nisl. Sed ac lorem mi. Praesent blandit nec eros et feugiat. Morbi ornare facilisis erat, quis interdum quam";
            case 3:
                return "super poop";
            case 4: 
                return " ante. Sed non sapie";
            case 5:
                return "egestas ligula sodales condimentum. Nunc eget laoreet neque, non porttitor augue. Sed pellentesque sit amet sapien vel mollis. Cras pulvinar";
        }
    }

    this.upArrow = function(){
        $scope.consoleInput = this.output[this.reInput--].input;
    }

    this.autoScroll = function(){
        var console = document.getElementById('textConsole');
        console.scrollTop = console.scrollHeight;
    }
}]);