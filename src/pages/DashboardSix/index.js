import React from "react";

import { Stack, Column, Row, Img, Text, Button, List } from "components";
import Sidebar3 from "components/Sidebar/Sidebar3";
import { useNavigate } from "react-router-dom";

const DashboardSixPage = () => {
  const navigate = useNavigate();

  function handleNavigate43() {
    navigate("/bookingstasktwo");
  }

  return (
    <>
      <Stack className="bg-white_A700 font-poppins lg:h-[576px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] mx-[auto] lg:pr-[56px] xl:pr-[70px] 2xl:pr-[78px] 3xl:pr-[94px] w-[100%]">
        <Stack className="absolute lg:h-[576px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] left-[0] w-[95%]">
          <Column className="absolute items-center justify-start w-[100%]">
            <Row className="items-start w-[100%]">
              <Sidebar3 className="w-[24%]" />
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
            className="absolute bg-cover bg-repeat justify-end left-[0] p-[1px] top-[0] w-[30%]"
            style={{ backgroundImage: "url('images/img_group340.png')" }}
          >
            <Column className="justify-start lg:ml-[55px] xl:ml-[69px] 2xl:ml-[77px] 3xl:ml-[93px] lg:mt-[110px] xl:mt-[138px] 2xl:mt-[155px] 3xl:mt-[186px] w-[34%]">
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
                className="common-pointer items-start lg:mt-[17px] xl:mt-[22px] 2xl:mt-[24px] 3xl:mt-[29px] w-[87%]"
                onClick={handleNavigate43}
              >
                <Img
                  src="images/img_todolist1.png"
                  className="todolistOne"
                  alt="todolistOne"
                />
                <Text className="rowtodolistone" as="h5" variant="h5">
                  Bookings
                </Text>
              </Row>
            </Column>
          </Column>
        </Stack>
        <Column className="absolute justify-start right-[6%] top-[19%] w-[63%]">
          <Row className="items-start w-[88%]">
            <Column className="justify-start w-[68%]">
              <Column className="bg-white_A700 justify-start xl:p-[11px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] rounded-radius8 shadow-bs3 w-[100%]">
                <Text className="columnprogress" as="h4" variant="h4">
                  Progress
                </Text>
                <Img
                  src="images/img_untitled11_220X458.png"
                  className="lg:h-[176px] xl:h-[221px] 2xl:h-[248px] 3xl:h-[298px] xl:mb-[10px] 2xl:mb-[11px] 3xl:mb-[13px] lg:mb-[8px] lg:mt-[17px] xl:mt-[22px] 2xl:mt-[24px] 3xl:mt-[29px] w-[100%]"
                  alt="UntitledEleven"
                />
              </Column>
              <Text className="columntodaystask" as="h5" variant="h5">
                Todays Task
              </Text>
            </Column>
            <Column className="justify-start lg:ml-[46px] xl:ml-[58px] 2xl:ml-[65px] 3xl:ml-[78px] lg:mt-[4px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] w-[24%]">
              <Text
                className="font-semibold text-blue_600 w-[auto]"
                as="h5"
                variant="h5"
              >
                Start the Day{" "}
              </Text>
              <Button
                className="font-medium lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] xl:text-[11px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[100%]"
                shape="RoundedBorder4"
                size="lg"
                variant="FillCyan900"
              >
                Sign in
              </Button>
            </Column>
          </Row>
          <Row className="font-nunito items-start xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] lg:mt-[25px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] w-[99%]">
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
        <Column className="absolute bottom-[0] font-nunito items-center justify-end right-[0] w-[68%]">
          <List
            className="gap-[0] min-h-[auto] w-[100%]"
            orientation="vertical"
          >
            <Row className="hover:cursor-pointer items-center 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[9px] xl:p-[12px] 2xl:p-[13px] 3xl:p-[16px] lg:p-[9px] rounded-radius7 hover:shadow-bs w-[100%]">
              <Text className="PopBugFix" variant="body2">
                Pop Bug Fix
              </Text>
              <Text className="test_1322020" variant="body2">
                13/2/2020
              </Text>
              <Text className="test_14220203" variant="body2">
                14/2/2020
              </Text>
              <Text className="duration" variant="body2">
                1 hours
              </Text>
              <Text className="DineshChugtai" variant="body2">
                Dinesh Chugtai
              </Text>
            </Row>
            <Row className="hover:cursor-pointer items-center 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[9px] xl:p-[12px] 2xl:p-[13px] 3xl:p-[16px] lg:p-[9px] rounded-radius7 hover:shadow-bs w-[100%]">
              <Text className="PopBugFix" variant="body2">
                Pop Bug Fix
              </Text>
              <Text className="test_1322020" variant="body2">
                13/2/2020
              </Text>
              <Text className="test_14220203" variant="body2">
                14/2/2020
              </Text>
              <Text className="duration" variant="body2">
                1 hours
              </Text>
              <Text className="DineshChugtai" variant="body2">
                Dinesh Chugtai
              </Text>
            </Row>
            <Stack className="hover:cursor-pointer lg:h-[22px] xl:h-[28px] 2xl:h-[31px] 3xl:h-[37px] 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[9px] rounded-radius7 hover:shadow-bs w-[100%]">
              <div className="absolute bg-white_A700 bottom-[0] lg:h-[49px] xl:h-[62px] 2xl:h-[69px] 3xl:h-[83px] rounded-radius7 shadow-bs w-[100%]"></div>
              <Row className="absolute bottom-[0] items-start left-[1%] w-[91%]">
                <Text className="mt-[1px] row19281" variant="body2">
                  Pop Bug Fix
                </Text>
                <Text className="test_1322020_Two" variant="body2">
                  13/2/2020
                </Text>
                <Text className="mb-[1px] test_14220203" variant="body2">
                  14/2/2020
                </Text>
                <Text className="mb-[1px] duration" variant="body2">
                  1 hours
                </Text>
                <Text
                  className="mb-[1px] lg:ml-[125px] xl:ml-[157px] 2xl:ml-[176px] 3xl:ml-[212px] row19281"
                  variant="body2"
                >
                  Dinesh Chugtai
                </Text>
              </Row>
            </Stack>
          </List>
        </Column>
      </Stack>
    </>
  );
};

export default DashboardSixPage;
