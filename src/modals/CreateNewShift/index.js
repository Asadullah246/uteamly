import React from "react";
import ModalProvider from "react-modal";

import { Column, Text, Input, Button } from "components";
import { useNavigate } from "react-router-dom";

const CreateNewShiftModal = (props) => {
  const navigate = useNavigate();

  function handleNavigate63() {
    navigate("/employeeshifts");
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
          <Column className="bg-white_A700 items-center justify-start lg:p-[120px] xl:p-[150px] 2xl:p-[168px] 3xl:p-[202px] rounded-radius15 w-[100%]">
            <Column className="items-center justify-start mb-[3px] w-[35%]">
              <Text
                className="font-semibold text-blue_600 w-[auto]"
                as="h4"
                variant="h4"
              >
                Create New Shift
              </Text>
              <Column className="items-center justify-start lg:mt-[28px] xl:mt-[35px] 2xl:mt-[39px] 3xl:mt-[47px] w-[100%]">
                <Column className="border-black_900_b2 border-bw05 border-solid justify-end lg:p-[13px] xl:p-[17px] 2xl:p-[19px] 3xl:p-[22px] rounded-radius2646 w-[100%]">
                  <Text className="mt-[4px] rowsearcheleven1" variant="body1">
                    ID
                  </Text>
                </Column>
                <Input
                  className="placeholder:text-black_900_99 GroupThree"
                  wrapClassName="2xl:mt-[27px] 3xl:mt-[32px] lg:mt-[19px] w-[100%] xl:mt-[24px]"
                  name="language"
                  placeholder="Start Date "
                ></Input>
                <Input
                  className="placeholder:text-black_900_99 GroupThree"
                  wrapClassName="2xl:mt-[27px] 3xl:mt-[32px] lg:mt-[19px] w-[100%] xl:mt-[24px]"
                  name="language One"
                  placeholder="End Date "
                ></Input>
                <Input
                  className="placeholder:text-black_900_99 GroupThree"
                  wrapClassName="2xl:mt-[27px] 3xl:mt-[32px] lg:mt-[19px] w-[100%] xl:mt-[24px]"
                  type="number"
                  name="Group3787"
                  placeholder="Number of Shift"
                ></Input>
                <Button
                  className="common-pointer font-semibold lg:mt-[26px] xl:mt-[33px] 2xl:mt-[37px] 3xl:mt-[44px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[100%]"
                  onClick={handleNavigate63}
                  shape="CircleBorder26"
                  size="xl"
                  variant="FillCyan900"
                >
                  Create{" "}
                </Button>
              </Column>
            </Column>
          </Column>
        </div>
      </ModalProvider>
    </>
  );
};

export { CreateNewShiftModal };
