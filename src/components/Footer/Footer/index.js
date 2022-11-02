import React from "react";

import { Column, Row, CheckBox, Text, Stack } from "components";
import { useNavigate } from "react-router-dom";

const Footer = (props) => {
  const navigate = useNavigate();

  function handleNavigate281() {
    navigate("/userstats");
  }

  return (
    <>
      <footer className={props.className}>
        <Column
          className="common-pointer items-center justify-start w-[100%]"
          // onClick={handleNavigate281}
        >
          <Row className="bg-white_A700 items-end justify-between xl:p-[12px] 2xl:p-[13px] 3xl:p-[16px] lg:p-[9px] rounded-radius7 shadow-bs w-[100%]">
            <CheckBox
              className="font-normal font-nunito lg:mb-[4px] 2xl:mb-[6px] xl:mb-[6px] 3xl:mb-[8px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] not-italic lg:text-[10px] xl:text-[13px] 2xl:text-[14px] 3xl:text-[17px] text-black_900_b5"
              inputClassName="mr-[5px] w-[undefinedpx]"
              name="19281"
              label="19281"
              shape="RoundedBorder3"
              size="lg"
              variant="OutlineBluegray100"
            ></CheckBox>
            <Text className="JackHood3" variant="body2">
              Jack Hood
            </Text>
            <Text className="Manager3" variant="body2">
              Manager
            </Text>
            <Text className="JackHood3" variant="body2">
              0900-87621231
            </Text>
            <Text className="email_One1" variant="body2">
              jackhood@abc.com
            </Text>
          </Row>
          <Row className="bg-white_A700 items-end justify-between lg:mt-[13px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[22px] xl:p-[12px] 2xl:p-[13px] 3xl:p-[16px] lg:p-[9px] rounded-radius7 shadow-bs w-[100%]">
            <CheckBox
              className="font-normal font-nunito lg:mb-[4px] 2xl:mb-[6px] xl:mb-[6px] 3xl:mb-[8px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] not-italic lg:text-[10px] xl:text-[13px] 2xl:text-[14px] 3xl:text-[17px] text-black_900_b5"
              inputClassName="mr-[5px] w-[undefinedpx]"
              name="19281 One"
              label="19281"
              shape="RoundedBorder3"
              size="lg"
              variant="OutlineBluegray100"
            ></CheckBox>
            <Text className="JackHood3" variant="body2">
              Jack Hood
            </Text>
            <Text className="Manager3" variant="body2">
              Manager
            </Text>
            <Text className="JackHood3" variant="body2">
              0900-87621231
            </Text>
            <Text className="email_One1" variant="body2">
              jackhood@abc.com
            </Text>
          </Row>
          <Row className="bg-white_A700 items-end justify-between lg:mt-[13px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[22px] xl:p-[12px] 2xl:p-[13px] 3xl:p-[16px] lg:p-[9px] rounded-radius7 shadow-bs w-[100%]">
            <CheckBox
              className="font-normal font-nunito lg:mb-[4px] 2xl:mb-[6px] xl:mb-[6px] 3xl:mb-[8px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] not-italic lg:text-[10px] xl:text-[13px] 2xl:text-[14px] 3xl:text-[17px] text-black_900_b5"
              inputClassName="mr-[5px] w-[undefinedpx]"
              name="19281 Two"
              label="19281"
              shape="RoundedBorder3"
              size="lg"
              variant="OutlineBluegray100"
            ></CheckBox>
            <Text className="JackHood3" variant="body2">
              Jack Hood
            </Text>
            <Text className="Manager3" variant="body2">
              Manager
            </Text>
            <Text className="JackHood3" variant="body2">
              0900-87621231
            </Text>
            <Text className="email_One1" variant="body2">
              jackhood@abc.com
            </Text>
          </Row>
          <Row className="bg-white_A700 items-end justify-between lg:mt-[13px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[22px] xl:p-[12px] 2xl:p-[13px] 3xl:p-[16px] lg:p-[9px] rounded-radius7 shadow-bs w-[100%]">
            <CheckBox
              className="font-normal font-nunito lg:mb-[4px] 2xl:mb-[6px] xl:mb-[6px] 3xl:mb-[8px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] not-italic lg:text-[10px] xl:text-[13px] 2xl:text-[14px] 3xl:text-[17px] text-black_900_b5"
              inputClassName="mr-[5px] w-[undefinedpx]"
              name="19281 Three"
              label="19281"
              shape="RoundedBorder3"
              size="lg"
              variant="OutlineBluegray100"
            ></CheckBox>
            <Text className="JackHood3" variant="body2">
              Jack Hood
            </Text>
            <Text className="Manager3" variant="body2">
              Manager
            </Text>
            <Text className="JackHood3" variant="body2">
              0900-87621231
            </Text>
            <Text className="email_One1" variant="body2">
              jackhood@abc.com
            </Text>
          </Row>
          <Row className="bg-white_A700 items-center justify-between lg:mt-[13px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[22px] xl:p-[12px] 2xl:p-[13px] 3xl:p-[16px] lg:p-[9px] rounded-radius7 shadow-bs w-[100%]">
            <CheckBox
              className="font-normal font-nunito lg:mb-[4px] 2xl:mb-[6px] xl:mb-[6px] 3xl:mb-[8px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] not-italic lg:text-[10px] xl:text-[13px] 2xl:text-[14px] 3xl:text-[17px] text-black_900_b5"
              inputClassName="mr-[5px] w-[undefinedpx]"
              name="19281 Four"
              label="19281"
              shape="RoundedBorder3"
              size="lg"
              variant="OutlineBluegray100"
            ></CheckBox>
            <Text className="rowtime" variant="body2">
              Jack Hood
            </Text>
            <Text className="rowtime" variant="body2">
              Manager
            </Text>
            <Text className="rowtime" variant="body2">
              0900-87621231
            </Text>
            <Text
              className="lg:mr-[24px] xl:mr-[30px] 2xl:mr-[33px] 3xl:mr-[40px] rowtime"
              variant="body2"
            >
              jackhood@abc.com
            </Text>
          </Row>
          {/* <Stack className="lg:h-[17px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] lg:mt-[13px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%]">
            <div className="absolute bg-white_A700 bottom-[0] lg:h-[49px] xl:h-[62px] 2xl:h-[69px] 3xl:h-[83px] rounded-radius7 shadow-bs w-[100%]"></div>
            <Row className="absolute bottom-[0] inset-x-[0] items-center justify-between mx-[auto] w-[94%]">
              <CheckBox
                className="font-normal font-nunito not-italic lg:text-[10px] xl:text-[13px] 2xl:text-[14px] 3xl:text-[17px] text-black_900_b5"
                inputClassName="mr-[5px] w-[undefinedpx]"
                name="19281 Five"
                label="19281"
                shape="RoundedBorder3"
                size="md"
                variant="OutlineBluegray100"
              ></CheckBox>
              <Text className="rowtime" variant="body2">
                Jack Hood
              </Text>
              <Text className="rowtime" variant="body2">
                Manager
              </Text>
              <Text className="rowtime" variant="body2">
                0900-87621231
              </Text>
              <Text className="rowtime" variant="body2">
                jackhood@abc.com
              </Text>
            </Row>
          </Stack> */}
        </Column>
      </footer>
    </>
  );
};

export default Footer;
