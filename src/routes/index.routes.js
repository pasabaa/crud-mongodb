import {
    Router
} from "express";

import {
    renderTasks,
    createTask,
    renderTaskEdit,
    editTask,
    deleteTask,
    toggleTaskDone,
} from "../controllers/tasks.controller";

const router = Router();

router.get('/', renderTasks);

router.post('/tasks/add', createTask);

// router.get('/about', (req, res) =>{
//     res.render('about');
// });

router.get('/tasks/:id/edit', renderTaskEdit);

router.post('/tasks/:id/edit', editTask);

router.get('/tasks/:id/delete', deleteTask);

router.get('/tasks/:id/toggleDone', toggleTaskDone);

export default router;