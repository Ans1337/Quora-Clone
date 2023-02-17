import { useEffect, useState } from "react";
import { Form, Formik } from "formik";
import { getAnswer, postAnswer } from "../api/answer";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import AddAnswer from "../Components/AddAnswer";
import Answer from "../Components/Answer";

/*
  @AnswerContainer Function
  Handles logic for @AddAnswer and @Answer. 
*/
const AnswerContainer = ({ id }) => {
  const [answer, setAnswer] = useState(undefined);

  useEffect(() => {
    fetchAnswer();
  }, [])

  const { user } = useSelector((state) => state.auth)

  const handleAddAnswer = async (values) => {
    try {
      const newObj = Object.assign({ text: values.text, questionId: id }, user);
      const response = await postAnswer(newObj)
      const newAnswer = [...answer, response]
      setAnswer(newAnswer)
    } catch (error) {
      toast.error("Error: " + error.message)
    }
  }

  const fetchAnswer = async () => {
    const apiAnswer = await getAnswer(id);
    setAnswer(apiAnswer);
  }

  return (
    <>
      <Answer answers={answer} />
      <Formik initialValues={{ text: '', }} onSubmit={handleAddAnswer}>
        <Form>
          <AddAnswer avatar={user.avatar} />
        </Form>
      </Formik>
    </>
  )
}

export default AnswerContainer
