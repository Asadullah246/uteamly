import React from "react";

import { Stack, Column, Row, Img, Text, List, Button, Line } from "components";
import Sidebar8 from "components/Sidebar/Sidebar8";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useNavigate } from "react-router-dom";

const DashboardFourPage = () => {
  const navigate = useNavigate();

  function handleNavigate167() {
    navigate("/calender");
  }
  function handleNavigate173() {
    navigate("/settingsnotificationone");
  }

  return (
    <>
      <Stack className="bg-white_A700 font-poppins lg:h-[576px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] mx-[auto] lg:pr-[55px] xl:pr-[69px] 2xl:pr-[77px] 3xl:pr-[93px] w-[100%]">
        <Stack className="absolute lg:h-[576px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] left-[0] w-[95%]">
          <Column className="absolute items-center justify-start w-[100%]">
            <Row className="items-start w-[100%]">
              <Sidebar8
                className="w-[24%]"
                onGroup3846Click={handleNavigate173}
              />
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
            className="absolute bg-cover bg-repeat justify-end left-[0] lg:p-[4px] 2xl:p-[6px] xl:p-[6px] 3xl:p-[8px] top-[0] w-[30%]"
            style={{ backgroundImage: "url('images/img_group200.png')" }}
          >
            <Column className="justify-start lg:ml-[52px] xl:ml-[66px] 2xl:ml-[74px] 3xl:ml-[89px] lg:mt-[101px] xl:mt-[127px] 2xl:mt-[142px] 3xl:mt-[171px] w-[35%]">
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
                className="common-pointer items-center lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] py-[2px] w-[89%]"
                onClick={handleNavigate167}
              >
                <Img
                  src="images/img_calendar31.png"
                  className="dashboardFive"
                  alt="calendarThirtyOne"
                />
                <Column className="items-center lg:ml-[10px] xl:ml-[13px] 2xl:ml-[14px] 3xl:ml-[17px] w-[69%]">
                  <Text
                    className="font-medium text-white_A700 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Calender
                  </Text>
                </Column>
              </Row>
            </Column>
          </Column>
        </Stack>
        <Column className="absolute justify-start left-[26%] top-[19%] w-[20%]">
          <Text className="text-blue_600 w-[auto]" as="h2" variant="h2">
            Welcome Back, DInesh
          </Text>
          <Text
            className="font-semibold lg:mt-[40px] xl:mt-[51px] 2xl:mt-[57px] 3xl:mt-[68px] text-blue_600 w-[auto]"
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
        </Column>
        <List
          className="absolute font-nunito gap-[0] min-h-[auto] right-[0] top-[35%] w-[68%]"
          orientation="vertical"
        >
          <Row className="listbellringone">
            <Img
              src="images/img_bellring1.png"
              className="bellringOne"
              alt="bellringOne"
            />
            <Column className="lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] my-[3px] w-[35%]">
              <Text
                className="font-medium text-black_900 w-[auto]"
                as="h6"
                variant="h6"
              >
                Network Lag bug Task has been Completed
              </Text>
              <Text className="Youcancheckt" variant="body2">
                You can check the details of the Task.
              </Text>
            </Column>
            <Img
              src="images/img_arrowdownsign.png"
              className="arrowdownsign"
              alt="arrowdownsign"
            />
          </Row>
          <Row className="listbellringone">
            <Img
              src="images/img_bellring1.png"
              className="bellringOne"
              alt="bellringOne One"
            />
            <Column className="lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] my-[3px] w-[35%]">
              <Text
                className="font-medium text-black_900 w-[auto]"
                as="h6"
                variant="h6"
              >
                Network Lag bug Task has been Completed
              </Text>
              <Text className="Youcancheckt" variant="body2">
                You can check the details of the Task.
              </Text>
            </Column>
            <Img
              src="images/img_arrowdownsign.png"
              className="arrowdownsign"
              alt="arrowdownsign One"
            />
          </Row>
        </List>
        <Column className="absolute bg-white_A700 bottom-[2%] font-poppins items-center justify-end lg:py-[5px] 2xl:py-[7px] xl:py-[7px] 3xl:py-[9px] right-[0] rounded-radius11 shadow-bs3 w-[38%]">
          <Column className="items-center justify-start xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
            <Row className="items-center justify-between w-[95%]">
              <Text
                className="font-semibold text-blue_600 w-[auto]"
                as="h5"
                variant="h5"
              >
                Employe List
              </Text>
              <Button
                className="font-medium xl:text-[11px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[23%]"
                shape="RoundedBorder4"
                size="md"
                variant="FillCyan900"
              >
                View All
              </Button>
            </Row>
            <List
              className="gap-[0] min-h-[auto] lg:mt-[16px] xl:mt-[21px] 2xl:mt-[23px] 3xl:mt-[28px] w-[100%]"
              orientation="vertical"
            >
              <Column className="listellipsethree">
                <Column className="items-center justify-start w-[100%]">
                  <Row className="items-center justify-between w-[95%]">
                    <Img
                      src="images/img_ellipse3.png"
                      className="lg:h-[35px] xl:h-[44px] 2xl:h-[49px] 3xl:h-[59px] rounded-radius50 lg:w-[34px] xl:w-[43px] 2xl:w-[48px] 3xl:w-[58px]"
                      alt="EllipseThree"
                    />
                    <Text className="text-black_900 w-[auto]" variant="body4">
                      Minerva Bannet
                    </Text>
                    <Text className="text-black_900 w-[auto]" variant="body4">
                      9182
                    </Text>
                    <Text className="text-blue_600 w-[auto]" variant="body4">
                      Edit
                    </Text>
                    <Text className="text-blue_600 w-[auto]" variant="body4">
                      View
                    </Text>
                  </Row>
                  <Line className="bg-black_900_30 h-[0.5px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]" />
                </Column>
              </Column>
              <Column className="listellipsethree">
                <Column className="items-center justify-start w-[100%]">
                  <Row className="items-center justify-between w-[95%]">
                    <Img
                      src="images/img_ellipse3_43X43.png"
                      className="lg:h-[35px] xl:h-[44px] 2xl:h-[49px] 3xl:h-[59px] rounded-radius50 lg:w-[34px] xl:w-[43px] 2xl:w-[48px] 3xl:w-[58px]"
                      alt="EllipseThree One"
                    />
                    <Text className="text-black_900 w-[auto]" variant="body4">
                      Minerva Bannet
                    </Text>
                    <Text className="text-black_900 w-[auto]" variant="body4">
                      9182
                    </Text>
                    <Text className="text-blue_600 w-[auto]" variant="body4">
                      Edit
                    </Text>
                    <Text className="text-blue_600 w-[auto]" variant="body4">
                      View
                    </Text>
                  </Row>
                  <Line className="bg-black_900_30 h-[0.5px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]" />
                </Column>
              </Column>
              <Column className="items-center justify-end lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] w-[100%]">
                <Column className="items-center justify-end w-[100%]">
                  <Row className="items-center justify-between w-[95%]">
                    <Img
                      src="images/img_ellipse3_1.png"
                      className="lg:h-[35px] xl:h-[44px] 2xl:h-[49px] 3xl:h-[59px] rounded-radius50 lg:w-[34px] xl:w-[43px] 2xl:w-[48px] 3xl:w-[58px]"
                      alt="EllipseThree Two"
                    />
                    <Text className="text-black_900 w-[auto]" variant="body4">
                      Minerva Bannet
                    </Text>
                    <Text className="text-black_900 w-[auto]" variant="body4">
                      9182
                    </Text>
                    <Text className="text-blue_600 w-[auto]" variant="body4">
                      Edit
                    </Text>
                    <Text className="text-blue_600 w-[auto]" variant="body4">
                      View
                    </Text>
                  </Row>
                  <Line className="bg-black_900_30 h-[0.5px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]" />
                </Column>
              </Column>
            </List>
          </Column>
        </Column>
        <Column className="absolute bg-white_A700 bottom-[2%] font-poppins items-center justify-start left-[26%] lg:p-[18px] xl:p-[23px] 2xl:p-[25px] 3xl:p-[31px] rounded-radius11 shadow-bs3 w-[26%]">
          <Text
            className="font-semibold text-blue_600 w-[auto]"
            as="h5"
            variant="h5"
          >
            AI Bug Fix Progress
          </Text>
          <Stack className="lg:h-[118px] xl:h-[148px] 2xl:h-[166px] 3xl:h-[199px] lg:mb-[4px] 2xl:mb-[6px] xl:mb-[6px] 3xl:mb-[8px] lg:mt-[17px] xl:mt-[22px] 2xl:mt-[24px] 3xl:mt-[29px] lg:w-[117px] xl:w-[147px] 2xl:w-[165px] 3xl:w-[198px]">
            <Text
              className="absolute font-bold h-[max-content] inset-[0] justify-center m-[auto] text-blue_600 w-[max-content]"
              as="h3"
              variant="h3"
            >
              75%
            </Text>
            <CircularProgressbar
              className="absolute border-solid lg:h-[118px] xl:h-[148px] 2xl:h-[166px] 3xl:h-[199px] overflow-visible w-[100%]"
              value="80"
              name="Group196"
              strokeWidth={7}
              styles={{
                trail: { strokeWidth: 50, stroke: "" },
                path: {
                  strokeLinecap: "square",
                  height: "100%",
                  "transform-origin": "center",
                  transform: "rotate(90deg)",
                },
              }}
            ></CircularProgressbar>
          </Stack>
        </Column>
      </Stack>
    </>
  );
};

export default DashboardFourPage;
