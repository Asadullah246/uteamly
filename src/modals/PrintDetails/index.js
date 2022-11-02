import React from "react";
import ModalProvider from "react-modal";

import { Column, Text, Row, Img } from "components";

const PrintDetailsModal = (props) => {
  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] w-[100%]"
        overlayClassName="bg-black_900_68 fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="m-[auto] max-h-[97vh] overflow-y-auto">
          <Column className="bg-white_A700 items-center justify-end lg:p-[219px] xl:p-[274px] 2xl:p-[308px] 3xl:p-[370px] rounded-radius15 w-[100%]">
            <Column className="justify-start lg:mt-[18px] xl:mt-[23px] 2xl:mt-[25px] 3xl:mt-[31px] w-[47%]">
              <Text className="columnprintdetailso" as="h4" variant="h4">
                Print Details of Jack Hood ?
              </Text>
              <Column className="bg-cyan_900 items-center justify-end 3xl:mt-[106px] lg:mt-[63px] xl:mt-[79px] 2xl:mt-[88px] lg:p-[12px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[21px] rounded-radius2646 w-[100%]">
                <Row className="items-center justify-center mt-[1px] w-[23%]">
                  <Img
                    src="images/img_printing1.png"
                    className="lg:h-[16px] xl:h-[20px] 2xl:h-[22px] 3xl:h-[26px] lg:w-[15px] xl:w-[19px] 2xl:w-[21px] 3xl:w-[25px]"
                    alt="printingOne"
                  />
                  <Text className="rowprintingone1" as="h5" variant="h5">
                    Print
                  </Text>
                </Row>
              </Column>
            </Column>
          </Column>
        </div>
      </ModalProvider>
    </>
  );
};

export { PrintDetailsModal };
