import { useEffect, useState } from "react";
import { getTopic, postTopic } from "../api/topic";
import { toast } from "react-toastify";
import { Form, Formik } from "formik";
import SidebarTopics from "../Components/SidebarTopics";
import AddSidebarTopics from "../Components/AddSidebarTopics";
import '../css/sidebar.css'

/*
  @Sidebar Function
  Handles logic for @SidebarTopics and @AddSidebarTopics. 
*/
const Sidebar = () => {
  const [topic, setTopic] = useState(undefined);

  useEffect(() => {
    fetchTopics();
  }, [])

  const handleAddTopics = async (values) => {
    try {
      const newObj = Object.assign({ text: values.text })
      const response = await postTopic(newObj)
      const newAnswer = [...topic, response]
      setTopic(newAnswer)
    } catch (error) {
      toast.error("Error: " + error.message)
    }
  }

  const fetchTopics = async () => {
    try {
      const apiTopics = await getTopic();
      setTopic(apiTopics);
    } catch (error) {
      toast.error("Error: " + error.message)
    }
  }

  return (
    <>
      <div className="sidebar">
        <div className="sidebarOptions">
          <SidebarTopics topics={topic} />
          <div className="sidebarOption">
            <Formik initialValues={{ text: '', }} onSubmit={handleAddTopics}>
              <Form>
                <AddSidebarTopics />
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar
