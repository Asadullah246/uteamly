import React from "react";

import { Column, Row, Text, Stack } from "components";

const Footer7 = (props) => {
  return (
    <>
      <footer className={props.className}>
        <Column className="items-center justify-start w-[100%]">
          <Row className="bg-white_A700 items-center xl:p-[12px] 2xl:p-[13px] 3xl:p-[16px] lg:p-[9px] rounded-radius7 shadow-bs w-[100%]">
            <Text className="PopBugFix6" variant="body2">
              Pop Bug Fix
            </Text>
            <Text className="test_13220203" variant="body2">
              13/2/2020
            </Text>
            <Text className="test_14220206" variant="body2">
              14/2/2020
            </Text>
            <Text className="duration5" variant="body2">
              1 hours
            </Text>
            <Text className="DineshChugtai6" variant="body2">
              Dinesh Chugtai
            </Text>
          </Row>
          <Row className="bg-white_A700 items-center lg:mt-[14px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] xl:p-[12px] 2xl:p-[13px] 3xl:p-[16px] lg:p-[9px] rounded-radius7 shadow-bs w-[100%]">
            <Text className="PopBugFix6" variant="body2">
              Pop Bug Fix
            </Text>
            <Text className="test_13220203" variant="body2">
              13/2/2020
            </Text>
            <Text className="test_14220206" variant="body2">
              14/2/2020
            </Text>
            <Text className="duration5" variant="body2">
              1 hours
            </Text>
            <Text className="DineshChugtai6" variant="body2">
              Dinesh Chugtai
            </Text>
          </Row>
          <Stack className="lg:h-[35px] xl:h-[44px] 2xl:h-[49px] 3xl:h-[59px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] rounded-radius7 w-[100%]">
            <div className="absolute bg-white_A700 bottom-[0] lg:h-[49px] xl:h-[62px] 2xl:h-[69px] 3xl:h-[83px] rounded-radius7 shadow-bs w-[100%]"></div>
            <Row className="absolute bottom-[2%] items-start left-[1%] w-[91%]">
              <Text className="mt-[2px] rowtime" variant="body2">
                Pop Bug Fix
              </Text>
              <Text className="mt-[1px] test_13220203" variant="body2">
                13/2/2020
              </Text>
              <Text className="mt-[1px] test_14220206" variant="body2">
                14/2/2020
              </Text>
              <Text className="duration5" variant="body2">
                1 hours
              </Text>
              <Text
                className="lg:ml-[125px] xl:ml-[157px] 2xl:ml-[176px] 3xl:ml-[212px] my-[1px] rowtime"
                variant="body2"
              >
                Dinesh Chugtai
              </Text>
            </Row>
          </Stack>
        </Column>
      </footer>
    </>
  );
};

export default Footer7;
