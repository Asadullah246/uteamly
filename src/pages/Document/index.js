import React from "react";

import { Stack, Column, Row, Img, Text, Button, List } from "components";
import Sidebar4 from "components/Sidebar/Sidebar4";

const DocumentPage = () => {
  return (
    <>
      <Stack className="bg-white_A700 font-poppins lg:h-[576px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] mx-[auto] lg:pr-[56px] xl:pr-[70px] 2xl:pr-[78px] 3xl:pr-[94px] w-[100%]">
        <Stack className="absolute lg:h-[576px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] left-[0] w-[95%]">
          <Column className="absolute items-center justify-start w-[100%]">
            <Row className="items-start w-[100%]">
              <Sidebar4 className="w-[24%]" />
              <Column className="bg-gray_200 justify-end lg:ml-[40px] xl:ml-[50px] 2xl:ml-[56px] 3xl:ml-[67px] lg:mt-[34px] xl:mt-[43px] 2xl:mt-[48px] 3xl:mt-[58px] lg:p-[12px] xl:p-[15px] 2xl:p-[16px] 3xl:p-[20px] rounded-radius5 w-[29%]">
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
                className="lg:h-[47px] xl:h-[59px] 2xl:h-[66px] 3xl:h-[79px] lg:ml-[373px] xl:ml-[467px] 2xl:ml-[525px] 3xl:ml-[630px] lg:mt-[29px] xl:mt-[37px] 2xl:mt-[41px] 3xl:mt-[49px] rounded-radius50 lg:w-[46px] xl:w-[58px] 2xl:w-[65px] 3xl:w-[78px]"
                alt="EllipseTwo"
              />
            </Row>
          </Column>
          <Column
            className="absolute bg-cover bg-repeat justify-end left-[0] p-[3px] top-[0] w-[30%]"
            style={{ backgroundImage: "url('images/img_group28.png')" }}
          >
            <Column className="justify-start lg:ml-[53px] xl:ml-[67px] 2xl:ml-[75px] 3xl:ml-[90px] lg:mt-[106px] xl:mt-[133px] 2xl:mt-[149px] 3xl:mt-[179px] w-[35%]">
              <Row className="items-center ml-[2px] w-[98%]">
                <Img
                  src="images/img_dashboard5.png"
                  className="dashboardFive"
                  alt="dashboardFive"
                />
                <Text className="rowdashboardfive" as="h5" variant="h5">
                  Dashboard
                </Text>
              </Row>
              <Row className="items-start lg:mt-[18px] xl:mt-[23px] 2xl:mt-[25px] 3xl:mt-[31px] w-[85%]">
                <Img
                  src="images/img_todolist1.png"
                  className="todolistOne"
                  alt="todolistOne"
                />
                <Text className="rowtodolistone" as="h5" variant="h5">
                  Bookings
                </Text>
              </Row>
            </Column>
          </Column>
        </Stack>
        <Row className="absolute bg-gray_200 items-center justify-between 3xl:p-[10px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] right-[0] rounded-radius5 top-[19%] w-[19%]">
          <Row className="items-start justify-center mb-[1px] 3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] lg:mt-[4px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] w-[31%]">
            <Img
              src="images/img_search11.png"
              className="searchEleven1"
              alt="searchEleven One"
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
        <Column className="absolute justify-start left-[26%] top-[19%] w-[13%]">
          <Text
            className="font-semibold text-blue_600 w-[auto]"
            as="h4"
            variant="h4"
          >
            Document
          </Text>
          <Button
            className="font-medium lg:mt-[48px] xl:mt-[61px] 2xl:mt-[68px] 3xl:mt-[82px] xl:text-[11px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[100%]"
            shape="RoundedBorder4"
            size="lg"
            variant="FillCyan900"
          >
            Add New
          </Button>
        </Column>
        <Stack className="absolute bg-cyan_900 lg:h-[31px] xl:h-[39px] 2xl:h-[43px] 3xl:h-[52px] xl:px-[10px] 2xl:px-[11px] 3xl:px-[13px] lg:px-[8px] right-[0] rounded-radius4 top-[30%] w-[3%]">
          <Img
            src="images/img_settings1.png"
            className="settingsOne"
            alt="settingsOne"
          />
        </Stack>
        <List
          className="absolute bottom-[0] font-nunito gap-[0] min-h-[auto] right-[0] w-[68%]"
          orientation="vertical"
        >
          <Row className="hover:cursor-pointer 3xl:my-[11px] lg:my-[6px] xl:my-[8px] 2xl:my-[9px] hover:shadow-bs document_two">
            <div className="border border-bluegray_100 border-solid lg:h-[18px] xl:h-[23px] 2xl:h-[25px] 3xl:h-[30px] rounded-radius3 lg:w-[17px] xl:w-[22px] 2xl:w-[24px] 3xl:w-[29px]"></div>
            <Row className="items-center justify-center lg:ml-[39px] xl:ml-[49px] 2xl:ml-[55px] 3xl:ml-[66px] my-[3px] w-[17%]">
              <Img
                src="images/img_document1.png"
                className="documentOne"
                alt="documentOne"
              />
              <Text className="rowdocumentone" variant="body2">
                Sc_19826_Recipt
              </Text>
            </Row>
            <Button
              className="font-semibold lg:ml-[133px] xl:ml-[167px] 2xl:ml-[188px] 3xl:ml-[225px] xl:text-[11px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[5%]"
              shape="RoundedBorder4"
              size="sm"
              variant="FillGray300"
            >
              PDF
            </Button>
            <Text className="rowrectangle1277" variant="body2">
              9MB
            </Text>
            <Row className="items-center justify-center lg:ml-[133px] xl:ml-[167px] 2xl:ml-[188px] 3xl:ml-[225px] w-[8%]">
              <Button
                className="flex lg:h-[24px] xl:h-[30px] 2xl:h-[33px] 3xl:h-[40px] items-center justify-center lg:w-[23px] xl:w-[29px] 2xl:w-[32px] 3xl:w-[39px]"
                shape="icbRoundedBorder4"
                size="smIcn"
                variant="icbFillBluegray100"
              >
                <Img
                  src="images/img_group3810.png"
                  className="flex items-center justify-center lg:h-[14px] xl:h-[18px] 2xl:h-[20px] 3xl:h-[23px]"
                  alt="Group3810"
                />
              </Button>
              <Button
                className="flex lg:h-[24px] xl:h-[30px] 2xl:h-[33px] 3xl:h-[40px] items-center justify-center 3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] lg:w-[23px] xl:w-[29px] 2xl:w-[32px] 3xl:w-[39px]"
                shape="icbRoundedBorder4"
                size="smIcn"
                variant="icbFillBluegray100"
              >
                <Img
                  src="images/img_group3808.png"
                  className="flex items-center justify-center lg:h-[14px] xl:h-[18px] 2xl:h-[20px] 3xl:h-[23px]"
                  alt="Group3808"
                />
              </Button>
            </Row>
          </Row>
          <Row className="hover:cursor-pointer 3xl:my-[11px] lg:my-[6px] xl:my-[8px] 2xl:my-[9px] hover:shadow-bs document_two">
            <div className="border border-bluegray_100 border-solid lg:h-[18px] xl:h-[23px] 2xl:h-[25px] 3xl:h-[30px] rounded-radius3 lg:w-[17px] xl:w-[22px] 2xl:w-[24px] 3xl:w-[29px]"></div>
            <Row className="items-center justify-center lg:ml-[39px] xl:ml-[49px] 2xl:ml-[55px] 3xl:ml-[66px] my-[3px] w-[17%]">
              <Img
                src="images/img_document1.png"
                className="documentOne"
                alt="documentOne One"
              />
              <Text className="rowdocumentone" variant="body2">
                Sc_19826_Recipt
              </Text>
            </Row>
            <Button
              className="font-semibold lg:ml-[133px] xl:ml-[167px] 2xl:ml-[188px] 3xl:ml-[225px] xl:text-[11px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[5%]"
              shape="RoundedBorder4"
              size="sm"
              variant="FillGray300"
            >
              PDF
            </Button>
            <Text className="rowrectangle1277" variant="body2">
              9MB
            </Text>
            <Row className="items-center justify-center lg:ml-[133px] xl:ml-[167px] 2xl:ml-[188px] 3xl:ml-[225px] w-[8%]">
              <Button
                className="flex lg:h-[24px] xl:h-[30px] 2xl:h-[33px] 3xl:h-[40px] items-center justify-center lg:w-[23px] xl:w-[29px] 2xl:w-[32px] 3xl:w-[39px]"
                shape="icbRoundedBorder4"
                size="smIcn"
                variant="icbFillBluegray100"
              >
                <Img
                  src="images/img_group3810.png"
                  className="flex items-center justify-center lg:h-[14px] xl:h-[18px] 2xl:h-[20px] 3xl:h-[23px]"
                  alt="Group3810 One"
                />
              </Button>
              <Button
                className="flex lg:h-[24px] xl:h-[30px] 2xl:h-[33px] 3xl:h-[40px] items-center justify-center 3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] lg:w-[23px] xl:w-[29px] 2xl:w-[32px] 3xl:w-[39px]"
                shape="icbRoundedBorder4"
                size="smIcn"
                variant="icbFillBluegray100"
              >
                <Img
                  src="images/img_group3808.png"
                  className="flex items-center justify-center lg:h-[14px] xl:h-[18px] 2xl:h-[20px] 3xl:h-[23px]"
                  alt="Group3808 One"
                />
              </Button>
            </Row>
          </Row>
          <Row className="hover:cursor-pointer 3xl:my-[11px] lg:my-[6px] xl:my-[8px] 2xl:my-[9px] hover:shadow-bs document_two">
            <div className="border border-bluegray_100 border-solid lg:h-[18px] xl:h-[23px] 2xl:h-[25px] 3xl:h-[30px] rounded-radius3 lg:w-[17px] xl:w-[22px] 2xl:w-[24px] 3xl:w-[29px]"></div>
            <Row className="items-center justify-center lg:ml-[39px] xl:ml-[49px] 2xl:ml-[55px] 3xl:ml-[66px] my-[3px] w-[17%]">
              <Img
                src="images/img_document1.png"
                className="documentOne"
                alt="documentOne Two"
              />
              <Text className="rowdocumentone" variant="body2">
                Sc_19826_Recipt
              </Text>
            </Row>
            <Button
              className="font-semibold lg:ml-[133px] xl:ml-[167px] 2xl:ml-[188px] 3xl:ml-[225px] xl:text-[11px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[5%]"
              shape="RoundedBorder4"
              size="sm"
              variant="FillGray300"
            >
              PDF
            </Button>
            <Text className="rowrectangle1277" variant="body2">
              9MB
            </Text>
            <Row className="items-center justify-center lg:ml-[133px] xl:ml-[167px] 2xl:ml-[188px] 3xl:ml-[225px] w-[8%]">
              <Button
                className="flex lg:h-[24px] xl:h-[30px] 2xl:h-[33px] 3xl:h-[40px] items-center justify-center lg:w-[23px] xl:w-[29px] 2xl:w-[32px] 3xl:w-[39px]"
                shape="icbRoundedBorder4"
                size="smIcn"
                variant="icbFillBluegray100"
              >
                <Img
                  src="images/img_group3810.png"
                  className="flex items-center justify-center lg:h-[14px] xl:h-[18px] 2xl:h-[20px] 3xl:h-[23px]"
                  alt="Group3810 Two"
                />
              </Button>
              <Button
                className="flex lg:h-[24px] xl:h-[30px] 2xl:h-[33px] 3xl:h-[40px] items-center justify-center 3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] lg:w-[23px] xl:w-[29px] 2xl:w-[32px] 3xl:w-[39px]"
                shape="icbRoundedBorder4"
                size="smIcn"
                variant="icbFillBluegray100"
              >
                <Img
                  src="images/img_group3808.png"
                  className="flex items-center justify-center lg:h-[14px] xl:h-[18px] 2xl:h-[20px] 3xl:h-[23px]"
                  alt="Group3808 Two"
                />
              </Button>
            </Row>
          </Row>
          <Row className="hover:cursor-pointer 3xl:my-[11px] lg:my-[6px] xl:my-[8px] 2xl:my-[9px] hover:shadow-bs document_two">
            <div className="border border-bluegray_100 border-solid lg:h-[18px] xl:h-[23px] 2xl:h-[25px] 3xl:h-[30px] rounded-radius3 lg:w-[17px] xl:w-[22px] 2xl:w-[24px] 3xl:w-[29px]"></div>
            <Row className="items-center justify-center lg:ml-[39px] xl:ml-[49px] 2xl:ml-[55px] 3xl:ml-[66px] my-[3px] w-[17%]">
              <Img
                src="images/img_document1.png"
                className="documentOne"
                alt="documentOne Three"
              />
              <Text className="rowdocumentone" variant="body2">
                Sc_19826_Recipt
              </Text>
            </Row>
            <Button
              className="font-semibold lg:ml-[133px] xl:ml-[167px] 2xl:ml-[188px] 3xl:ml-[225px] xl:text-[11px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[5%]"
              shape="RoundedBorder4"
              size="sm"
              variant="FillGray300"
            >
              PDF
            </Button>
            <Text className="rowrectangle1277" variant="body2">
              9MB
            </Text>
            <Row className="items-center justify-center lg:ml-[133px] xl:ml-[167px] 2xl:ml-[188px] 3xl:ml-[225px] w-[8%]">
              <Button
                className="flex lg:h-[24px] xl:h-[30px] 2xl:h-[33px] 3xl:h-[40px] items-center justify-center lg:w-[23px] xl:w-[29px] 2xl:w-[32px] 3xl:w-[39px]"
                shape="icbRoundedBorder4"
                size="smIcn"
                variant="icbFillBluegray100"
              >
                <Img
                  src="images/img_group3810.png"
                  className="flex items-center justify-center lg:h-[14px] xl:h-[18px] 2xl:h-[20px] 3xl:h-[23px]"
                  alt="Group3810 Three"
                />
              </Button>
              <Button
                className="flex lg:h-[24px] xl:h-[30px] 2xl:h-[33px] 3xl:h-[40px] items-center justify-center 3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] lg:w-[23px] xl:w-[29px] 2xl:w-[32px] 3xl:w-[39px]"
                shape="icbRoundedBorder4"
                size="smIcn"
                variant="icbFillBluegray100"
              >
                <Img
                  src="images/img_group3808.png"
                  className="flex items-center justify-center lg:h-[14px] xl:h-[18px] 2xl:h-[20px] 3xl:h-[23px]"
                  alt="Group3808 Three"
                />
              </Button>
            </Row>
          </Row>
          <Row className="hover:cursor-pointer 3xl:my-[11px] lg:my-[6px] xl:my-[8px] 2xl:my-[9px] hover:shadow-bs document_two">
            <div className="border border-bluegray_100 border-solid lg:h-[18px] xl:h-[23px] 2xl:h-[25px] 3xl:h-[30px] rounded-radius3 lg:w-[17px] xl:w-[22px] 2xl:w-[24px] 3xl:w-[29px]"></div>
            <Row className="items-center justify-center lg:ml-[39px] xl:ml-[49px] 2xl:ml-[55px] 3xl:ml-[66px] my-[3px] w-[17%]">
              <Img
                src="images/img_document1.png"
                className="documentOne"
                alt="documentOne Four"
              />
              <Text className="rowdocumentone" variant="body2">
                Sc_19826_Recipt
              </Text>
            </Row>
            <Button
              className="font-semibold lg:ml-[133px] xl:ml-[167px] 2xl:ml-[188px] 3xl:ml-[225px] xl:text-[11px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[5%]"
              shape="RoundedBorder4"
              size="sm"
              variant="FillGray300"
            >
              PDF
            </Button>
            <Text className="rowrectangle1277" variant="body2">
              9MB
            </Text>
            <Row className="items-center justify-center lg:ml-[133px] xl:ml-[167px] 2xl:ml-[188px] 3xl:ml-[225px] w-[8%]">
              <Button
                className="flex lg:h-[24px] xl:h-[30px] 2xl:h-[33px] 3xl:h-[40px] items-center justify-center lg:w-[23px] xl:w-[29px] 2xl:w-[32px] 3xl:w-[39px]"
                shape="icbRoundedBorder4"
                size="smIcn"
                variant="icbFillBluegray100"
              >
                <Img
                  src="images/img_group3810.png"
                  className="flex items-center justify-center lg:h-[14px] xl:h-[18px] 2xl:h-[20px] 3xl:h-[23px]"
                  alt="Group3810 Four"
                />
              </Button>
              <Button
                className="flex lg:h-[24px] xl:h-[30px] 2xl:h-[33px] 3xl:h-[40px] items-center justify-center 3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] lg:w-[23px] xl:w-[29px] 2xl:w-[32px] 3xl:w-[39px]"
                shape="icbRoundedBorder4"
                size="smIcn"
                variant="icbFillBluegray100"
              >
                <Img
                  src="images/img_group3808.png"
                  className="flex items-center justify-center lg:h-[14px] xl:h-[18px] 2xl:h-[20px] 3xl:h-[23px]"
                  alt="Group3808 Four"
                />
              </Button>
            </Row>
          </Row>
          <Stack className="hover:cursor-pointer lg:h-[40px] xl:h-[50px] 2xl:h-[56px] 3xl:h-[67px] 3xl:my-[11px] lg:my-[6px] xl:my-[8px] 2xl:my-[9px] hover:shadow-bs w-[100%]">
            <div className="absolute bg-white_A700 bottom-[0] lg:h-[49px] xl:h-[62px] 2xl:h-[69px] 3xl:h-[83px] rounded-radius7 shadow-bs w-[100%]"></div>
            <Row className="absolute bottom-[4%] inset-x-[0] items-start mx-[auto] w-[97%]">
              <div className="border border-bluegray_100 border-solid lg:h-[18px] xl:h-[23px] 2xl:h-[25px] 3xl:h-[30px] lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] 3xl:mt-[6px] rounded-radius3 lg:w-[17px] xl:w-[22px] 2xl:w-[24px] 3xl:w-[29px]"></div>
              <Row className="items-center justify-center lg:ml-[39px] xl:ml-[49px] 2xl:ml-[55px] 3xl:ml-[66px] w-[17%]">
                <Img
                  src="images/img_document1.png"
                  className="documentOne"
                  alt="documentOne Five"
                />
                <Text className="rowdocumentone" variant="body2">
                  Sc_19826_Recipt
                </Text>
              </Row>
              <Button
                className="font-semibold lg:ml-[133px] xl:ml-[167px] 2xl:ml-[188px] 3xl:ml-[225px] lg:mt-[4px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] xl:text-[11px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[5%]"
                shape="RoundedBorder4"
                size="sm"
                variant="FillGray300"
              >
                PDF
              </Button>
              <Text className="rowrectangle1277_five" variant="body2">
                9MB
              </Text>
              <Row className="items-center justify-between lg:ml-[133px] xl:ml-[167px] 2xl:ml-[188px] 3xl:ml-[225px] w-[8%]">
                <Button
                  className="flex lg:h-[24px] xl:h-[30px] 2xl:h-[33px] 3xl:h-[40px] items-center justify-center lg:w-[23px] xl:w-[29px] 2xl:w-[32px] 3xl:w-[39px]"
                  shape="icbRoundedBorder4"
                  size="smIcn"
                  variant="icbFillBluegray100"
                >
                  <Img
                    src="images/img_group3810.png"
                    className="flex items-center justify-center lg:h-[14px] xl:h-[18px] 2xl:h-[20px] 3xl:h-[23px]"
                    alt="Group3810 Five"
                  />
                </Button>
                <Button
                  className="flex lg:h-[24px] xl:h-[30px] 2xl:h-[33px] 3xl:h-[40px] items-center justify-center lg:w-[23px] xl:w-[29px] 2xl:w-[32px] 3xl:w-[39px]"
                  shape="icbRoundedBorder4"
                  size="smIcn"
                  variant="icbFillBluegray100"
                >
                  <Img
                    src="images/img_group3808.png"
                    className="flex items-center justify-center lg:h-[14px] xl:h-[18px] 2xl:h-[20px] 3xl:h-[23px]"
                    alt="Group3808 Five"
                  />
                </Button>
              </Row>
            </Row>
          </Stack>
        </List>
      </Stack>
    </>
  );
};

export default DocumentPage;
