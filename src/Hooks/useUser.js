import axios from "axios";
import { useRecoilValue, useSetRecoilState } from "recoil";

import { userState } from "../Recoil";

const useUser = () => {
  const setUserState = useSetRecoilState(userState);
  const user = useRecoilValue(userState);

  const Registrar = async ({ mail, password, nombre }) => {
    const { data } = await axios.post(
      `https://strapiecommerce-production-56e9.up.railway.app/api/auth/local/register`,
      {
        username: nombre,
        email: mail,
        password,
      }
    );
    setUserState(data);
  };

  const loginUser = async ({ mail, password }) => {
    const { data } = await axios.post(
      `https://strapiecommerce-production-56e9.up.railway.app/api/auth/local`,
      {
        identifier: mail,
        password,
      }
    );
    setUserState(data);
  };
  console.log(user);
  const logOut = () => setUserState(null);

  return { loginUser, logOut, Registrar, user };
};
export { useUser };
