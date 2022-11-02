import React from "react";

import { Stack, Column, Row, Img, Text, Button } from "components";
import Sidebar6 from "components/Sidebar/Sidebar6";
import Footer7 from "components/Footer/Footer7";
import { useNavigate } from "react-router-dom";

const CalenderOnePage = () => {
  const navigate = useNavigate();

  function handleNavigate79() {
    navigate("/requestfornewtask");
  }
  function handleNavigate84() {
    navigate("/dashboardfive");
  }
  function handleNavigate85() {
    navigate("/requestforabsentee");
  }

  return (
    <>
      <Stack className="bg-white_A700 font-poppins lg:h-[576px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] mx-[auto] lg:pr-[56px] xl:pr-[70px] 2xl:pr-[78px] 3xl:pr-[94px] w-[100%]">
        <Stack className="absolute lg:h-[576px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] left-[0] w-[95%]">
          <Column className="absolute items-center justify-start w-[100%]">
            <Row className="items-start w-[100%]">
              <Sidebar6 className="w-[24%]" />
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
            className="absolute bg-cover bg-repeat justify-end left-[0] lg:p-[32px] xl:p-[40px] 2xl:p-[45px] 3xl:p-[54px] top-[0] w-[30%]"
            style={{ backgroundImage: "url('images/img_group292.png')" }}
          >
            <Row
              className="common-pointer items-center lg:ml-[25px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] mr-[auto] xl:mt-[103px] 2xl:mt-[115px] 3xl:mt-[139px] lg:mt-[82px] w-[43%]"
              onClick={handleNavigate84}
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
        <Column className="absolute justify-start left-[6%] top-[19%] w-[64%]">
          <Row className="items-start justify-end ml-[auto] w-[65%]">
            <Text
              className="font-semibold text-blue_600 w-[auto]"
              as="h5"
              variant="h5"
            >
              Calender
            </Text>
            <Text
              className="lg:ml-[226px] xl:ml-[283px] 2xl:ml-[318px] 3xl:ml-[382px] columntutorials_one"
              as="h5"
              variant="h5"
            >
              Request for Absentee
            </Text>
          </Row>
          <Row className="items-start justify-between lg:mt-[16px] xl:mt-[21px] 2xl:mt-[23px] 3xl:mt-[28px] w-[100%]">
            <Column className="items-center justify-start w-[72%]">
              <Row className="items-start justify-between w-[100%]">
                <Row className="items-center justify-between mt-[2px] py-[2px] w-[18%]">
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
                <Column className="items-center justify-start w-[55%]">
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
              </Row>
              <Text className="columncalendarthirtyone" as="h5" variant="h5">
                1 jan Tasks
              </Text>
            </Column>
            <Column className="justify-start mt-[1px] w-[25%]">
              <Button
                className="common-pointer font-medium xl:text-[11px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[66%]"
                onClick={handleNavigate85}
                shape="RoundedBorder4"
                size="lg"
                variant="FillCyan900"
              >
                Request
              </Button>
              <Text className="columnrequest" as="h5" variant="h5">
                Request for Shift Change
              </Text>
              <Button
                className="font-medium lg:mt-[17px] xl:mt-[22px] 2xl:mt-[24px] 3xl:mt-[29px] xl:text-[11px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[66%]"
                shape="RoundedBorder4"
                size="lg"
                variant="FillCyan900"
              >
                Request
              </Button>
              <Text className="columnrequest" as="h5" variant="h5">
                Request for New Task
              </Text>
              <Button
                className="common-pointer font-medium lg:mt-[17px] xl:mt-[22px] 2xl:mt-[24px] 3xl:mt-[29px] xl:text-[11px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[66%]"
                onClick={handleNavigate79}
                shape="RoundedBorder4"
                size="lg"
                variant="FillCyan900"
              >
                Request
              </Button>
            </Column>
          </Row>
        </Column>
        <Footer7 className="absolute bottom-[2%] font-nunito right-[0] w-[68%]" />
      </Stack>
    </>
  );
};

export default CalenderOnePage;
