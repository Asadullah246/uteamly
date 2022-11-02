import React from "react";

import { Stack, Column, Row, Img, Text, Line } from "components";
import Sidebar8 from "components/Sidebar/Sidebar8";
import { useNavigate } from "react-router-dom";

const SettingsPrivacyPoliciesOnePage = () => {
  const navigate = useNavigate();

  function handleNavigate170() {
    navigate("/dashboardfour");
  }
  function handleNavigate171() {
    navigate("/calender");
  }
  function handleNavigate172() {
    navigate("/settingsnotificationone");
  }
  function handleNavigate176() {
    navigate("/settingsnotificationone");
  }

  return (
    <>
      <Stack className="bg-white_A700 font-poppins lg:h-[576px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] mx-[auto] lg:pr-[56px] xl:pr-[70px] 2xl:pr-[78px] 3xl:pr-[94px] w-[100%]">
        <Stack className="absolute lg:h-[576px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] left-[0] w-[95%]">
          <Column className="absolute items-center justify-start w-[100%]">
            <Row className="items-start justify-between w-[100%]">
              <Sidebar8
                className="w-[24%]"
                onGroup3846Click={handleNavigate176}
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
          <Column
            className="absolute bg-cover bg-repeat justify-end left-[0] p-[2px] top-[0] w-[30%]"
            style={{ backgroundImage: "url('images/img_group195.png')" }}
          >
            <Column className="justify-start lg:ml-[54px] xl:ml-[68px] 2xl:ml-[76px] 3xl:ml-[91px] lg:mt-[108px] xl:mt-[136px] 2xl:mt-[153px] 3xl:mt-[183px] w-[34%]">
              <Row
                className="common-pointer items-center w-[100%]"
                onClick={handleNavigate170}
              >
                <Img
                  src="images/img_dashboard5.png"
                  className="dashboardFive"
                  alt="dashboardFive"
                />
                <Text className="rowdashboardfive" as="h5" variant="h5">
                  Dashboard
                </Text>
              </Row>
              <Row
                className="common-pointer items-center lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] py-[2px] w-[89%]"
                onClick={handleNavigate171}
              >
                <Img
                  src="images/img_calendar31.png"
                  className="dashboardFive"
                  alt="calendarThirtyOne"
                />
                <Column className="items-center lg:ml-[10px] xl:ml-[13px] 2xl:ml-[14px] 3xl:ml-[17px] w-[69%]">
                  <Text
                    className="font-medium text-white_A700_7a w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Calender
                  </Text>
                </Column>
              </Row>
            </Column>
          </Column>
        </Stack>
        <Row className="absolute inset-x-[0] items-start justify-center mx-[auto] top-[25%] w-[44%]">
          <Text
            className="common-pointer GeneralSetting2"
            as="h5"
            variant="h5"
            onClick={handleNavigate172}
          >
            Notification Settings
          </Text>
          <Text
            className="lg:ml-[52px] xl:ml-[66px] 2xl:ml-[74px] 3xl:ml-[89px] GeneralSetting1"
            as="h5"
            variant="h5"
          >
            Privacy Policy
          </Text>
          <Text className="termAndCondition1" as="h5" variant="h5">
            Terms & Conditions
          </Text>
        </Row>
        <Line className="absolute bg-black_900_72 h-[0.5px] right-[0] top-[29%] w-[68%]" />
        <Column className="absolute inset-x-[0] items-center justify-start mx-[auto] top-[30%] w-[45%]">
          <Line className="bg-blue_600 h-[2px] w-[23%]" />
          <Text className="columnlinefour1" as="h5" variant="h5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Text>
        </Column>
      </Stack>
    </>
  );
};

export default SettingsPrivacyPoliciesOnePage;
