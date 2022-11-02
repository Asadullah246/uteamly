import React from "react";

import { Stack, Column, Row, Img, Text, Line } from "components";
import Sidebar1 from "components/Sidebar/Sidebar1";
import { useNavigate } from "react-router-dom";

const SettingsBilingsPage = () => {
  const navigate = useNavigate();

  function handleNavigate49() {
    navigate("/activitiesone");
  }
  function handleNavigate51() {
    navigate("/settingsone");
  }
  function handleNavigate52() {
    navigate("/settingsadmins");
  }

  return (
    <>
      <Stack className="bg-white_A700 font-poppins lg:h-[576px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] mx-[auto] lg:pr-[56px] xl:pr-[70px] 2xl:pr-[78px] 3xl:pr-[94px] w-[100%]">
        <Stack className="absolute lg:h-[576px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] left-[0] w-[95%]">
          <Column className="absolute items-center justify-start w-[100%]">
            <Row className="items-start justify-between w-[100%]">
              <Sidebar1
                className="w-[24%]"
                onrowchecklistClick={handleNavigate49}
              />
              <Column className="justify-start lg:mt-[29px] xl:mt-[37px] 2xl:mt-[41px] 3xl:mt-[49px] w-[72%]">
                <Row className="items-end justify-between w-[100%]">
                  <Column className="bg-gray_200 justify-end lg:mt-[5px] 2xl:mt-[7px] xl:mt-[7px] 3xl:mt-[9px] lg:p-[12px] xl:p-[15px] 2xl:p-[16px] 3xl:p-[20px] rounded-radius5 w-[40%]">
                    <Row className="items-start lg:ml-[4px] 2xl:ml-[5px] xl:ml-[5px] 3xl:ml-[6px] mr-[auto] mt-[4px] w-[25%]">
                      <Img
                        src="images/img_search11.png"
                        className="searchEleven"
                        alt="searchEleven"
                      />
                      <Text className="rowsearcheleven" as="h5" variant="h5">
                        Search
                      </Text>
                    </Row>
                  </Column>
                  <Img
                    src="images/img_ellipse2.png"
                    className="lg:h-[47px] xl:h-[59px] 2xl:h-[66px] 3xl:h-[79px] rounded-radius50 lg:w-[46px] xl:w-[58px] 2xl:w-[65px] 3xl:w-[78px]"
                    alt="EllipseTwo"
                  />
                </Row>
                <Text className="columnellipsetwo1" as="h5" variant="h5">
                  Settings
                </Text>
              </Column>
            </Row>
          </Column>
          <Img
            src="images/img_whatsappimage_9.png"
            className="WhatsAppImage1"
            alt="WhatsAppImage"
          />
        </Stack>
        <Row className="absolute items-start justify-center left-[26%] top-[25%] w-[29%]">
          <Text
            className="common-pointer GeneralSetting2"
            as="h5"
            variant="h5"
            onClick={handleNavigate51}
          >
            General Settings
          </Text>
          <Text
            className="lg:ml-[48px] xl:ml-[60px] 2xl:ml-[67px] 3xl:ml-[81px] GeneralSetting1"
            as="h5"
            variant="h5"
          >
            Billings
          </Text>
          <Text
            className="common-pointer font-medium lg:ml-[45px] xl:ml-[57px] 2xl:ml-[64px] 3xl:ml-[76px] text-black_900_6d w-[auto]"
            as="h5"
            variant="h5"
            onClick={handleNavigate52}
          >
            Admins
          </Text>
        </Row>
        <Line className="absolute bg-black_900_72 h-[0.5px] right-[0] top-[29%] w-[68%]" />
        <Line className="absolute bg-blue_600 h-[2px] left-[41%] top-[30%] w-[6%]" />
        <Text
          className="absolute font-medium left-[26%] text-black_900_75 top-[34%] w-[auto]"
          as="h5"
          variant="h5"
        >
          Logo:
        </Text>
      </Stack>
    </>
  );
};

export default SettingsBilingsPage;
