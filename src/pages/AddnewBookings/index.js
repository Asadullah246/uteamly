import React from "react";

import { Stack, Column, Row, Button, Img, Text, Line, Input } from "components";
import Footer2 from "components/Footer/Footer2";
import { useNavigate } from "react-router-dom";

const AddnewBookingsPage = () => {
  const navigate = useNavigate();

  function handleNavigate100() {
    navigate("/employee");
  }

  return (
    <>
      <Stack className="bg-white_A700 font-poppins lg:h-[576px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] mx-[auto] w-[100%]">
        <Column className="absolute items-center justify-start left-[0] w-[95%]">
          <Row className="items-start w-[100%]">
            <aside className="w-[24%]">
              <div className="">
                <Column className="bg-cyan_900 justify-end lg:p-[19px] xl:p-[24px] 2xl:p-[27px] 3xl:p-[32px] w-[100%]">
                  <Button
                    className="flex lg:h-[31px] xl:h-[39px] 2xl:h-[43px] 3xl:h-[52px] items-center justify-center lg:ml-[36px] xl:ml-[45px] 2xl:ml-[50px] 3xl:ml-[60px] lg:mt-[507px] xl:mt-[634px] 2xl:mt-[713px] 3xl:mt-[856px] lg:w-[30px] xl:w-[38px] 2xl:w-[42px] 3xl:w-[51px]"
                    shape="icbRoundedBorder4"
                    size="mdIcn"
                    variant="icbFillBluegray10042"
                  >
                    <Img
                      src="images/img_group3846.png"
                      className="flex items-center justify-center lg:h-[16px] xl:h-[21px] 2xl:h-[23px] 3xl:h-[28px]"
                      alt="Group3846"
                    />
                  </Button>
                </Column>
              </div>
            </aside>
            <Text className="rowgroup3846" as="h4" variant="h4">
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
            </Column>
          </Row>
        </Column>
        <Column className="absolute justify-start left-[26%] top-[30%] w-[13%]">
          <Column className="bg-cyan_900 items-center justify-end xl:p-[11px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] rounded-radius4 w-[100%]">
            <Text className="mt-[2px] text-white_A700 w-[auto]" variant="body4">
              Add New Booking
            </Text>
          </Column>
          <Text className="columnbookings" as="h5" variant="h5">
            Bookings
          </Text>
        </Column>
        <Column className="absolute font-nunito justify-start right-[11%] top-[44%] w-[63%]">
          <Line className="bg-blue_600 h-[2px] w-[13%]" />
          <Row className="items-start xl:ml-[12px] 2xl:ml-[13px] 3xl:ml-[16px] lg:ml-[9px] lg:mt-[13px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[22px] w-[98%]">
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
        <Footer2 className="absolute bottom-[1%] font-nunito right-[5%] w-[68%]" />
        <Line className="absolute bg-black_900_72 h-[0.5px] right-[5%] top-[44%] w-[68%]" />
        <Img
          src="images/img_whatsappimage_17.png"
          className="WhatsAppImage4"
          alt="WhatsAppImage"
        />
        <Column className="absolute bg-black_900_68 font-poppins justify-start lg:p-[47px] xl:p-[59px] 2xl:p-[66px] 3xl:p-[79px] w-[100%]">
          <Column className="items-center justify-start mb-[2px] xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[73%]">
            <Row className="items-start justify-between w-[100%]">
              <Column className="justify-start 3xl:mt-[105px] lg:mt-[62px] xl:mt-[78px] 2xl:mt-[87px] w-[15%]">
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
                <Row
                  className="common-pointer items-start ml-[2px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] w-[90%]"
                  onClick={handleNavigate100}
                >
                  <Img
                    src="images/img_employee1.png"
                    className="todolistOne"
                    alt="employeeOne"
                  />
                  <Text className="rowemployeeone1" as="h5" variant="h5">
                    Employee
                  </Text>
                </Row>
                <Row className="items-start ml-[2px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] w-[85%]">
                  <Img
                    src="images/img_email51.png"
                    className="todolistOne"
                    alt="emailFiftyOne"
                  />
                  <Text className="rowemailfiftyone" as="h5" variant="h5">
                    Message
                  </Text>
                </Row>
                <Row className="items-start lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] w-[95%]">
                  <Img
                    src="images/img_googledocs1.png"
                    className="dashboardFive"
                    alt="googledocsOne"
                  />
                  <Text className="rowgoogledocsone" as="h5" variant="h5">
                    Document
                  </Text>
                </Row>
              </Column>
              <Column className="bg-white_A700 items-center justify-end lg:p-[20px] xl:p-[26px] 2xl:p-[29px] 3xl:p-[35px] rounded-radius15 w-[65%]">
                <Text className="columnaddnewbooking_one" as="h4" variant="h4">
                  Add New Booking
                </Text>
                <Column className="items-center justify-start lg:mt-[24px] xl:mt-[31px] 2xl:mt-[34px] 3xl:mt-[41px] w-[68%]">
                  <Input
                    className="placeholder:text-black_900_99 GroupThree"
                    wrapClassName="w-[100%]"
                    type="text"
                    name="GroupThree"
                    placeholder="Task Name"
                  ></Input>
                  <Input
                    className="placeholder:text-black_900_99 GroupThree"
                    wrapClassName="2xl:mt-[20px] 3xl:mt-[24px] lg:mt-[14px] w-[100%] xl:mt-[18px]"
                    name="GroupOne"
                    placeholder="Project"
                  ></Input>
                  <Input
                    className="placeholder:text-black_900_99 GroupThree"
                    wrapClassName="2xl:mt-[20px] 3xl:mt-[24px] lg:mt-[14px] w-[100%] xl:mt-[18px]"
                    name="Group3786"
                    placeholder="Start Date"
                  ></Input>
                  <Input
                    className="placeholder:text-black_900_99 GroupThree"
                    wrapClassName="2xl:mt-[20px] 3xl:mt-[24px] lg:mt-[14px] w-[100%] xl:mt-[18px]"
                    name="Group3787"
                    placeholder="End Date"
                  ></Input>
                  <Input
                    className="placeholder:text-black_900_99 GroupThree"
                    wrapClassName="2xl:mt-[20px] 3xl:mt-[24px] lg:mt-[14px] w-[100%] xl:mt-[18px]"
                    name="Group3788"
                    placeholder="Over Time"
                  ></Input>
                  <Input
                    className="placeholder:text-black_900_99 GroupThree"
                    wrapClassName="2xl:mt-[20px] 3xl:mt-[24px] lg:mt-[14px] w-[100%] xl:mt-[18px]"
                    name="Group3789"
                    placeholder="Assign to"
                  ></Input>
                  <Button
                    className="font-semibold lg:mt-[16px] xl:mt-[21px] 2xl:mt-[23px] 3xl:mt-[28px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[100%]"
                    shape="CircleBorder26"
                    size="xl"
                    variant="FillCyan900"
                  >
                    Create{" "}
                  </Button>
                </Column>
              </Column>
            </Row>
          </Column>
        </Column>
      </Stack>
    </>
  );
};

export default AddnewBookingsPage;
