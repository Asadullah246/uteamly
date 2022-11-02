import React from "react";

import { Stack, Column, Row, Img, Text, Button, CheckBox } from "components";
import Sidebar1 from "components/Sidebar/Sidebar1";
import { useNavigate } from "react-router-dom";

const DashboardOnePage = () => {
  const navigate = useNavigate();

  function handleNavigate305() {
    navigate("/activitiesone");
  }

  return (
    <>
      <Stack className="bg-white_A700 font-poppins lg:h-[576px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] mx-[auto] lg:pr-[56px] xl:pr-[70px] 2xl:pr-[78px] 3xl:pr-[94px] w-[100%]">
        <Column className="absolute items-center justify-start left-[0] w-[95%]">
          <Row className="items-start justify-between w-[100%]">
            <Sidebar1
              className="w-[24%]"
              onrowchecklistClick={handleNavigate305}
            />
            <Column className="justify-start lg:mt-[29px] xl:mt-[37px] 2xl:mt-[41px] 3xl:mt-[49px] w-[72%]">
              <Row className="items-end justify-between w-[100%]">
                <Column className="bg-gray_200 justify-end mb-[1px] lg:mt-[4px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] lg:p-[12px] xl:p-[15px] 2xl:p-[16px] 3xl:p-[20px] rounded-radius5 w-[40%]">
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
                  className="lg:h-[47px] xl:h-[59px] 2xl:h-[66px] 3xl:h-[79px] rounded-radius50 lg:w-[46px] xl:w-[58px] 2xl:w-[65px] 3xl:w-[78px]"
                  alt="EllipseTwo"
                />
              </Row>
              <Row className=" justify-between w-[100%] lg:mt-[32px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px]">
                <Column className="bg-white_A700 justify-start  xl:p-[11px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] rounded-radius8 shadow-bs3 w-[55%]">
                  <Text className="columnprogress" as="h4" variant="h4">
                    Progress
                  </Text>
                  <Img
                    src="images/img_untitled11_220X458.png"
                    className="lg:h-[176px] xl:h-[221px] 2xl:h-[248px] 3xl:h-[298px] xl:mb-[10px] 2xl:mb-[11px] 3xl:mb-[13px] lg:mb-[8px] lg:mt-[17px] xl:mt-[22px] 2xl:mt-[24px] 3xl:mt-[29px] w-[100%]"
                    alt="UntitledEleven"
                  />
                </Column>
                <Column className=" bg-white_A700 items-center justify-start xl:p-[12px] 2xl:p-[13px] 3xl:p-[16px] lg:p-[9px] right-[0] rounded-radius8 shadow-bs3  w-[40%]">
                  <Text className="columntutorials_one" as="h4" variant="h4">
                    Tutorials
                  </Text>
                  <Img
                    src="images/img_ezgif2f2f3790.png"
                    className="lg:h-[165px] xl:h-[207px] 2xl:h-[232px] 3xl:h-[279px] lg:mb-[28px] xl:mb-[35px] 2xl:mb-[39px] 3xl:mb-[47px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[15px] 3xl:mt-[18px] lg:w-[164px] xl:w-[206px] 2xl:w-[231px] 3xl:w-[278px]"
                    alt="ezgif2f2f3790"
                  />
                </Column>

              </Row>

              {/* table  */}

              <Column className="mt-10 bg-white_A700 h-fit items-center justify-start xl:p-[12px] 2xl:p-[13px] 3xl:p-[16px] lg:p-[9px] right-[0] rounded-radius8 shadow-bs3 w-[100%]">
                <Column className="items-center justify-start mb-0 w-[100%]">
                  <Column className="justify-start w-[100%]">
                    <Row className="items-end justify-between w-[100%]"> 
                      <Text
                        className="font-semibold 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] text-blue_600 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Employees
                      </Text>
                      <Button
                        className="font-medium mb-[1px] xl:text-[11px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[12%]"
                        shape="RoundedBorder4"
                        size="md"
                        variant="FillCyan900"
                      >
                        View All
                      </Button>
                    </Row>
                    <Row className="font-nunito items-center lg:ml-[14px] xl:ml-[18px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[24px] xl:mt-[31px] 2xl:mt-[34px] 3xl:mt-[41px] w-[88%]">
                      <Text className="ID" as="h6" variant="h6">
                        ID
                      </Text>
                      <Text className="Name2 font-bold" as="h6" variant="h6">
                        Name
                      </Text>
                      <Text className="Role  font-bold" as="h6" variant="h6">
                        Role
                      </Text>
                      <Text className="PhoneNo1 font-bold" as="h6" variant="h6">
                        Phone No.
                      </Text>
                      <Text className="Email font-bold" as="h6" variant="h6">
                        Email
                      </Text>
                    </Row>



                  </Column>
                  <Column className="font-nunito items-center justify-start lg:mt-[15px] xl:mt-[19px] 2xl:mt-[21px] 3xl:mt-[25px] w-[99%]">
                    <Row className="bg-white_A700 items-end justify-between 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[9px] rounded-radius7 shadow-bs w-[100%] mb-3">
                      <CheckBox
                        className="font-normal 2xl:mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[9px] ml-[3px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[13px] 2xl:text-[14px] 3xl:text-[17px] text-black_900_b5"
                        inputClassName="h-[22px] mr-[5px] w-[22px]"
                        name="19281"
                        label="19281"
                        shape="RoundedBorder3"
                        size="lg"
                        variant="OutlineBluegray100"
                      ></CheckBox>
                      <Text
                        className="lg:my-[11px] xl:my-[14px] 2xl:my-[15px] 3xl:my-[18px] row19281"
                        variant="body2"
                      >
                        Jack Hood
                      </Text>
                      <Text
                        className="xl:mb-[11px] 2xl:mb-[12px] 3xl:mb-[14px] lg:mb-[8px] lg:mt-[13px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[22px] row19281"
                        variant="body2"
                      >
                        Manager
                      </Text>
                      <Text
                        className="lg:my-[11px] xl:my-[14px] 2xl:my-[15px] 3xl:my-[18px] row19281"
                        variant="body2"
                      >
                        0900-87621231
                      </Text>
                      <Text
                        className="xl:mb-[11px] 2xl:mb-[12px] 3xl:mb-[14px] lg:mb-[8px] lg:mt-[13px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[22px] row19281"
                        variant="body2"
                      >
                        jackhood@abc.com
                      </Text>
                    </Row>
                    <Row className="bg-white_A700 items-end justify-between 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[9px] rounded-radius7 shadow-bs w-[100%] mb-3">
                      <CheckBox
                        className="font-normal 2xl:mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[9px] ml-[3px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[13px] 2xl:text-[14px] 3xl:text-[17px] text-black_900_b5"
                        inputClassName="h-[22px] mr-[5px] w-[22px]"
                        name="19281"
                        label="19281"
                        shape="RoundedBorder3"
                        size="lg"
                        variant="OutlineBluegray100"
                      ></CheckBox>
                      <Text
                        className="lg:my-[11px] xl:my-[14px] 2xl:my-[15px] 3xl:my-[18px] row19281"
                        variant="body2"
                      >
                        Jack Hood
                      </Text>
                      <Text
                        className="xl:mb-[11px] 2xl:mb-[12px] 3xl:mb-[14px] lg:mb-[8px] lg:mt-[13px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[22px] row19281"
                        variant="body2"
                      >
                        Manager
                      </Text>
                      <Text
                        className="lg:my-[11px] xl:my-[14px] 2xl:my-[15px] 3xl:my-[18px] row19281"
                        variant="body2"
                      >
                        0900-87621231
                      </Text>
                      <Text
                        className="xl:mb-[11px] 2xl:mb-[12px] 3xl:mb-[14px] lg:mb-[8px] lg:mt-[13px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[22px] row19281"
                        variant="body2"
                      >
                        jackhood@abc.com
                      </Text>
                    </Row>
                    {/* <Stack className="lg:h-[35px] xl:h-[44px] 2xl:h-[49px] 3xl:h-[59px] lg:mt-[13px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%]">
                      <div className="absolute bg-white_A700 bottom-[0] lg:h-[49px] xl:h-[62px] 2xl:h-[69px] 3xl:h-[83px] rounded-radius7 shadow-bs w-[100%]"></div>
                      <Row className="absolute bottom-[0] inset-x-[0] items-start justify-between mx-[auto] w-[98%]">
                        <CheckBox
                          className="font-normal not-italic lg:text-[10px] xl:text-[13px] 2xl:text-[14px] 3xl:text-[17px] text-black_900_b5"
                          inputClassName="h-[22px] mr-[5px] w-[22px]"
                          name="19281 One"
                          label="19281"
                          shape="RoundedBorder3"
                          size="lg"
                          variant="OutlineBluegray100"
                        ></CheckBox>
                        <Text className="mt-[3px] row19281" variant="body2">
                          Jack Hood
                        </Text>
                        <Text className="Manager_One" variant="body2">
                          Manager
                        </Text>
                        <Text className="mt-[3px] row19281" variant="body2">
                          0900-87621231
                        </Text>
                        <Text className="Manager_One" variant="body2">
                          jackhood@abc.com
                        </Text>
                      </Row>
                    </Stack> */}
                  </Column>
                </Column>
              </Column>

            </Column>
          </Row>
        </Column>


        <Img
          src="images/img_whatsappimage22.png" 
          className="WhatsAppImage " 
          alt="WhatsAppImage"
        />
      </Stack>
    </>
  );
};

export default DashboardOnePage;
