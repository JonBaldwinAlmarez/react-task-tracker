/**
 * this component is for individual task
 */

import { FaTimes } from 'react-icons/fa'

const Task = ({ task , onDelete , onToggle }) => {
  return (
    //** div if double click grab's id in task 'onToggle' props which is in App folder */

    // template literal. if task.reminder if true get reminder else do nothing
    <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
        <h3>
        {task.text} <FaTimes style={{color: 'red' , cursor: 'pointer'}} onClick={() => onDelete(task.id)} />
        </h3>
        <p>{task.day}</p>
    </div>
  )
}

export default Task