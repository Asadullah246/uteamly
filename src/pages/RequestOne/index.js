import React from "react";

import { Stack, Column, Row, Text, Img, Button, Line } from "components";
import Sidebar2 from "components/Sidebar/Sidebar2";
import Footer3 from "components/Footer/Footer3";
import { useNavigate } from "react-router-dom";
import Sidebar1 from "components/Sidebar/Sidebar1";

const RequestOnePage = () => {
  const navigate = useNavigate();

  function handleNavigate27() {
    navigate("/activitiesone");
  }
  function navigateTask() {
    navigate("/taskstwo");
  }
  function handleNavigate31() {
    navigate("/addnewtaskone");
  }

  return (
    <>
      <Stack className="bg-white_A700 font-poppins lg:h-[576px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] mx-[auto] lg:pr-[56px] xl:pr-[70px] 2xl:pr-[78px] 3xl:pr-[94px] w-[100%]">
        <Column className="absolute items-center justify-start left-[0] w-[95%]">
          <Row className="items-start justify-between w-[100%]">
            <Sidebar1
              className="w-[24%]"
              onrowchecklistClick={handleNavigate27}
            />
            <Column className="justify-start lg:mt-[29px] xl:mt-[37px] 2xl:mt-[41px] 3xl:mt-[49px] w-[72%]">
              <div className="flex justify-end lg:mt-[29px] xl:mt-[37px] 2xl:mt-[41px] 3xl:mt-[49px] ">
                <Img
                  src="images/img_ellipse2.png"
                  className="lg:h-[47px] xl:h-[59px] 2xl:h-[66px] 3xl:h-[79px] rounded-radius50 lg:w-[46px] xl:w-[58px] 2xl:w-[65px] 3xl:w-[78px]"
                  alt="EllipseTwo"
                />

              </div>

              <Row className="justify-between items-center mt-6 mb-6">
                <Text className="text-blue-500" as="h4" variant="h4">
                  Tasks
                </Text>

                <Column className="bg-gray_200 justify-end lg:p-[12px] xl:p-[15px] 2xl:p-[16px] 3xl:p-[20px] rounded-radius5 w-[40%]">
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

              <Column className=" justify-start w-[20%] mt-4">
                <Button
                  className="common-pointer font-medium xl:text-[11px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[75%]"
                  // onClick={handleNavigate48}
                  shape="RoundedBorder4"
                  size="lg"
                  variant="FillCyan900"
                >
                  Add New Task
                </Button>


              </Column>
              <div className="relative w-[100]">
                <Row className="relative items-start justify-start lg:mt-[24px] xl:mt-[30px] 2xl:mt-[33px] 3xl:mt-[40px] w-[100%]">
                  <Text
                    className=" w-[auto] mr-[110px] common-pointer"
                    as="h5"
                    variant="h5"
                    onClick={navigateTask}
                  >
                    Tasks
                  </Text>
                  <Text className=" common-pointer font-semibold ! text-blue_600" as="h5" variant="h5"

                  >
                    Request
                  </Text>
                  <Line className="absolute bg-black_900_72 h-[0.5px] left-[0] bottom-[-3%] w-[100%]" />

                </Row>
                {/* <Line className="bg-blue_600 h-[2px] w-[6%]" /> */}
                <Line className="bg-blue_600 h-[2px] lg:ml-[114px] xl:ml-[143px] 2xl:ml-[160px] 3xl:ml-[193px] w-[8%]" />

              </div>
              {/* <Column className=" font-nunito justify-start right-[6%] top-[44%] w-[63%]">
               
                <Row className="items-start xl:ml-[12px] 2xl:ml-[13px] 3xl:ml-[16px] lg:ml-[9px] lg:mt-[13px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%] mb-3">
                  <Text className="TaskName whitespace-nowrap" as="h6" variant="h6">
                    Task Name
                  </Text>
                  <Text className="StartDate whitespace-nowrap" as="h6" variant="h6">
                    Start Date
                  </Text>
                  <Text className="DueDate whitespace-nowrap" as="h6" variant="h6">
                    Due Date
                  </Text>
                  <Text className="OverTime whitespace-nowrap" as="h6" variant="h6">
                    Over Time
                  </Text>
                  <Text className="Assignedto whitespace-nowrap" as="h6" variant="h6">
                    Assigned to
                  </Text>
                </Row>
              </Column> */}

              <Column className=" font-nunito justify-start w-[55%]">
                {/* <Line className="bg-blue_600 h-[2px] lg:ml-[114px] xl:ml-[143px] 2xl:ml-[160px] 3xl:ml-[193px] w-[14%]" /> */}
                <Row className="items-start    justify-between lg:mt-[13px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%]">
                  <Text className="TaskName mr-[110px] whitespace-nowrap" as="h6" variant="h6">
                    Task Name
                  </Text>
                  <Text className="StartDate1 mr-[110px] whitespace-nowrap" as="h6" variant="h6">
                    Start Date
                  </Text>
                  <Text className="TaskName mr-[100px] whitespace-nowrap" as="h6" variant="h6">
                    Due Date
                  </Text>
                  <Text className="StartDate1 mr-[90px] whitespace-nowrap" as="h6" variant="h6">
                    Over Time
                  </Text>
                  <Text className="Requestedby mr-[110px] whitespace-nowrap" as="h6" variant="h6">
                    Requested by
                  </Text>
                </Row>
              </Column>
              <Footer3 className="w-[100%]" />


            </Column>
            {/* <Text className="rowgroup3846" as="h4" variant="h4">
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
            </Column> */}
          </Row>
        </Column>
        {/* <Column className="absolute justify-start left-[26%] top-[30%] w-[18%]">
          <Button
            className="common-pointer font-medium xl:text-[11px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[74%]"
            onClick={handleNavigate31}
            shape="RoundedBorder4"
            size="lg"
            variant="FillCyan900"
          >
            Add New Task
          </Button>
          <Row className="items-start justify-between lg:mt-[24px] xl:mt-[30px] 2xl:mt-[33px] 3xl:mt-[40px] w-[100%]">
            <Text
              className="font-medium text-black_900_6d w-[auto]"
              as="h5"
              variant="h5"
            >
              Tasks
            </Text>
            <Text className="columntutorials_one" as="h5" variant="h5">
              Request
            </Text>
          </Row>
        </Column>
        <Column className="absolute font-nunito justify-start right-[13%] top-[44%] w-[55%]">
          <Line className="bg-blue_600 h-[2px] lg:ml-[114px] xl:ml-[143px] 2xl:ml-[160px] 3xl:ml-[193px] w-[14%]" />
          <Row className="items-start justify-between lg:mt-[13px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%]">
            <Text className="TaskName" as="h6" variant="h6">
              Task Name
            </Text>
            <Text className="StartDate1" as="h6" variant="h6">
              Start Date
            </Text>
            <Text className="TaskName" as="h6" variant="h6">
              Due Date
            </Text>
            <Text className="StartDate1" as="h6" variant="h6">
              Over Time
            </Text>
            <Text className="Requestedby" as="h6" variant="h6">
              Requested by
            </Text>
          </Row>
        </Column>
        <Line className="absolute bg-black_900_72 h-[0.5px] right-[0] top-[44%] w-[68%]" /> */}
        <Img
          src="images/img_whatsappimage22.png"
          className="WhatsAppImage"
          alt="WhatsAppImage"
        />
        
      </Stack>
    </>
  );
};

export default RequestOnePage;
