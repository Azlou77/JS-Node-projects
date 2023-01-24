import express from 'express';
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 1234

app.use(express.json());
 app.get ('/', (req, res) => {
  res.status(200).json({ message: 'hello' })
})
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})


