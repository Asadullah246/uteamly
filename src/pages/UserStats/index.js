import React from "react";

import { Stack, Row, Column, Img, Text } from "components";
import Sidebar from "components/Sidebar/Sidebar";
import { useNavigate } from "react-router-dom";

const UserStatsPage = () => {
  const navigate = useNavigate();

  function handleNavigate293() {
    navigate("/users");
  }
  function handleNavigate301() {
    navigate("/settings");
  }

  return (
    <>
      <Stack className="bg-white_A700 font-poppins lg:h-[576px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] mx-[auto] lg:pr-[54px] xl:pr-[68px] 2xl:pr-[76px] 3xl:pr-[91px] w-[100%]">
        <Stack className="absolute lg:h-[576px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] left-[0] w-[95%]">
          <Row className="absolute items-start justify-between right-[0] w-[100%]">
            <Stack className="lg:h-[576px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] w-[30%]">
              <Sidebar
                className="absolute left-[0] w-[79%]"
                onGroup3846Click={handleNavigate301}
              />
              <Column
                className="absolute bg-cover bg-repeat justify-end lg:p-[4px] 2xl:p-[6px] xl:p-[6px] 3xl:p-[8px] top-[0] w-[100%]"
                style={{ backgroundImage: "url('images/img_group65.png')" }}
              >
                <Column className="justify-start lg:ml-[52px] xl:ml-[66px] 2xl:ml-[74px] 3xl:ml-[89px] lg:mt-[104px] xl:mt-[131px] 2xl:mt-[147px] 3xl:mt-[176px] w-[35%]">
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
                    className="common-pointer items-start lg:mt-[17px] xl:mt-[22px] 2xl:mt-[24px] 3xl:mt-[29px] w-[56%]"
                    onClick={handleNavigate293}
                  >
                    <Img
                      src="images/img_employee1.png"
                      className="dashboardFive"
                      alt="employeeOne"
                    />
                    <Text className="rowemployeeone" as="h5" variant="h5">
                      User
                    </Text>
                  </Row>
                </Column>
              </Column>
            </Stack>
            <Img
              src="images/img_ellipse2.png"
              className="lg:h-[47px] xl:h-[59px] 2xl:h-[66px] 3xl:h-[79px] lg:mt-[29px] xl:mt-[37px] 2xl:mt-[41px] 3xl:mt-[49px] rounded-radius50 lg:w-[46px] xl:w-[58px] 2xl:w-[65px] 3xl:w-[78px]"
              alt="EllipseTwo"
            />
          </Row>
          <Column className="absolute bg-white_A700 font-inter justify-end lg:p-[11px] xl:p-[14px] 2xl:p-[15px] 3xl:p-[18px] right-[0] rounded-radius8 shadow-bs4 top-[19%] w-[72%]">
            <Text className="mt-[2px] columnusers_one" as="h3" variant="h3">
              Daily Users
            </Text>
            <Img
              src="images/img_graph21.png"
              className="lg:h-[177px] xl:h-[222px] 2xl:h-[249px] 3xl:h-[299px] ml-[1px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[21px] 3xl:mt-[25px] w-[98%]"
              alt="graphTwentyOne"
            />
          </Column>
          <Column className="absolute bg-white_A700 bottom-[4%] font-nunito items-end justify-start left-[28%] lg:p-[17px] xl:p-[22px] 2xl:p-[24px] 3xl:p-[29px] rounded-radius8 shadow-bs3 w-[40%]">
            <Column className="justify-start 3xl:mb-[114px] lg:mb-[68px] xl:mb-[85px] 2xl:mb-[95px] 3xl:mr-[109px] lg:mr-[64px] xl:mr-[81px] 2xl:mr-[91px] w-[20%]">
              <Row className="items-start w-[79%]">
                <div className="bg-blue_601 xl:h-[11px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[8px] mt-[2px] rounded-radius50 xl:w-[10px] 2xl:w-[11px] 3xl:w-[13px] lg:w-[8px]"></div>
                <Text className="rowellipsefour" variant="body2">
                  Owners
                </Text>
              </Row>
              <Row className="items-start lg:mt-[10px] xl:mt-[13px] 2xl:mt-[14px] 3xl:mt-[17px] w-[99%]">
                <div className="bg-orange_400 xl:h-[11px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[8px] mt-[2px] rounded-radius50 xl:w-[10px] 2xl:w-[11px] 3xl:w-[13px] lg:w-[8px]"></div>
                <Text className="rowellipsefour" variant="body2">
                  Customers
                </Text>
              </Row>
              <Row className="items-start lg:mt-[11px] xl:mt-[14px] 2xl:mt-[15px] 3xl:mt-[18px] w-[100%]">
                <div className="bg-red_A700 xl:h-[11px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[8px] mt-[1px] rounded-radius50 xl:w-[10px] 2xl:w-[11px] 3xl:w-[13px] lg:w-[8px]"></div>
                <Text className="rowellipsefour" variant="body2">
                  Employees
                </Text>
              </Row>
              <Row className="items-start 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] w-[82%]">
                <div className="bg-teal_A400 xl:h-[11px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[8px] mt-[2px] rounded-radius50 xl:w-[10px] 2xl:w-[11px] 3xl:w-[13px] lg:w-[8px]"></div>
                <Text className="rowellipsefour" variant="body2">
                  Patients{" "}
                </Text>
              </Row>
              <Row className="items-start xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[93%]">
                <div className="bg-light_blue_900 xl:h-[11px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[8px] mt-[2px] rounded-radius50 xl:w-[10px] 2xl:w-[11px] 3xl:w-[13px] lg:w-[8px]"></div>
                <Text className="rowellipsefour" variant="body2">
                  New User
                </Text>
              </Row>
            </Column>
          </Column>
        </Stack>
        <Img
          src="images/img_chart011.png"
          className="absolute bottom-[0] lg:h-[240px] xl:h-[301px] 2xl:h-[338px] 3xl:h-[406px] left-[24%] lg:w-[240px] xl:w-[300px] 2xl:w-[337px] 3xl:w-[405px]"
          alt="chart011"
        />
      </Stack>
    </>
  );
};

export default UserStatsPage;
