import { auth } from "../../firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const registerDB =
  ({ login, email, password }) =>
  async (dispatch, getSatte) => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log("user", user);
    } catch (error) {
      console.log("error", error);
      console.log("error.message", error.message);
    }
  };
