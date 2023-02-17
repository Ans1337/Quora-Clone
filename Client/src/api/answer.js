const API_URL = process.env.REACT_APP_API_BASE_URL_ANSWERS;

export const postAnswer = async (values) => {
  try {
    const res = await fetch(API_URL, {
      method: "POST",
      body: JSON.stringify({
        name: values.name,
        email: values.email,
        text: values.text,
        questionId: values.questionId,
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

export const getAnswer = async (id) => {
  try {
    const res = await fetch(API_URL + id)
    return res.json();
  }
  catch (error) {
    throw new Error(error);
  }
}

export const getMyAnswers = async (id) => {
  try {
    const res = await fetch(API_URL + 'my/' + id)
    return res.json();
  }
  catch (error) {
    throw new Error(error);
  }
}
