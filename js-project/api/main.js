// const fs = require('fs')
// fs.writeFileSync('./data.json', JSON.stringify({ name: 'John' }))
// const data = fs.readFileSync('./data.json')
// console.log(data.toString())


// const http = require('http')
// const server = http.createServer((req, res) => {
// console.log(req.url)
// }
// )
// server.listen(3000, () => {
//     console.log('Server is running on port 3000')
//     }
// )   
import ListCard from './src/components/ListCard'


import ListCard from './src/components/ListCard'
import { getUserFromApi } from './src/utils/Api'


const fetchDataFromAPI = async () => {

  const res = await getUserFromApi()

  const data = res.map((element) => ({
    text: `${element.first_name} ${element.last_name}`,
    src: element.avatar
  }))

  document.querySelector('#app').appendChild(
    ListCard(data)
  )
}

fetchDataFromAPI()