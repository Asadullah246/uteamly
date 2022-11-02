import React from "react";

import { Stack, Column, Row, Img, Text, List } from "components";
import Sidebar3 from "components/Sidebar/Sidebar3";

const ClockinTwoPage = () => {
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
            className="absolute bg-cover bg-repeat justify-end left-[0] lg:p-[32px] xl:p-[40px] 2xl:p-[45px] 3xl:p-[54px] top-[0] w-[30%]"
            style={{ backgroundImage: "url('images/img_group150.png')" }}
          >
            <Row className="items-center lg:ml-[24px] xl:ml-[30px] 2xl:ml-[33px] 3xl:ml-[40px] mr-[auto] xl:mt-[103px] 2xl:mt-[115px] 3xl:mt-[139px] lg:mt-[82px] w-[43%]">
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
        <Column className="absolute justify-start left-[5%] top-[20%] w-[82%]">
          <Text className="columnshiftstartend" as="h5" variant="h5">
            Shift Start/End time
          </Text>
          <Row className="items-end lg:mt-[18px] xl:mt-[23px] 2xl:mt-[25px] 3xl:mt-[31px] w-[100%]">
            <Row className="font-poppins items-start lg:mb-[4px] 2xl:mb-[6px] xl:mb-[6px] 3xl:mb-[8px] w-[10%]">
              <Img
                src="images/img_todolist1.png"
                className="todolistOne"
                alt="todolistOne"
              />
              <Text className="rowtodolistone" as="h5" variant="h5">
                Bookings
              </Text>
            </Row>
            <Text
              className="font-nunito lg:ml-[136px] xl:ml-[170px] 2xl:ml-[191px] 3xl:ml-[229px] xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] StartDate1"
              as="h6"
              variant="h6"
            >
              Task Name
            </Text>
            <Text
              className="font-nunito xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] StartDate"
              as="h6"
              variant="h6"
            >
              Start Time
            </Text>
            <Text
              className="font-nunito 2xl:ml-[102px] 3xl:ml-[122px] lg:ml-[72px] xl:ml-[91px] xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] StartDate1"
              as="h6"
              variant="h6"
            >
              End Date
            </Text>
            <Text
              className="font-nunito 2xl:ml-[104px] 3xl:ml-[125px] lg:ml-[74px] xl:ml-[93px] xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] StartDate1"
              as="h6"
              variant="h6"
            >
              Over Time
            </Text>
            <Text
              className="font-nunito font-semibold lg:ml-[106px] xl:ml-[133px] 2xl:ml-[149px] 3xl:ml-[179px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] text-black_900 w-[auto]"
              as="h6"
              variant="h6"
            >
              Employee
            </Text>
          </Row>
        </Column>
        <Column className="absolute bottom-[0] font-nunito items-center justify-end right-[0] w-[68%]">
          <List
            className="gap-[0] min-h-[auto] w-[100%]"
            orientation="vertical"
          >
            <Row className="bg-white_A700 items-start 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[9px] xl:p-[12px] 2xl:p-[13px] 3xl:p-[16px] lg:p-[9px] rounded-radius7 shadow-bs w-[100%]">
              <Text className="PopBugFix" variant="body2">
                Pop Bug Fix
              </Text>
              <Text className="time" variant="body2">
                10:00am
              </Text>
              <Text className="time_One" variant="body2">
                10:00pm
              </Text>
              <Text className="duration2" variant="body2">
                1 hours
              </Text>
              <Text className="DineshChugtai" variant="body2">
                Dinesh Chugtai
              </Text>
            </Row>
            <Row className="bg-white_A700 items-start 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[9px] xl:p-[12px] 2xl:p-[13px] 3xl:p-[16px] lg:p-[9px] rounded-radius7 shadow-bs w-[100%]">
              <Text className="PopBugFix" variant="body2">
                Pop Bug Fix
              </Text>
              <Text className="time" variant="body2">
                10:00am
              </Text>
              <Text className="time_One" variant="body2">
                10:00pm
              </Text>
              <Text className="duration2" variant="body2">
                1 hours
              </Text>
              <Text className="DineshChugtai" variant="body2">
                Dinesh Chugtai
              </Text>
            </Row>
            <Row className="bg-white_A700 items-start 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[9px] xl:p-[12px] 2xl:p-[13px] 3xl:p-[16px] lg:p-[9px] rounded-radius7 shadow-bs w-[100%]">
              <Text className="PopBugFix" variant="body2">
                Pop Bug Fix
              </Text>
              <Text className="time" variant="body2">
                10:00am
              </Text>
              <Text className="time_One" variant="body2">
                10:00pm
              </Text>
              <Text className="duration2" variant="body2">
                1 hours
              </Text>
              <Text className="DineshChugtai" variant="body2">
                Dinesh Chugtai
              </Text>
            </Row>
            <Row className="bg-white_A700 items-start 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[9px] xl:p-[12px] 2xl:p-[13px] 3xl:p-[16px] lg:p-[9px] rounded-radius7 shadow-bs w-[100%]">
              <Text className="PopBugFix" variant="body2">
                Pop Bug Fix
              </Text>
              <Text className="time" variant="body2">
                10:00am
              </Text>
              <Text className="time_One" variant="body2">
                10:00pm
              </Text>
              <Text className="duration2" variant="body2">
                1 hours
              </Text>
              <Text className="DineshChugtai" variant="body2">
                Dinesh Chugtai
              </Text>
            </Row>
            <Row className="bg-white_A700 items-start 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[9px] xl:p-[12px] 2xl:p-[13px] 3xl:p-[16px] lg:p-[9px] rounded-radius7 shadow-bs w-[100%]">
              <Text className="PopBugFix" variant="body2">
                Pop Bug Fix
              </Text>
              <Text className="time" variant="body2">
                10:00am
              </Text>
              <Text className="time_One" variant="body2">
                10:00pm
              </Text>
              <Text className="duration2" variant="body2">
                1 hours
              </Text>
              <Text className="DineshChugtai" variant="body2">
                Dinesh Chugtai
              </Text>
            </Row>
            <Row className="bg-white_A700 items-start 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[9px] xl:p-[12px] 2xl:p-[13px] 3xl:p-[16px] lg:p-[9px] rounded-radius7 shadow-bs w-[100%]">
              <Text className="PopBugFix" variant="body2">
                Pop Bug Fix
              </Text>
              <Text className="time" variant="body2">
                10:00am
              </Text>
              <Text className="time_One" variant="body2">
                10:00pm
              </Text>
              <Text className="duration2" variant="body2">
                1 hours
              </Text>
              <Text className="DineshChugtai" variant="body2">
                Dinesh Chugtai
              </Text>
            </Row>
            <Row className="bg-white_A700 items-start 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[9px] xl:p-[12px] 2xl:p-[13px] 3xl:p-[16px] lg:p-[9px] rounded-radius7 shadow-bs w-[100%]">
              <Text
                className="lg:mb-[5px] 2xl:mb-[7px] xl:mb-[7px] 3xl:mb-[9px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] row19281"
                variant="body2"
              >
                Pop Bug Fix
              </Text>
              <Text className="time_Six" variant="body2">
                10:00am
              </Text>
              <Text className="time_Six" variant="body2">
                10:00pm
              </Text>
              <Text
                className="3xl:mb-[10px] lg:mb-[6px] xl:mb-[8px] 2xl:mb-[9px] xl:ml-[104px] 2xl:ml-[117px] 3xl:ml-[140px] lg:ml-[83px] row192811"
                variant="body2"
              >
                1 hours
              </Text>
              <Text
                className="3xl:mb-[10px] lg:mb-[6px] xl:mb-[8px] 2xl:mb-[9px] lg:ml-[125px] xl:ml-[157px] 2xl:ml-[176px] 3xl:ml-[212px] row192811"
                variant="body2"
              >
                Dinesh Chugtai
              </Text>
            </Row>
            <Row className="bg-white_A700 items-start 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[9px] xl:p-[12px] 2xl:p-[13px] 3xl:p-[16px] lg:p-[9px] rounded-radius7 shadow-bs w-[100%]">
              <Text
                className="lg:mb-[5px] 2xl:mb-[7px] xl:mb-[7px] 3xl:mb-[9px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] row19281"
                variant="body2"
              >
                Pop Bug Fix
              </Text>
              <Text className="time_Six" variant="body2">
                10:00am
              </Text>
              <Text className="time_Six" variant="body2">
                10:00pm
              </Text>
              <Text
                className="3xl:mb-[10px] lg:mb-[6px] xl:mb-[8px] 2xl:mb-[9px] xl:ml-[104px] 2xl:ml-[117px] 3xl:ml-[140px] lg:ml-[83px] row192811"
                variant="body2"
              >
                1 hours
              </Text>
              <Text
                className="3xl:mb-[10px] lg:mb-[6px] xl:mb-[8px] 2xl:mb-[9px] lg:ml-[125px] xl:ml-[157px] 2xl:ml-[176px] 3xl:ml-[212px] row192811"
                variant="body2"
              >
                Dinesh Chugtai
              </Text>
            </Row>
          </List>
        </Column>
      </Stack>
    </>
  );
};

export default ClockinTwoPage;
