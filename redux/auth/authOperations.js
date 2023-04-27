import { auth } from "../../firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const registerDB =
  ({ login, email, password }) =>
  async (dispatch, getSatte) => {
    console.log("login, email, password", login, email, password);
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        login,
        email,
        password
      );
      console.log("user", user);
    } catch (error) {
      console.log("error", error);
      console.log("error.message", error.message);
    }
  };
