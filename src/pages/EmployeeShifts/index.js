import React from "react";

import {
  Stack,
  Column,
  Row,
  Text,
  Img,
  Button,
  Line,
  CheckBox,
} from "components";
import Sidebar1 from "components/Sidebar/Sidebar1";
import { useNavigate } from "react-router-dom";

const EmployeeShiftsPage = () => {
  const navigate = useNavigate();

  function handleNavigate71() {
    navigate("/employeeone");
  }
  function handleNavigate54() {
    navigate("/tutorialstwo");
  }
  function handleNavigate55() {
    navigate("/groups");
  }
  
  function handleNavigate57() {
    navigate("/createnewshift");
  }
  function handleNavigate60() {
    navigate("/activitiesone");
  }

  return (
    <>
      <Stack className="bg-white_A700 font-poppins lg:h-[576px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] mx-[auto] lg:pr-[56px] xl:pr-[70px] 2xl:pr-[78px] 3xl:pr-[94px] w-[100%]">
        <Column className="absolute items-center justify-start left-[0] w-[100%]">
          <Row className="items-start justify-between w-[100%]">
            <Sidebar1
              className="w-[24%]"
              onrowvideolessononeClick={handleNavigate54}
              onrowchecklistClick={handleNavigate60}
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

              <Column className=" justify-start  w-[52%]">

                <Row className="items-center justify-start w-[100%] mt-6">
                  <Button
                    className="common-pointer font-medium xl:text-[11px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center px-10 py-3 mr-4 whitespace-nowrap"
                    // onClick={handleNavigate71}
                    shape="RoundedBorder4"
                    // size="lg"
                    variant="FillCyan900"
                  >
                    Add New Employee
                  </Button>
                  <Column className="bg-cyan_900 items-center xl:p-[10px] 2xl:p-[11px] 3xl:p-[13px] lg:p-[8px] rounded-radius4 px-10 py-3 mx-4 common-pointer">
                    <Row className="items-center justify-center mt-[1px] px-6  mx-4 ">
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
                    className="font-medium xl:text-[11px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center  px-10 py-3 mx-4 whitespace-nowrap"
                    shape="RoundedBorder4"
                    // size="lg"
                    variant="FillCyan900"
                  >
                    Create Group
                  </Button>
                  <Button
                    className="font-medium xl:text-[11px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center px-10 py-3 mx-4 whitespace-nowrap"
                    shape="RoundedBorder4"
                    // size="lg"
                    variant="FillCyan900"
                  >
                    Updates
                  </Button>
                </Row>
                {/* onClick={handleNavigate77} onClick={handleNavigate78}  */}


              </Column>
              <Column className="relative">
              <Row className="relative items-start lg:mt-[23px] xl:mt-[29px] 2xl:mt-[32px] 3xl:mt-[39px] w-[57%]"> 
                <Text className="Employees_One common-pointer" as="h5" variant="h5"
                onClick={handleNavigate71}>
                  Employees
                </Text>
                <Text
                  className="common-pointer 2xl:ml-[103px] 3xl:ml-[124px] lg:ml-[73px] xl:ml-[92px] Employees_One"
                  as="h5"
                  variant="h5"
                  onClick={handleNavigate55}
                >
                  Groups
                </Text>
                <Text
                  className="font-semibold 2xl:ml-[102px] 3xl:ml-[122px] lg:ml-[72px] xl:ml-[91px] text-blue_600 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Shifts
                </Text>
               
              
              </Row>
              <Line className="absolute bg-black_900_72 h-[0.5px] bottom-[0] left-[0] w-[100%]" />
              
              <Line className="bg-blue_600 h-[2px] lg:ml-[228px] xl:ml-[285px] 2xl:ml-[320px] 3xl:ml-[384px] w-[8%]" /> 
              </Column>


              <Column className=" font-nunito justify-start  w-[100%]">

                <Row className="items-center justify-start lg:mt-[13px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%] mb-4">
                 <div className=" w-[17%] text-start ml-1">
                 <Text className="ID ! font-bold " as="h6" variant="h6">  
                    ID
                  </Text>
                 </div>
                  <div className="w-[23%] text-start ml-1">
                    <Text className="ID ! w-[25%] ! font-bold " as="h6" variant="h6">
                    Start Date
                  </Text>
                  </div>
                  <div className="w-[23%] text-start ml-1">
                    <Text className="EndDate ! w-[25%] ! font-bold " as="h6" variant="h6">
                    End Date
                  </Text>
                  </div>
                  <div className="w-[23%] text-start ml-1">
                    <Text className="ID ! w-[25%] ! font-bold " as="h6" variant="h6">
                    Total Shifts
                  </Text>
                  </div>
                </Row>
              </Column>
              {/* <footer className=" bg-white_A700 bottom-[29%] font-nunito right-[0] rounded-radius7 shadow-bs w-[100%]">
                <Row className="items-start w-[100%]">
                  <CheckBox
                    className="font-normal not-italic lg:text-[10px] xl:text-[13px] 2xl:text-[14px] 3xl:text-[17px] text-black_900_b5"
                    inputClassName="h-[22px] mr-[5px] w-[22px]"
                    name="19281"
                    label="19281"
                    shape="RoundedBorder3"
                    size="lg"
                    variant="OutlineBluegray100"
                  ></CheckBox>
                  <Text className="mt-[4px] test_1422020_One" variant="body2">
                    14/2/2020
                  </Text>
                  <Text className="mt-[4px] test_1622020_One" variant="body2">
                    16/2/2020
                  </Text>
                  <Text className="mt-[3px] Two_One" variant="body2">
                    2
                  </Text>
                </Row>
              </footer> */}
              
              <Img
                src="images/img_whatsappimage22.png" 
                className="WhatsAppImage"
                alt="WhatsAppImage"
              />
              <footer className=" font-nunito  w-[100%]">
                <Column className="items-center justify-start w-[100%]">
                  <Column className="items-center justify-start w-[100%]">
                    <Row className="bg-white_A700 items-center xl:p-[12px] 2xl:p-[13px] 3xl:p-[16px] lg:p-[9px] rounded-radius7 shadow-bs w-[100%]">
                      <CheckBox
                        className="font-normal not-italic lg:text-[10px] xl:text-[13px] 2xl:text-[14px] 3xl:text-[17px] text-black_900_b5"
                        inputClassName="h-[22px] mr-[5px] w-[22px]"
                        name="19281 One"
                        label="19281"
                        shape="RoundedBorder3"
                        size="lg"
                        variant="OutlineBluegray100"
                      ></CheckBox>
                      <Text className="test_1422020_One" variant="body2">
                        14/2/2020
                      </Text>
                      <Text className="test_1622020_One" variant="body2">
                        16/2/2020
                      </Text>
                      <Text className="Two_One" variant="body2">
                        2
                      </Text>
                      <Button
                        className="flex lg:h-[28px] xl:h-[36px] 2xl:h-[40px] 3xl:h-[48px] items-center justify-center lg:ml-[114px] xl:ml-[143px] 2xl:ml-[160px] 3xl:ml-[193px] my-[1px] lg:w-[28px] xl:w-[35px] 2xl:w-[39px] 3xl:w-[47px]"
                        shape="icbRoundedBorder4"
                        size="mdIcn"
                        variant="icbOutlineBlack9003f1_2"
                      >
                        <Img
                          src="images/img_group3838.png"
                          className="flex items-center justify-center lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px]"
                          alt="Group3838"
                        />
                      </Button>
                    </Row>
                  </Column>
                  <Column className="items-center justify-start lg:mt-[13px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%]">
                    <Row className="bg-white_A700 items-center xl:p-[12px] 2xl:p-[13px] 3xl:p-[16px] lg:p-[9px] rounded-radius7 shadow-bs w-[100%]">
                      <CheckBox
                        className="font-normal not-italic lg:text-[10px] xl:text-[13px] 2xl:text-[14px] 3xl:text-[17px] text-black_900_b5"
                        inputClassName="h-[22px] mr-[5px] w-[22px]"
                        name="19281 Two"
                        label="19281"
                        shape="RoundedBorder3"
                        size="lg"
                        variant="OutlineBluegray100"
                      ></CheckBox>
                      <Text className="test_1422020_One" variant="body2">
                        14/2/2020
                      </Text>
                      <Text className="test_1622020_One" variant="body2">
                        16/2/2020
                      </Text>
                      <Text className="Two_One" variant="body2">
                        2
                      </Text>
                      <Button
                        className="flex lg:h-[28px] xl:h-[36px] 2xl:h-[40px] 3xl:h-[48px] items-center justify-center lg:ml-[114px] xl:ml-[143px] 2xl:ml-[160px] 3xl:ml-[193px] my-[1px] lg:w-[28px] xl:w-[35px] 2xl:w-[39px] 3xl:w-[47px]"
                        shape="icbRoundedBorder4"
                        size="mdIcn"
                        variant="icbOutlineBlack9003f1_2"
                      >
                        <Img
                          src="images/img_group3838.png"
                          className="flex items-center justify-center lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px]"
                          alt="Group3838 One"
                        />
                      </Button>
                    </Row>
                  </Column>
                  <Column className="items-center justify-start lg:mt-[13px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%]">
                    <Row className="bg-white_A700 items-center xl:p-[12px] 2xl:p-[13px] 3xl:p-[16px] lg:p-[9px] rounded-radius7 shadow-bs w-[100%]">
                      <CheckBox
                        className="font-normal not-italic lg:text-[10px] xl:text-[13px] 2xl:text-[14px] 3xl:text-[17px] text-black_900_b5"
                        inputClassName="h-[22px] mr-[5px] w-[22px]"
                        name="19281 Three"
                        label="19281"
                        shape="RoundedBorder3"
                        size="lg"
                        variant="OutlineBluegray100"
                      ></CheckBox>
                      <Text className="test_1422020_One" variant="body2">
                        14/2/2020
                      </Text>
                      <Text className="test_1622020_One" variant="body2">
                        16/2/2020
                      </Text>
                      <Text className="Two_One" variant="body2">
                        2
                      </Text>
                      <Button
                        className="flex lg:h-[28px] xl:h-[36px] 2xl:h-[40px] 3xl:h-[48px] items-center justify-center lg:ml-[114px] xl:ml-[143px] 2xl:ml-[160px] 3xl:ml-[193px] my-[1px] lg:w-[28px] xl:w-[35px] 2xl:w-[39px] 3xl:w-[47px]"
                        shape="icbRoundedBorder4"
                        size="mdIcn"
                        variant="icbOutlineBlack9003f1_2"
                      >
                        <Img
                          src="images/img_group3838.png"
                          className="flex items-center justify-center lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px]"
                          alt="Group3838 Two"
                        />
                      </Button>
                    </Row>
                  </Column>
                  <Column className="items-center justify-start lg:mt-[13px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%]">
                    <Row className="bg-white_A700 items-center xl:p-[12px] 2xl:p-[13px] 3xl:p-[16px] lg:p-[9px] rounded-radius7 shadow-bs w-[100%]">
                      <CheckBox
                        className="font-normal not-italic lg:text-[10px] xl:text-[13px] 2xl:text-[14px] 3xl:text-[17px] text-black_900_b5"
                        inputClassName="h-[22px] mr-[5px] w-[22px]"
                        name="19281 Four"
                        label="19281"
                        shape="RoundedBorder3"
                        size="lg"
                        variant="OutlineBluegray100"
                      ></CheckBox>
                      <Text className="test_1422020_One" variant="body2">
                        14/2/2020
                      </Text>
                      <Text className="test_1622020_One" variant="body2">
                        16/2/2020
                      </Text>
                      <Text className="Two_One" variant="body2">
                        2
                      </Text>
                      <Button
                        className="flex lg:h-[28px] xl:h-[36px] 2xl:h-[40px] 3xl:h-[48px] items-center justify-center lg:ml-[114px] xl:ml-[143px] 2xl:ml-[160px] 3xl:ml-[193px] my-[1px] lg:w-[28px] xl:w-[35px] 2xl:w-[39px] 3xl:w-[47px]"
                        shape="icbRoundedBorder4"
                        size="mdIcn"
                        variant="icbOutlineBlack9003f1_2"
                      >
                        <Img
                          src="images/img_group3838.png"
                          className="flex items-center justify-center lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px]"
                          alt="Group3838 Three"
                        />
                      </Button>
                    </Row>
                  </Column>
                  <Column className="items-center justify-end lg:mt-[13px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%]">
                    <Row className="bg-white_A700 items-start xl:p-[12px] 2xl:p-[13px] 3xl:p-[16px] lg:p-[9px] rounded-radius7 shadow-bs w-[100%]">
                      <CheckBox
                        className="font-normal 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] not-italic lg:text-[10px] xl:text-[13px] 2xl:text-[14px] 3xl:text-[17px] text-black_900_b5"
                        inputClassName="h-[22px] mr-[5px] w-[22px]"
                        name="19281 Five"
                        label="19281"
                        shape="RoundedBorder3"
                        size="sm"
                        variant="OutlineBluegray100"
                      ></CheckBox>
                      <Text
                        className="xl:ml-[101px] 2xl:ml-[113px] 3xl:ml-[136px] lg:ml-[80px] Youcancheckt"
                        variant="body2"
                      >
                        14/2/2020
                      </Text>
                      <Text
                        className="lg:ml-[127px] xl:ml-[159px] 2xl:ml-[178px] 3xl:ml-[214px] Youcancheckt"
                        variant="body2"
                      >
                        16/2/2020
                      </Text>
                      <Text
                        className="lg:ml-[157px] xl:ml-[197px] 2xl:ml-[221px] 3xl:ml-[266px] Youcancheckt"
                        variant="body2"
                      >
                        2
                      </Text>
                      <Button
                        className="flex lg:h-[28px] xl:h-[36px] 2xl:h-[40px] 3xl:h-[48px] items-center justify-center lg:ml-[114px] xl:ml-[143px] 2xl:ml-[160px] 3xl:ml-[193px] my-[1px] lg:w-[28px] xl:w-[35px] 2xl:w-[39px] 3xl:w-[47px]"
                        shape="icbRoundedBorder4"
                        size="mdIcn"
                        variant="icbOutlineBlack9003f1_2"
                      >
                        <Img
                          src="images/img_group3838.png"
                          className="flex items-center justify-center lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px]"
                          alt="Group3838 Four"
                        />
                      </Button>
                    </Row>
                  </Column>
                </Column>
              </footer>


            </Column>
            {/* <Text className="rowgroup38461" as="h4" variant="h4">
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
            </Column> */}
          </Row>
        </Column>
        {/* <Column className="absolute justify-start right-[17%] top-[30%] w-[52%]">
          <Row className="items-center justify-between w-[100%]">
            <Button
              className="common-pointer font-medium xl:text-[11px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[26%]"
              onClick={handleNavigate56}
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
              className="common-pointer font-medium xl:text-[11px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[20%]"
              onClick={handleNavigate57}
              shape="RoundedBorder4"
              size="lg"
              variant="FillCyan900"
            >
              Create New Shift
            </Button>
          </Row>
          <Row className="items-start lg:mt-[23px] xl:mt-[29px] 2xl:mt-[32px] 3xl:mt-[39px] w-[57%]">
            <Text className="Employees_One" as="h5" variant="h5">
              Employees
            </Text>
            <Text
              className="common-pointer 2xl:ml-[103px] 3xl:ml-[124px] lg:ml-[73px] xl:ml-[92px] Employees_One"
              as="h5"
              variant="h5"
              onClick={handleNavigate55}
            >
              Groups
            </Text>
            <Text
              className="font-semibold 2xl:ml-[102px] 3xl:ml-[122px] lg:ml-[72px] xl:ml-[91px] text-blue_600 w-[auto]"
              as="h5"
              variant="h5"
            >
              Shifts
            </Text>
          </Row>
        </Column> */}

      </Stack>
    </>
  );
};

export default EmployeeShiftsPage;
