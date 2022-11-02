import React from "react";
import ModalProvider from "react-modal";

import { Column, Text, Button } from "components";
import { useNavigate } from "react-router-dom";

const AddNotesModal = (props) => {
  const navigate = useNavigate();

  function handleNavigate327() {
    navigate("/clockin");
  }

  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] w-[100%]"
        overlayClassName="bg-black_900_68 fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="m-[auto] max-h-[97vh] overflow-y-auto">
          <Column className="bg-white_A700 items-center justify-end lg:p-[160px] xl:p-[200px] 2xl:p-[225px] 3xl:p-[270px] rounded-radius15 w-[100%]">
            <Column className="items-center justify-start lg:mt-[5px] 2xl:mt-[7px] xl:mt-[7px] 3xl:mt-[9px] w-[39%]">
              <Text
                className="font-semibold text-blue_600 w-[auto]"
                as="h4"
                variant="h4"
              >
                Notes
              </Text>
              <Column className="items-center justify-start lg:mt-[28px] xl:mt-[35px] 2xl:mt-[39px] 3xl:mt-[47px] w-[100%]">
                <div className="border-black_900_b2 border-bw05 border-solid lg:h-[133px] xl:h-[167px] 2xl:h-[187px] 3xl:h-[225px] rounded-radius11 w-[100%]"></div>
                <Button
                  className="common-pointer font-semibold lg:mt-[29px] xl:mt-[37px] 2xl:mt-[41px] 3xl:mt-[49px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[100%]"
                  onClick={handleNavigate327}
                  shape="CircleBorder26"
                  size="xl"
                  variant="FillCyan900"
                >
                  Submit
                </Button>
              </Column>
            </Column>
          </Column>
        </div>
      </ModalProvider>
    </>
  );
};

export { AddNotesModal };
