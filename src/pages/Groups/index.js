import React from "react";

import { Stack, Column, Row, Text, Img, Button, Line, Grid } from "components";
import Sidebar2 from "components/Sidebar/Sidebar2";
import { useNavigate } from "react-router-dom";
import Sidebar1 from "components/Sidebar/Sidebar1";

const GroupsPage = () => {
  const navigate = useNavigate();

  function handleNavigate71() {
    navigate("/addnewemploye");
  }
  function handleNavigate75() {
    navigate("/activitiesone");
  }
  function handleNavigate77() {
    navigate("/employeeone");
  }
  function handleNavigate78() {
    navigate("/employeeshifts");
  }

  return (
    <>
      <Stack className="bg-white_A700 font-poppins lg:h-[576px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] mx-[auto] lg:pr-[55px] xl:pr-[69px] 2xl:pr-[77px] 3xl:pr-[93px] w-[100%]">
        <Column className="absolute items-center justify-start left-[0] w-[100%]">
          <Row className="items-start justify-between w-[100%]">
            <Sidebar1
              className="w-[24%]"
              onrowchecklistClick={handleNavigate75}
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
                {/* <Row className="items-center justify-between w-[100%]">
                  <Button
                    className="common-pointer font-medium mb-[1px] xl:text-[11px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[26%]"
                    onClick={handleNavigate71}
                    shape="RoundedBorder4"
                    size="lg"
                    variant="FillCyan900"
                  >
                    Add New Employee
                  </Button>
                  <Column className="bg-cyan_900 items-center mb-[1px] xl:p-[10px] 2xl:p-[11px] 3xl:p-[13px] lg:p-[8px] rounded-radius4 w-[26%]">
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
                    className="font-medium mb-[1px] xl:text-[11px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[20%]"
                    shape="RoundedBorder4"
                    size="lg"
                    variant="FillCyan900"
                  >
                    Create Group
                  </Button>
                  <Button
                    className="font-medium mt-[1px] xl:text-[11px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[20%]"
                    shape="RoundedBorder4"
                    size="lg"
                    variant="FillCyan900"
                  >
                    Updates
                  </Button>
                </Row> */}
                 <Row className="items-center justify-start w-[100%] mt-6">
                  <Button
                    className="common-pointer font-medium xl:text-[11px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center px-10 py-3 mr-4 whitespace-nowrap"
                    onClick={handleNavigate71}
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

              <Column className=" relative">
              <Row className="  items-start lg:mt-[22px] xl:mt-[28px] 2xl:mt-[31px] 3xl:mt-[37px] w-[59%]">
                  <Text
                    className="common-pointer Employees_One"
                    as="h5"
                    variant="h5"
                    onClick={handleNavigate77} 
                  >
                    Employees
                  </Text>
                  <Text
                    className="xl:ml-[110px] 2xl:ml-[123px] 3xl:ml-[148px] lg:ml-[88px] columntutorials_one common-pointer mb-0 pb-0"
                    as="h5"
                    variant="h5"
                  >
                    Groups
                  </Text>
                  <Text
                    className="common-pointer font-medium 3xl:ml-[117px] lg:ml-[69px] xl:ml-[87px] 2xl:ml-[97px] text-black_900_6d w-[auto]"
                    as="h5"
                    variant="h5"
                    onClick={handleNavigate78} 
                  >
                    Shifts
                  </Text>
                 
                </Row>
                <Line className="absolute bg-black_900_72 h-[0.5px] left-[0] bottom-[0px] w-[100%]" /> 
                <Line className="bg-blue_600 h-[2px] lg:ml-[140px] xl:ml-[175px] 2xl:ml-[197px] 3xl:ml-[236px] w-[6%]" />
                
                </Column>


              
              <Column className=" inset-x-[0] justify-start mx-[auto] w-[100%]">
               
                <Column className="items-center justify-start lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[100%]">
                  <Grid className="lg:gap-[22px] xl:gap-[28px] 2xl:gap-[31px] 3xl:gap-[37px] grid grid-cols-3 w-[100%]">
                    <Column className="bg-white_A700 justify-start xl:p-[10px] 2xl:p-[11px] 3xl:p-[13px] lg:p-[8px] rounded-radius5 shadow-bs w-[100%]">
                      <Row className="items-center 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[9px] w-[63%]">
                        <Img
                          src="images/img_ellipse9.png"
                          className="lg:h-[55px] xl:h-[69px] 2xl:h-[77px] 3xl:h-[92px] rounded-radius50 lg:w-[54px] xl:w-[68px] 2xl:w-[76px] 3xl:w-[91px]"
                          alt="EllipseNine"
                        />
                        <Column className="lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] w-[48%]">
                          <Text
                            className="font-medium text-black_900 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            New Staff
                          </Text>
                          <Text className="membersCounter" variant="body3">
                            3 members
                          </Text>
                        </Column>
                      </Row>
                    </Column>
                    <Column className="bg-white_A700 justify-start xl:p-[10px] 2xl:p-[11px] 3xl:p-[13px] lg:p-[8px] rounded-radius5 shadow-bs w-[100%]">
                      <Row className="items-center 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[9px] w-[63%]">
                        <Img
                          src="images/img_ellipse9.png"
                          className="lg:h-[55px] xl:h-[69px] 2xl:h-[77px] 3xl:h-[92px] rounded-radius50 lg:w-[54px] xl:w-[68px] 2xl:w-[76px] 3xl:w-[91px]"
                          alt="EllipseNine One"
                        />
                        <Column className="lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] w-[48%]">
                          <Text
                            className="font-medium text-black_900 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            New Staff
                          </Text>
                          <Text className="membersCounter" variant="body3">
                            3 members
                          </Text>
                        </Column>
                      </Row>
                    </Column>
                    <Column className="bg-white_A700 justify-start xl:p-[10px] 2xl:p-[11px] 3xl:p-[13px] lg:p-[8px] rounded-radius5 shadow-bs w-[100%]">
                      <Row className="items-center 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[9px] w-[63%]">
                        <Img
                          src="images/img_ellipse9.png"
                          className="lg:h-[55px] xl:h-[69px] 2xl:h-[77px] 3xl:h-[92px] rounded-radius50 lg:w-[54px] xl:w-[68px] 2xl:w-[76px] 3xl:w-[91px]"
                          alt="EllipseNine Two"
                        />
                        <Column className="lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] w-[48%]">
                          <Text
                            className="font-medium text-black_900 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            New Staff
                          </Text>
                          <Text className="membersCounter" variant="body3">
                            3 members
                          </Text>
                        </Column>
                      </Row>
                    </Column>
                    <Column className="bg-white_A700 justify-start xl:p-[10px] 2xl:p-[11px] 3xl:p-[13px] lg:p-[8px] rounded-radius5 shadow-bs w-[100%]">
                      <Row className="items-center 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[9px] w-[63%]">
                        <Img
                          src="images/img_ellipse9.png"
                          className="lg:h-[55px] xl:h-[69px] 2xl:h-[77px] 3xl:h-[92px] rounded-radius50 lg:w-[54px] xl:w-[68px] 2xl:w-[76px] 3xl:w-[91px]"
                          alt="EllipseNine Three"
                        />
                        <Column className="lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] w-[48%]">
                          <Text
                            className="font-medium text-black_900 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            New Staff
                          </Text>
                          <Text className="membersCounter" variant="body3">
                            3 members
                          </Text>
                        </Column>
                      </Row>
                    </Column>
                    <Column className="bg-white_A700 justify-start xl:p-[10px] 2xl:p-[11px] 3xl:p-[13px] lg:p-[8px] rounded-radius5 shadow-bs w-[100%]">
                      <Row className="items-center 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[9px] w-[63%]">
                        <Img
                          src="images/img_ellipse9.png"
                          className="lg:h-[55px] xl:h-[69px] 2xl:h-[77px] 3xl:h-[92px] rounded-radius50 lg:w-[54px] xl:w-[68px] 2xl:w-[76px] 3xl:w-[91px]"
                          alt="EllipseNine Four"
                        />
                        <Column className="lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] w-[48%]">
                          <Text
                            className="font-medium text-black_900 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            New Staff
                          </Text>
                          <Text className="membersCounter" variant="body3">
                            3 members
                          </Text>
                        </Column>
                      </Row>
                    </Column>
                    <Column className="bg-white_A700 justify-start xl:p-[10px] 2xl:p-[11px] 3xl:p-[13px] lg:p-[8px] rounded-radius5 shadow-bs w-[100%]">
                      <Row className="items-center 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[9px] w-[63%]">
                        <Img
                          src="images/img_ellipse9.png"
                          className="lg:h-[55px] xl:h-[69px] 2xl:h-[77px] 3xl:h-[92px] rounded-radius50 lg:w-[54px] xl:w-[68px] 2xl:w-[76px] 3xl:w-[91px]"
                          alt="EllipseNine Five"
                        />
                        <Column className="lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] w-[48%]">
                          <Text
                            className="font-medium text-black_900 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            New Staff
                          </Text>
                          <Text className="membersCounter" variant="body3">
                            3 members
                          </Text>
                        </Column>
                      </Row>
                    </Column>
                    <Column className="bg-white_A700 justify-start xl:p-[10px] 2xl:p-[11px] 3xl:p-[13px] lg:p-[8px] rounded-radius5 shadow-bs w-[100%]">
                      <Row className="items-center 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[9px] w-[63%]">
                        <Img
                          src="images/img_ellipse9.png"
                          className="lg:h-[55px] xl:h-[69px] 2xl:h-[77px] 3xl:h-[92px] rounded-radius50 lg:w-[54px] xl:w-[68px] 2xl:w-[76px] 3xl:w-[91px]"
                          alt="EllipseNine Three"
                        />
                        <Column className="lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] w-[48%]">
                          <Text
                            className="font-medium text-black_900 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            New Staff
                          </Text>
                          <Text className="membersCounter" variant="body3">
                            3 members
                          </Text>
                        </Column>
                      </Row>
                    </Column>
                    <Column className="bg-white_A700 justify-start xl:p-[10px] 2xl:p-[11px] 3xl:p-[13px] lg:p-[8px] rounded-radius5 shadow-bs w-[100%]">
                      <Row className="items-center 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[9px] w-[63%]">
                        <Img
                          src="images/img_ellipse9.png"
                          className="lg:h-[55px] xl:h-[69px] 2xl:h-[77px] 3xl:h-[92px] rounded-radius50 lg:w-[54px] xl:w-[68px] 2xl:w-[76px] 3xl:w-[91px]"
                          alt="EllipseNine Four"
                        />
                        <Column className="lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] w-[48%]">
                          <Text
                            className="font-medium text-black_900 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            New Staff
                          </Text>
                          <Text className="membersCounter" variant="body3">
                            3 members
                          </Text>
                        </Column>
                      </Row>
                    </Column>
                    <Column className="bg-white_A700 justify-start xl:p-[10px] 2xl:p-[11px] 3xl:p-[13px] lg:p-[8px] rounded-radius5 shadow-bs w-[100%]">
                      <Row className="items-center 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[9px] w-[63%]">
                        <Img
                          src="images/img_ellipse9.png"
                          className="lg:h-[55px] xl:h-[69px] 2xl:h-[77px] 3xl:h-[92px] rounded-radius50 lg:w-[54px] xl:w-[68px] 2xl:w-[76px] 3xl:w-[91px]"
                          alt="EllipseNine Five"
                        />
                        <Column className="lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] w-[48%]">
                          <Text
                            className="font-medium text-black_900 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            New Staff
                          </Text>
                          <Text className="membersCounter" variant="body3">
                            3 members
                          </Text>
                        </Column>
                      </Row>
                    </Column>
                  </Grid>
                </Column>
              </Column>


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

        <Img
          src="images/img_whatsappimage22.png"
          className="WhatsAppImage"
          alt="WhatsAppImage"
        />
        {/* <Column className="absolute bg-white_A700 bottom-[37%] justify-start xl:p-[10px] 2xl:p-[11px] 3xl:p-[13px] lg:p-[8px] right-[0] rounded-radius5 shadow-bs w-[21%]">
          <Row className="items-center 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[9px] w-[63%]">
            <Img
              src="images/img_ellipse9.png"
              className="lg:h-[55px] xl:h-[69px] 2xl:h-[77px] 3xl:h-[92px] rounded-radius50 lg:w-[54px] xl:w-[68px] 2xl:w-[76px] 3xl:w-[91px]"
              alt="EllipseNine Six"
            />
            <Column className="lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] w-[48%]">
              <Text
                className="font-medium text-black_900 w-[auto]"
                as="h5"
                variant="h5"
              >
                New Staff
              </Text>
              <Text className="membersCounter" variant="body3">
                3 members
              </Text>
            </Column>
          </Row>
        </Column>
        <Column className="absolute bg-white_A700 bottom-[19%] justify-start xl:p-[10px] 2xl:p-[11px] 3xl:p-[13px] lg:p-[8px] right-[0] rounded-radius5 shadow-bs w-[21%]">
          <Row className="items-center 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[9px] w-[63%]">
            <Img
              src="images/img_ellipse9.png"
              className="lg:h-[55px] xl:h-[69px] 2xl:h-[77px] 3xl:h-[92px] rounded-radius50 lg:w-[54px] xl:w-[68px] 2xl:w-[76px] 3xl:w-[91px]"
              alt="EllipseNine Seven"
            />
            <Column className="lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] w-[48%]">
              <Text
                className="font-medium text-black_900 w-[auto]"
                as="h5"
                variant="h5"
              >
                New Staff
              </Text>
              <Text className="membersCounter" variant="body3">
                3 members
              </Text>
            </Column>
          </Row>
        </Column>
        <Column className="absolute bg-white_A700 bottom-[0] justify-start xl:p-[10px] 2xl:p-[11px] 3xl:p-[13px] lg:p-[8px] right-[0] rounded-radius5 shadow-bs w-[21%]">
          <Row className="items-center 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[9px] w-[63%]">
            <Img
              src="images/img_ellipse9.png"
              className="lg:h-[55px] xl:h-[69px] 2xl:h-[77px] 3xl:h-[92px] rounded-radius50 lg:w-[54px] xl:w-[68px] 2xl:w-[76px] 3xl:w-[91px]"
              alt="EllipseNine Eight"
            />
            <Column className="lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] w-[48%]">
              <Text
                className="font-medium text-black_900 w-[auto]"
                as="h5"
                variant="h5"
              >
                New Staff
              </Text>
              <Text className="membersCounter" variant="body3">
                3 members
              </Text>
            </Column>
          </Row>
        </Column> */}
      </Stack>
    </>
  );
};

export default GroupsPage;
