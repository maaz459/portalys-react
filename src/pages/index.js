import HomePage from "../modules/pages/Home/index";
import Layout from "../modules/layout/layout";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { RegistraionModalTypes, registration } from "../recoil/atoms/registration";
import { useRecoilState } from "recoil";

const Home = (props) => {
  let [searchParams, setSearchParams] = useSearchParams();
  const [_, setRegistrationModal] = useRecoilState(registration);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const token = searchParams.get("token");

    if (token) {
      setRegistrationModal((lp) => {
        return {
          ...lp,
          openModal: true,
          modalType: RegistraionModalTypes.RESET_PASSWORD,
          userData: {},
          userRole: "",
        };
      });
    }
  }, []);

  return (
    <Layout {...props}>
      <HomePage />
    </Layout>
  );
};

export default Home;
