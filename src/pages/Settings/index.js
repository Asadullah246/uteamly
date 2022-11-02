import React from "react";

import {
  Stack,
  Column,
  Row,
  Img,
  Text,
  Line,
  Button,
  Input,
  TextArea,
} from "components";
import Sidebar from "components/Sidebar/Sidebar";
import { useNavigate } from "react-router-dom";

const SettingsPage = () => {
  const navigate = useNavigate();

  function handleNavigate300() {
    navigate("/users");
  }

  return (
    <>
      <Stack className="bg-white_A700 font-poppins lg:h-[576px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] mx-[auto] lg:pr-[56px] xl:pr-[70px] 2xl:pr-[78px] 3xl:pr-[94px] w-[100%]">
        <Stack className="absolute lg:h-[576px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] left-[0] w-[95%]">
          <Column className="absolute items-center justify-start w-[100%]">
            <Row className="items-start justify-between w-[100%]">
              <Sidebar className="w-[24%]" />
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
          <Column
            className="absolute bg-cover bg-repeat justify-end left-[0] p-[4px] top-[0] w-[30%]"
            style={{ backgroundImage: "url('images/img_group61.png')" }}
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
                onClick={handleNavigate300}
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
        <Text
          className="absolute font-semibold left-[26%] text-blue_600 top-[25%] w-[auto]"
          as="h5"
          variant="h5"
        >
          General Settings
        </Text>
        <Line className="absolute bg-black_900_72 h-[0.5px] right-[0] top-[29%] w-[68%]" />
        <Column className="absolute bottom-[1%] justify-start left-[26%] w-[23%]">
          <Line className="bg-blue_600 h-[2px] ml-[1px] w-[47%]" />
          <Text
            className="font-medium lg:mt-[25px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] text-black_900_75 w-[auto]"
            as="h5"
            variant="h5"
          >
            Logo:
          </Text>
          <Row className="items-center lg:mt-[18px] xl:mt-[23px] 2xl:mt-[25px] 3xl:mt-[31px] w-[68%]">
            <Stack className="bg-white_A700 2xl:h-[102px] 3xl:h-[122px] lg:h-[72px] xl:h-[91px] px-[1px] rounded-radius4 shadow-bs 2xl:w-[101px] 3xl:w-[121px] lg:w-[72px] xl:w-[90px]">
              <Img
                src="images/img_rectangle1309.png"
                className="absolute 3xl:h-[118px] lg:h-[70px] xl:h-[88px] 2xl:h-[98px] inset-[0] justify-center m-[auto] 3xl:w-[117px] lg:w-[69px] xl:w-[87px] 2xl:w-[97px]"
                alt="Rectangle1309"
              />
            </Stack>
            <Button
              className="flex 2xl:h-[102px] 3xl:h-[122px] lg:h-[72px] xl:h-[91px] items-center justify-center lg:ml-[17px] xl:ml-[22px] 2xl:ml-[24px] 3xl:ml-[29px] 2xl:w-[101px] 3xl:w-[121px] lg:w-[72px] xl:w-[90px]"
              shape="icbRoundedBorder4"
              size="lgIcn"
              variant="icbOutlineBlack9003f"
            >
              <Img
                src="images/img_group58.png"
                className="flex items-center justify-center lg:h-[24px] xl:h-[31px] 2xl:h-[34px] 3xl:h-[41px]"
                alt="GroupFiftyEight"
              />
            </Button>
          </Row>
          <Text
            className="font-medium lg:mt-[22px] xl:mt-[28px] 2xl:mt-[31px] 3xl:mt-[37px] text-black_900_75 w-[auto]"
            as="h5"
            variant="h5"
          >
            Name :
          </Text>
          <Input
            className="font-normal not-italic p-[0] lg:text-[11px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] placeholder:text-black_900_b7 text-black_900_b7 w-[100%]"
            wrapClassName="2xl:mt-[21px] 3xl:mt-[25px] lg:mt-[15px] w-[100%] xl:mt-[19px]"
            name="GroupFiftySeven"
            placeholder="Uteamly"
            shape="RoundedBorder4"
            size="sm"
            variant="FillGray100"
          ></Input>
          <Text
            className="font-medium ml-[1px] lg:mt-[23px] xl:mt-[29px] 2xl:mt-[32px] 3xl:mt-[39px] text-black_900_75 w-[auto]"
            as="h5"
            variant="h5"
          >
            Description :
          </Text>
          <TextArea
            className="font-normal leading-[normal] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] placeholder:text-black_900_b7 text-black_900_b7 w-[100%]"
            name="GroupFiftySix"
            placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of"
          ></TextArea>
        </Column>
      </Stack>
    </>
  );
};

export default SettingsPage;
