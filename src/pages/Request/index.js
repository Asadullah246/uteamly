import React from "react";

import { Stack, Column, Row, Text, Img, Button, Line } from "components";
import Sidebar6 from "components/Sidebar/Sidebar6";
import Footer8 from "components/Footer/Footer8";

const RequestPage = () => {
  return (
    <>
      <Stack className="bg-white_A700 font-poppins lg:h-[576px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] mx-[auto] lg:pr-[56px] xl:pr-[70px] 2xl:pr-[78px] 3xl:pr-[94px] w-[100%]">
        <Stack className="absolute lg:h-[576px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] left-[0] w-[95%]">
          <Column className="absolute items-center justify-start w-[100%]">
            <Row className="items-start w-[100%]">
              <Sidebar6 className="w-[24%]" />
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
                    <Text className="rowsearcheleven1" variant="body1">
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
              className="font-medium xl:text-[11px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[74%]"
              shape="RoundedBorder4"
              size="lg"
              variant="FillCyan900"
            >
              Request New Task
            </Button>
            <Row className="items-start justify-between lg:mt-[24px] xl:mt-[30px] 2xl:mt-[33px] 3xl:mt-[40px] w-[100%]">
              <Text
                className="font-medium text-black_900_6d w-[auto]"
                as="h5"
                variant="h5"
              >
                Tasks
              </Text>
              <Text className="columntutorials_one" as="h5" variant="h5">
                Request
              </Text>
            </Row>
          </Column>
          <Column className="absolute font-nunito justify-start right-[14%] top-[44%] w-[58%]">
            <Line className="bg-blue_600 h-[2px] lg:ml-[114px] xl:ml-[143px] 2xl:ml-[160px] 3xl:ml-[193px] w-[14%]" />
            <Row className="items-start justify-between lg:mt-[13px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%]">
              <Text className="TaskName" as="h6" variant="h6">
                Task Name
              </Text>
              <Text className="StartDate1" as="h6" variant="h6">
                Start Date
              </Text>
              <Text className="TaskName" as="h6" variant="h6">
                Due Date
              </Text>
              <Text className="StartDate1" as="h6" variant="h6">
                Over Time
              </Text>
              <Text className="Requestedby" as="h6" variant="h6">
                Requested by
              </Text>
            </Row>
          </Column>
          <Line className="absolute bg-black_900_72 h-[0.5px] right-[0] top-[44%] w-[72%]" />
          <Column
            className="absolute bg-cover bg-repeat font-poppins justify-end left-[0] lg:p-[32px] xl:p-[41px] 2xl:p-[46px] 3xl:p-[55px] top-[0] w-[30%]"
            style={{ backgroundImage: "url('images/img_group93.png')" }}
          >
            <Row className="items-center lg:ml-[24px] xl:ml-[31px] 2xl:ml-[34px] 3xl:ml-[41px] mr-[auto] xl:mt-[103px] 2xl:mt-[115px] 3xl:mt-[139px] lg:mt-[82px] w-[43%]">
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
        <Footer8 className="absolute bottom-[1%] font-nunito right-[0] w-[68%]" />
        <Row className="absolute font-poppins items-center justify-center left-[6%] py-[2px] top-[26%] w-[8%]">
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
    </>
  );
};

export default RequestPage;
