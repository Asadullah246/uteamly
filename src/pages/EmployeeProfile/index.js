import React from "react";

import { Stack, Column, Row, Img, Text } from "components";
import Sidebar5 from "components/Sidebar/Sidebar5";
import { useNavigate } from "react-router-dom";

const EmployeeProfilePage = () => {
  const navigate = useNavigate();

  function handleNavigate88() {
    navigate("/employee");
  }

  return (
    <>
      <Stack className="bg-white_A700 font-poppins lg:h-[576px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] mx-[auto] lg:pr-[56px] xl:pr-[70px] 2xl:pr-[78px] 3xl:pr-[94px] w-[100%]">
        <Stack className="absolute lg:h-[576px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] left-[0] w-[95%]">
          <Column className="absolute items-center justify-start w-[100%]">
            <Row className="items-start w-[100%]">
              <Sidebar5 className="w-[24%]" />
              <Row
                className="common-pointer items-start justify-center lg:ml-[40px] xl:ml-[51px] 2xl:ml-[57px] 3xl:ml-[68px] lg:mt-[112px] xl:mt-[140px] 2xl:mt-[157px] 3xl:mt-[189px] w-[11%]"
                onClick={handleNavigate88}
              >
                <Img
                  src="images/img_arrow1.png"
                  className="printingOne"
                  alt="arrowOne"
                />
                <Text
                  className="lg:ml-[14px] xl:ml-[18px] 2xl:ml-[20px] 3xl:ml-[24px] GeneralSetting1"
                  as="h4"
                  variant="h4"
                >
                  Employees
                </Text>
              </Row>
              <Column className="items-end justify-start lg:ml-[399px] xl:ml-[499px] 2xl:ml-[561px] 3xl:ml-[674px] lg:mt-[29px] xl:mt-[37px] 2xl:mt-[41px] 3xl:mt-[49px] w-[20%]">
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
          <Column className="absolute bottom-[27%] inset-x-[0] justify-start mx-[auto] w-[41%]">
            <Column className="justify-start lg:ml-[212px] xl:ml-[265px] 2xl:ml-[298px] 3xl:ml-[357px] w-[47%]">
              <Row className="items-center w-[100%]">
                <Text
                  className="font-normal mt-[1px] not-italic text-black_900_b2 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Name :
                </Text>
                <Text
                  className="font-medium mb-[1px] lg:ml-[46px] xl:ml-[58px] 2xl:ml-[65px] 3xl:ml-[78px] text-black_900 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Elizabeth Olsen
                </Text>
              </Row>
              <Row className="items-start lg:mt-[20px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[33px] w-[67%]">
                <Text
                  className="font-normal mt-[1px] not-italic text-black_900_b2 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Age :
                </Text>
                <Text
                  className="font-medium 3xl:ml-[101px] lg:ml-[60px] xl:ml-[75px] 2xl:ml-[84px] text-black_900 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  23yrs
                </Text>
              </Row>
              <Row className="items-center lg:mt-[16px] xl:mt-[21px] 2xl:mt-[23px] 3xl:mt-[28px] w-[63%]">
                <Text
                  className="font-normal not-italic text-black_900_b2 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Experiance :
                </Text>
                <Text
                  className="font-medium lg:ml-[16px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] text-black_900 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  3yrs
                </Text>
              </Row>
              <Text
                className="font-normal lg:mt-[15px] xl:mt-[19px] 2xl:mt-[21px] 3xl:mt-[25px] not-italic text-black_900_b2 w-[auto]"
                as="h5"
                variant="h5"
              >
                Bio :
              </Text>
            </Column>
            <Text
              className="font-semibold lg:mr-[177px] xl:mr-[222px] 2xl:mr-[249px] 3xl:mr-[299px] lg:mt-[101px] xl:mt-[127px] 2xl:mt-[142px] 3xl:mt-[171px] text-blue_600 w-[auto]"
              as="h4"
              variant="h4"
            >
              Task Compeleted Successfully{" "}
            </Text>
          </Column>
          <Column
            className="absolute bg-cover bg-repeat justify-end left-[0] lg:p-[34px] xl:p-[43px] 2xl:p-[48px] 3xl:p-[58px] top-[0] w-[30%]"
            style={{ backgroundImage: "url('images/img_group287.png')" }}
          >
            <Row className="items-center lg:ml-[22px] xl:ml-[28px] 2xl:ml-[31px] 3xl:ml-[37px] mr-[auto] 2xl:mt-[111px] 3xl:mt-[133px] lg:mt-[79px] xl:mt-[99px] w-[44%]">
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
        <Column className="absolute bottom-[20%] justify-start right-[1%] w-[67%]">
          <Row className="items-start w-[100%]">
            <Img
              src="images/img_rectangle1309_214X214.png"
              className="lg:h-[172px] xl:h-[215px] 2xl:h-[241px] 3xl:h-[290px] rounded-radius6 lg:w-[171px] xl:w-[214px] 2xl:w-[240px] 3xl:w-[289px]"
              alt="Rectangle1309"
            />
            <Text
              className="font-normal leading-[normal] lg:ml-[132px] xl:ml-[166px] 2xl:ml-[186px] 3xl:ml-[224px] lg:mt-[104px] xl:mt-[130px] 2xl:mt-[146px] 3xl:mt-[175px] not-italic text-black_900 w-[56%]"
              variant="body1"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not
            </Text>
          </Row>
          <Row className="font-nunito items-start ml-[2px] xl:mt-[113px] 2xl:mt-[127px] 3xl:mt-[152px] lg:mt-[90px] w-[93%]">
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
        <Column className="absolute bottom-[0] font-nunito items-center justify-start right-[1%] w-[68%]">
          <Row className="bg-white_A700 items-center xl:p-[12px] 2xl:p-[13px] 3xl:p-[16px] lg:p-[9px] rounded-radius7 shadow-bs w-[100%]">
            <Text className="PopBugFix" variant="body2">
              Pop Bug Fix
            </Text>
            <Text className="test_1322020" variant="body2">
              13/2/2020
            </Text>
            <Text className="test_14220203" variant="body2">
              14/2/2020
            </Text>
            <Text className="duration" variant="body2">
              1 hours
            </Text>
            <Text className="DineshChugtai" variant="body2">
              Dinesh Chugtai
            </Text>
          </Row>
          <Stack className="lg:h-[36px] xl:h-[46px] 2xl:h-[51px] 3xl:h-[61px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] rounded-radius7 w-[100%]">
            <div className="absolute bg-white_A700 bottom-[0] lg:h-[49px] xl:h-[62px] 2xl:h-[69px] 3xl:h-[83px] rounded-radius7 shadow-bs w-[100%]"></div>
            <Row className="absolute bottom-[7%] items-start left-[1%] w-[91%]">
              <Text className="mt-[2px] row19281" variant="body2">
                Pop Bug Fix
              </Text>
              <Text className="mt-[1px] test_1322020" variant="body2">
                13/2/2020
              </Text>
              <Text className="mt-[1px] test_14220203" variant="body2">
                14/2/2020
              </Text>
              <Text className="duration" variant="body2">
                1 hours
              </Text>
              <Text
                className="lg:ml-[125px] xl:ml-[157px] 2xl:ml-[176px] 3xl:ml-[212px] my-[1px] row19281"
                variant="body2"
              >
                Dinesh Chugtai
              </Text>
            </Row>
          </Stack>
        </Column>
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

export default EmployeeProfilePage;
