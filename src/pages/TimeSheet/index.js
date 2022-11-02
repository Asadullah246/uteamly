import React from "react";

import { Stack, Row, Img, Text, Column, Line } from "components";
import Sidebar6 from "components/Sidebar/Sidebar6";
import Footer4 from "components/Footer/Footer4";
import { useNavigate } from "react-router-dom";

const TimeSheetPage = () => {
  const navigate = useNavigate();

  function handleNavigate241() {
    navigate("/timesheetpaidhours");
  }

  return (
    <>
      <Stack className="bg-white_A700 font-nunito lg:h-[576px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] mx-[auto] lg:pr-[56px] xl:pr-[70px] 2xl:pr-[78px] 3xl:pr-[94px] w-[100%]">
        <Row className="absolute bg-bluegray_100_42 items-center lg:px-[11px] xl:px-[14px] 2xl:px-[15px] 3xl:px-[18px] right-[0] rounded-radius5 shadow-bs2 top-[33%] w-[68%]">
          <Stack className="bg-cyan_900 lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] px-[3px] rounded-radius50 shadow-bs2 lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
            <Img
              src="images/img_downarrow1.png"
              className="downarrowOne"
              alt="downarrowOne"
            />
          </Stack>
          <Text className="MARTwelve" variant="body2">
            MAR
            <br />
            12
          </Text>
          <Text className="MARThirteen" variant="body2">
            MAR
            <br />
            13
          </Text>
          <Text className="MARThirteen" variant="body2">
            MAR
            <br />
            14
          </Text>
          <Column className="bg-blue_600 lg:h-[46px] xl:h-[58px] 2xl:h-[65px] 3xl:h-[77px] items-center lg:ml-[47px] xl:ml-[59px] 2xl:ml-[66px] 3xl:ml-[79px] xl:px-[12px] 2xl:px-[13px] 3xl:px-[16px] lg:px-[9px] lg:w-[45px] xl:w-[57px] 2xl:w-[64px] 3xl:w-[76px]">
            <Text className="columnmarfifteen" variant="body1">
              MAR
              <br />
              15
            </Text>
          </Column>
          <Text className="MARSixteen" variant="body2">
            MAR
            <br />
            16
          </Text>
          <Text className="MARThirteen" variant="body2">
            MAR
            <br />
            17
          </Text>
          <Text className="MARThirteen" variant="body2">
            MAR
            <br />
            18
          </Text>
          <Text className="MARThirteen" variant="body2">
            MAR
            <br />
            19
          </Text>
          <Stack className="bg-cyan_900 lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] lg:ml-[22px] xl:ml-[28px] 2xl:ml-[31px] 3xl:ml-[37px] px-[3px] rotate-[180deg] rounded-radius50 shadow-bs2 lg:w-[16px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]">
            <Img
              src="images/img_downarrow1.png"
              className="downarrowOne_One"
              alt="downarrowOne One"
            />
          </Stack>
        </Row>
        <Stack className="absolute font-poppins lg:h-[576px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] left-[0] w-[95%]">
          <Column className="absolute items-center justify-start w-[100%]">
            <Row className="items-start w-[100%]">
              <Sidebar6 className="w-[24%]" />
              <Column className="justify-start lg:ml-[40px] xl:ml-[51px] 2xl:ml-[57px] 3xl:ml-[68px] lg:mt-[111px] xl:mt-[139px] 2xl:mt-[156px] 3xl:mt-[187px] w-[8%]">
                <Text
                  className="font-semibold text-blue_600 w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Time Sheet
                </Text>
                <Text className="columntodaystask" as="h5" variant="h5">
                  Work Hours
                </Text>
              </Column>
              <Img
                src="images/img_ellipse2.png"
                className="lg:h-[47px] xl:h-[59px] 2xl:h-[66px] 3xl:h-[79px] lg:ml-[571px] xl:ml-[714px] 2xl:ml-[803px] 3xl:ml-[964px] lg:mt-[29px] xl:mt-[37px] 2xl:mt-[41px] 3xl:mt-[49px] rounded-radius50 lg:w-[46px] xl:w-[58px] 2xl:w-[65px] 3xl:w-[78px]"
                alt="EllipseTwo"
              />
            </Row>
          </Column>
          <Text
            className="common-pointer PaidHours"
            as="h5"
            variant="h5"
            onClick={handleNavigate241}
          >
            Paid Hours
          </Text>
          <Column className="absolute font-nunito justify-start right-[6%] top-[31%] w-[67%]">
            <Line className="bg-blue_600 h-[2px] w-[14%]" />
            <Row className="items-start xl:ml-[12px] 2xl:ml-[13px] 3xl:ml-[16px] lg:ml-[9px] xl:mt-[111px] 2xl:mt-[124px] 3xl:mt-[149px] lg:mt-[88px] w-[98%]">
              <Text className="TaskName" as="h6" variant="h6">
                Task Name
              </Text>
              <Text className="StartDate" as="h6" variant="h6">
                Start Time
              </Text>
              <Text className="EndTime" as="h6" variant="h6">
                End Time
              </Text>
              <Text className="OverTime" as="h6" variant="h6">
                Over Time
              </Text>
              <Text className="Assignedto" as="h6" variant="h6">
                Assigned by
              </Text>
            </Row>
          </Column>
          <Line className="absolute bg-black_900_72 h-[0.5px] right-[0] top-[31%] w-[72%]" />
          <Column
            className="absolute bg-cover bg-repeat font-poppins justify-end left-[0] p-[4px] top-[0] w-[30%]"
            style={{ backgroundImage: "url('images/img_group127.png')" }}
          >
            <Column className="justify-start lg:ml-[54px] xl:ml-[68px] 2xl:ml-[76px] 3xl:ml-[91px] lg:mt-[106px] xl:mt-[133px] 2xl:mt-[149px] 3xl:mt-[179px] w-[34%]">
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
          <Footer4 className="absolute bottom-[0] font-nunito right-[0] w-[72%]" />
        </Stack>
      </Stack>
    </>
  );
};

export default TimeSheetPage;
