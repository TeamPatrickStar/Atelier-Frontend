import  express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.VITE_PORT;

app.use(express.static('./dist'));

app.listen(PORT, () => {
  console.log(`Sever running on port: ${PORT}`);
});

