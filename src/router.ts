import { Router } from 'express';
import { createTable, getTables, getTableById } from '../src/handlers/table';
import { createFood, getFoods, getFoodById } from '../src/handlers/food';
import { createWaiter, getWaiterById, getWaiters } from '../src/handlers/waiter';
import { createManager, getManagerById } from '../src/handlers/manager';
import { createReservation, getReservationById, getReservations, deleteReservation, updateReservation } from '../src/handlers/reservation';
import { createOrder, getOrderById, updateOrder, getOrders } from '../src/handlers/order';

const router = Router();

// TABLES

router.post('/table', createTable);
router.get('/table', getTables);
router.get('/table/:id', getTableById);


// FOOD
router.get('/food/:id', getFoodById)
router.get('/food', getFoods);
router.post('/food', createFood);

// WAITER
router.post('/waiter', createWaiter);
router.get('/waiter/:id', getWaiterById);
router.get('/waiter', getWaiters);

// MANAGER
router.post('/manager', createManager);
router.get('/manager/:id', getManagerById);


// RESERVATION
router.post('/reservation', createReservation);
router.get('/reservation/:id', getReservationById);
router.get('/reservation', getReservations);
router.put('/reservation/:id', updateReservation);
router.delete('/reservation/:id', deleteReservation);

// ORDER
router.post('/order', createOrder);
router.get('/order/:id', getOrderById);
router.put('/order/:id', updateOrder);
router.get('/order', getOrders);

    

export default router;