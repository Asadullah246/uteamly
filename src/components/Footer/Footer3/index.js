import React from "react";

import { Column, Row, Text, Button } from "components";
import { useNavigate } from "react-router-dom";

const Footer3 = (props) => {
  const navigate = useNavigate();

  function handleNavigate19() {
    navigate("/addnewtaskone");
  }
  function handleNavigate32() {
    navigate("/addnewtaskone");
  }

  return (
    <>
      <footer className={props.className}>
        <Column className="items-center justify-start w-[100%]">
         {
          [...Array(6)].map(a=>{
            return(
              <Column className="items-center justify-start w-[100%] lg:mt-[13px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[22px]">
              <Row className="bg-white_A700 items-end justify-between px-3  rounded-radius7 shadow-bs w-[100%]">
              {/* lg:p-[4px] 2xl:p-[1px] xl:p-[1px] 3xl:p-[6px] */}
                <Text className="PopBugFix8" variant="body2">
                  Pop Bug Fix
                </Text>
                <Text className="test_13220205" variant="body2">
                  13/2/2020
                </Text>
                <Text className="test_13220205" variant="body2">
                  14/2/2020
                </Text>
                <Text className="duration7" variant="body2">
                  1 hours
                </Text>
                <Text className="DineshChugtai8" variant="body2">
                  Dinesh Chugtai
                </Text>
                <Button
                  className="font-medium font-poppins lg:mb-[10px] xl:mb-[13px] 2xl:mb-[14px] 3xl:mb-[17px] lg:ml-[20px] xl:ml-[26px] 2xl:ml-[29px] 3xl:ml-[35px] lg:mt-[13px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[22px] 3xl:text-[10px] lg:text-[6px] xl:text-[8px] 2xl:text-[9px] text-center w-[8%]"
                  shape="RoundedBorder4"
                  size="sm"
                  variant="FillLightgreenA701"
                >
                  Accept
                </Button>
                <Button
                  className="font-medium font-poppins lg:mb-[10px] xl:mb-[13px] 2xl:mb-[14px] 3xl:mb-[17px] 3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] lg:mt-[13px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[22px] 3xl:text-[10px] lg:text-[6px] xl:text-[8px] 2xl:text-[9px] text-center w-[8%]"
                  shape="RoundedBorder4"
                  size="sm"
                  variant="FillRed900"
                >
                  Decline
                </Button>
              </Row>
            </Column>
            )
          })
         }
          {/* <Column className="items-center justify-start lg:mt-[13px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%]">
            <Row className="bg-white_A700 items-end justify-end lg:p-[4px] 2xl:p-[5px] xl:p-[5px] 3xl:p-[6px] rounded-radius7 shadow-bs w-[100%]">
              <Text className="PopBugFix8" variant="body2">
                Pop Bug Fix
              </Text>
              <Text className="test_13220205" variant="body2">
                13/2/2020
              </Text>
              <Text className="test_13220205" variant="body2">
                14/2/2020
              </Text>
              <Text className="duration7" variant="body2">
                1 hours
              </Text>
              <Text className="DineshChugtai8" variant="body2">
                Dinesh Chugtai
              </Text>
              <Button
                className="font-medium font-poppins lg:mb-[10px] xl:mb-[13px] 2xl:mb-[14px] 3xl:mb-[17px] lg:ml-[20px] xl:ml-[26px] 2xl:ml-[29px] 3xl:ml-[35px] lg:mt-[13px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[22px] 3xl:text-[10px] lg:text-[6px] xl:text-[8px] 2xl:text-[9px] text-center w-[8%]"
                shape="RoundedBorder4"
                size="sm"
                variant="FillLightgreenA701"
              >
                Accept
              </Button>
              <Button
                className="font-medium font-poppins lg:mb-[10px] xl:mb-[13px] 2xl:mb-[14px] 3xl:mb-[17px] 3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] lg:mt-[13px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[22px] 3xl:text-[10px] lg:text-[6px] xl:text-[8px] 2xl:text-[9px] text-center w-[8%]"
                shape="RoundedBorder4"
                size="sm"
                variant="FillRed900"
              >
                Decline
              </Button>
            </Row>
          </Column>
          <Column className="items-center justify-start lg:mt-[13px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%]">
            <Row className="bg-white_A700 items-end justify-end lg:p-[4px] 2xl:p-[5px] xl:p-[5px] 3xl:p-[6px] rounded-radius7 shadow-bs w-[100%]">
              <Text className="PopBugFix8" variant="body2">
                Pop Bug Fix
              </Text>
              <Text className="test_13220205" variant="body2">
                13/2/2020
              </Text>
              <Text className="test_13220205" variant="body2">
                14/2/2020
              </Text>
              <Text className="duration7" variant="body2">
                1 hours
              </Text>
              <Text className="DineshChugtai8" variant="body2">
                Dinesh Chugtai
              </Text>
              <Button
                className="font-medium font-poppins lg:mb-[10px] xl:mb-[13px] 2xl:mb-[14px] 3xl:mb-[17px] lg:ml-[20px] xl:ml-[26px] 2xl:ml-[29px] 3xl:ml-[35px] lg:mt-[13px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[22px] 3xl:text-[10px] lg:text-[6px] xl:text-[8px] 2xl:text-[9px] text-center w-[8%]"
                shape="RoundedBorder4"
                size="sm"
                variant="FillLightgreenA701"
              >
                Accept
              </Button>
              <Button
                className="font-medium font-poppins lg:mb-[10px] xl:mb-[13px] 2xl:mb-[14px] 3xl:mb-[17px] 3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] lg:mt-[13px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[22px] 3xl:text-[10px] lg:text-[6px] xl:text-[8px] 2xl:text-[9px] text-center w-[8%]"
                shape="RoundedBorder4"
                size="sm"
                variant="FillRed900"
              >
                Decline
              </Button>
            </Row>
          </Column>
          <Column className="items-center justify-start lg:mt-[13px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%]">
            <Row className="bg-white_A700 items-end justify-end lg:p-[4px] 2xl:p-[5px] xl:p-[5px] 3xl:p-[6px] rounded-radius7 shadow-bs w-[100%]">
              <Text className="PopBugFix8" variant="body2">
                Pop Bug Fix
              </Text>
              <Text className="test_13220205" variant="body2">
                13/2/2020
              </Text>
              <Text className="test_13220205" variant="body2">
                14/2/2020
              </Text>
              <Text className="duration7" variant="body2">
                1 hours
              </Text>
              <Text className="DineshChugtai8" variant="body2">
                Dinesh Chugtai
              </Text>
              <Button
                className="font-medium font-poppins lg:mb-[10px] xl:mb-[13px] 2xl:mb-[14px] 3xl:mb-[17px] lg:ml-[20px] xl:ml-[26px] 2xl:ml-[29px] 3xl:ml-[35px] lg:mt-[13px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[22px] 3xl:text-[10px] lg:text-[6px] xl:text-[8px] 2xl:text-[9px] text-center w-[8%]"
                shape="RoundedBorder4"
                size="sm"
                variant="FillLightgreenA701"
              >
                Accept
              </Button>
              <Button
                className="font-medium font-poppins lg:mb-[10px] xl:mb-[13px] 2xl:mb-[14px] 3xl:mb-[17px] 3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] lg:mt-[13px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[22px] 3xl:text-[10px] lg:text-[6px] xl:text-[8px] 2xl:text-[9px] text-center w-[8%]"
                shape="RoundedBorder4"
                size="sm"
                variant="FillRed900"
              >
                Decline
              </Button>
            </Row>
          </Column>
          <Column className="items-center justify-end lg:mt-[13px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%]">
            <Row className="bg-white_A700 items-start justify-end lg:p-[4px] 2xl:p-[5px] xl:p-[5px] 3xl:p-[6px] rounded-radius7 shadow-bs w-[100%]">
              <Text
                className="lg:mt-[15px] xl:mt-[19px] 2xl:mt-[21px] 3xl:mt-[25px] rowtime"
                variant="body2"
              >
                Pop Bug Fix
              </Text>
              <Text className="test_1322020_Four2" variant="body2">
                13/2/2020
              </Text>
              <Text className="test_1322020_Four2" variant="body2">
                14/2/2020
              </Text>
              <Text className="test_1322020_Four2" variant="body2">
                1 hours
              </Text>
              <Text className="test_1322020_Four2" variant="body2">
                Dinesh Chugtai
              </Text>
              <Button
                className="common-pointer font-medium font-poppins lg:mb-[10px] xl:mb-[13px] 2xl:mb-[14px] 3xl:mb-[17px] lg:ml-[20px] xl:ml-[26px] 2xl:ml-[29px] 3xl:ml-[35px] lg:mt-[13px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[22px] 3xl:text-[10px] lg:text-[6px] xl:text-[8px] 2xl:text-[9px] text-center w-[8%]"
                onClick={handleNavigate19}
                shape="RoundedBorder4"
                size="sm"
                variant="FillLightgreenA701"
              >
                Accept
              </Button>
              <Button
                className="common-pointer font-medium font-poppins lg:mb-[10px] xl:mb-[13px] 2xl:mb-[14px] 3xl:mb-[17px] 3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] lg:mt-[13px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[22px] 3xl:text-[10px] lg:text-[6px] xl:text-[8px] 2xl:text-[9px] text-center w-[8%]"
                onClick={handleNavigate32}
                shape="RoundedBorder4"
                size="sm"
                variant="FillRed900"
              >
                Decline
              </Button>
            </Row>
          </Column> */}
        </Column>
      </footer>
    </>
  );
};

export default Footer3;
