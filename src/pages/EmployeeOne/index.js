import React from "react";

import { Stack, Column, Row, Text, Img, Button, Line } from "components";
import Sidebar1 from "components/Sidebar/Sidebar1";
import Footer from "components/Footer/Footer";
import { useNavigate } from "react-router-dom";

const EmployeeOnePage = () => {
  const navigate = useNavigate();

  function handleNavigate66() {
    navigate("/tutorialstwo");
  }
  function handleNavigate67() {
    navigate("/groups");
  }
  function handleNavigate68() {
    navigate("/employeeshifts");
  }
  function handleNavigate69() {
    navigate("/addnewemploye");
  }
  function handleNavigate74() {
    navigate("/activitiesone");
  }

  return (
    <>
      <Stack className="bg-white_A700 font-poppins lg:h-[576px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px]  lg:pr-[56px] xl:pr-[70px] 2xl:pr-[78px] 3xl:pr-[94px] w-[100%]">
        <Column className="absolute items-center justify-start left-[0] w-[100%]">
          <Row className="items-start justify-between w-[100%]">
            <Sidebar1
              className="w-[24%]"
              onrowvideolessononeClick={handleNavigate66}
              onrowchecklistClick={handleNavigate74}
            />
            <Column className=" justify-start lg:mt-[35px] xl:mt-[44px] 2xl:mt-[49px] 3xl:mt-[59px] w-[72%] lg:pr-[56px] xl:pr-[70px] 2xl:pr-[78px] 3xl:pr-[94px]">

              <div className="flex justify-end mb-4" > 
              <Img 
                src="images/img_ellipse2.png"
                className="lg:h-[47px] xl:h-[59px] 2xl:h-[66px] 3xl:h-[79px] rounded-radius50 lg:w-[46px] xl:w-[58px] 2xl:w-[65px] 3xl:w-[78px] "  
                alt="EllipseTwo"
              />
              </div>

              <div className="flex justify-between items-center h-fit"> 
               <div>
               <Text className="text-[#0F86E4] font-bold" as="h4" variant="h4">
                  Employees
                </Text>
               </div>
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

              </div>


              <Column className="items-end justify-start lg:ml-[427px] xl:ml-[534px] 2xl:ml-[601px] 3xl:ml-[721px] lg:mt-[29px] xl:mt-[37px] 2xl:mt-[41px] 3xl:mt-[49px] w-[20%]">

                {/* <Row className="bg-gray_200 items-center justify-between lg:mt-[33px] xl:mt-[42px] 2xl:mt-[47px] 3xl:mt-[56px] 3xl:p-[10px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] rounded-radius5 w-[100%]">

                  <Img
                    src="images/img_setting1.png"
                    className="settingOne"
                    alt="settingOne"
                  />
                </Row> */}
              </Column>

              <Column className=" justify-start relative">
                <Row className="items-center justify-start w-[100%]">
                  <Button
                    className="common-pointer font-medium xl:text-[11px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center px-10 py-3 mr-4"
                    onClick={handleNavigate69}
                    shape="RoundedBorder4"
                    // size="lg"
                    variant="FillCyan900"
                  >
                    Add New Employee
                  </Button>
                  <Column className="bg-cyan_900 items-center xl:p-[10px] 2xl:p-[11px] 3xl:p-[13px] lg:p-[8px] rounded-radius4 px-10 py-3 mx-4 common-pointer">
                    <Row className="items-center justify-center mt-[1px] "> 
                      <Img
                        src="images/img_printing1.png"
                        className="printingOne"
                        alt="printingOne"
                      />
                      <p className=" whitespace-nowrap  text-white text-[10px] font-semibold ml-2"  >
                        Print Details
                      </p>
                    </Row>
                  </Column>
                  <Button
                    className="font-medium xl:text-[11px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center  px-10 py-3 mx-4"
                    shape="RoundedBorder4"
                    // size="lg"
                    variant="FillCyan900"
                  >
                    Create Group
                  </Button>
                  <Button
                    className="font-medium xl:text-[11px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center px-10 py-3 mx-4"
                    shape="RoundedBorder4"
                    // size="lg"
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
                    className="common-pointer 2xl:ml-[111px] 3xl:ml-[133px] lg:ml-[79px] xl:ml-[99px] Employees_One"
                    as="h5"
                    variant="h5"
                    onClick={handleNavigate67}
                  >
                    Groups
                  </Text>
                  <Text
                    className="common-pointer font-medium 2xl:ml-[111px] 3xl:ml-[133px] lg:ml-[79px] xl:ml-[99px] text-black_900_6d w-[auto]"
                    as="h5"
                    variant="h5"
                    onClick={handleNavigate68}
                  >
                    Shifts
                  </Text>
                </Row>
                <Line className="absolute bg-black_900_72 h-[0.5px] right-[0] bottom-[-1px] w-[100%]" /> 
              </Column>
             
              <Column className=" font-nunito justify-start  w-[59%] mb-2">
                <Line className="bg-blue_600 h-[2px] w-[13%]" />
                <Row className="items-center lg:ml-[10px] xl:ml-[13px] 2xl:ml-[14px] 3xl:ml-[17px] lg:mt-[13px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%]">
                  <Text className="ID" as="h6" variant="h6">
                    ID
                  </Text>
                  <Text className="Name2" as="h6" variant="h6">
                    Name
                  </Text>
                  <Text className="Role" as="h6" variant="h6">
                    Role
                  </Text>
                  <Text className="PhoneNo1 whitespace-nowrap" as="h6" variant="h6">
                    Phone No.
                  </Text>
                  <Text className="Email" as="h6" variant="h6">
                    Email
                  </Text>
                </Row>
              </Column>
             
              <Footer className="font-nunito  w-[100%]" />
              


            </Column>

          </Row>
        </Column>

        <Img
          src="images/img_whatsappimage22.png"
          className="WhatsAppImage"
          alt="WhatsAppImage"
        />
      </Stack>
    </>
  );
};

export default EmployeeOnePage;
