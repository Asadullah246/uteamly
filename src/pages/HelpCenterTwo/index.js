import React from "react";

import { Column, Row, Stack, Img, Text } from "components";
import Sidebar1 from "components/Sidebar/Sidebar1";
import { useNavigate } from "react-router-dom";

const HelpCenterTwoPage = () => {
  const navigate = useNavigate();

  function handleNavigate44() {
    navigate("/activitiesone");
  }

  return (
    <>
      <Column className="bg-white_A700 font-poppins justify-start mx-[auto] w-[100%]">
        <Row className="items-start w-[95%]">
          <Stack className="lg:h-[576px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] w-[75%]">
            <Column className="absolute items-center justify-start left-[0] w-[76%]">
              <Row className="items-start justify-between w-[100%]">
                <Sidebar1
                  className="w-[42%]"
                  onrowchecklistClick={handleNavigate44}
                />
                <Column className="justify-start lg:mt-[35px] xl:mt-[44px] 2xl:mt-[49px] 3xl:mt-[59px] w-[51%]">
                  <Column className="justify-start w-[100%]">
                    <Column className="bg-gray_200 justify-end lg:p-[12px] xl:p-[15px] 2xl:p-[16px] 3xl:p-[20px] rounded-radius5 w-[100%]">
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
                    <Text className="columntutorials_one1" as="h5" variant="h5">
                      Tutorials
                    </Text>
                  </Column>
                  <Column className="bg-white_A700 items-center justify-end lg:mt-[37px] xl:mt-[47px] 2xl:mt-[52px] 3xl:mt-[63px] lg:p-[20px] xl:p-[26px] 2xl:p-[29px] 3xl:p-[35px] rounded-radius6 shadow-bs5 w-[75%]">
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
              <Img src="images/img_jigsaw.png" className="flag" alt="jigsaw" />
              <Text className="columnflag" as="h5" variant="h5">
                Edition Groups
              </Text>
            </Column>
            <Img
              src="images/img_whatsappimage_5.png"
              className="absolute lg:h-[164px] xl:h-[205px] 2xl:h-[230px] 3xl:h-[276px] left-[0] top-[0] w-[40%]"
              alt="WhatsAppImage"
            />
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

export default HelpCenterTwoPage;
