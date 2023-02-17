const API_URL = process.env.REACT_APP_API_BASE_URL_TOPICS;

export const postTopic = async (values) => {
  try {
    const res = await fetch(API_URL, {
      method: "POST",
      body: JSON.stringify({
        text: values.text,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    return res.json();
  }
  catch (error) {
    throw new Error(error);
  }
}

export const getTopic = async () => {
  try {
    const res = await fetch(API_URL)
    return res.json();
  }
  catch (error) {
    throw new Error(error);
  }
}
