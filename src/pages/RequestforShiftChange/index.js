import React from "react";

import { Stack, Column, Row, Img, Text, Button, Input } from "components";
import Sidebar7 from "components/Sidebar/Sidebar7";
import Footer7 from "components/Footer/Footer7";

const RequestforShiftChangePage = () => {
  return (
    <>
      <Stack className="bg-white_A700 font-poppins lg:h-[576px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] mx-[auto] w-[100%]">
        <Stack className="absolute lg:h-[576px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] left-[0] w-[95%]">
          <Column className="absolute items-center justify-start w-[100%]">
            <Row className="items-start w-[100%]">
              <Sidebar7 className="w-[24%]" />
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
            className="absolute bg-cover bg-repeat justify-end left-[0] p-[4px] top-[0] w-[30%]"
            style={{ backgroundImage: "url('images/img_group123.png')" }}
          >
            <Row className="items-center lg:ml-[56px] xl:ml-[70px] 2xl:ml-[78px] 3xl:ml-[94px] mr-[auto] lg:mt-[140px] xl:mt-[175px] 2xl:mt-[197px] 3xl:mt-[236px] w-[30%]">
              <Img
                src="images/img_calendar31.png"
                className="dashboardFive"
                alt="calendarThirtyOne"
              />
              <Text className="rowchecklist" as="h5" variant="h5">
                Calender
              </Text>
            </Row>
          </Column>
        </Stack>
        <Row className="absolute inset-x-[0] items-start justify-center mx-[auto] top-[19%] w-[44%]">
          <Column className="justify-start w-[58%]">
            <Text
              className="font-semibold text-blue_600 w-[auto]"
              as="h5"
              variant="h5"
            >
              Calender
            </Text>
            <Column className="items-center justify-start lg:mt-[20px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[33px] w-[100%]">
              <Column className="bg-white_A700 justify-start lg:p-[5px] 2xl:p-[7px] xl:p-[7px] 3xl:p-[9px] rounded-radius10 shadow-bs w-[100%]">
                <Row className="items-center justify-end ml-[auto] w-[18%]">
                  <Button
                    className="flex lg:h-[21px] xl:h-[27px] 2xl:h-[30px] 3xl:h-[36px] items-center justify-center lg:w-[20px] xl:w-[26px] 2xl:w-[29px] 3xl:w-[35px]"
                    shape="icbRoundedBorder4"
                    size="smIcn"
                    variant="icbFillCyan900"
                  >
                    <Img
                      src="images/img_group3854.png"
                      className="flex items-center justify-center lg:h-[11px] xl:h-[14px] 2xl:h-[15px] 3xl:h-[18px]"
                      alt="Group3854"
                    />
                  </Button>
                  <Button
                    className="flex lg:h-[21px] xl:h-[27px] 2xl:h-[30px] 3xl:h-[36px] items-center justify-center lg:ml-[4px] 2xl:ml-[5px] xl:ml-[5px] 3xl:ml-[6px] lg:w-[20px] xl:w-[26px] 2xl:w-[29px] 3xl:w-[35px]"
                    shape="icbRoundedBorder4"
                    size="smIcn"
                    variant="icbFillCyan900"
                  >
                    <Img
                      src="images/img_group3855.png"
                      className="flex items-center justify-center lg:h-[11px] xl:h-[14px] 2xl:h-[15px] 3xl:h-[18px]"
                      alt="Group3855"
                    />
                  </Button>
                </Row>
                <Stack className="lg:h-[162px] xl:h-[203px] 2xl:h-[228px] 3xl:h-[273px] 2xl:mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[9px] lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] 3xl:mt-[6px] mx-[auto] w-[93%]">
                  <div className="absolute border-blue_600 border-bw3 border-solid right-[3%] rounded-radius50 top-[25%] googleOne"></div>
                  <Img
                    src="images/img_calender1.png"
                    className="CalenderOne"
                    alt="CalenderOne"
                  />
                </Stack>
              </Column>
            </Column>
            <Text className="columncalendarthirtyone" as="h5" variant="h5">
              1 jan Tasks
            </Text>
          </Column>
          <Column className="justify-start lg:ml-[24px] xl:ml-[30px] 2xl:ml-[33px] 3xl:ml-[40px] mt-[2px] w-[36%]">
            <Column className="justify-start w-[100%]">
              <Column className="justify-start rounded-radius4 w-[86%]">
                <Text
                  className="font-semibold text-blue_600 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Request for Absentee
                </Text>
                <Button
                  className="font-medium lg:mt-[17px] xl:mt-[22px] 2xl:mt-[24px] 3xl:mt-[29px] xl:text-[11px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[77%]"
                  shape="RoundedBorder4"
                  size="lg"
                  variant="FillCyan900"
                >
                  Request
                </Button>
              </Column>
              <Column className="justify-start lg:mt-[26px] xl:mt-[33px] 2xl:mt-[37px] 3xl:mt-[44px] rounded-radius4 w-[100%]">
                <Text
                  className="font-semibold text-blue_600 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Request for Shift Change
                </Text>
                <Button
                  className="font-medium lg:mt-[17px] xl:mt-[22px] 2xl:mt-[24px] 3xl:mt-[29px] xl:text-[11px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[66%]"
                  shape="RoundedBorder4"
                  size="lg"
                  variant="FillCyan900"
                >
                  Request
                </Button>
              </Column>
            </Column>
            <Column className="justify-start lg:mt-[26px] xl:mt-[33px] 2xl:mt-[37px] 3xl:mt-[44px] rounded-radius4 w-[86%]">
              <Text
                className="font-semibold text-blue_600 w-[auto]"
                as="h5"
                variant="h5"
              >
                Request for New Task
              </Text>
              <Button
                className="font-medium lg:mt-[17px] xl:mt-[22px] 2xl:mt-[24px] 3xl:mt-[29px] xl:text-[11px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[77%]"
                shape="RoundedBorder4"
                size="lg"
                variant="FillCyan900"
              >
                Request
              </Button>
            </Column>
          </Column>
        </Row>
        <Footer7 className="absolute bottom-[2%] font-nunito right-[5%] w-[68%]" />
        <Column className="absolute bg-black_900_7f font-poppins items-center justify-start lg:p-[48px] xl:p-[60px] 2xl:p-[67px] 3xl:p-[81px] w-[100%]">
          <Column className="items-center justify-start lg:mb-[4px] 2xl:mb-[6px] xl:mb-[6px] 3xl:mb-[8px] w-[48%]">
            <Column className="bg-white_A700 items-center justify-end lg:p-[14px] xl:p-[18px] 2xl:p-[20px] 3xl:p-[24px] rounded-radius15 w-[100%]">
              <Text className="columnaddnewbooking_one" as="h4" variant="h4">
                Request For Shift Change
              </Text>
              <Column className="items-center justify-start lg:mt-[24px] xl:mt-[31px] 2xl:mt-[34px] 3xl:mt-[41px] w-[66%]">
                <Input
                  className="placeholder:text-black_900_99 GroupThree"
                  wrapClassName="w-[100%]"
                  type="text"
                  name="language"
                  placeholder=" Name"
                ></Input>
                <Input
                  className="placeholder:text-black_900_99 GroupThree"
                  wrapClassName="2xl:mt-[20px] 3xl:mt-[24px] lg:mt-[14px] w-[100%] xl:mt-[18px]"
                  name="GroupOne"
                  placeholder="Date"
                ></Input>
                <Input
                  className="placeholder:text-black_900_99 GroupThree"
                  wrapClassName="2xl:mt-[21px] 3xl:mt-[25px] lg:mt-[15px] w-[100%] xl:mt-[19px]"
                  type="number"
                  name="GroupOne One"
                  placeholder="Shift Number"
                ></Input>
                <Column className="border-black_900_b2 border-bw05 border-solid justify-start lg:mt-[13px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[22px] lg:p-[16px] xl:p-[21px] 2xl:p-[23px] 3xl:p-[28px] rounded-radius7 w-[100%]">
                  <Text className="columnreason" variant="body1">
                    Reason
                  </Text>
                </Column>
                <Button
                  className="font-semibold lg:mt-[24px] xl:mt-[31px] 2xl:mt-[34px] 3xl:mt-[41px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[100%]"
                  shape="CircleBorder26"
                  size="xl"
                  variant="FillCyan900"
                >
                  Request
                </Button>
              </Column>
            </Column>
          </Column>
        </Column>
      </Stack>
    </>
  );
};

export default RequestforShiftChangePage;
