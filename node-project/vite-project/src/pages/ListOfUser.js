import ListCard from "../components/ListCard"
import { getUserFromApi } from "../utils/Api"

const ListOfUser = async (firstParam, secondParam) => {
  const res = await getUserFromApi()
  const data = res.map((element) => ({
    text: `${element.first_name} ${element.last_name}`,
    src: element.avatar
  }))
  return ListCard(data)
}

export default ListOfUser