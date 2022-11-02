import React from "react";
import ModalProvider from "react-modal";

import { Column, Text, Input, Button } from "components";
import { useNavigate } from "react-router-dom";

const CreategroupModal = (props) => {
  const navigate = useNavigate();

  function handleNavigate61() {
    navigate("/employeeone");
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
          <Column className="bg-white_A700 items-center justify-start lg:p-[164px] xl:p-[206px] 2xl:p-[231px] 3xl:p-[278px] rounded-radius15 w-[100%]">
            <Column className="justify-start lg:mb-[28px] xl:mb-[36px] 2xl:mb-[40px] 3xl:mb-[48px] w-[39%]">
              <Text
                className="font-semibold xl:ml-[121px] 2xl:ml-[136px] 3xl:ml-[163px] lg:ml-[96px] text-blue_600 w-[auto]"
                as="h4"
                variant="h4"
              >
                Create group
              </Text>
              <Column className="items-center justify-start lg:mt-[24px] xl:mt-[31px] 2xl:mt-[34px] 3xl:mt-[41px] w-[100%]">
                <Input
                  className="placeholder:text-black_900_99 GroupThree"
                  wrapClassName="w-[100%]"
                  name="membersCounter"
                  placeholder="3 Members"
                  variant="FillGray301"
                ></Input>
                <Input
                  className="placeholder:text-black_900_99 GroupThree"
                  wrapClassName="2xl:mt-[38px] 3xl:mt-[45px] lg:mt-[27px] w-[100%] xl:mt-[34px]"
                  type="text"
                  name="Group3785"
                  placeholder="Group Name"
                ></Input>
                <Button
                  className="common-pointer font-semibold lg:mt-[27px] xl:mt-[34px] 2xl:mt-[38px] 3xl:mt-[45px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[100%]"
                  onClick={handleNavigate61}
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

export { CreategroupModal };
