const API_URL = process.env.REACT_APP_API_BASE_URL_QUESTIONS;

export const postQuestion = async (values) => {
  try {
    const res = await fetch(API_URL, {
      method: "POST",
      body: JSON.stringify({
        name: values.name,
        email: values.email,
        text: values.text,
        avatar: values.avatar,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    return res.json();
  } catch (error) {
    throw new Error(error);
  }
}

export const getQuestions = async () => {
  try {
    const res = await fetch(API_URL)
    return res.json();
  }
  catch (error) {
    throw new Error(error);
  }
}

export const getMyQuestions = async (id) => {
  try {
    const res = await fetch(API_URL + 'my/' + id)
    return res.json();
  }
  catch (error) {
    throw new Error(error);
  }
}
