let app=angular.module("myApp",[]);
app.controller("myCtr",function ( $scope, $http) { 
   $http.get("data.json").then(function(item){
       $scope.players=item.data;

   })
   $scope.removePlayer=function(player){
       var removedPlayer=$scope.players.indexOf(player);
       $scope.players.splice(removedPlayer,1);
   }

   $scope.add=function(){
       $scope.players.push({
           name:$scope.newName,
           id:$scope.newId,
           runs:$scope.newRuns
       })
   }

})