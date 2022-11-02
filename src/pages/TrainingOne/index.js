import React from "react";

import { Column, Row, Stack, Img, Text } from "components";
import Sidebar3 from "components/Sidebar/Sidebar3";

const TrainingOnePage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-poppins items-center justify-start mx-[auto] w-[100%]">
        <div className="overflow-x-auto w-[100%]">
          <Row className="items-center justify-between overflow-auto w-[100%]">
            <Stack className="lg:h-[576px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] w-[87%]">
              <Column className="absolute items-center justify-start left-[0] w-[61%]">
                <Row className="items-start justify-between w-[100%]">
                  <Sidebar3 className="w-[42%]" />
                  <Column className="justify-start lg:mt-[35px] xl:mt-[44px] 2xl:mt-[49px] 3xl:mt-[59px] w-[51%]">
                    <Column className="bg-gray_200 justify-end lg:p-[12px] xl:p-[15px] 2xl:p-[16px] 3xl:p-[20px] rounded-radius5 w-[100%]">
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
                    <Text className="columnellipsetwo1" as="h5" variant="h5">
                      Training
                    </Text>
                  </Column>
                </Row>
              </Column>
              <Column
                className="absolute bg-cover bg-repeat items-center justify-start right-[4%] rounded-radius12 top-[25%] w-[50%]"
                style={{ backgroundImage: "url('images/img_group327.png')" }}
              >
                <Stack className="bg-black_900_6b lg:h-[232px] xl:h-[291px] 2xl:h-[327px] 3xl:h-[392px] lg:px-[100px] xl:px-[126px] 2xl:px-[141px] 3xl:px-[170px] rounded-radius12 w-[100%]">
                  <Img
                    src="images/img_playbutton2.png"
                    className="playbuttonTwo"
                    alt="playbuttonTwo"
                  />
                </Stack>
              </Column>
              <Column
                className="absolute bg-cover bg-repeat bottom-[8%] items-center justify-start left-[30%] rounded-radius6 w-[22%]"
                style={{ backgroundImage: "url('images/img_group328.png')" }}
              >
                <div className="bg-black_900_63 Rectangle1285"></div>
              </Column>
              <Column
                className="absolute bg-cover bg-repeat bottom-[8%] items-center justify-start right-[0] rounded-radius6 w-[22%]"
                style={{ backgroundImage: "url('images/img_group328.png')" }}
              >
                <div className="bg-black_900_63 Rectangle1285"></div>
              </Column>
              <Column
                className="absolute bg-cover bg-repeat bottom-[8%] items-center justify-start right-[24%] rounded-radius6 w-[22%]"
                style={{ backgroundImage: "url('images/img_group328.png')" }}
              >
                <div className="bg-black_900_63 Rectangle1285"></div>
              </Column>
              <Column
                className="absolute bg-cover bg-repeat justify-end left-[0] p-[2px] top-[0] w-[32%]"
                style={{ backgroundImage: "url('images/img_group243.png')" }}
              >
                <Column className="justify-start lg:ml-[54px] xl:ml-[68px] 2xl:ml-[76px] 3xl:ml-[91px] lg:mt-[108px] xl:mt-[136px] 2xl:mt-[153px] 3xl:mt-[183px] w-[34%]">
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
            <Column className="w-[19%]">
              <Img
                src="images/img_ellipse2.png"
                className="lg:h-[47px] xl:h-[59px] 2xl:h-[66px] 3xl:h-[79px] ml-[4px] rounded-radius50 lg:w-[46px] xl:w-[58px] 2xl:w-[65px] 3xl:w-[78px]"
                alt="EllipseTwo"
              />
              <Column
                className="bg-cover bg-repeat items-center justify-start lg:mt-[330px] xl:mt-[413px] 2xl:mt-[464px] 3xl:mt-[557px] rounded-radius6 w-[100%]"
                style={{ backgroundImage: "url('images/img_group247.png')" }}
              >
                <Img
                  src="images/img_rectangle1285_158X241.png"
                  className="Rectangle1285"
                  alt="Rectangle1285"
                />
              </Column>
            </Column>
          </Row>
        </div>
      </Column>
    </>
  );
};

export default TrainingOnePage;
