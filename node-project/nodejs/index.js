// import { readFile } from 'node:fs';
// //Script to display the current date and time in French
// const getDateTime = () => {
//     return new Date()
// }
// console.log (new Intl.DateTimeFormat('fr-FR', {
//     dateStyle: 'full',
//     timeStyle: 'long'
//  }).format(getDateTime()));

// //Script to read a text file and count the lign numbers
// readFile('./package.json', 'utf8', (err, data) => {
//     console.log(data.split('\n').length);
// })

// process.argv.slice(2).forEach(e =>{
//     console.log(`Hello ${e}`);
// })
// const app = require('express')();
// const PORT = 1234;

// app.use(express.json())
// app.get('/', (req, res) => {
//     res.status(200).json([])
// })
// app.post('/', (req, res) => {
//     console.log(req.body)
//     res.status(200).json({ message: 'hello' })
// })
// app.listen(PORT, () => {
//     console.log(`Listening on port ${PORT}`)
// })

