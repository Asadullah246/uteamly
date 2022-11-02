import React from "react";

import { Stack, Column, Row, Img, Text, List, Button } from "components";
import Sidebar6 from "components/Sidebar/Sidebar6";
import Footer6 from "components/Footer/Footer6";
import { useNavigate } from "react-router-dom";

const DashboardFivePage = () => {
  const navigate = useNavigate();

  function handleNavigate93() {
    navigate("/calenderone");
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
            className="absolute bg-cover bg-repeat justify-end left-[0] lg:p-[4px] 2xl:p-[6px] xl:p-[6px] 3xl:p-[8px] top-[0] w-[30%]"
            style={{ backgroundImage: "url('images/img_group281.png')" }}
          >
            <Column className="justify-start lg:ml-[52px] xl:ml-[66px] 2xl:ml-[74px] 3xl:ml-[89px] lg:mt-[101px] xl:mt-[127px] 2xl:mt-[142px] 3xl:mt-[171px] w-[35%]">
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
              <Row
                className="common-pointer items-center lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] py-[2px] w-[89%]"
                onClick={handleNavigate93}
              >
                <Img
                  src="images/img_calendar31.png"
                  className="dashboardFive"
                  alt="calendarThirtyOne"
                />
                <Column className="items-center lg:ml-[10px] xl:ml-[13px] 2xl:ml-[14px] 3xl:ml-[17px] w-[69%]">
                  <Text
                    className="font-medium text-white_A700 w-[auto]"
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
        <Column className="absolute bottom-[26%] justify-start right-[6%] w-[63%]">
          <Text
            className="font-semibold text-blue_600 w-[auto]"
            as="h5"
            variant="h5"
          >
            UpcomingTasks
          </Text>
          <Row className="font-nunito items-start xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] lg:mt-[24px] xl:mt-[30px] 2xl:mt-[33px] 3xl:mt-[40px] w-[99%]">
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
        <Column className="absolute justify-start right-[12%] top-[19%] w-[56%]">
          <Row className="items-start justify-between w-[100%]">
            <Text className="text-blue_600 w-[auto]" as="h2" variant="h2">
              Welcome Back, DInesh
            </Text>
            <Row className="items-start mt-[1px] w-[14%]">
              <Img
                src="images/img_clock21.png"
                className="clockTwentyOne"
                alt="clockTwentyOne"
              />
              <Text className="rowclocktwentyone" as="h4" variant="h4">
                12:01pm
              </Text>
            </Row>
          </Row>
          <Text className="columnhelpcenter_one" as="h5" variant="h5">
            <span className="text-blue_600 font-poppins lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px]">
              Latest Notofications{" "}
            </span>
            <span className="text-black_900_82 font-poppins font-medium lg:text-[12px] xl:text-[15px] 2xl:text-[16px] 3xl:text-[20px]">
              (2)
            </span>
          </Text>
        </Column>
        <Footer6 className="absolute bottom-[0] font-nunito right-[0] w-[68%]" />
        <List
          className="absolute font-nunito gap-[0] min-h-[auto] right-[0] top-[35%] w-[68%]"
          orientation="vertical"
        >
          <Row className="listbellringone">
            <Img
              src="images/img_bellring1.png"
              className="bellringOne"
              alt="bellringOne"
            />
            <Column className="lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] my-[3px] w-[43%]">
              <Text
                className="font-medium text-black_900 w-[auto]"
                as="h6"
                variant="h6"
              >
                Network Lag bug shift has been marked as complete{" "}
              </Text>
              <Text className="Youcancheckt" variant="body2">
                You can check the details of the shift.
              </Text>
            </Column>
            <Img
              src="images/img_arrowdownsign.png"
              className="arrowdownsign2"
              alt="arrowdownsign"
            />
          </Row>
          <Row className="listbellringone">
            <Img
              src="images/img_bellring1.png"
              className="bellringOne"
              alt="bellringOne One"
            />
            <Column className="lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] my-[3px] w-[43%]">
              <Text
                className="font-medium text-black_900 w-[auto]"
                as="h6"
                variant="h6"
              >
                Network Lag bug shift has been marked as complete{" "}
              </Text>
              <Text className="Youcancheckt" variant="body2">
                You can check the details of the shift.
              </Text>
            </Column>
            <Img
              src="images/img_arrowdownsign.png"
              className="arrowdownsign2"
              alt="arrowdownsign One"
            />
          </Row>
        </List>
        <Button
          className="absolute font-medium right-[0] xl:text-[11px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center top-[18%] w-[10%]"
          shape="RoundedBorder4"
          size="lg"
          variant="FillCyan900"
        >
          Start Day
        </Button>
      </Stack>
    </>
  );
};

export default DashboardFivePage;
