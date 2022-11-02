import React from "react";

import {
  Column,
  Row,
  Stack,
  Text,
  Img,
  Line,
  Input,
  CheckBox,
  Button,
} from "components";
import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";

const LoginPage = () => {
  const navigate = useNavigate();
  const googleSignIn = useGoogleLogin({
    onSuccess: (res) => {
      console.log("res", res);
      alert("Login successfull. 😍");
    },
    onFailure: (err) => {
      alert(err?.details ?? "Failed to login. 😢");
    },
  });

  function handleNavigate295() {
    navigate("/dashboardone");
  }

  return (
    <>
      <Column className="bg-white_A700 font-poppins items-center justify-start mx-[auto] w-[100%]">
        <Row className="items-start justify-between w-[100%]">
          <Column className="justify-start w-[35%]">
            <Stack className="lg:h-[144px] xl:h-[180px] 2xl:h-[202px] 3xl:h-[242px] 3xl:mr-[112px] lg:mr-[66px] xl:mr-[83px] 2xl:mr-[93px] w-[81%]">
              <Text className="Login" as="h1" variant="h1">
                Login
              </Text>
              <Img
                src="images/img_whatsappimage_179X361.png"
                className="WhatsAppImage3"
                alt="WhatsAppImage"
              />
            </Stack>
            <Column className="justify-start xl:ml-[101px] 2xl:ml-[113px] 3xl:ml-[136px] lg:ml-[80px] lg:mt-[5px] 2xl:mt-[7px] xl:mt-[7px] 3xl:mt-[9px] w-[77%]">
              <Column className="border-black_900_b2 border-bw05 border-solid items-center justify-start lg:p-[10px] xl:p-[13px] 2xl:p-[14px] 3xl:p-[17px] rounded-radius2646 w-[99%]">
                <Row
                  className="common-pointer items-end justify-center mb-[1px] w-[59%]"
                  onClick={googleSignIn}
                >
                  <Img
                    src="images/img_google1.png"
                    className="googleOne"
                    alt="googleOne"
                  />
                  <Text className="rowgoogleone" as="h5" variant="h5">
                    Sign in with Google
                  </Text>
                </Row>
              </Column>
              <Row className="items-start justify-between lg:mt-[23px] xl:mt-[29px] 2xl:mt-[32px] 3xl:mt-[39px] w-[99%]">
                <Line className="bg-black_900_99 h-[1px] lg:mt-[4px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] w-[22%]" />
                <Text className="rowlineone" variant="body1">
                  or Sign in with Email
                </Text>
                <Line className="bg-black_900_99 h-[1px] lg:mt-[4px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] w-[22%]" />
              </Row>
              <Input
                className="placeholder:text-black_900_99 GroupThree"
                wrapClassName="2xl:mt-[28px] 3xl:mt-[33px] lg:mt-[20px] w-[99%] xl:mt-[25px]"
                type="email"
                name="GroupThree"
                placeholder="Email"
              ></Input>
              <Input
                className="placeholder:text-black_900_99 GroupThree"
                wrapClassName="2xl:mt-[28px] 3xl:mt-[33px] lg:mt-[20px] w-[99%] xl:mt-[25px]"
                type="password"
                name="GroupSeventyFive"
                placeholder="Password"
              ></Input>
              <Row className="items-start justify-between lg:mt-[17px] xl:mt-[22px] 2xl:mt-[24px] 3xl:mt-[29px] w-[100%]">
                <CheckBox
                  className="font-normal not-italic xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-black_900_9b"
                  inputClassName="h-[17px] mr-[5px] w-[17px]"
                  name="Rememberme"
                  label="Remember me"
                  shape="RoundedBorder3"
                  size="md"
                  variant="OutlineBlack9008e"
                ></CheckBox>
                <Text className="rowrememberme" variant="body1">
                  Forgotten Password?
                </Text>
              </Row>
              <Button
                className="common-pointer font-semibold lg:mt-[20px] xl:mt-[26px] 2xl:mt-[29px] 3xl:mt-[35px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[99%]"
                onClick={handleNavigate295}
                shape="CircleBorder26"
                size="xl"
                variant="FillCyan900"
              >
                Login
              </Button>
              <Text className="columnlineone" variant="body1">
                <span className="text-black_900_b7 font-poppins lg:text-[11px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px]">
                  Not registered yet?
                </span>
                <span className="text-blue_600 font-poppins lg:text-[11px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px]">
                  {" "}
                </span>
                <span className="text-blue_600 font-poppins font-medium lg:text-[11px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px]">
                  Create an Account
                </span>
              </Text>
            </Column>
          </Column>
          <Column className="bg-light_blue_800 items-center justify-start w-[50%]">
            <Column className="justify-start w-[100%]">
              <Row className="items-end w-[84%]">
                <Img
                  src="images/img_vector1.svg"
                  className="VectorOne"
                  alt="VectorOne"
                />
                <Img
                  src="images/img_contrast.svg"
                  className="contrast"
                  alt="contrast"
                />
                <Column className="items-end justify-start 3xl:mt-[108px] lg:mt-[64px] xl:mt-[80px] 2xl:mt-[90px] w-[21%]">
                  <Row className="items-center justify-evenly w-[100%]">
                    <Img
                      src="images/img_contrast.svg"
                      className="contrast_One"
                      alt="contrast One"
                    />
                    <Img
                      src="images/img_contrast.svg"
                      className="contrast_One"
                      alt="contrast Two"
                    />
                    <Img
                      src="images/img_contrast.svg"
                      className="contrast_One"
                      alt="contrast Three"
                    />
                  </Row>
                  <Row className="items-center justify-end ml-[auto] w-[67%]">
                    <Img
                      src="images/img_contrast.svg"
                      className="contrast_Four"
                      alt="contrast Four"
                    />
                    <Img
                      src="images/img_contrast.svg"
                      className="contrast_Five"
                      alt="contrast Five"
                    />
                  </Row>
                </Column>
              </Row>
              <Stack className="lg:h-[430px] xl:h-[538px] 2xl:h-[605px] 3xl:h-[726px] lg:ml-[27px] xl:ml-[34px] 2xl:ml-[38px] 3xl:ml-[45px] lg:mt-[16px] xl:mt-[21px] 2xl:mt-[23px] 3xl:mt-[28px] w-[95%]">
                <Stack className="absolute bottom-[0] lg:h-[224px] xl:h-[281px] 2xl:h-[316px] 3xl:h-[379px] right-[0] w-[93%]">
                  <div className="absolute bg-cyan_901 xl:h-[100px] 2xl:h-[112px] 3xl:h-[134px] lg:h-[80px] left-[0] rounded-radius2085 top-[3%] w-[74%]"></div>
                  <Img
                    src="images/img_vector2.svg"
                    className="VectorTwo"
                    alt="VectorTwo"
                  />
                </Stack>
                <Img
                  src="images/img_18959011.png"
                  className="test_18959011"
                  alt="18959011"
                />
              </Stack>
            </Column>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default LoginPage;
