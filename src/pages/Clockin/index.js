import React from "react";

import { Stack, Column, Row, Img, Text, Button } from "components";
import Sidebar4 from "components/Sidebar/Sidebar4";
import { useNavigate } from "react-router-dom";

const ClockinPage = () => {
  const navigate = useNavigate();

  function handleNavigate329() {
    navigate("/clockinesign");
  }

  return (
    <>
      <Stack className="bg-white_A700 font-poppins lg:h-[576px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] mx-[auto] lg:pr-[56px] xl:pr-[70px] 2xl:pr-[78px] 3xl:pr-[94px] w-[100%]">
        <Stack className="absolute lg:h-[576px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] left-[0] w-[95%]">
          <Column className="absolute items-center justify-start w-[100%]">
            <Row className="items-start w-[100%]">
              <Sidebar4 className="w-[24%]" />
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
            className="absolute bg-cover bg-repeat justify-end left-[0] lg:p-[32px] xl:p-[41px] 2xl:p-[46px] 3xl:p-[55px] top-[0] w-[30%]"
            style={{ backgroundImage: "url('images/img_group17.png')" }}
          >
            <Row className="items-center lg:ml-[24px] xl:ml-[31px] 2xl:ml-[34px] 3xl:ml-[41px] mr-[auto] xl:mt-[101px] 2xl:mt-[113px] 3xl:mt-[136px] lg:mt-[80px] w-[43%]">
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
        <Column className="absolute justify-start left-[5%] top-[19%] w-[83%]">
          <Text
            className="lg:ml-[212px] xl:ml-[266px] 2xl:ml-[299px] 3xl:ml-[359px] text-blue_600 w-[auto]"
            as="h2"
            variant="h2"
          >
            Hi Dinesh, Let’s start the day{" "}
          </Text>
          <Row className="items-start lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[83%]">
            <Row className="font-poppins items-start w-[12%]">
              <Img
                src="images/img_todolist1.png"
                className="todolistOne"
                alt="todolistOne"
              />
              <Text className="rowtodolistone" as="h5" variant="h5">
                Bookings
              </Text>
            </Row>
            <Row className="items-center justify-center lg:ml-[128px] xl:ml-[160px] 2xl:ml-[180px] 3xl:ml-[216px] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[24%]">
              <Text className="rowtime" variant="body2">
                10:00 AM
              </Text>
              <Button
                className="font-medium font-poppins lg:ml-[13px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[22px] xl:text-[11px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[64%]"
                shape="RoundedBorder4"
                size="lg"
                variant="FillCyan900"
              >
                Start Day
              </Button>
            </Row>
            <Text
              className="lg:ml-[24px] xl:ml-[30px] 2xl:ml-[33px] 3xl:ml-[40px] lg:mt-[21px] xl:mt-[27px] 2xl:mt-[30px] 3xl:mt-[36px] rowtime"
              variant="body2"
            >
              10:00 PM
            </Text>
            <Button
              className="common-pointer font-medium font-poppins lg:ml-[14px] xl:ml-[18px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] xl:text-[11px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[15%]"
              onClick={handleNavigate329}
              shape="RoundedBorder4"
              size="lg"
              variant="OutlineCyan900"
            >
              End Day
            </Button>
            <Column className="bg-cyan_900 font-poppins items-center justify-end lg:ml-[32px] xl:ml-[40px] 2xl:ml-[45px] 3xl:ml-[54px] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:p-[10px] xl:p-[13px] 2xl:p-[14px] 3xl:p-[17px] rounded-radius4 w-[15%]">
              <Row className="items-start justify-center mt-[1px] w-[70%]">
                <Img
                  src="images/img_notes1.png"
                  className="xl:h-[12px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] mt-[1px] xl:w-[11px] 2xl:w-[12px] 3xl:w-[14px] lg:w-[8px]"
                  alt="notesOne"
                />
                <Text
                  className="mb-[1px] lg:ml-[4px] 2xl:ml-[6px] xl:ml-[6px] 3xl:ml-[8px] text-white_A700 w-[auto]"
                  variant="body4"
                >
                  Add Notes
                </Text>
              </Row>
            </Column>
          </Row>
          <Text
            className="lg:mt-[33px] xl:mt-[42px] 2xl:mt-[47px] 3xl:mt-[56px] columnshiftstartend"
            as="h5"
            variant="h5"
          >
            Upcoming Shifts
          </Text>
          <Row className="font-nunito items-start justify-end ml-[auto] lg:mt-[24px] xl:mt-[30px] 2xl:mt-[33px] 3xl:mt-[40px] w-[74%]">
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
        <footer className="absolute bottom-[0] font-nunito right-[0] w-[68%]">
          <Column className="items-center justify-start w-[100%]">
            <Row className="bg-white_A700 items-center xl:p-[12px] 2xl:p-[13px] 3xl:p-[16px] lg:p-[9px] rounded-radius7 shadow-bs w-[100%]">
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
            <Row className="bg-white_A700 items-center lg:mt-[14px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] xl:p-[12px] 2xl:p-[13px] 3xl:p-[16px] lg:p-[9px] rounded-radius7 shadow-bs w-[100%]">
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
            <Row className="bg-white_A700 items-center lg:mt-[14px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] xl:p-[12px] 2xl:p-[13px] 3xl:p-[16px] lg:p-[9px] rounded-radius7 shadow-bs w-[100%]">
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
            <Row className="bg-white_A700 items-center lg:mt-[14px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] xl:p-[12px] 2xl:p-[13px] 3xl:p-[16px] lg:p-[9px] rounded-radius7 shadow-bs w-[100%]">
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
            <Stack className="lg:h-[33px] xl:h-[42px] 2xl:h-[47px] 3xl:h-[56px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] rounded-radius7 w-[100%]">
              <div className="absolute bg-white_A700 bottom-[0] lg:h-[49px] xl:h-[62px] 2xl:h-[69px] 3xl:h-[83px] rounded-radius7 shadow-bs w-[100%]"></div>
              <Row className="absolute bottom-[0] items-start left-[1%] w-[91%]">
                <Text className="mt-[2px] row19281" variant="body2">
                  Pop Bug Fix
                </Text>
                <Text className="mt-[1px] test_1322020" variant="body2">
                  13/2/2020
                </Text>
                <Text className="mt-[1px] test_14220203" variant="body2">
                  14/2/2020
                </Text>
                <Text className="duration" variant="body2">
                  1 hours
                </Text>
                <Text
                  className="lg:ml-[125px] xl:ml-[157px] 2xl:ml-[176px] 3xl:ml-[212px] my-[1px] row19281"
                  variant="body2"
                >
                  Dinesh Chugtai
                </Text>
              </Row>
            </Stack>
          </Column>
        </footer>
      </Stack>
    </>
  );
};

export default ClockinPage;
