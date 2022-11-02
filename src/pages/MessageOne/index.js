import React from "react";

import {
  Column,
  Row,
  Stack,
  Img,
  Text,
  Line,
  List,
  Input,
  Button,
} from "components";
import Sidebar1 from "components/Sidebar/Sidebar1";
import { useNavigate } from "react-router-dom";

const MessageOnePage = () => {
  const navigate = useNavigate();

  function handleNavigate294() {
    navigate("/activitiesone");
  }

  return (
    <>
      <Column className="bg-white_A700 font-poppins justify-start mx-[auto] w-[100%]">
        <Row className="items-center w-[100%]">
          <Stack className="lg:h-[576px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] w-[100%]">
            <Stack className="absolute lg:h-[576px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] w-[100%]">
              <Column className="absolute items-center justify-start w-[95%]">
                <Row className="items-start justify-between w-[100%]">
                  <Sidebar1
                    className="w-[24%]"
                    onrowchecklistClick={handleNavigate294}
                  />
                  <Column className="justify-start lg:mt-[29px] xl:mt-[37px] 2xl:mt-[41px] 3xl:mt-[49px] w-[72%]">

                    <Row className="justify-between items-center">
                      <Column className="bg-gray_200 justify-end lg:mt-[34px] xl:mt-[43px] 2xl:mt-[48px] 3xl:mt-[58px] lg:p-[12px] xl:p-[15px] 2xl:p-[16px] 3xl:p-[20px] rounded-radius5 w-[51%]">
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



                    <Row className="justify-between items-start mt-10 mb-6">
                      <Column className=" bg-white_A700  justify-end py-[1px] rounded-radius10 shadow-bs w-[40%]">
                        <Text className="columninbox" as="h4" variant="h4">
                          Inbox
                        </Text>
                        <Column className="justify-start lg:mt-[14px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] w-[100%]">
                          <Stack className="xl:h-[106px] 2xl:h-[119px] 3xl:h-[142px] lg:h-[84px] w-[100%]">
                            <Column className="absolute items-center justify-start top-[1%] w-[100%]">
                              <Column className="items-center justify-start w-[100%]">
                                <Line className="bg-black_900_72 h-[0.5px] w-[100%]" />
                                <Column className="justify-start lg:mt-[16px] xl:mt-[21px] 2xl:mt-[23px] 3xl:mt-[28px] rounded-radius7 w-[100%]">
                                  <Column className="items-center justify-start lg:ml-[16px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] rounded-radius7 w-[77%]">
                                    <Row className="items-start justify-between w-[100%]">
                                      <Img
                                        src="images/img_rectangle1299.png"
                                        className="Rectangle1299"
                                        alt="Rectangle1299"
                                      />
                                      <Column className="justify-start mt-[4px] w-[69%]">
                                        <Text
                                          className="font-medium text-black_900 w-[auto]"
                                          as="h6"
                                          variant="h6"
                                        >
                                          Jack Arno
                                        </Text>
                                        <Text className="Hiareyoufre" variant="body3">
                                          Hi, are you free can we talk .....
                                        </Text>
                                      </Column>
                                    </Row>
                                  </Column>
                                  <Line className="bg-black_900_72 h-[0.5px] lg:mt-[17px] xl:mt-[22px] 2xl:mt-[24px] 3xl:mt-[29px] w-[100%]" />
                                </Column>
                              </Column>
                            </Column>
                            <Line className="absolute bg-blue_600 xl:h-[106px] 2xl:h-[119px] 3xl:h-[142px] lg:h-[84px] left-[0] w-[3px]" />
                          </Stack>
                          <List
                            className="gap-[0] min-h-[auto] lg:mt-[16px] xl:mt-[21px] 2xl:mt-[23px] 3xl:mt-[28px] w-[100%]"
                            orientation="vertical"
                          >
                            <Column className="message_one">
                              <Column className="items-center justify-start lg:ml-[16px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] rounded-radius7 w-[77%]">
                                <Row className="items-start justify-between w-[100%]">
                                  <Img
                                    src="images/img_rectangle1299_60X60.png"
                                    className="Rectangle1299"
                                    alt="Rectangle1299 One"
                                  />
                                  <Column className="justify-start mt-[4px] w-[69%]">
                                    <Text
                                      className="font-medium text-black_900 w-[auto]"
                                      as="h6"
                                      variant="h6"
                                    >
                                      Jack Arno
                                    </Text>
                                    <Text className="Hiareyoufre" variant="body3">
                                      Hi, are you free can we talk .....
                                    </Text>
                                  </Column>
                                </Row>
                              </Column>
                              <Line className="bg-black_900_72 h-[0.5px] lg:mt-[17px] xl:mt-[22px] 2xl:mt-[24px] 3xl:mt-[29px] w-[100%]" />
                            </Column>
                            <Column className="message_one">
                              <Column className="items-center justify-start lg:ml-[16px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] rounded-radius7 w-[77%]">
                                <Row className="items-start justify-between w-[100%]">
                                  <Img
                                    src="images/img_rectangle1299_1.png"
                                    className="Rectangle1299"
                                    alt="Rectangle1299 Two"
                                  />
                                  <Column className="justify-start mt-[4px] w-[69%]">
                                    <Text
                                      className="font-medium text-black_900 w-[auto]"
                                      as="h6"
                                      variant="h6"
                                    >
                                      Jack Arno
                                    </Text>
                                    <Text className="Hiareyoufre" variant="body3">
                                      Hi, are you free can we talk .....
                                    </Text>
                                  </Column>
                                </Row>
                              </Column>
                              <Line className="bg-black_900_72 h-[0.5px] lg:mt-[17px] xl:mt-[22px] 2xl:mt-[24px] 3xl:mt-[29px] w-[100%]" />
                            </Column>
                            <Column className="message_one">
                              <Column className="items-center justify-start lg:ml-[16px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] rounded-radius7 w-[77%]">
                                <Row className="items-start justify-between w-[100%]">
                                  <Img
                                    src="images/img_rectangle1299_2.png"
                                    className="Rectangle1299"
                                    alt="Rectangle1299 Three"
                                  />
                                  <Column className="justify-start mt-[4px] w-[69%]">
                                    <Text
                                      className="font-medium text-black_900 w-[auto]"
                                      as="h6"
                                      variant="h6"
                                    >
                                      Jack Arno
                                    </Text>
                                    <Text className="Hiareyoufre" variant="body3">
                                      Hi, are you free can we talk .....
                                    </Text>
                                  </Column>
                                </Row>
                              </Column>
                              <Line className="bg-black_900_72 h-[0.5px] lg:mt-[17px] xl:mt-[22px] 2xl:mt-[24px] 3xl:mt-[29px] w-[100%]" />
                            </Column>
                          </List>
                          <Column className="items-center justify-start lg:ml-[16px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] lg:mt-[16px] xl:mt-[21px] 2xl:mt-[23px] 3xl:mt-[28px] rounded-radius7 w-[77%]">
                            <Row className="items-start justify-between w-[100%]">
                              <Img
                                src="images/img_rectangle1299_3.png"
                                className="Rectangle1299"
                                alt="Rectangle1299 Four"
                              />
                              <Column className="justify-start mt-[4px] w-[69%]">
                                <Text
                                  className="font-medium text-black_900 w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  Jack Arno
                                </Text>
                                <Text className="Hiareyoufre" variant="body3">
                                  Hi, are you free can we talk .....
                                </Text>
                              </Column>
                            </Row>
                          </Column>
                        </Column>
                      </Column>

                      <Column className="items-end 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[9px] w-[58%]">

                        <Column className="bg-white_A700 items-center justify-end  lg:py-[12px] xl:py-[15px] 2xl:py-[16px] 3xl:py-[20px] rounded-radius10 shadow-bs w-[100%]">
                          <Column className="items-center justify-start lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] 3xl:mt-[6px] w-[100%]">
                            <Column className="justify-start rounded-radius7 w-[100%]">
                              <Column className="items-center justify-start lg:ml-[16px] xl:ml-[21px] 2xl:ml-[23px] 3xl:ml-[28px] rounded-radius7 w-[29%]">
                                <Row className="items-center justify-between w-[100%]">
                                  <Column
                                    className="bg-cover bg-repeat items-end px-[2px] Rectangle1299"
                                    style={{
                                      backgroundImage:
                                        "url('images/img_rectangle1299.png')",
                                    }}
                                  >
                                    <div className="bg-light_green_A700 border border-solid border-white_A700 xl:h-[10px] 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] lg:mt-[37px] xl:mt-[47px] 2xl:mt-[52px] 3xl:mt-[63px] rounded-radius50 2xl:w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[9px]"></div>
                                  </Column>
                                  <Column className="w-[50%]">
                                    <Text
                                      className="font-medium text-black_900 w-[auto]"
                                      as="h6"
                                      variant="h6"
                                    >
                                      Jack Arno
                                    </Text>
                                    <Text className="Online" variant="body5">
                                      Online
                                    </Text>
                                  </Column>
                                </Row>
                              </Column>
                              <Column className="justify-start lg:mt-[17px] xl:mt-[22px] 2xl:mt-[24px] 3xl:mt-[29px] w-[100%]">
                                <Line className="bg-black_900_72 h-[0.5px] w-[100%]" />
                                <Column className="bg-gray_200 items-center justify-start lg:ml-[16px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] lg:mt-[24px] xl:mt-[30px] 2xl:mt-[33px] 3xl:mt-[40px] lg:p-[12px] xl:p-[15px] 2xl:p-[16px] 3xl:p-[20px] rounded-bl-[0] rounded-br-[8px] rounded-tl-[8px] rounded-tr-[8px] w-[52%]">
                                  <Text className="columnlanguage" variant="body3">
                                    Hi, are you free can we talk ? about the
                                    <br />
                                    Policies{" "}
                                  </Text>
                                </Column>
                                <Input
                                  className="placeholder:text-white_A700 GroupSixtySix"
                                  wrapClassName="2xl:ml-[254px] 2xl:mt-[16px] 3xl:ml-[305px] 3xl:mt-[20px] lg:ml-[180px] lg:mt-[12px] w-[52%] xl:ml-[226px] xl:mt-[15px]"
                                  name="GroupSixtySix"
                                  placeholder="Yes , Sure what’s bothering you ?"
                                  shape="CustomBorderTL8"
                                  size="sm"
                                  variant="FillBlue600"
                                ></Input>
                                <Line className="bg-black_900_72 h-[0.5px] lg:mt-[208px] xl:mt-[256px] 2xl:mt-[310px] 3xl:mt-[332px] w-[100%]" />
                              </Column>
                            </Column>
                            <Row className="items-end lg:mt-[12px] xl:mt-[15px] 2xl:mt-[16px] 3xl:mt-[20px] w-[93%]">
                              <input className="rowtypeyourmessa " placeholder="Type your message here...">
                                
                              </input>
                              <Button
                                className="flex lg:h-[24px] xl:h-[31px] 2xl:h-[34px] 3xl:h-[41px] items-center justify-center lg:ml-[124px] xl:ml-[155px] 2xl:ml-[174px] 3xl:ml-[209px] lg:w-[24px] xl:w-[30px] 2xl:w-[33px] 3xl:w-[40px]"
                                shape="icbRoundedBorder4"
                                size="smIcn"
                                variant="icbFillGray200"
                              >
                                <Img
                                  src="images/img_group68.png"
                                  className="flex items-center justify-center lg:h-[12px] xl:h-[16px] 2xl:h-[17px] 3xl:h-[21px]"
                                  alt="GroupSixtyEight"
                                />
                              </Button>
                              <div className="bg-gray_200 lg:h-[24px] xl:h-[31px] 2xl:h-[34px] 3xl:h-[41px] 3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] rounded-radius6 lg:w-[24px] xl:w-[30px] 2xl:w-[33px] 3xl:w-[40px]"></div>
                              <div className="bg-gray_200 lg:h-[24px] xl:h-[31px] 2xl:h-[34px] 3xl:h-[41px] 3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] rounded-radius6 lg:w-[24px] xl:w-[30px] 2xl:w-[33px] 3xl:w-[40px]"></div>
                              <Button
                                className="flex lg:h-[24px] xl:h-[31px] 2xl:h-[34px] 3xl:h-[41px] items-center justify-center 3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] lg:w-[24px] xl:w-[30px] 2xl:w-[33px] 3xl:w-[40px]"
                                shape="icbRoundedBorder4"
                                size="smIcn"
                                variant="icbFillBlue600"
                              >
                                <Img
                                  src="images/img_group69.png"
                                  className="flex items-center justify-center lg:h-[12px] xl:h-[16px] 2xl:h-[17px] 3xl:h-[21px]"
                                  alt="GroupSixtyNine"
                                />
                              </Button>
                            </Row>
                          </Column>
                        </Column>
                      </Column>
                    </Row>



                  </Column>

                </Row>
              </Column>
              <Img
                src="images/img_whatsappimage22.png"
                className="WhatsAppImage"
                alt="WhatsAppImage"
              />
            </Stack>

          </Stack>

        </Row>
      </Column>
    </>
  );
};

export default MessageOnePage;
