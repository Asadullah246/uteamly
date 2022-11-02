import React from "react";

import { Stack, Column, Row, Text, Img, Line } from "components";
import Sidebar5 from "components/Sidebar/Sidebar5";
import Footer9 from "components/Footer/Footer9";

const EmployeePage = () => {
  return (
    <>
      <Stack className="bg-white_A700 font-poppins lg:h-[576px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] mx-[auto] lg:pr-[56px] xl:pr-[70px] 2xl:pr-[78px] 3xl:pr-[94px] w-[100%]">
        <Column className="absolute items-center justify-start left-[0] w-[95%]">
          <Row className="items-start w-[100%]">
            <Sidebar5 className="w-[24%]" />
            <Text className="rowgroup38461" as="h4" variant="h4">
              Employees
            </Text>
            <Column className="items-end justify-start lg:ml-[427px] xl:ml-[534px] 2xl:ml-[601px] 3xl:ml-[721px] lg:mt-[29px] xl:mt-[37px] 2xl:mt-[41px] 3xl:mt-[49px] w-[20%]">
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
        <Column className="absolute justify-start right-[0] top-[40%] w-[68%]">
          <Text className="columnusers_one" as="h5" variant="h5">
            Employees
          </Text>
          <Line className="bg-black_900_72 h-[0.5px] xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] w-[100%]" />
        </Column>
        <Column className="absolute font-nunito justify-start right-[9%] top-[44%] w-[59%]">
          <Line className="bg-blue_600 h-[2px] w-[13%]" />
          <Row className="items-center lg:ml-[10px] xl:ml-[13px] 2xl:ml-[14px] 3xl:ml-[17px] lg:mt-[13px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[22px] w-[98%]">
            <Text className="ID" as="h6" variant="h6">
              ID
            </Text>
            <Text className="Name2" as="h6" variant="h6">
              Name
            </Text>
            <Text className="Role" as="h6" variant="h6">
              Role
            </Text>
            <Text className="PhoneNo1" as="h6" variant="h6">
              Phone No.
            </Text>
            <Text className="Email" as="h6" variant="h6">
              Email
            </Text>
          </Row>
        </Column>
        <Footer9 className="absolute bottom-[0] font-nunito right-[0] w-[68%]" />
        <Column className="absolute font-poppins items-center justify-start left-[29%] top-[32%] w-[8%]">
          <Text className="text-white_A700 w-[auto]" variant="body4">
            Add New Employee
          </Text>
        </Column>
        <Column className="absolute bg-cyan_900 font-poppins items-center justify-end left-[26%] xl:p-[10px] 2xl:p-[11px] 3xl:p-[13px] lg:p-[8px] rounded-radius4 top-[30%] w-[13%]">
          <Row className="items-start justify-center mt-[1px] w-[61%]">
            <Img
              src="images/img_printing1.png"
              className="printingOne"
              alt="printingOne"
            />
            <Text className="rowprintingone" variant="body4">
              Print Details
            </Text>
          </Row>
        </Column>
        <Column
          className="absolute bg-cover bg-repeat font-poppins justify-end left-[0] p-[2px] top-[0] w-[28%]"
          style={{ backgroundImage: "url('images/img_group268.png')" }}
        >
          <Column className="justify-start lg:ml-[53px] xl:ml-[67px] 2xl:ml-[75px] 3xl:ml-[90px] lg:mt-[109px] xl:mt-[137px] 2xl:mt-[154px] 3xl:mt-[185px] w-[35%]">
            <Row className="items-center ml-[2px] w-[98%]">
              <Img
                src="images/img_dashboard5.png"
                className="dashboardFive"
                alt="dashboardFive"
              />
              <Text className="rowdashboardfive" as="h5" variant="h5">
                Dashboard
              </Text>
            </Row>
            <Row className="items-start lg:mt-[17px] xl:mt-[22px] 2xl:mt-[24px] 3xl:mt-[29px] w-[85%]">
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

export default EmployeePage;
