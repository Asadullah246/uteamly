import React from "react";

import { Stack, Column, Row, Img, Text, List } from "components";
import Sidebar3 from "components/Sidebar/Sidebar3";

const UpdatesPage = () => {
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
            className="absolute bg-cover bg-repeat justify-end left-[0] lg:p-[32px] xl:p-[41px] 2xl:p-[46px] 3xl:p-[55px] top-[0] w-[30%]"
            style={{ backgroundImage: "url('images/img_group234.png')" }}
          >
            <Row className="items-center lg:ml-[23px] xl:ml-[29px] 2xl:ml-[32px] 3xl:ml-[39px] mr-[auto] xl:mt-[101px] 2xl:mt-[113px] 3xl:mt-[136px] lg:mt-[80px] w-[43%]">
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
        <Text
          className="absolute font-semibold left-[26%] text-blue_600 top-[20%] w-[auto]"
          as="h5"
          variant="h5"
        >
          <span className="text-blue_600 font-poppins lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px]">
            Latest Notofications{" "}
          </span>
          <span className="text-black_900_82 font-poppins font-medium lg:text-[12px] xl:text-[15px] 2xl:text-[16px] 3xl:text-[20px]">
            (2)
          </span>
        </Text>
        <List
          className="absolute bottom-[1%] font-nunito gap-[0] min-h-[auto] right-[0] w-[68%]"
          orientation="vertical"
        >
          <Column className="updates">
            <Row className="bg-white_A700 items-center lg:p-[14px] xl:p-[18px] 2xl:p-[20px] 3xl:p-[24px] rounded-radius7 shadow-bs w-[100%]">
              <Img
                src="images/img_bellring1.png"
                className="bellringOne"
                alt="bellringOne"
              />
              <Column className="lg:ml-[12px] xl:ml-[15px] 2xl:ml-[16px] 3xl:ml-[20px] mt-[4px] w-[17%]">
                <Text className="UpdateofMRS" as="h6" variant="h6">
                  Update of MR. Stark
                </Text>
                <Text className="row192811" variant="body2">
                  Thearapy is going great !
                </Text>
              </Column>
              <Img
                src="images/img_arrowdownsign.png"
                className="arrowdownsign1"
                alt="arrowdownsign"
              />
            </Row>
            <Row className="bg-white_A700 items-center lg:mt-[11px] xl:mt-[14px] 2xl:mt-[15px] 3xl:mt-[18px] lg:p-[14px] xl:p-[18px] 2xl:p-[20px] 3xl:p-[24px] rounded-radius7 shadow-bs w-[100%]">
              <Img
                src="images/img_bellring1.png"
                className="bellringOne"
                alt="bellringOne One"
              />
              <Column className="lg:ml-[12px] xl:ml-[15px] 2xl:ml-[16px] 3xl:ml-[20px] mt-[4px] w-[17%]">
                <Text className="UpdateofMRS" as="h6" variant="h6">
                  Update of MR. Stark
                </Text>
                <Text className="row192811" variant="body2">
                  Thearapy is going great !
                </Text>
              </Column>
              <Img
                src="images/img_arrowdownsign.png"
                className="arrowdownsign1"
                alt="arrowdownsign One"
              />
            </Row>
          </Column>
          <Column className="updates">
            <Row className="bg-white_A700 items-center lg:p-[14px] xl:p-[18px] 2xl:p-[20px] 3xl:p-[24px] rounded-radius7 shadow-bs w-[100%]">
              <Img
                src="images/img_bellring1.png"
                className="bellringOne"
                alt="bellringOne One"
              />
              <Column className="lg:ml-[12px] xl:ml-[15px] 2xl:ml-[16px] 3xl:ml-[20px] mt-[4px] w-[17%]">
                <Text className="UpdateofMRS" as="h6" variant="h6">
                  Update of MR. Stark
                </Text>
                <Text className="row192811" variant="body2">
                  Thearapy is going great !
                </Text>
              </Column>
              <Img
                src="images/img_arrowdownsign.png"
                className="arrowdownsign1"
                alt="arrowdownsign One"
              />
            </Row>
            <Row className="bg-white_A700 items-center lg:mt-[11px] xl:mt-[14px] 2xl:mt-[15px] 3xl:mt-[18px] lg:p-[14px] xl:p-[18px] 2xl:p-[20px] 3xl:p-[24px] rounded-radius7 shadow-bs w-[100%]">
              <Img
                src="images/img_bellring1.png"
                className="bellringOne"
                alt="bellringOne One One"
              />
              <Column className="lg:ml-[12px] xl:ml-[15px] 2xl:ml-[16px] 3xl:ml-[20px] mt-[4px] w-[17%]">
                <Text className="UpdateofMRS" as="h6" variant="h6">
                  Update of MR. Stark
                </Text>
                <Text className="row192811" variant="body2">
                  Thearapy is going great !
                </Text>
              </Column>
              <Img
                src="images/img_arrowdownsign.png"
                className="arrowdownsign1"
                alt="arrowdownsign One One"
              />
            </Row>
          </Column>
          <Column className="items-center justify-end lg:my-[5px] 2xl:my-[7px] xl:my-[7px] 3xl:my-[9px] w-[100%]">
            <Row className="bg-white_A700 items-center lg:p-[14px] xl:p-[18px] 2xl:p-[20px] 3xl:p-[24px] rounded-radius7 shadow-bs w-[100%]">
              <Img
                src="images/img_bellring1.png"
                className="bellringOne"
                alt="bellringOne Two"
              />
              <Column className="lg:ml-[12px] xl:ml-[15px] 2xl:ml-[16px] 3xl:ml-[20px] mt-[4px] w-[17%]">
                <Text className="UpdateofMRS" as="h6" variant="h6">
                  Update of MR. Stark
                </Text>
                <Text className="row192811" variant="body2">
                  Thearapy is going great !
                </Text>
              </Column>
              <Img
                src="images/img_arrowdownsign.png"
                className="arrowdownsign1"
                alt="arrowdownsign Two"
              />
            </Row>
            <Row className="bg-white_A700 items-center lg:mt-[11px] xl:mt-[14px] 2xl:mt-[15px] 3xl:mt-[18px] lg:p-[14px] xl:p-[18px] 2xl:p-[20px] 3xl:p-[24px] rounded-radius7 shadow-bs w-[100%]">
              <Img
                src="images/img_bellring1.png"
                className="bellringOne"
                alt="bellringOne One Two"
              />
              <Column className="lg:mb-[5px] 2xl:mb-[7px] xl:mb-[7px] 3xl:mb-[9px] lg:ml-[12px] xl:ml-[15px] 2xl:ml-[16px] 3xl:ml-[20px] mt-[4px] w-[17%]">
                <Text className="UpdateofMRS" as="h6" variant="h6">
                  Update of MR. Stark
                </Text>
                <Text className="Manager_One" variant="body2">
                  Thearapy is going great !
                </Text>
              </Column>
              <Img
                src="images/img_arrowdownsign.png"
                className="arrowdownsign1"
                alt="arrowdownsign One Two"
              />
            </Row>
          </Column>
        </List>
        <Row className="absolute font-poppins items-start justify-center left-[5%] top-[26%] w-[8%]">
          <Img
            src="images/img_todolist1.png"
            className="todolistOne"
            alt="todolistOne"
          />
          <Text className="rowtodolistone" as="h5" variant="h5">
            Bookings
          </Text>
        </Row>
      </Stack>
    </>
  );
};

export default UpdatesPage;
