import React from "react";

import { Stack, Column, Row, Img, Text, Button, Line, Input } from "components";
import Footer1 from "components/Footer/Footer1";
import { useNavigate } from "react-router-dom";

const AddNewTaskOnePage = () => {
  const navigate = useNavigate();

  function handleNavigate33() {
    navigate("/helpcentertwo");
  }
  function handleNavigate34() {
    navigate("/taskstwo");
  }
  function handleNavigate46() {
    navigate("/activitiesone");
  }

  return (
    <>
      <Stack className="bg-white_A700 font-poppins lg:h-[576px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] mx-[auto] w-[100%]">
        <Column className="absolute bottom-[0] items-center justify-end left-[0] w-[95%]">
          <Row className="items-start justify-between w-[100%]">
            <aside className="w-[24%]">
              <div className="">
                <Column className="bg-cyan_900 justify-center lg:p-[59px] xl:p-[74px] 2xl:p-[83px] 3xl:p-[99px] w-[100%]">
                  <Row className="items-center lg:mt-[50px] xl:mt-[63px] 2xl:mt-[70px] 3xl:mt-[85px] w-[89%]">
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
                    className="common-pointer items-center lg:mt-[17px] xl:mt-[22px] 2xl:mt-[24px] 3xl:mt-[29px] w-[77%]"
                    onClick={handleNavigate46}
                  >
                    <Img
                      src="images/img_checklist.png"
                      className="dashboardFive"
                      alt="checklist"
                    />
                    <Text className="rowchecklist" as="h5" variant="h5">
                      Activities
                    </Text>
                  </Row>
                  <Row className="items-center lg:mt-[17px] xl:mt-[22px] 2xl:mt-[24px] 3xl:mt-[29px] w-[75%]">
                    <Img
                      src="images/img_videolesson1.png"
                      className="dashboardFive"
                      alt="videolessonOne"
                    />
                    <Text className="rowchecklist" as="h5" variant="h5">
                      Tutorials
                    </Text>
                  </Row>
                  <Row className="items-start lg:mt-[17px] xl:mt-[22px] 2xl:mt-[24px] 3xl:mt-[29px] w-[82%]">
                    <Img
                      src="images/img_employee1.png"
                      className="todolistOne"
                      alt="employeeOne"
                    />
                    <Text className="rowemployeeone1" as="h5" variant="h5">
                      Employee
                    </Text>
                  </Row>
                  <Row
                    className="common-pointer items-start justify-center lg:mb-[255px] xl:mb-[319px] 2xl:mb-[359px] 3xl:mb-[430px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] w-[93%]"
                    onClick={handleNavigate33}
                  >
                    <Img
                      src="images/img_helpdesk1.png"
                      className="todolistOne"
                      alt="helpdeskOne"
                    />
                    <Text className="rowemployeeone1" as="h5" variant="h5">
                      Help Center
                    </Text>
                  </Row>
                </Column>
              </div>
            </aside>
            <Column className="items-end justify-start lg:mt-[29px] xl:mt-[37px] 2xl:mt-[41px] 3xl:mt-[49px] w-[72%]">
              <Img
                src="images/img_ellipse2.png"
                className="lg:h-[47px] xl:h-[59px] 2xl:h-[66px] 3xl:h-[79px] rounded-radius50 lg:w-[46px] xl:w-[58px] 2xl:w-[65px] 3xl:w-[78px]"
                alt="EllipseTwo"
              />
              <Column className="justify-start lg:mt-[33px] xl:mt-[42px] 2xl:mt-[47px] 3xl:mt-[56px] w-[100%]">
                <Row className="items-start justify-between w-[100%]">
                  <Text className="rowemployees1" as="h4" variant="h4">
                    Employees
                  </Text>
                  <Row className="bg-gray_200 items-center justify-between 3xl:p-[10px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] rounded-radius5 w-[27%]">
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
                </Row>
                <Row className="items-center xl:mt-[114px] 2xl:mt-[128px] 3xl:mt-[153px] lg:mt-[91px] w-[29%]">
                  <Text
                    className="font-semibold text-blue_600 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Employees
                  </Text>
                  <Text
                    className="xl:ml-[109px] 2xl:ml-[122px] 3xl:ml-[147px] lg:ml-[87px] GeneralSetting2"
                    as="h5"
                    variant="h5"
                  >
                    Groups
                  </Text>
                </Row>
                <Row className="font-nunito items-center xl:ml-[12px] 2xl:ml-[13px] 3xl:ml-[16px] lg:ml-[9px] lg:mt-[24px] xl:mt-[30px] 2xl:mt-[33px] 3xl:mt-[40px] w-[85%]">
                  <Text className="ID" as="h6" variant="h6">
                    ID
                  </Text>
                  <Text className="Name2" as="h6" variant="h6">
                    Name
                  </Text>
                  <Text className="Role" as="h6" variant="h6">
                    Role
                  </Text>
                  <Text className="PhoneNo1" as="h6" variant="h6">
                    Phone No.
                  </Text>
                  <Text className="Email" as="h6" variant="h6">
                    Email
                  </Text>
                </Row>
                <Footer1 className="font-nunito lg:mt-[15px] xl:mt-[19px] 2xl:mt-[21px] 3xl:mt-[25px] w-[100%]" />
              </Column>
            </Column>
          </Row>
        </Column>
        <Row className="absolute items-center justify-center left-[26%] top-[30%] w-[40%]">
          <Column className="bg-cyan_900 items-center xl:p-[11px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] rounded-radius4 w-[33%]">
            <Text className="mt-[2px] text-white_A700 w-[auto]" variant="body4">
              Add New Employee
            </Text>
          </Column>
          <Column className="bg-cyan_900 items-center lg:ml-[14px] xl:ml-[18px] 2xl:ml-[20px] 3xl:ml-[24px] xl:p-[10px] 2xl:p-[11px] 3xl:p-[13px] lg:p-[8px] rounded-radius4 w-[33%]">
            <Row className="items-start justify-center mt-[1px] w-[61%]">
              <Img
                src="images/img_printing1.png"
                className="printingOne"
                alt="printingOne"
              />
              <Text className="rowprintingone" variant="body4">
                Print Details
              </Text>
            </Row>
          </Column>
          <Button
            className="font-medium lg:ml-[14px] xl:ml-[18px] 2xl:ml-[20px] 3xl:ml-[24px] xl:text-[11px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[26%]"
            shape="RoundedBorder4"
            size="lg"
            variant="FillCyan900"
          >
            Create Group
          </Button>
        </Row>
        <Button
          className="absolute font-medium right-[5%] xl:text-[11px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center top-[30%] w-[10%]"
          shape="RoundedBorder4"
          size="lg"
          variant="FillRedA701"
        >
          Delete
        </Button>
        <Line className="absolute bg-black_900_72 h-[0.5px] right-[5%] top-[44%] w-[68%]" />
        <Line className="absolute bg-blue_600 h-[2px] left-[26%] top-[44%] w-[8%]" />
        <Img
          src="images/img_whatsappimage_204X360.png"
          className="WhatsAppImage"
          alt="WhatsAppImage"
        />
        <Column className="absolute bg-black_900_68 items-center justify-start lg:p-[46px] xl:p-[58px] 2xl:p-[65px] 3xl:p-[78px] w-[100%]">
          <Column className="items-center justify-start lg:mb-[4px] 2xl:mb-[6px] xl:mb-[6px] 3xl:mb-[8px] w-[48%]">
            <Column className="bg-white_A700 items-center justify-end lg:p-[20px] xl:p-[26px] 2xl:p-[29px] 3xl:p-[35px] rounded-radius15 w-[100%]">
              <Text className="columnaddnewtask" as="h4" variant="h4">
                Add New Task
              </Text>
              <Column className="items-center justify-start lg:mt-[28px] xl:mt-[35px] 2xl:mt-[39px] 3xl:mt-[47px] w-[68%]">
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
                  className="common-pointer font-semibold lg:mt-[16px] xl:mt-[21px] 2xl:mt-[23px] 3xl:mt-[28px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[100%]"
                  onClick={handleNavigate34}
                  shape="CircleBorder26"
                  size="xl"
                  variant="FillCyan900"
                >
                  Create{" "}
                </Button>
              </Column>
            </Column>
          </Column>
        </Column>
      </Stack>
    </>
  );
};

export default AddNewTaskOnePage;
