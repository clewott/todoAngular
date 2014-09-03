function MainController($scope) {

  $scope.todo = "todos";
  $scope.list = [];
  $scope.slash = false;

  $scope.addTask = function (task) {
    $scope.list.push(task);
    console.log(task);
    $scope.newTask = {};
  };

  $scope.removeTask = function (task) {
    $scope.list.splice($scope.list.indexOf(task), 1);
    console.log("Task is deleted!");
  };

}
