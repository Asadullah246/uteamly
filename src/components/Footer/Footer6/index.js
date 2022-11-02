import React from "react";

import { Column, Row, Text, Stack } from "components";

const Footer6 = (props) => {
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
          <Stack className="xl:h-[11px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[8px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] rounded-radius5 w-[100%]">
            <div className="absolute bg-white_A700 bottom-[0] lg:h-[49px] xl:h-[62px] 2xl:h-[69px] 3xl:h-[83px] rounded-radius7 shadow-bs w-[100%]"></div>
            <Row className="absolute bottom-[0] items-start left-[1%] w-[91%]">
              <Text className="PopBugFix_Four1" variant="body2">
                Pop Bug Fix
              </Text>
              <Text className="test_1322020_Four1" variant="body2">
                13/2/2020
              </Text>
              <Text className="mb-[1px] test_14220206" variant="body2">
                14/2/2020
              </Text>
              <Text className="mb-[1px] duration5" variant="body2">
                1 hours
              </Text>
              <Text className="DineshChugtai_Four1" variant="body2">
                Dinesh Chugtai
              </Text>
            </Row>
          </Stack>
        </Column>
      </footer>
    </>
  );
};

export default Footer6;
