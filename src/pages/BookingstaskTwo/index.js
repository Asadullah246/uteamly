import React from "react";

import { Stack, Column, Row, Text, Img, Button, Line } from "components";
import Sidebar3 from "components/Sidebar/Sidebar3";
import Footer2 from "components/Footer/Footer2";
import { useNavigate } from "react-router-dom";

const BookingstaskTwoPage = () => {
  const navigate = useNavigate();

  function handleNavigate20() {
    navigate("/addnewtasktwo");
  }

  return (
    <>
      <Stack className="bg-white_A700 font-poppins lg:h-[576px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] mx-[auto] lg:pr-[56px] xl:pr-[70px] 2xl:pr-[78px] 3xl:pr-[94px] w-[100%]">
        <Column className="absolute items-center justify-start left-[0] w-[95%]">
          <Row className="items-start w-[100%]">
            <Sidebar3 className="w-[24%]" />
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
        <Column className="absolute justify-start left-[26%] top-[30%] w-[18%]">
          <Button
            className="common-pointer font-medium xl:text-[11px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[75%]"
            onClick={handleNavigate20}
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
        <Column className="absolute font-nunito justify-start right-[6%] top-[44%] w-[63%]">
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
        <Footer2 className="absolute bottom-[1%] font-nunito right-[0] w-[68%]" />
        <Line className="absolute bg-black_900_72 h-[0.5px] right-[0] top-[44%] w-[68%]" />
        <Column
          className="absolute bg-cover bg-repeat font-poppins justify-end left-[0] p-[4px] top-[0] w-[28%]"
          style={{ backgroundImage: "url('images/img_group363.png')" }}
        >
          <Column className="justify-start lg:ml-[52px] xl:ml-[66px] 2xl:ml-[74px] 3xl:ml-[89px] lg:mt-[106px] xl:mt-[133px] 2xl:mt-[149px] 3xl:mt-[179px] w-[34%]">
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
            <Row className="items-start lg:mt-[17px] xl:mt-[22px] 2xl:mt-[24px] 3xl:mt-[29px] w-[87%]">
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
    </>
  );
};

export default BookingstaskTwoPage;
