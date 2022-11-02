import React from "react";

import { Column, Row, Stack, Img, Text } from "components";
import Sidebar6 from "components/Sidebar/Sidebar6";
import { useNavigate } from "react-router-dom";

const TutorialsOnePage = () => {
  const navigate = useNavigate();

  function handleNavigate98() {
    navigate("/dashboardfive");
  }
  function handleNavigate99() {
    navigate("/calenderone");
  }

  return (
    <>
      <Column className="bg-white_A700 font-poppins items-center justify-start mx-[auto] w-[100%]">
        <div className="overflow-x-auto w-[100%]">
          <Row className="items-center justify-between overflow-auto w-[100%]">
            <Stack className="lg:h-[576px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] w-[87%]">
              <Stack className="absolute lg:h-[576px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] w-[100%]">
                <Column className="absolute items-center justify-start left-[0] w-[61%]">
                  <Row className="items-start justify-between w-[100%]">
                    <Sidebar6 className="w-[42%]" />
                    <Column className="justify-start lg:mt-[35px] xl:mt-[44px] 2xl:mt-[49px] 3xl:mt-[59px] w-[51%]">
                      <Column className="bg-gray_200 justify-end lg:p-[12px] xl:p-[15px] 2xl:p-[16px] 3xl:p-[20px] rounded-radius5 w-[100%]">
                        <Row className="items-start lg:ml-[4px] 2xl:ml-[5px] xl:ml-[5px] 3xl:ml-[6px] mr-[auto] mt-[4px] w-[25%]">
                          <Img
                            src="images/img_search11.png"
                            className="searchEleven"
                            alt="searchEleven"
                          />
                          <Text
                            className="rowsearcheleven"
                            as="h5"
                            variant="h5"
                          >
                            Search
                          </Text>
                        </Row>
                      </Column>
                      <Text
                        className="columntutorials_one1"
                        as="h5"
                        variant="h5"
                      >
                        Tutorials
                      </Text>
                    </Column>
                  </Row>
                </Column>
                <Column
                  className="absolute bg-cover bg-repeat items-center justify-start right-[4%] rounded-radius12 top-[25%] w-[50%]"
                  style={{ backgroundImage: "url('images/img_group327.png')" }}
                >
                  <Stack className="bg-black_900_6b lg:h-[232px] xl:h-[291px] 2xl:h-[327px] 3xl:h-[392px] lg:px-[100px] xl:px-[126px] 2xl:px-[141px] 3xl:px-[170px] rounded-radius12 w-[100%]">
                    <Img
                      src="images/img_playbutton2.png"
                      className="playbuttonTwo"
                      alt="playbuttonTwo"
                    />
                  </Stack>
                </Column>
                <Column
                  className="absolute bg-cover bg-repeat bottom-[8%] items-center justify-start left-[30%] rounded-radius6 w-[22%]"
                  style={{ backgroundImage: "url('images/img_group328.png')" }}
                >
                  <div className="bg-black_900_63 Rectangle1285"></div>
                </Column>
                <Column
                  className="absolute bg-cover bg-repeat bottom-[8%] items-center justify-start right-[0] rounded-radius6 w-[22%]"
                  style={{ backgroundImage: "url('images/img_group328.png')" }}
                >
                  <div className="bg-black_900_63 Rectangle1285"></div>
                </Column>
                <Column
                  className="absolute bg-cover bg-repeat bottom-[8%] items-center justify-start right-[24%] rounded-radius6 w-[22%]"
                  style={{ backgroundImage: "url('images/img_group328.png')" }}
                >
                  <div className="bg-black_900_63 Rectangle1285"></div>
                </Column>
                <Column
                  className="absolute bg-cover bg-repeat justify-end left-[0] lg:p-[34px] xl:p-[43px] 2xl:p-[48px] 3xl:p-[58px] top-[0] w-[32%]"
                  style={{ backgroundImage: "url('images/img_group272.png')" }}
                >
                  <Row
                    className="common-pointer items-center lg:ml-[23px] xl:ml-[29px] 2xl:ml-[32px] 3xl:ml-[39px] mr-[auto] 2xl:mt-[110px] 3xl:mt-[132px] lg:mt-[78px] xl:mt-[98px] w-[45%]"
                    onClick={handleNavigate98}
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
              <Row
                className="common-pointer absolute items-center justify-center left-[6%] py-[2px] top-[25%] w-[10%]"
                onClick={handleNavigate99}
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
            </Stack>
            <Column className="w-[19%]">
              <Img
                src="images/img_ellipse2.png"
                className="lg:h-[47px] xl:h-[59px] 2xl:h-[66px] 3xl:h-[79px] ml-[4px] rounded-radius50 lg:w-[46px] xl:w-[58px] 2xl:w-[65px] 3xl:w-[78px]"
                alt="EllipseTwo"
              />
              <Column
                className="bg-cover bg-repeat items-center justify-start lg:mt-[330px] xl:mt-[413px] 2xl:mt-[464px] 3xl:mt-[557px] rounded-radius6 w-[100%]"
                style={{ backgroundImage: "url('images/img_group276.png')" }}
              >
                <Img
                  src="images/img_rectangle1285_2.png"
                  className="Rectangle1285"
                  alt="Rectangle1285"
                />
              </Column>
            </Column>
          </Row>
        </div>
      </Column>
    </>
  );
};

export default TutorialsOnePage;
