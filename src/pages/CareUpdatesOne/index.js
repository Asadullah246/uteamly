import React from "react";

import { Row, Stack, Column, Img, Text } from "components";
import Sidebar8 from "components/Sidebar/Sidebar8";
import { useNavigate } from "react-router-dom";

const CareUpdatesOnePage = () => {
  const navigate = useNavigate();

  function handleNavigate14() {
    navigate("/careupdates");
  }

  return (
    <>
      <Row className="bg-white_A700 font-poppins items-start mx-[auto] lg:pr-[56px] xl:pr-[70px] 2xl:pr-[78px] 3xl:pr-[94px] w-[100%]">
        <Stack className="lg:h-[576px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] w-[92%]">
          <Stack className="absolute lg:h-[576px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] left-[0] w-[62%]">
            <Column className="absolute items-center justify-start w-[100%]">
              <Row className="items-start justify-between w-[100%]">
                <Sidebar8 className="w-[42%]" />
                <Column className="bg-gray_200 justify-end lg:mt-[34px] xl:mt-[43px] 2xl:mt-[48px] 3xl:mt-[58px] lg:p-[12px] xl:p-[15px] 2xl:p-[16px] 3xl:p-[20px] rounded-radius5 w-[51%]">
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
              </Row>
            </Column>
            <Column
              className="absolute bg-cover bg-repeat justify-end left-[0] lg:p-[4px] 2xl:p-[6px] xl:p-[6px] 3xl:p-[8px] top-[0] w-[53%]"
              style={{ backgroundImage: "url('images/img_group371.png')" }}
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
                <Row className="items-center lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] py-[2px] w-[89%]">
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
          <Text
            className="absolute font-normal leading-[normal] not-italic right-[0] text-black_900_a0 top-[25%] w-[70%]"
            as="h4"
            variant="h4"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </Text>
          <Row className="absolute inset-x-[0] items-start justify-center mx-[auto] top-[18%] w-[36%]">
            <Img
              src="images/img_arrow1.png"
              className="common-pointer lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] mb-[1px] lg:w-[19px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[32px]"
              onClick={handleNavigate14}
              alt="arrowOne"
            />
            <Text
              className="lg:ml-[14px] xl:ml-[18px] 2xl:ml-[20px] 3xl:ml-[24px] mt-[2px] text-blue_600 w-[auto]"
              as="h2"
              variant="h2"
            >
              MR.Stark Update on 20 NOV,2022
            </Text>
          </Row>
        </Stack>
        <Img
          src="images/img_ellipse2.png"
          className="lg:h-[47px] xl:h-[59px] 2xl:h-[66px] 3xl:h-[79px] lg:ml-[30px] xl:ml-[38px] 2xl:ml-[42px] 3xl:ml-[51px] lg:mt-[29px] xl:mt-[37px] 2xl:mt-[41px] 3xl:mt-[49px] rounded-radius50 lg:w-[46px] xl:w-[58px] 2xl:w-[65px] 3xl:w-[78px]"
          alt="EllipseTwo"
        />
      </Row>
    </>
  );
};

export default CareUpdatesOnePage;
