export default class TaskService {
    constructor() {
        this.tasks = [
            {
                name:"go to the bakery",
                number: 1
            },{
                name:"go to the mall",
                number:2
            }
        ];
        this.propertyName = 'age';
        this.idCounter = this.tasks.length + 1;
        this.reverse = true;
    }


    getTasks () {
        this.showTaskList();
        return this.tasks;
    }

    addTask (task) {
        task.number = this.idCounter++;
        this.tasks.push(task);
        return this.tasks;
    }

    showTaskList() {
        console.log("TASK LIST:", this.tasks);
    }

    saveEditedTask (task) {
        this.tasks.forEach(function (item, index, task) {
            if (task.number === item.number) {
                this.tasks.splice(index, 1, task)
            }
        });
    }

    removeTask (task) {
        let chosenTaskId = task.number;
        this.tasks.forEach(function (item, index) {
            let _this = this;
            if (item.number === chosenTaskId) {
                this.tasks.splice(index, 1);
            }

        }.bind(this))
    }

    sortBy (propertyName) {
        console.log(propertyName);
        this.reverse = (this.propertyName === propertyName) ? !this.reverse : false;
        this.propertyName = propertyName;
    };
}

TaskService.$inject = [
];
