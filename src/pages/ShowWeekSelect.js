import {MultipleWeekSelect} from "../utils/weekPicker/MultipleWeekSelect";
import {useMultipleWeek} from "../utils/weekPicker/useMultipleWeek";

const list = [
  {
    name: '前一周'
  },
  {
    name: '前二周'
  },
  {
    name: '前三周'
  },
]

export const ShowWeekSelect = () => {

  const weekSelect = useMultipleWeek({list: list, nameKey: 'name'})
  return <div><MultipleWeekSelect {...weekSelect} /></div>
}
