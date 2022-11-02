import React from "react";

import { Column, Row, Stack, Img, Text } from "components";
import Sidebar8 from "components/Sidebar/Sidebar8";

const HelpCenterThreePage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-poppins justify-start mx-[auto] w-[100%]">
        <Row className="items-start w-[95%]">
          <Stack className="lg:h-[576px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] w-[75%]">
            <Stack className="absolute lg:h-[576px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] w-[100%]">
              <Column className="absolute items-center justify-start left-[0] w-[76%]">
                <Row className="items-start justify-between w-[100%]">
                  <Sidebar8 className="w-[42%]" />
                  <Column className="justify-start lg:mt-[35px] xl:mt-[44px] 2xl:mt-[49px] 3xl:mt-[59px] w-[51%]">
                    <Column className="justify-start w-[100%]">
                      <Column className="bg-gray_200 justify-end lg:p-[12px] xl:p-[15px] 2xl:p-[16px] 3xl:p-[20px] rounded-radius5 w-[100%]">
                        <Row className="items-start lg:ml-[4px] 2xl:ml-[5px] xl:ml-[5px] 3xl:ml-[6px] mr-[auto] mt-[4px] w-[25%]">
                          <Img
                            src="images/img_search11.png"
                            className="searchEleven"
                            alt="searchEleven"
                          />
                          <Text
                            className="rowsearcheleven"
                            as="h5"
                            variant="h5"
                          >
                            Search
                          </Text>
                        </Row>
                      </Column>
                      <Text
                        className="columnhelpcenter_one"
                        as="h5"
                        variant="h5"
                      >
                        Help Center
                      </Text>
                    </Column>
                    <Column className="bg-white_A700 items-center justify-end lg:mt-[34px] xl:mt-[43px] 2xl:mt-[48px] 3xl:mt-[58px] lg:p-[20px] xl:p-[26px] 2xl:p-[29px] 3xl:p-[35px] rounded-radius6 shadow-bs5 w-[75%]">
                      <Img
                        src="images/img_flag.png"
                        className="flag"
                        alt="flag"
                      />
                      <Text className="columnflag" as="h5" variant="h5">
                        Getting Started
                      </Text>
                    </Column>
                  </Column>
                </Row>
              </Column>
              <Column className="absolute bg-white_A700 bottom-[19%] inset-x-[0] items-center justify-end mx-[auto] lg:p-[20px] xl:p-[26px] 2xl:p-[29px] 3xl:p-[35px] rounded-radius6 shadow-bs5 w-[29%]">
                <Img
                  src="images/img_meeting.png"
                  className="flag"
                  alt="meeting"
                />
                <Text className="columnflag" as="h5" variant="h5">
                  Edition Groups
                </Text>
              </Column>
              <Column className="absolute bg-white_A700 items-center justify-end lg:p-[20px] xl:p-[26px] 2xl:p-[29px] 3xl:p-[35px] right-[0] rounded-radius6 shadow-bs5 top-[28%] w-[29%]">
                <Img
                  src="images/img_checklist1.png"
                  className="flag"
                  alt="checklistOne"
                />
                <Text className="columnflag" as="h5" variant="h5">
                  Using Sales Layers
                </Text>
              </Column>
              <Column className="absolute bg-white_A700 bottom-[19%] items-center justify-end lg:p-[20px] xl:p-[26px] 2xl:p-[29px] 3xl:p-[35px] right-[0] rounded-radius6 shadow-bs5 w-[29%]">
                <Img
                  src="images/img_jigsaw.png"
                  className="flag"
                  alt="jigsaw"
                />
                <Text className="columnflag" as="h5" variant="h5">
                  Edition Groups
                </Text>
              </Column>
              <Column
                className="absolute bg-cover bg-repeat justify-end left-[0] lg:p-[31px] xl:p-[39px] 2xl:p-[43px] 3xl:p-[52px] top-[0] w-[40%]"
                style={{ backgroundImage: "url('images/img_group389.png')" }}
              >
                <Row className="items-center lg:ml-[26px] xl:ml-[33px] 2xl:ml-[37px] 3xl:ml-[44px] mr-[auto] xl:mt-[106px] 2xl:mt-[119px] 3xl:mt-[143px] lg:mt-[84px] w-[43%]">
                  <Img
                    src="images/img_dashboard5.png"
                    className="dashboardFive"
                    alt="dashboardFive"
                  />
                  <Text className="rowdashboardfive" as="h5" variant="h5">
                    Dashboard
                  </Text>
                </Row>
              </Column>
            </Stack>
            <Row className="absolute items-center justify-center left-[8%] py-[2px] top-[25%] w-[12%]">
              <Img
                src="images/img_calendar31.png"
                className="dashboardFive"
                alt="calendarThirtyOne"
              />
              <Column className="items-center lg:ml-[10px] xl:ml-[13px] 2xl:ml-[14px] 3xl:ml-[17px] w-[69%]">
                <Text
                  className="font-medium text-white_A700_7a w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Calender
                </Text>
              </Column>
            </Row>
          </Stack>
          <Column className="items-center justify-start lg:ml-[36px] xl:ml-[46px] 2xl:ml-[51px] 3xl:ml-[62px] lg:mt-[29px] xl:mt-[37px] 2xl:mt-[41px] 3xl:mt-[49px] w-[22%]">
            <Column className="items-end justify-start w-[100%]">
              <Img
                src="images/img_ellipse2.png"
                className="lg:h-[47px] xl:h-[59px] 2xl:h-[66px] 3xl:h-[79px] rounded-radius50 lg:w-[46px] xl:w-[58px] 2xl:w-[65px] 3xl:w-[78px]"
                alt="EllipseTwo"
              />
              <Column className="bg-white_A700 items-center justify-end xl:mt-[108px] 2xl:mt-[121px] 3xl:mt-[145px] lg:mt-[86px] lg:p-[20px] xl:p-[26px] 2xl:p-[29px] 3xl:p-[35px] rounded-radius6 shadow-bs5 w-[100%]">
                <Img src="images/img_link.png" className="flag" alt="link" />
                <Text className="columnflag" as="h5" variant="h5">
                  Channels & Integrations
                </Text>
              </Column>
            </Column>
            <Column className="bg-white_A700 items-center justify-end lg:mt-[34px] xl:mt-[43px] 2xl:mt-[48px] 3xl:mt-[58px] lg:p-[20px] xl:p-[26px] 2xl:p-[29px] 3xl:p-[35px] rounded-radius6 shadow-bs5 w-[100%]">
              <Img
                src="images/img_loudspeaker.png"
                className="flag"
                alt="loudspeaker"
              />
              <Text className="columnloudspeaker" as="h5" variant="h5">
                Updates
              </Text>
            </Column>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default HelpCenterThreePage;
