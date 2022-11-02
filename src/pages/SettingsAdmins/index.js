import React from "react";

import {
  Stack,
  Column,
  Row,
  Img,
  Text,
  Line,
  List,
  CheckBox,
  Button,
} from "components";
import Sidebar1 from "components/Sidebar/Sidebar1";
import { useNavigate } from "react-router-dom";

const SettingsAdminsPage = () => {
  const navigate = useNavigate();

  function handleNavigate41() {
    navigate("/settingsone");
  }
  function handleNavigate42() {
    navigate("/settingsbilings");
  }
  function handleNavigate53() {
    navigate("/activitiesone");
  }

  return (
    <>
      <Stack className="bg-white_A700 font-poppins lg:h-[576px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] mx-[auto] lg:pr-[56px] xl:pr-[70px] 2xl:pr-[78px] 3xl:pr-[94px] w-[100%]">
        <Stack className="absolute lg:h-[576px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] left-[0] w-[95%]">
          <Column className="absolute items-center justify-start w-[100%]">
            <Row className="items-start justify-between w-[100%]">
              <Sidebar1
                className="w-[24%]"
                onrowchecklistClick={handleNavigate53}
              />
              <Column className="justify-start lg:mt-[29px] xl:mt-[37px] 2xl:mt-[41px] 3xl:mt-[49px] w-[72%]">
                <Row className="items-end justify-between w-[100%]">
                  <Column className="bg-gray_200 justify-end lg:mt-[5px] 2xl:mt-[7px] xl:mt-[7px] 3xl:mt-[9px] lg:p-[12px] xl:p-[15px] 2xl:p-[16px] 3xl:p-[20px] rounded-radius5 w-[40%]">
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
                <Text className="columnellipsetwo1" as="h5" variant="h5">
                  Settings
                </Text>
              </Column>
            </Row>
          </Column>
          <Img
            src="images/img_whatsappimage_10.png"
            className="WhatsAppImage1"
            alt="WhatsAppImage"
          />
        </Stack>
        <Row className="absolute items-start justify-center left-[26%] top-[25%] w-[29%]">
          <Text
            className="common-pointer GeneralSetting2"
            as="h5"
            variant="h5"
            onClick={handleNavigate41}
          >
            General Settings
          </Text>
          <Text
            className="common-pointer lg:ml-[48px] xl:ml-[60px] 2xl:ml-[67px] 3xl:ml-[81px] GeneralSetting2"
            as="h5"
            variant="h5"
            onClick={handleNavigate42}
          >
            Billings
          </Text>
          <Text
            className="font-semibold lg:ml-[47px] xl:ml-[59px] 2xl:ml-[66px] 3xl:ml-[79px] text-blue_600 w-[auto]"
            as="h5"
            variant="h5"
          >
            Admins
          </Text>
        </Row>
        <Line className="absolute bg-black_900_72 h-[0.5px] right-[0] top-[29%] w-[68%]" />
        <Line className="absolute bg-blue_600 h-[2px] right-[39%] top-[30%] w-[6%]" />
        <Row className="absolute font-nunito items-center right-[9%] top-[41%] w-[58%]">
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
        <List
          className="absolute bottom-[0] font-nunito gap-[0] min-h-[auto] right-[0] w-[68%]"
          orientation="vertical"
        >
          <Row className="bg-white_A700 items-end justify-between 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[9px] xl:p-[12px] 2xl:p-[13px] 3xl:p-[16px] lg:p-[9px] rounded-radius7 shadow-bs w-[100%]">
            <CheckBox
              className="font-normal lg:mb-[4px] 2xl:mb-[6px] xl:mb-[6px] 3xl:mb-[8px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] not-italic lg:text-[10px] xl:text-[13px] 2xl:text-[14px] 3xl:text-[17px] text-black_900_b5"
              inputClassName="h-[22px] mr-[5px] w-[22px]"
              name="19281"
              label="19281"
              shape="RoundedBorder3"
              size="lg"
              variant="OutlineBluegray100"
            ></CheckBox>
            <Text className="JackHood2" variant="body2">
              Jack Hood
            </Text>
            <Text className="Manager2" variant="body2">
              Manager
            </Text>
            <Text className="JackHood2" variant="body2">
              0900-87621231
            </Text>
            <Text className="email_One" variant="body2">
              jackhood@abc.com
            </Text>
          </Row>
          <Row className="bg-white_A700 items-end justify-between 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[9px] xl:p-[12px] 2xl:p-[13px] 3xl:p-[16px] lg:p-[9px] rounded-radius7 shadow-bs w-[100%]">
            <CheckBox
              className="font-normal lg:mb-[4px] 2xl:mb-[6px] xl:mb-[6px] 3xl:mb-[8px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] not-italic lg:text-[10px] xl:text-[13px] 2xl:text-[14px] 3xl:text-[17px] text-black_900_b5"
              inputClassName="h-[22px] mr-[5px] w-[22px]"
              name="19281 One"
              label="19281"
              shape="RoundedBorder3"
              size="lg"
              variant="OutlineBluegray100"
            ></CheckBox>
            <Text className="JackHood2" variant="body2">
              Jack Hood
            </Text>
            <Text className="JackHood2" variant="body2">
              Admin
            </Text>
            <Text className="JackHood2" variant="body2">
              0900-87621231
            </Text>
            <Text className="email_One" variant="body2">
              jackhood@abc.com
            </Text>
          </Row>
          <Row className="bg-white_A700 items-end justify-between 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[9px] xl:p-[12px] 2xl:p-[13px] 3xl:p-[16px] lg:p-[9px] rounded-radius7 shadow-bs w-[100%]">
            <CheckBox
              className="font-normal lg:mb-[4px] 2xl:mb-[6px] xl:mb-[6px] 3xl:mb-[8px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] not-italic lg:text-[10px] xl:text-[13px] 2xl:text-[14px] 3xl:text-[17px] text-black_900_b5"
              inputClassName="h-[22px] mr-[5px] w-[22px]"
              name="19281 Two"
              label="19281"
              shape="RoundedBorder3"
              size="lg"
              variant="OutlineBluegray100"
            ></CheckBox>
            <Text className="JackHood2" variant="body2">
              Jack Hood
            </Text>
            <Text className="Manager2" variant="body2">
              Manager
            </Text>
            <Text className="JackHood2" variant="body2">
              0900-87621231
            </Text>
            <Text className="email_One" variant="body2">
              jackhood@abc.com
            </Text>
          </Row>
          <Row className="bg-white_A700 items-end justify-between 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[9px] xl:p-[12px] 2xl:p-[13px] 3xl:p-[16px] lg:p-[9px] rounded-radius7 shadow-bs w-[100%]">
            <CheckBox
              className="font-normal lg:mb-[4px] 2xl:mb-[6px] xl:mb-[6px] 3xl:mb-[8px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] not-italic lg:text-[10px] xl:text-[13px] 2xl:text-[14px] 3xl:text-[17px] text-black_900_b5"
              inputClassName="h-[22px] mr-[5px] w-[22px]"
              name="19281 Three"
              label="19281"
              shape="RoundedBorder3"
              size="lg"
              variant="OutlineBluegray100"
            ></CheckBox>
            <Text className="JackHood2" variant="body2">
              Jack Hood
            </Text>
            <Text className="JackHood2" variant="body2">
              Admin
            </Text>
            <Text className="JackHood2" variant="body2">
              0900-87621231
            </Text>
            <Text className="email_One" variant="body2">
              jackhood@abc.com
            </Text>
          </Row>
          <Row className="bg-white_A700 items-end justify-between 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[9px] xl:p-[12px] 2xl:p-[13px] 3xl:p-[16px] lg:p-[9px] rounded-radius7 shadow-bs w-[100%]">
            <CheckBox
              className="font-normal lg:mb-[4px] 2xl:mb-[6px] xl:mb-[6px] 3xl:mb-[8px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] not-italic lg:text-[10px] xl:text-[13px] 2xl:text-[14px] 3xl:text-[17px] text-black_900_b5"
              inputClassName="h-[22px] mr-[5px] w-[22px]"
              name="19281 Four"
              label="19281"
              shape="RoundedBorder3"
              size="lg"
              variant="OutlineBluegray100"
            ></CheckBox>
            <Text className="JackHood2" variant="body2">
              Jack Hood
            </Text>
            <Text className="Manager2" variant="body2">
              Manager
            </Text>
            <Text className="JackHood2" variant="body2">
              0900-87621231
            </Text>
            <Text className="email_One" variant="body2">
              jackhood@abc.com
            </Text>
          </Row>
          <Row className="bg-white_A700 items-start justify-between 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[9px] xl:p-[12px] 2xl:p-[13px] 3xl:p-[16px] lg:p-[9px] rounded-radius7 shadow-bs w-[100%]">
            <CheckBox
              className="font-normal lg:mb-[4px] 2xl:mb-[6px] xl:mb-[6px] 3xl:mb-[8px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] not-italic lg:text-[10px] xl:text-[13px] 2xl:text-[14px] 3xl:text-[17px] text-black_900_b5"
              inputClassName="h-[22px] mr-[5px] w-[22px]"
              name="19281 Five"
              label="19281"
              shape="RoundedBorder3"
              size="md"
              variant="OutlineBluegray100"
            ></CheckBox>
            <Text className="row192811" variant="body2">
              Jack Hood
            </Text>
            <Text className="row192811" variant="body2">
              Manager
            </Text>
            <Text className="row192811" variant="body2">
              0900-87621231
            </Text>
            <Text className="email_Six" variant="body2">
              jackhood@abc.com
            </Text>
          </Row>
          <Row className="bg-white_A700 items-start justify-between 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[9px] xl:p-[12px] 2xl:p-[13px] 3xl:p-[16px] lg:p-[9px] rounded-radius7 shadow-bs w-[100%]">
            <CheckBox
              className="font-normal lg:mb-[4px] 2xl:mb-[6px] xl:mb-[6px] 3xl:mb-[8px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] not-italic lg:text-[10px] xl:text-[13px] 2xl:text-[14px] 3xl:text-[17px] text-black_900_b5"
              inputClassName="h-[22px] mr-[5px] w-[22px]"
              name="19281 Six"
              label="19281"
              shape="RoundedBorder3"
              size="md"
              variant="OutlineBluegray100"
            ></CheckBox>
            <Text className="row192811" variant="body2">
              Jack Hood
            </Text>
            <Text className="row192811" variant="body2">
              Manager
            </Text>
            <Text className="row192811" variant="body2">
              0900-87621231
            </Text>
            <Text className="email_Six" variant="body2">
              jackhood@abc.com
            </Text>
          </Row>
          <Row className="bg-white_A700 items-start justify-between 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[9px] xl:p-[12px] 2xl:p-[13px] 3xl:p-[16px] lg:p-[9px] rounded-radius7 shadow-bs w-[100%]">
            <CheckBox
              className="font-normal lg:mb-[4px] 2xl:mb-[6px] xl:mb-[6px] 3xl:mb-[8px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] not-italic lg:text-[10px] xl:text-[13px] 2xl:text-[14px] 3xl:text-[17px] text-black_900_b5"
              inputClassName="h-[22px] mr-[5px] w-[22px]"
              name="19281 Seven"
              label="19281"
              shape="RoundedBorder3"
              size="md"
              variant="OutlineBluegray100"
            ></CheckBox>
            <Text className="row192811" variant="body2">
              Jack Hood
            </Text>
            <Text className="row192811" variant="body2">
              Manager
            </Text>
            <Text className="row192811" variant="body2">
              0900-87621231
            </Text>
            <Text className="email_Six" variant="body2">
              jackhood@abc.com
            </Text>
          </Row>
        </List>
        <Button
          className="absolute font-medium right-[0] xl:text-[11px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center top-[31%] w-[13%]"
          shape="RoundedBorder4"
          size="lg"
          variant="FillCyan900"
        >
          Add New Admin
        </Button>
        <Button
          className="absolute font-medium right-[14%] xl:text-[11px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center top-[31%] w-[8%]"
          shape="RoundedBorder4"
          size="lg"
          variant="FillCyan900"
        >
          Edit
        </Button>
      </Stack>
    </>
  );
};

export default SettingsAdminsPage;
