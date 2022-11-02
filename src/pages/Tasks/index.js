import React from "react";

import { Column, Row, Img, Text, Stack, Button, Line } from "components";
import Sidebar8 from "components/Sidebar/Sidebar8";
import Footer2 from "components/Footer/Footer2";
import { useNavigate } from "react-router-dom";

const TasksPage = () => {
  const navigate = useNavigate();

  function handleNavigate175() {
    navigate("/calender");
  }
  function handleNavigate184() {
    navigate("/dashboardfour");
  }

  return (
    <>
      <Column className="bg-white_A700 font-poppins justify-end mx-[auto] w-[100%]">
        <div className="overflow-x-auto w-[100%]">
          <Column className="justify-start w-[100%]">
            <Row className="items-start justify-between overflow-auto w-[100%]">
              <Row className="items-start justify-between w-[100%]">
                <Row className="items-start justify-between lg:pr-[56px] xl:pr-[70px] 2xl:pr-[78px] 3xl:pr-[94px] w-[100%]">
                  <Row className="items-center lg:mt-[378px] xl:mt-[473px] 2xl:mt-[532px] 3xl:mt-[638px] w-[6%]">
                    <Img
                      src="images/img_care1_3.png"
                      className="dashboardFive"
                      alt="careOne"
                    />
                    <Text className="rowdashboardfive" as="h5" variant="h5">
                      Care Updates
                    </Text>
                  </Row>
                  <Stack className="lg:h-[576px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] w-[47%]">
                    <Stack className="absolute lg:h-[576px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] w-[100%]">
                      <Column className="absolute items-center justify-start w-[100%]">
                        <Row className="items-start w-[100%]">
                          <Sidebar8 className="w-[24%]" />
                          <Text className="rowgroup3846" as="h4" variant="h4">
                            Tasks
                          </Text>
                          <Column className="items-end justify-start lg:ml-[465px] xl:ml-[582px] 2xl:ml-[655px] 3xl:ml-[786px] lg:mt-[29px] xl:mt-[37px] 2xl:mt-[41px] 3xl:mt-[49px] w-[20%]">
                            <Img
                              src="images/img_ellipse2.png"
                              className="lg:h-[47px] xl:h-[59px] 2xl:h-[66px] 3xl:h-[79px] rounded-radius50 lg:w-[46px] xl:w-[58px] 2xl:w-[65px] 3xl:w-[78px]"
                              alt="EllipseTwo"
                            />
                            <Row className="bg-gray_200 items-center justify-between lg:mt-[33px] xl:mt-[42px] 2xl:mt-[47px] 3xl:mt-[56px] 3xl:p-[10px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] rounded-radius5 w-[100%]">
                              <Row className="items-start justify-center mb-[1px] 3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] lg:mt-[4px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] w-[31%]">
                                <Img
                                  src="images/img_search11.png"
                                  className="searchEleven1"
                                  alt="searchEleven"
                                />
                                <Text
                                  className="rowsearcheleven1"
                                  variant="body1"
                                >
                                  Search
                                </Text>
                              </Row>
                              <Img
                                src="images/img_setting1.png"
                                className="settingOne"
                                alt="settingOne"
                              />
                            </Row>
                          </Column>
                        </Row>
                      </Column>
                      <Column className="absolute justify-start left-[28%] top-[30%] w-[19%]">
                        <Button
                          className="font-medium xl:text-[11px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[75%]"
                          shape="RoundedBorder4"
                          size="lg"
                          variant="FillCyan900"
                        >
                          Add New Task
                        </Button>
                        <Row className="items-start justify-between lg:mt-[24px] xl:mt-[30px] 2xl:mt-[33px] 3xl:mt-[40px] w-[100%]">
                          <Text
                            className="font-semibold text-blue_600 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Tasks
                          </Text>
                          <Text className="Employees_One" as="h5" variant="h5">
                            Request
                          </Text>
                        </Row>
                      </Column>
                      <Column className="absolute font-nunito justify-start right-[6%] top-[44%] w-[66%]">
                        <Line className="bg-blue_600 h-[2px] w-[13%]" />
                        <Row className="items-start xl:ml-[12px] 2xl:ml-[13px] 3xl:ml-[16px] lg:ml-[9px] lg:mt-[13px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[22px] w-[98%]">
                          <Text className="TaskName" as="h6" variant="h6">
                            Task Name
                          </Text>
                          <Text className="StartDate" as="h6" variant="h6">
                            Start Date
                          </Text>
                          <Text className="DueDate" as="h6" variant="h6">
                            Due Date
                          </Text>
                          <Text className="OverTime" as="h6" variant="h6">
                            Over Time
                          </Text>
                          <Text className="Assignedto" as="h6" variant="h6">
                            Assigned to
                          </Text>
                        </Row>
                      </Column>
                      <Footer2 className="absolute bottom-[1%] font-nunito right-[0] w-[72%]" />
                      <Line className="absolute bg-black_900_72 h-[0.5px] right-[0] top-[44%] w-[72%]" />
                      <Column
                        className="absolute bg-cover bg-repeat font-poppins justify-end left-[0] lg:p-[31px] xl:p-[39px] 2xl:p-[43px] 3xl:p-[52px] top-[0] w-[30%]"
                        style={{
                          backgroundImage: "url('images/img_group193.png')",
                        }}
                      >
                        <Row
                          className="common-pointer items-center lg:ml-[26px] xl:ml-[33px] 2xl:ml-[37px] 3xl:ml-[44px] mr-[auto] xl:mt-[107px] 2xl:mt-[120px] 3xl:mt-[144px] lg:mt-[85px] w-[43%]"
                          onClick={handleNavigate184}
                        >
                          <Img
                            src="images/img_dashboard5.png"
                            className="dashboardFive"
                            alt="dashboardFive"
                          />
                          <Text
                            className="rowdashboardfive"
                            as="h5"
                            variant="h5"
                          >
                            Dashboard
                          </Text>
                        </Row>
                      </Column>
                    </Stack>
                    <Row
                      className="common-pointer absolute items-center justify-center left-[6%] py-[2px] top-[26%] w-[9%]"
                      onClick={handleNavigate175}
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
                </Row>
                <Row className="items-center lg:mt-[378px] xl:mt-[473px] 2xl:mt-[532px] 3xl:mt-[638px] w-[5%]">
                  <Img
                    src="images/img_care1_4.png"
                    className="dashboardFive"
                    alt="careOne Two"
                  />
                  <Text className="rowdashboardfive" as="h5" variant="h5">
                    Care Updates
                  </Text>
                </Row>
              </Row>
              <Row className="items-center lg:mt-[378px] xl:mt-[473px] 2xl:mt-[532px] 3xl:mt-[638px] w-[5%]">
                <Img
                  src="images/img_care1_5.png"
                  className="dashboardFive"
                  alt="careOne Three"
                />
                <Text className="rowdashboardfive" as="h5" variant="h5">
                  Care Updates
                </Text>
              </Row>
            </Row>
            <Row className="items-center justify-end ml-[auto] lg:mt-[448px] xl:mt-[560px] 2xl:mt-[630px] 3xl:mt-[756px] w-[4%]">
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
        </div>
      </Column>
    </>
  );
};

export default TasksPage;
