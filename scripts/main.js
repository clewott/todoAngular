function MainController($scope) {

  $scope.list = [];
  $scope.slash = false;
  $scope.edit = false;

  $scope.addTask = function (task) {
    $scope.list.push({
      name:task.todo,
      completed:false
    });
    console.log(task);
    $scope.newTask = {};
  };

  $scope.removeTask = function (task) {
    $scope.list.splice($scope.list.indexOf(task), 1);
    console.log("Task is deleted!");
  };

  $scope.incompleteTodos = function () {
    var total = 0;
    $scope.list.forEach(function(task) {
      total += task.completed === false;
    });
    return total;
  };

}
