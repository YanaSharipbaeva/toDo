export default class MainController {
    constructor(
        $scope,
        TaskService,
    ) {
        this.name = 'Main';
        $scope.reverse = true;
        $scope.tasks = TaskService.getTasks();


        $scope.sortBy = function(propertyName) {
            TaskService.sortBy(propertyName);
        };

        $scope.addTask = function() {
            $scope.showTaskInput = false;

            let newTask = {
                name: $scope.taskTitle,
            };

            TaskService.addTask(newTask);
            TaskService.showTaskList();
            $scope.taskTitle = "";

        };
        $scope.showEditInput = function(task) {
            task.showEditInput = true;
        };

        $scope.saveTask = function(task) {
            task.showEditInput = false;
            task.newName? task.name = task.newName : task.name;
            TaskService.saveEditedTask();
            TaskService.showTaskList();
        };

        $scope.removeTask = function(task) {
            TaskService.removeTask(task);
            TaskService.showTaskList();
        }


    }
}

MainController.$inject = ["$scope", "TaskService"];








