import Razorpay from 'razorpay';

const instance = new Razorpay({
  key_id: 'YOUR_KEY_ID',
  key_secret: 'YOUR_KEY_SECRET',
});

export default instance;
