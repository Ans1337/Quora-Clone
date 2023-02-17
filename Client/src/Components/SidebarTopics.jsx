import { Avatar } from '@material-ui/core'
import '../css/sidebar.css'

/*
  @SidebarTopics Function
  Renders All the topics passed as prop by @Sidebar.
*/
const SidebarTopics = ({ topics, handleFollow }) => {

  return (
    <>
      {topics && topics.map((topic) => (
        <div className="sidebarOption" key={topic._id}>
          <Avatar />
          <p className='option-text'>{topic.text}</p>
          <button onClick={() => handleFollow(topic._id)} className='option-button'>Follow</button>
        </div>
      ))}
    </>
  )
}

export default SidebarTopics
