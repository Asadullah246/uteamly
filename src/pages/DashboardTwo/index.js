import React from "react";

import { Stack, Column, Row, Img, Text } from "components";
import Sidebar from "components/Sidebar/Sidebar";
import { useNavigate } from "react-router-dom";

const DashboardTwoPage = () => {
  const navigate = useNavigate();

  function handleNavigate286() {
    navigate("/users");
  }
  function handleNavigate291() {
    navigate("/settings");
  }

  return (
    <>
      <Stack className="bg-white_A700 font-poppins lg:h-[576px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] mx-[auto] lg:pr-[54px] xl:pr-[68px] 2xl:pr-[76px] 3xl:pr-[91px] w-[100%]">
        <Stack className="absolute lg:h-[576px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] left-[0] w-[95%]">
          <Stack className="absolute lg:h-[576px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] w-[100%]">
            <Column className="absolute items-center justify-start w-[100%]">
              <Row className="items-center justify-between w-[100%]">
                <Sidebar
                  className="w-[24%]"
                  onGroup3846Click={handleNavigate291}
                />
                <Column className="w-[72%]">
                  <Row className="items-end justify-between w-[100%]">
                    <Column className="bg-gray_200 justify-end mb-[1px] lg:mt-[4px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] lg:p-[12px] xl:p-[15px] 2xl:p-[16px] 3xl:p-[20px] rounded-radius5 w-[40%]">
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
                      className="lg:h-[47px] xl:h-[59px] 2xl:h-[66px] 3xl:h-[79px] rounded-radius50 lg:w-[46px] xl:w-[58px] 2xl:w-[65px] 3xl:w-[78px]"
                      alt="EllipseTwo"
                    />
                  </Row>
                  <div className="bg-white_A700 lg:h-[208px] xl:h-[261px] 2xl:h-[293px] 3xl:h-[352px] lg:mt-[32px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] rounded-radius8 shadow-bs3 w-[55%]"></div>
                  <div className="bg-white_A700 lg:h-[233px] xl:h-[292px] 2xl:h-[328px] 3xl:h-[394px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[21px] 3xl:mt-[25px] rounded-radius8 shadow-bs4 w-[100%]"></div>
                </Column>
              </Row>
            </Column>
            <Column
              className="absolute bg-cover bg-repeat justify-end left-[0] lg:p-[4px] 2xl:p-[5px] xl:p-[5px] 3xl:p-[6px] top-[0] w-[30%]"
              style={{ backgroundImage: "url('images/img_group82.png')" }}
            >
              <Column className="justify-start lg:ml-[53px] xl:ml-[67px] 2xl:ml-[75px] 3xl:ml-[90px] lg:mt-[105px] xl:mt-[132px] 2xl:mt-[148px] 3xl:mt-[178px] w-[35%]">
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
                  onClick={handleNavigate286}
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
          <Column
            className="absolute bg-cover bg-repeat font-inter lg:h-[435px] xl:h-[544px] 2xl:h-[612px] 3xl:h-[734px] justify-start left-[25%] lg:px-[42px] xl:px-[53px] 2xl:px-[59px] 3xl:px-[71px] top-[5%] lg:w-[434px] xl:w-[543px] 2xl:w-[611px] 3xl:w-[733px]"
            style={{ backgroundImage: "url('images/img_group81.png')" }}
          >
            <Column className="justify-start 3xl:mb-[102px] lg:mb-[60px] xl:mb-[76px] 2xl:mb-[85px] lg:mt-[54px] xl:mt-[68px] 2xl:mt-[76px] 3xl:mt-[91px] w-[45%]">
              <Text
                className="font-semibold lg:ml-[4px] 2xl:ml-[5px] xl:ml-[5px] 3xl:ml-[6px] text-blue_600 w-[auto]"
                as="h3"
                variant="h3"
              >
                Active Subscription
              </Text>
              <Text
                className="font-semibold lg:mt-[200px] xl:mt-[251px] 2xl:mt-[282px] 3xl:mt-[339px] text-blue_600 w-[auto]"
                as="h3"
                variant="h3"
              >
                Daily Views
              </Text>
            </Column>
          </Column>
        </Stack>
        <Column className="absolute bottom-[4%] font-inter justify-start right-[0] w-[67%]">
          <Column className="bg-white_A700 justify-start lg:ml-[393px] xl:ml-[492px] 2xl:ml-[553px] 3xl:ml-[664px] xl:p-[10px] 2xl:p-[11px] 3xl:p-[13px] lg:p-[8px] rounded-radius8 shadow-bs3 w-[43%]">
            <Text
              className="font-semibold xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] text-blue_600 w-[auto]"
              as="h3"
              variant="h3"
            >
              Current Users
            </Text>
            <Img
              src="images/img_untitled11.png"
              className="lg:h-[141px] xl:h-[177px] 2xl:h-[199px] 3xl:h-[238px] lg:my-[12px] xl:my-[16px] 2xl:my-[18px] 3xl:my-[21px] w-[98%]"
              alt="UntitledEleven"
            />
          </Column>
          <Img
            src="images/img_graph21.png"
            className="lg:h-[177px] xl:h-[222px] 2xl:h-[249px] 3xl:h-[299px] lg:mr-[21px] xl:mr-[27px] 2xl:mr-[30px] 3xl:mr-[36px] 3xl:mt-[101px] lg:mt-[60px] xl:mt-[75px] 2xl:mt-[84px] w-[97%]"
            alt="graphTwentyOne"
          />
        </Column>
      </Stack>
    </>
  );
};

export default DashboardTwoPage;
