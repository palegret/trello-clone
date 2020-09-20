import { DragItem } from './DragItem'

interface Task {
  id: string
  text: string
}

interface List {
  id: string
  text: string
  tasks: Task[]
}

export default interface AppState {
  lists: List[]
  draggedItem: DragItem | undefined
}
