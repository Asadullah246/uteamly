import React from "react";

import { Stack, Column, Row, Img, Text, Button, Line } from "components";
import Footer1 from "components/Footer/Footer1";
import { useNavigate } from "react-router-dom";

const SelectedPage = () => {
  const navigate = useNavigate();

  function handleNavigate288() {
    navigate("/dashboardone");
  }
  function handleNavigate289() {
    navigate("/documenttwo");
  }
  function handleNavigate290() {
    navigate("/messageone");
  }
  function handleNavigate296() {
    navigate("/activitiesone");
  }

  return (
    <>
      <Stack className="bg-white_A700 font-poppins lg:h-[576px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] mx-[auto] lg:pr-[56px] xl:pr-[70px] 2xl:pr-[78px] 3xl:pr-[94px] w-[100%]">
        <Column className="absolute items-center justify-start left-[0] w-[95%]">
          <Row className="items-start w-[100%]">
            <aside className="w-[24%]">
              <div className="">
                <Column className="bg-cyan_900 items-center justify-end lg:p-[19px] xl:p-[24px] 2xl:p-[27px] 3xl:p-[32px] w-[100%]">
                  <Column className="justify-start xl:mt-[113px] 2xl:mt-[127px] 3xl:mt-[152px] lg:mt-[90px] w-[54%]">
                    <Row
                      className="common-pointer items-center w-[96%]"
                      onClick={handleNavigate288}
                    >
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
                      className="common-pointer items-center lg:mt-[17px] xl:mt-[22px] 2xl:mt-[24px] 3xl:mt-[29px] w-[83%]"
                      onClick={handleNavigate296}
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
                    <Row className="items-center lg:mt-[17px] xl:mt-[22px] 2xl:mt-[24px] 3xl:mt-[29px] w-[81%]">
                      <Img
                        src="images/img_videolesson1.png"
                        className="dashboardFive"
                        alt="videolessonOne"
                      />
                      <Text className="rowchecklist" as="h5" variant="h5">
                        Tutorials
                      </Text>
                    </Row>
                    <Row className="items-start lg:mt-[17px] xl:mt-[22px] 2xl:mt-[24px] 3xl:mt-[29px] w-[88%]">
                      <Img
                        src="images/img_employee1.png"
                        className="todolistOne"
                        alt="employeeOne"
                      />
                      <Text className="rowemployeeone1" as="h5" variant="h5">
                        Employee
                      </Text>
                    </Row>
                    <Row className="items-start lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] w-[100%]">
                      <Img
                        src="images/img_helpdesk1.png"
                        className="todolistOne"
                        alt="helpdeskOne"
                      />
                      <Text className="rowemployeeone1" as="h5" variant="h5">
                        Help Center
                      </Text>
                    </Row>
                    <Row
                      className="common-pointer items-start lg:mt-[27px] xl:mt-[34px] 2xl:mt-[38px] 3xl:mt-[45px] w-[93%]"
                      onClick={handleNavigate289}
                    >
                      <Img
                        src="images/img_googledocs1.png"
                        className="dashboardFive"
                        alt="googledocsOne"
                      />
                      <Text className="rowgoogledocsone" as="h5" variant="h5">
                        Document
                      </Text>
                    </Row>
                    <Row
                      className="common-pointer items-start lg:mt-[17px] xl:mt-[22px] 2xl:mt-[24px] 3xl:mt-[29px] w-[83%]"
                      onClick={handleNavigate290}
                    >
                      <Img
                        src="images/img_email51.png"
                        className="todolistOne"
                        alt="emailFiftyOne"
                      />
                      <Text className="rowemailfiftyone" as="h5" variant="h5">
                        Message
                      </Text>
                    </Row>
                    <Row className="items-center lg:mt-[14px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] pr-[2px] py-[2px] w-[83%]">
                      <Img
                        src="images/img_todolist1.png"
                        className="dashboardFive"
                        alt="todolistOne"
                      />
                      <Text className="rowdashboardfive" as="h5" variant="h5">
                        Tasks
                      </Text>
                    </Row>
                  </Column>
                  <Button
                    className="flex lg:h-[31px] xl:h-[39px] 2xl:h-[43px] 3xl:h-[52px] items-center justify-center lg:mt-[152px] xl:mt-[191px] 2xl:mt-[215px] 3xl:mt-[257px] lg:w-[30px] xl:w-[38px] 2xl:w-[42px] 3xl:w-[51px]"
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
            <Text className="rowgroup38461" as="h4" variant="h4">
              Employees
            </Text>
            <Column className="items-end justify-start lg:ml-[427px] xl:ml-[534px] 2xl:ml-[601px] 3xl:ml-[721px] lg:mt-[29px] xl:mt-[37px] 2xl:mt-[41px] 3xl:mt-[49px] w-[20%]">
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
        <Column className="absolute justify-start right-[17%] top-[30%] w-[52%]">
          <Row className="items-center justify-between w-[100%]">
            <Button
              className="font-medium xl:text-[11px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[26%]"
              shape="RoundedBorder4"
              size="lg"
              variant="FillCyan900"
            >
              Add New Employee
            </Button>
            <Column className="bg-cyan_900 items-center xl:p-[10px] 2xl:p-[11px] 3xl:p-[13px] lg:p-[8px] rounded-radius4 w-[26%]">
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
              className="font-medium xl:text-[11px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[20%]"
              shape="RoundedBorder4"
              size="lg"
              variant="FillCyan900"
            >
              Create Group
            </Button>
            <Button
              className="font-medium xl:text-[11px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[20%]"
              shape="RoundedBorder4"
              size="lg"
              variant="FillCyan900"
            >
              Updates
            </Button>
          </Row>
          <Row className="items-start lg:mt-[23px] xl:mt-[29px] 2xl:mt-[32px] 3xl:mt-[39px] w-[59%]">
            <Text className="columntutorials_one" as="h5" variant="h5">
              Employees
            </Text>
            <Text
              className="2xl:ml-[111px] 3xl:ml-[133px] lg:ml-[79px] xl:ml-[99px] Employees_One"
              as="h5"
              variant="h5"
            >
              Groups
            </Text>
            <Text
              className="font-medium 2xl:ml-[111px] 3xl:ml-[133px] lg:ml-[79px] xl:ml-[99px] text-black_900_6d w-[auto]"
              as="h5"
              variant="h5"
            >
              Shifts
            </Text>
          </Row>
        </Column>
        <Column className="absolute font-nunito justify-start right-[9%] top-[44%] w-[59%]">
          <Line className="bg-blue_600 h-[2px] w-[13%]" />
          <Row className="items-center lg:ml-[10px] xl:ml-[13px] 2xl:ml-[14px] 3xl:ml-[17px] lg:mt-[13px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[22px] w-[98%]">
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
        </Column>
        <Footer1 className="absolute bottom-[0] font-nunito right-[0] w-[68%]" />
        <Button
          className="absolute font-medium right-[0] xl:text-[11px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center top-[30%] w-[10%]"
          shape="RoundedBorder4"
          size="lg"
          variant="FillRedA701"
        >
          Delete
        </Button>
        <Line className="absolute bg-black_900_72 h-[0.5px] right-[0] top-[44%] w-[68%]" />
        <Img
          src="images/img_whatsappimage_204X359.png"
          className="WhatsAppImage"
          alt="WhatsAppImage"
        />
      </Stack>
    </>
  );
};

export default SelectedPage;
