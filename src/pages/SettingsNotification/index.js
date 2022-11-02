import React from "react";

import { Stack, Column, Row, Img, Text, Line, Switch } from "components";
import Sidebar6 from "components/Sidebar/Sidebar6";
import { useNavigate } from "react-router-dom";

const SettingsNotificationPage = () => {
  const navigate = useNavigate();

  function handleNavigate269() {
    navigate("/settingsprivacypolicies");
  }
  function handleNavigate270() {
    navigate("/settingstermsconditions");
  }
  function handleNavigate271() {
    navigate("/settingsavailibility");
  }

  return (
    <>
      <Stack className="bg-white_A700 font-poppins lg:h-[576px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] mx-[auto] lg:pr-[56px] xl:pr-[70px] 2xl:pr-[78px] 3xl:pr-[94px] w-[100%]">
        <Stack className="absolute lg:h-[576px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] left-[0] w-[95%]">
          <Column className="absolute items-center justify-start w-[100%]">
            <Row className="items-start justify-between w-[100%]">
              <Sidebar6 className="w-[24%]" />
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
            style={{ backgroundImage: "url('images/img_group95.png')" }}
          >
            <Column className="justify-start lg:ml-[56px] xl:ml-[70px] 2xl:ml-[78px] 3xl:ml-[94px] lg:mt-[108px] xl:mt-[136px] 2xl:mt-[153px] 3xl:mt-[183px] w-[34%]">
              <Row className="items-center w-[100%]">
                <Img
                  src="images/img_dashboard5.png"
                  className="dashboardFive"
                  alt="dashboardFive"
                />
                <Text className="rowdashboardfive" as="h5" variant="h5">
                  Dashboard
                </Text>
              </Row>
              <Row className="items-center lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] py-[2px] w-[89%]">
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
        <Row className="absolute items-start justify-center right-[12%] top-[25%] w-[57%]">
          <Text className="GeneralSetting1" as="h5" variant="h5">
            Notification Settings
          </Text>
          <Text
            className="common-pointer PrivacyPolicy"
            as="h5"
            variant="h5"
            onClick={handleNavigate269}
          >
            Privacy Policy
          </Text>
          <Text
            className="common-pointer font-medium lg:ml-[53px] xl:ml-[67px] 2xl:ml-[75px] 3xl:ml-[90px] text-black_900_6d w-[auto]"
            as="h5"
            variant="h5"
            onClick={handleNavigate270}
          >
            Terms & Conditions
          </Text>
          <Text
            className="common-pointer PrivacyPolicy"
            as="h5"
            variant="h5"
            onClick={handleNavigate271}
          >
            Availability
          </Text>
        </Row>
        <Line className="absolute bg-black_900_72 h-[0.5px] right-[0] top-[29%] w-[68%]" />
        <Column className="absolute justify-start left-[26%] top-[30%] w-[21%]">
          <Line className="bg-blue_600 h-[2px] w-[61%]" />
          <Row className="items-start justify-between lg:mt-[22px] xl:mt-[28px] 2xl:mt-[31px] 3xl:mt-[37px] w-[100%]">
            <Text className="rowpushnotificati" as="h5" variant="h5">
              Push Notification
            </Text>
            <Switch value={true} className="w-[20%]" />
          </Row>
          <Row className="items-start justify-between lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[100%]">
            <Text className="rowpushnotificati" as="h5" variant="h5">
              Event Notification
            </Text>
            <Switch value={true} className="w-[20%]" />
          </Row>
          <Row className="items-start justify-between lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[100%]">
            <Text className="rowpushnotificati" as="h5" variant="h5">
              Chat Notification
            </Text>
            <Switch value={true} className="w-[20%]" />
          </Row>
        </Column>
      </Stack>
    </>
  );
};

export default SettingsNotificationPage;
