import React from "react";

import { Column, Row, Stack, Img, Text } from "components";
import Sidebar8 from "components/Sidebar/Sidebar8";
import { useNavigate } from "react-router-dom";

const TutorialsPage = () => {
  const navigate = useNavigate();

  function handleNavigate155() {
    navigate("/settingsnotificationone");
  }
  function handleNavigate158() {
    navigate("/dashboardfour");
  }
  function handleNavigate159() {
    navigate("/calender");
  }

  return (
    <>
      <Column className="bg-white_A700 font-poppins items-center justify-end mx-[auto] w-[100%]">
        <div className="overflow-x-auto w-[100%]">
          <Row className="items-start justify-between overflow-auto w-[100%]">
            <Column className="justify-start w-[87%]">
              <Stack className="lg:h-[576px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] w-[100%]">
                <Stack className="absolute lg:h-[576px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] w-[100%]">
                  <Column className="absolute items-center justify-start left-[0] w-[61%]">
                    <Row className="items-start justify-between w-[100%]">
                      <Sidebar8
                        className="w-[42%]"
                        onGroup3846Click={handleNavigate155}
                      />
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
                    style={{
                      backgroundImage: "url('images/img_group327.png')",
                    }}
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
                    className="absolute bg-cover bg-repeat bottom-[8%] items-center justify-start right-[0] rounded-radius6 w-[22%]"
                    style={{
                      backgroundImage: "url('images/img_group328.png')",
                    }}
                  >
                    <div className="bg-black_900_63 Rectangle1285"></div>
                  </Column>
                  <Column
                    className="absolute bg-cover bg-repeat bottom-[8%] items-center justify-start right-[24%] rounded-radius6 w-[22%]"
                    style={{
                      backgroundImage: "url('images/img_group328.png')",
                    }}
                  >
                    <div className="bg-black_900_63 Rectangle1285"></div>
                  </Column>
                  <Column
                    className="absolute bg-cover bg-repeat bottom-[8%] items-center justify-start left-[30%] rounded-radius6 w-[22%]"
                    style={{
                      backgroundImage: "url('images/img_group328.png')",
                    }}
                  >
                    <div className="bg-black_900_63 Rectangle1285"></div>
                  </Column>
                  <Column
                    className="absolute bg-cover bg-repeat justify-end left-[0] lg:p-[32px] xl:p-[41px] 2xl:p-[46px] 3xl:p-[55px] top-[0] w-[32%]"
                    style={{
                      backgroundImage: "url('images/img_group218.png')",
                    }}
                  >
                    <Row
                      className="common-pointer items-center lg:ml-[24px] xl:ml-[31px] 2xl:ml-[34px] 3xl:ml-[41px] mr-[auto] xl:mt-[102px] 2xl:mt-[114px] 3xl:mt-[137px] lg:mt-[81px] w-[44%]"
                      onClick={handleNavigate158}
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
                  onClick={handleNavigate159}
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
              <Row className="items-center lg:ml-[56px] xl:ml-[70px] 2xl:ml-[78px] 3xl:ml-[94px] lg:mt-[448px] xl:mt-[560px] 2xl:mt-[630px] 3xl:mt-[756px] w-[10%]">
                <Img
                  src="images/img_employee1.png"
                  className="dashboardFive"
                  alt="employeeOne One"
                />
                <Text className="rowdashboardfive" as="h5" variant="h5">
                  Employee
                </Text>
              </Row>
            </Column>
            <Column className="justify-start lg:mt-[29px] xl:mt-[37px] 2xl:mt-[41px] 3xl:mt-[49px] w-[19%]">
              <Img
                src="images/img_ellipse2.png"
                className="lg:h-[47px] xl:h-[59px] 2xl:h-[66px] 3xl:h-[79px] ml-[4px] rounded-radius50 lg:w-[46px] xl:w-[58px] 2xl:w-[65px] 3xl:w-[78px]"
                alt="EllipseTwo"
              />
              <Column
                className="bg-cover bg-repeat items-center justify-start lg:mt-[330px] xl:mt-[413px] 2xl:mt-[464px] 3xl:mt-[557px] rounded-radius6 w-[100%]"
                style={{ backgroundImage: "url('images/img_group221.png')" }}
              >
                <Img
                  src="images/img_rectangle1285_3.png"
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

export default TutorialsPage;
