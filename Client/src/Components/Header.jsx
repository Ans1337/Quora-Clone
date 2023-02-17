import HomeIcon from "@material-ui/icons/Home";
import FeaturedPlayListOutlinedIcon from "@material-ui/icons/FeaturedPlayListOutlined";
import { AssignmentTurnedInOutlined, NotificationsOutlined, PeopleAltOutlined, Search } from "@material-ui/icons";
import { Avatar, Button } from "@material-ui/core";
import "../css/header.css"

/*
  @Header function
  Renders out a Navbar component using icons from MUI Library.
*/
const Header = ({ handleLogout, avatar, handleAboutPage, handleHomePage }) => {

  return (
    <>
      <div className="Header">
        <div className="content">
          <div className="logo">
            <img src="./img/Q_icon.png" alt="logo" />
          </div>
          <div className="icons">
            <div onClick={handleHomePage} className="icon"><HomeIcon /></div>
            <div className="icon"><FeaturedPlayListOutlinedIcon /></div>
            <div className="icon"><AssignmentTurnedInOutlined /></div>
            <div onClick={handleAboutPage} className="icon"><PeopleAltOutlined /></div>
            <div className="icon"><NotificationsOutlined /></div>
          </div>
          <div className="input">
            <Search />
            <input type="text" placeholder="Search questions" />
          </div>
          <div className="rest">
            <div onClick={handleLogout}><Avatar src={avatar} /></div>
            <Button>Add Question</Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
