import axios from "axios";
import { BACKEND_URL } from "../config/config";

export const signupHandler = async (username, number, email, password, setAlert) => {
  try {
    const data = await axios.post(
      `${BACKEND_URL}/auth/register`,
      {
        username: username,
        number: number,
        email: email,
        password: password,
      }
    );
    console.log("Signed Up");
    console.log(data);
    setAlert({
      open: true,
      message: `Account Created:: username - ${username}`,
      type: "success"
    })
  } catch (err) {
    console.log("error adding user to database");
  }
};