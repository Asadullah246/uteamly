import React from "react";

import { Column, Row, Stack, Img, Text, Button, List, Line } from "components";
import Sidebar from "components/Sidebar/Sidebar";
import { useNavigate } from "react-router-dom";

const ActivitiesPage = () => {
  const navigate = useNavigate();

  function handleNavigate302() {
    navigate("/users");
  }
  function handleNavigate310() {
    navigate("/settings");
  }

  return (
    <>
      <Column className="bg-white_A700 font-poppins justify-end mx-[auto] lg:pr-[56px] xl:pr-[70px] 2xl:pr-[78px] 3xl:pr-[94px] w-[100%]">
        <Row className="items-start w-[100%]">
          <Stack className="lg:h-[588px] xl:h-[735px] 2xl:h-[827px] 3xl:h-[992px] w-[67%]">
            <Stack className="absolute bottom-[2%] lg:h-[576px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] w-[100%]">
              <Column className="absolute items-center justify-start w-[100%]">
                <Row className="items-start justify-between w-[100%]">
                  <Sidebar
                    className="w-[35%]"
                    onGroup3846Click={handleNavigate310}
                  />
                  <Column className="justify-start lg:mt-[35px] xl:mt-[44px] 2xl:mt-[49px] 3xl:mt-[59px] w-[59%]">
                    <Column className="bg-gray_200 justify-end lg:p-[12px] xl:p-[15px] 2xl:p-[16px] 3xl:p-[20px] rounded-radius5 w-[73%]">
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
                    <Column className="bg-white_A700 items-center justify-end lg:mt-[32px] xl:mt-[41px] 2xl:mt-[46px] 3xl:mt-[55px] py-[4px] rounded-radius8 shadow-bs3 w-[100%]">
                      <Column className="items-center justify-start lg:mt-[4px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] w-[100%]">
                        <Row className="items-start justify-between w-[95%]">
                          <Text
                            className="font-semibold mt-[3px] text-blue_600 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            New User list{" "}
                          </Text>
                          <Button
                            className="font-medium xl:text-[11px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[23%]"
                            shape="RoundedBorder4"
                            size="md"
                            variant="FillCyan900"
                          >
                            View All
                          </Button>
                        </Row>
                        <Column className="items-center justify-start xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]">
                          <List
                            className="gap-[0] min-h-[auto] w-[100%]"
                            orientation="vertical"
                          >
                            <Column className="listellipsethree">
                              <Column className="items-center justify-start w-[100%]">
                                <Row className="items-center justify-between w-[95%]">
                                  <Img
                                    src="images/img_ellipse3.png"
                                    className="lg:h-[35px] xl:h-[44px] 2xl:h-[49px] 3xl:h-[59px] rounded-radius50 lg:w-[34px] xl:w-[43px] 2xl:w-[48px] 3xl:w-[58px]"
                                    alt="EllipseThree"
                                  />
                                  <Text
                                    className="text-black_900 w-[auto]"
                                    variant="body4"
                                  >
                                    Minerva Bannet
                                  </Text>
                                  <Text
                                    className="text-black_900 w-[auto]"
                                    variant="body4"
                                  >
                                    9182
                                  </Text>
                                  <Text
                                    className="text-blue_600 w-[auto]"
                                    variant="body4"
                                  >
                                    Edit
                                  </Text>
                                  <Text
                                    className="text-blue_600 w-[auto]"
                                    variant="body4"
                                  >
                                    View
                                  </Text>
                                </Row>
                                <Line className="bg-black_900_30 h-[0.5px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]" />
                              </Column>
                            </Column>
                            <Column className="listellipsethree">
                              <Column className="items-center justify-start w-[100%]">
                                <Row className="items-center justify-between w-[95%]">
                                  <Img
                                    src="images/img_ellipse3_43X43.png"
                                    className="lg:h-[35px] xl:h-[44px] 2xl:h-[49px] 3xl:h-[59px] rounded-radius50 lg:w-[34px] xl:w-[43px] 2xl:w-[48px] 3xl:w-[58px]"
                                    alt="EllipseThree One"
                                  />
                                  <Text
                                    className="text-black_900 w-[auto]"
                                    variant="body4"
                                  >
                                    Minerva Bannet
                                  </Text>
                                  <Text
                                    className="text-black_900 w-[auto]"
                                    variant="body4"
                                  >
                                    9182
                                  </Text>
                                  <Text
                                    className="text-blue_600 w-[auto]"
                                    variant="body4"
                                  >
                                    Edit
                                  </Text>
                                  <Text
                                    className="text-blue_600 w-[auto]"
                                    variant="body4"
                                  >
                                    View
                                  </Text>
                                </Row>
                                <Line className="bg-black_900_30 h-[0.5px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]" />
                              </Column>
                            </Column>
                            <Column className="listellipsethree">
                              <Column className="items-center justify-start w-[100%]">
                                <Row className="items-center justify-between w-[95%]">
                                  <Img
                                    src="images/img_ellipse3_1.png"
                                    className="lg:h-[35px] xl:h-[44px] 2xl:h-[49px] 3xl:h-[59px] rounded-radius50 lg:w-[34px] xl:w-[43px] 2xl:w-[48px] 3xl:w-[58px]"
                                    alt="EllipseThree Two"
                                  />
                                  <Text
                                    className="text-black_900 w-[auto]"
                                    variant="body4"
                                  >
                                    Minerva Bannet
                                  </Text>
                                  <Text
                                    className="text-black_900 w-[auto]"
                                    variant="body4"
                                  >
                                    9182
                                  </Text>
                                  <Text
                                    className="text-blue_600 w-[auto]"
                                    variant="body4"
                                  >
                                    Edit
                                  </Text>
                                  <Text
                                    className="text-blue_600 w-[auto]"
                                    variant="body4"
                                  >
                                    View
                                  </Text>
                                </Row>
                                <Line className="bg-black_900_30 h-[0.5px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]" />
                              </Column>
                            </Column>
                          </List>
                          <Row className="items-center justify-between xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[95%]">
                            <Img
                              src="images/img_ellipse3_2.png"
                              className="lg:h-[35px] xl:h-[44px] 2xl:h-[49px] 3xl:h-[59px] rounded-radius50 lg:w-[34px] xl:w-[43px] 2xl:w-[48px] 3xl:w-[58px]"
                              alt="EllipseThree Three"
                            />
                            <Text
                              className="text-black_900 w-[auto]"
                              variant="body4"
                            >
                              Minerva Bannet
                            </Text>
                            <Text
                              className="text-black_900 w-[auto]"
                              variant="body4"
                            >
                              9182
                            </Text>
                            <Text
                              className="text-blue_600 w-[auto]"
                              variant="body4"
                            >
                              Edit
                            </Text>
                            <Text
                              className="text-blue_600 w-[auto]"
                              variant="body4"
                            >
                              View
                            </Text>
                          </Row>
                        </Column>
                      </Column>
                    </Column>
                  </Column>
                </Row>
              </Column>
              <Column className="absolute bg-white_A700 bottom-[3%] font-nunito items-end justify-start lg:p-[17px] xl:p-[22px] 2xl:p-[24px] 3xl:p-[29px] right-[0] rounded-radius8 shadow-bs3 w-[59%]">
                <Column className="items-center justify-start 3xl:mb-[113px] lg:mb-[67px] xl:mb-[84px] 2xl:mb-[94px] lg:mr-[56px] xl:mr-[70px] 2xl:mr-[78px] 3xl:mr-[94px] w-[22%]">
                  <Row className="items-start w-[98%]">
                    <div className="bg-blue_601 xl:h-[11px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[8px] mt-[2px] rounded-radius50 xl:w-[10px] 2xl:w-[11px] 3xl:w-[13px] lg:w-[8px]"></div>
                    <Text className="rowellipsefour" variant="body2">
                      Main Branch
                    </Text>
                  </Row>
                  <Row className="items-center lg:mt-[10px] xl:mt-[13px] 2xl:mt-[14px] 3xl:mt-[17px] w-[98%]">
                    <div className="bg-orange_400 xl:h-[11px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[8px] rounded-radius50 xl:w-[10px] 2xl:w-[11px] 3xl:w-[13px] lg:w-[8px]"></div>
                    <Text className="rowellipsefour" variant="body2">
                      NYC, Branch
                    </Text>
                  </Row>
                  <Row className="items-center lg:mt-[10px] xl:mt-[13px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]">
                    <div className="bg-red_A700 xl:h-[11px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[8px] rounded-radius50 xl:w-[10px] 2xl:w-[11px] 3xl:w-[13px] lg:w-[8px]"></div>
                    <Text className="rowellipsefour" variant="body2">
                      ABC, Branch
                    </Text>
                  </Row>
                  <Row className="items-center lg:mt-[10px] xl:mt-[13px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]">
                    <div className="bg-teal_A400 xl:h-[11px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[8px] rounded-radius50 xl:w-[10px] 2xl:w-[11px] 3xl:w-[13px] lg:w-[8px]"></div>
                    <Text className="rowellipsefour" variant="body2">
                      ABC, Branch
                    </Text>
                  </Row>
                  <Row className="items-center lg:mt-[10px] xl:mt-[13px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]">
                    <div className="bg-light_blue_900 xl:h-[11px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[8px] rounded-radius50 xl:w-[10px] 2xl:w-[11px] 3xl:w-[13px] lg:w-[8px]"></div>
                    <Text className="rowellipsefour" variant="body2">
                      ABC, Branch
                    </Text>
                  </Row>
                </Column>
              </Column>
            </Stack>
            <Img
              src="images/img_chart011.png"
              className="absolute bottom-[0] lg:h-[240px] xl:h-[301px] 2xl:h-[338px] 3xl:h-[406px] right-[25%] lg:w-[240px] xl:w-[300px] 2xl:w-[337px] 3xl:w-[405px]"
              alt="chart011"
            />
            <Column
              className="absolute bg-cover bg-repeat justify-end left-[0] p-[4px] top-[0] w-[44%]"
              style={{ backgroundImage: "url('images/img_group48.png')" }}
            >
              <Column className="justify-start lg:ml-[54px] xl:ml-[68px] 2xl:ml-[76px] 3xl:ml-[91px] lg:mt-[107px] xl:mt-[134px] 2xl:mt-[150px] 3xl:mt-[181px] w-[35%]">
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
                <Row
                  className="common-pointer items-start lg:mt-[17px] xl:mt-[22px] 2xl:mt-[24px] 3xl:mt-[29px] w-[56%]"
                  onClick={handleNavigate302}
                >
                  <Img
                    src="images/img_employee1.png"
                    className="dashboardFive"
                    alt="employeeOne"
                  />
                  <Text className="rowemployeeone" as="h5" variant="h5">
                    User
                  </Text>
                </Row>
              </Column>
            </Column>
          </Stack>
          <Column className="items-end justify-start lg:ml-[20px] xl:ml-[26px] 2xl:ml-[29px] 3xl:ml-[35px] lg:mt-[29px] xl:mt-[37px] 2xl:mt-[41px] 3xl:mt-[49px] w-[30%]">
            <Img
              src="images/img_ellipse2.png"
              className="lg:h-[47px] xl:h-[59px] 2xl:h-[66px] 3xl:h-[79px] rounded-radius50 lg:w-[46px] xl:w-[58px] 2xl:w-[65px] 3xl:w-[78px]"
              alt="EllipseTwo"
            />
            <Column className="bg-white_A700 items-center justify-end lg:mt-[32px] xl:mt-[41px] 2xl:mt-[46px] 3xl:mt-[55px] py-[2px] rounded-radius8 shadow-bs3 w-[100%]">
              <Column className="items-center justify-start lg:mt-[5px] 2xl:mt-[7px] xl:mt-[7px] 3xl:mt-[9px] w-[100%]">
                <Row className="items-center justify-between w-[93%]">
                  <Text
                    className="font-semibold text-blue_600 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Birthday List
                  </Text>
                  <Button
                    className="font-medium xl:text-[11px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[31%]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="FillCyan900"
                  >
                    View All
                  </Button>
                </Row>
                <Column className="justify-start lg:mt-[10px] xl:mt-[13px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]">
                  <List
                    className="gap-[0] min-h-[auto] w-[100%]"
                    orientation="vertical"
                  >
                    <Column className="listellipsethree_four">
                      <Column className="justify-start w-[100%]">
                        <Row className="items-center xl:ml-[12px] 2xl:ml-[13px] 3xl:ml-[16px] lg:ml-[9px] w-[40%]">
                          <Img
                            src="images/img_ellipse3.png"
                            className="lg:h-[35px] xl:h-[44px] 2xl:h-[49px] 3xl:h-[59px] mb-[1px] rounded-radius50 lg:w-[34px] xl:w-[43px] 2xl:w-[48px] 3xl:w-[58px]"
                            alt="EllipseThree Four"
                          />
                          <Column className="lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] w-[60%]">
                            <Text
                              className="text-black_900 w-[auto]"
                              variant="body4"
                            >
                              Minerva Bannet
                            </Text>
                            <Text className="janCounter" variant="body4">
                              02 Jan
                            </Text>
                          </Column>
                        </Row>
                        <Line className="bg-black_900_30 h-[0.5px] xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] w-[100%]" />
                      </Column>
                    </Column>
                    <Column className="listellipsethree_four">
                      <Column className="justify-start w-[100%]">
                        <Row className="items-center xl:ml-[12px] 2xl:ml-[13px] 3xl:ml-[16px] lg:ml-[9px] w-[40%]">
                          <Img
                            src="images/img_ellipse3_3.png"
                            className="lg:h-[35px] xl:h-[44px] 2xl:h-[49px] 3xl:h-[59px] mb-[1px] rounded-radius50 lg:w-[34px] xl:w-[43px] 2xl:w-[48px] 3xl:w-[58px]"
                            alt="EllipseThree Five"
                          />
                          <Column className="lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] w-[60%]">
                            <Text
                              className="text-black_900 w-[auto]"
                              variant="body4"
                            >
                              Minerva Bannet
                            </Text>
                            <Text className="janCounter" variant="body4">
                              02 Jan
                            </Text>
                          </Column>
                        </Row>
                        <Line className="bg-black_900_30 h-[0.5px] xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] w-[100%]" />
                      </Column>
                    </Column>
                    <Column className="listellipsethree_four">
                      <Column className="justify-start w-[100%]">
                        <Row className="items-center xl:ml-[12px] 2xl:ml-[13px] 3xl:ml-[16px] lg:ml-[9px] w-[40%]">
                          <Img
                            src="images/img_ellipse3_4.png"
                            className="lg:h-[35px] xl:h-[44px] 2xl:h-[49px] 3xl:h-[59px] mb-[1px] rounded-radius50 lg:w-[34px] xl:w-[43px] 2xl:w-[48px] 3xl:w-[58px]"
                            alt="EllipseThree Six"
                          />
                          <Column className="lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] w-[60%]">
                            <Text
                              className="text-black_900 w-[auto]"
                              variant="body4"
                            >
                              Minerva Bannet
                            </Text>
                            <Text className="janCounter" variant="body4">
                              02 Jan
                            </Text>
                          </Column>
                        </Row>
                        <Line className="bg-black_900_30 h-[0.5px] xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] w-[100%]" />
                      </Column>
                    </Column>
                  </List>
                  <Column className="items-center justify-start xl:ml-[12px] 2xl:ml-[13px] 3xl:ml-[16px] lg:ml-[9px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[40%]">
                    <Row className="items-center justify-between w-[100%]">
                      <Img
                        src="images/img_ellipse3_5.png"
                        className="lg:h-[35px] xl:h-[44px] 2xl:h-[49px] 3xl:h-[59px] mb-[1px] rounded-radius50 lg:w-[34px] xl:w-[43px] 2xl:w-[48px] 3xl:w-[58px]"
                        alt="EllipseThree Seven"
                      />
                      <Column className="w-[60%]">
                        <Text
                          className="text-black_900 w-[auto]"
                          variant="body4"
                        >
                          Minerva Bannet
                        </Text>
                        <Text className="janCounter" variant="body4">
                          02 Jan
                        </Text>
                      </Column>
                    </Row>
                  </Column>
                </Column>
              </Column>
            </Column>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default ActivitiesPage;
