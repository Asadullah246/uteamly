import React from "react";

import { Stack, Column, Row, Img, Text, Line, Input, Button } from "components";
import Sidebar6 from "components/Sidebar/Sidebar6";
import { useNavigate } from "react-router-dom";

const SettingsAvailibilityPage = () => {
  const navigate = useNavigate();

  function handleNavigate236() {
    navigate("/settingsprivacypolicies");
  }
  function handleNavigate237() {
    navigate("/settingstermsconditions");
  }
  function handleNavigate245() {
    navigate("/settingsnotification");
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
            style={{ backgroundImage: "url('images/img_group130.png')" }}
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
          <Text
            className="common-pointer GeneralSetting2"
            as="h5"
            variant="h5"
            onClick={handleNavigate245}
          >
            Notification Settings
          </Text>
          <Text
            className="common-pointer Availability"
            as="h5"
            variant="h5"
            onClick={handleNavigate236}
          >
            Privacy Policy
          </Text>
          <Text
            className="common-pointer termAndCondition1"
            as="h5"
            variant="h5"
            onClick={handleNavigate237}
          >
            Terms & Conditions
          </Text>
          <Text
            className="font-semibold lg:ml-[53px] xl:ml-[67px] 2xl:ml-[75px] 3xl:ml-[90px] my-[1px] text-blue_600 w-[auto]"
            as="h5"
            variant="h5"
          >
            Availability
          </Text>
        </Row>
        <Line className="absolute bg-black_900_72 h-[0.5px] right-[0] top-[29%] w-[68%]" />
        <Line className="absolute bg-blue_600 h-[2px] right-[11%] top-[30%] w-[9%]" />
        <Text
          className="absolute font-normal left-[28%] not-italic text-black_900_99 top-[37%] w-[auto]"
          variant="body1"
        >
          Date
        </Text>
        <Text
          className="absolute font-normal h-[max-content] inset-y-[0] left-[28%] my-[auto] not-italic text-black_900_99 w-[auto]"
          variant="body1"
        >
          Time
        </Text>
        <div className="absolute border-black_900_b2 border-bw05 border-solid lg:h-[42px] xl:h-[53px] 2xl:h-[59px] 3xl:h-[71px] left-[26%] rounded-radius2646 top-[34%] w-[27%]"></div>
        <div className="absolute border-black_900_b2 border-bw05 border-solid lg:h-[42px] xl:h-[53px] 2xl:h-[59px] 3xl:h-[71px] inset-y-[0] left-[26%] my-[auto] rounded-radius2646 w-[27%]"></div>
        <Column className="absolute bottom-[25%] items-center justify-start left-[26%] w-[27%]">
          <Input
            className="placeholder:text-black_900_99 GroupThree"
            wrapClassName="w-[100%]"
            name="Group133"
            placeholder="Available"
          ></Input>
          <Button
            className="font-semibold lg:mt-[23px] xl:mt-[29px] 2xl:mt-[32px] 3xl:mt-[39px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[100%]"
            shape="CircleBorder26"
            size="xl"
            variant="FillCyan900"
          >
            Confirm
          </Button>
        </Column>
      </Stack>
    </>
  );
};

export default SettingsAvailibilityPage;
