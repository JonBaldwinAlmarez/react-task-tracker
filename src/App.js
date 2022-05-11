// All events are here

import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from "react"

const App = () => {
// always put your state globally 
//useState takes in tasks and function to update seTask
const [tasks, setTasks] = useState([
  {
      id: 1,
      text: 'prepare food',
      day: 'Apr 25th at 2:40',
      reminder: true,
  },
  {
      id: 2,
      text: 'cook food',
      day: 'Apr 25th at 2:50',
      reminder: true,
  },
  {
      id: 3,
      text: 'eat food',
      day: 'Apr 25th at 3:00',
      reminder: false,
  },
])

// Delete Component functionality
// Delete the task in the UI
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id)) // Set the tasks in to filter and don't show the clicked ID
}

// Toggle Remainder functionality
// Grab ID
const toggleRemainder = (id) => {
  /**
   * Meaning of the code below
   *!! setTask(state) the map all the way for each task if id === to id ? (then) {... spread across all task (that you map) then change remainder , opposite to the remainder is} else task meaning no change
   meaning change the reminder*/
  setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
}

  // if task.length > 0 ? :(Then) ("No task to Show")
  return (
    <div className='container'>
      <Header />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleRemainder} /> : ('No Task To Show')}

    </div>
  )
}

export default App
