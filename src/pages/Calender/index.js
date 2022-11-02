import React from "react";

import { Row, Img, Text, Stack, Column, Button, List } from "components";
import Sidebar8 from "components/Sidebar/Sidebar8";
import Footer7 from "components/Footer/Footer7";
import { useNavigate } from "react-router-dom";

const CalenderPage = () => {
  const navigate = useNavigate();

  function handleNavigate180() {
    navigate("/dashboardfour");
  }
  function handleNavigate186() {
    navigate("/settingsnotificationone");
  }

  return (
    <>
      <Row className="bg-white_A700 font-poppins items-start mx-[auto] overflow-auto w-[100%]">
        <div className="lg:mt-[377px] xl:mt-[472px] 2xl:mt-[531px] 3xl:mt-[637px] overflow-x-auto w-[11%]">
          <Row className="items-center w-[100%]">
            <Img
              src="images/img_care1_20X20.png"
              className="dashboardFive"
              alt="careOne"
            />
            <Text className="rowdashboardfive" as="h5" variant="h5">
              Care Updates
            </Text>
          </Row>
        </div>
        <Stack className="lg:h-[576px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] xl:ml-[1235px] 2xl:ml-[1390px] 3xl:ml-[1668px] lg:ml-[988px] w-[95%]">
          <Stack className="absolute lg:h-[576px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] w-[100%]">
            <Column className="absolute items-center justify-start w-[100%]">
              <Row className="items-start w-[100%]">
                <Sidebar8
                  className="w-[24%]"
                  onGroup3846Click={handleNavigate186}
                />
                <Column className="bg-gray_200 justify-end lg:ml-[40px] xl:ml-[50px] 2xl:ml-[56px] 3xl:ml-[67px] lg:mt-[34px] xl:mt-[43px] 2xl:mt-[48px] 3xl:mt-[58px] lg:p-[12px] xl:p-[15px] 2xl:p-[16px] 3xl:p-[20px] rounded-radius5 w-[29%]">
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
                  className="lg:h-[47px] xl:h-[59px] 2xl:h-[66px] 3xl:h-[79px] lg:ml-[373px] xl:ml-[467px] 2xl:ml-[525px] 3xl:ml-[630px] lg:mt-[29px] xl:mt-[37px] 2xl:mt-[41px] 3xl:mt-[49px] rounded-radius50 lg:w-[46px] xl:w-[58px] 2xl:w-[65px] 3xl:w-[78px]"
                  alt="EllipseTwo"
                />
              </Row>
            </Column>
            <Column
              className="absolute bg-cover bg-repeat justify-end left-[0] lg:p-[30px] xl:p-[38px] 2xl:p-[42px] 3xl:p-[51px] top-[0] w-[30%]"
              style={{ backgroundImage: "url('images/img_group190.png')" }}
            >
              <Row
                className="common-pointer items-center lg:ml-[27px] xl:ml-[34px] 2xl:ml-[38px] 3xl:ml-[45px] mr-[auto] xl:mt-[107px] 2xl:mt-[120px] 3xl:mt-[144px] lg:mt-[85px] w-[43%]"
                onClick={handleNavigate180}
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
            </Column>
          </Stack>
          <Column className="absolute justify-start left-[6%] top-[19%] w-[62%]">
            <Row className="items-start justify-end ml-[auto] w-[63%]">
              <Text
                className="font-semibold mb-[1px] text-blue_600 w-[auto]"
                as="h5"
                variant="h5"
              >
                Calender
              </Text>
              <Text
                className="lg:ml-[226px] xl:ml-[283px] 2xl:ml-[318px] 3xl:ml-[382px] GeneralSetting1"
                as="h5"
                variant="h5"
              >
                Add New Task
              </Text>
            </Row>
            <Row className="items-start justify-between lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[100%]">
              <Row className="items-center justify-between mt-[2px] py-[2px] w-[14%]">
                <Img
                  src="images/img_calendar31.png"
                  className="dashboardFive"
                  alt="calendarThirtyOne"
                />
                <Column className="items-center w-[69%]">
                  <Text
                    className="font-medium text-white_A700 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Calender
                  </Text>
                </Column>
              </Row>
              <Row className="items-start justify-between w-[65%]">
                <Column className="items-center justify-start w-[67%]">
                  <Column className="bg-white_A700 justify-start lg:p-[5px] 2xl:p-[7px] xl:p-[7px] 3xl:p-[9px] rounded-radius10 shadow-bs w-[100%]">
                    <Row className="items-center justify-end ml-[auto] w-[18%]">
                      <Button
                        className="flex lg:h-[21px] xl:h-[27px] 2xl:h-[30px] 3xl:h-[36px] items-center justify-center lg:w-[20px] xl:w-[26px] 2xl:w-[29px] 3xl:w-[35px]"
                        shape="icbRoundedBorder4"
                        size="smIcn"
                        variant="icbFillCyan900"
                      >
                        <Img
                          src="images/img_group3854.png"
                          className="flex items-center justify-center lg:h-[11px] xl:h-[14px] 2xl:h-[15px] 3xl:h-[18px]"
                          alt="Group3854"
                        />
                      </Button>
                      <Button
                        className="flex lg:h-[21px] xl:h-[27px] 2xl:h-[30px] 3xl:h-[36px] items-center justify-center lg:ml-[4px] 2xl:ml-[5px] xl:ml-[5px] 3xl:ml-[6px] lg:w-[20px] xl:w-[26px] 2xl:w-[29px] 3xl:w-[35px]"
                        shape="icbRoundedBorder4"
                        size="smIcn"
                        variant="icbFillCyan900"
                      >
                        <Img
                          src="images/img_group3855.png"
                          className="flex items-center justify-center lg:h-[11px] xl:h-[14px] 2xl:h-[15px] 3xl:h-[18px]"
                          alt="Group3855"
                        />
                      </Button>
                    </Row>
                    <Stack className="lg:h-[162px] xl:h-[203px] 2xl:h-[228px] 3xl:h-[273px] 2xl:mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[9px] lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] 3xl:mt-[6px] mx-[auto] w-[93%]">
                      <div className="absolute border-blue_600 border-bw3 border-solid right-[3%] rounded-radius50 top-[25%] googleOne"></div>
                      <Img
                        src="images/img_calender1.png"
                        className="CalenderOne"
                        alt="CalenderOne"
                      />
                    </Stack>
                  </Column>
                </Column>
                <Button
                  className="font-medium mt-[1px] xl:text-[11px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[27%]"
                  shape="RoundedBorder4"
                  size="lg"
                  variant="FillCyan900"
                >
                  Add
                </Button>
              </Row>
            </Row>
            <Text
              className="lg:ml-[210px] xl:ml-[263px] 2xl:ml-[296px] 3xl:ml-[355px] columncalendarthirtyone"
              as="h5"
              variant="h5"
            >
              1 jan Tasks
            </Text>
          </Column>
          <Footer7 className="absolute bottom-[2%] font-nunito right-[0] w-[72%]" />
        </Stack>
        <List
          className="lg:gap-[1045px] xl:gap-[1308px] 2xl:gap-[1471px] 3xl:gap-[1765px] grid grid-cols-2 min-h-[auto] lg:ml-[250px] xl:ml-[313px] 2xl:ml-[352px] 3xl:ml-[422px] lg:mt-[377px] xl:mt-[472px] 2xl:mt-[531px] 3xl:mt-[637px] w-[1px]"
          orientation="horizontal"
        >
          <Row className="items-center w-[100%]">
            <Img
              src="images/img_care1_1.png"
              className="dashboardFive"
              alt="careOne Two"
            />
            <Text className="rowdashboardfive" as="h5" variant="h5">
              Care Updates
            </Text>
          </Row>
          <Row className="items-center w-[100%]">
            <Img
              src="images/img_care1_2.png"
              className="dashboardFive"
              alt="careOne Three"
            />
            <Text className="rowdashboardfive" as="h5" variant="h5">
              Care Updates
            </Text>
          </Row>
        </List>
      </Row>
    </>
  );
};

export default CalenderPage;
