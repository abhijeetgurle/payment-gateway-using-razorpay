import express from 'express';
import logger from '../utils/logger';
import Razorpay from 'razorpay';

var instance = new Razorpay({ key_id: process.env.RAZORPAY_KEY_ID as string, key_secret: process.env.RAZORPAY_SECRET as string });

const router = express.Router();

/* GET home page. */
router.get('/', (_req: express.Request, res: express.Response) => {
  logger.info('Server is starting');
  res.send('Server is working');
});

router.post('/order', async (_req: express.Request, res: express.Response) => {
  var options = {
    amount: 50000, // amount in the smallest currency unit
    currency: 'INR',
    receipt: 'order_rcptid_11',
  };
  const order = await instance.orders.create(options);
  res.json({ message: 'Order created', data: { ...order } });
});

export default router;
