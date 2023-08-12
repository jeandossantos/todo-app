import TaskRepository from './taskRepository.js';
import TaskService from './taskService.js';
import TaskController from './taskController.js';

export default class TaskFactory {
  static getInstance() {
    const taskRepository = new TaskRepository();

    const taskService = new TaskService({
      taskRepository,
    });

    const controller = new TaskController({
      taskService,
    });

    return controller;
  }
}