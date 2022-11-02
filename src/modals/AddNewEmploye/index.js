import React from "react";
import ModalProvider from "react-modal";

import { Column, Text, Input, Button } from "components";
import { useNavigate } from "react-router-dom";

const AddNewEmployeModal = (props) => {
  const navigate = useNavigate();

  function handleNavigate70() {
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
          <Column className="bg-white_A700 items-center justify-start lg:p-[121px] xl:p-[152px] 2xl:p-[171px] 3xl:p-[205px] rounded-radius15 w-[100%]">
            <Column className="items-center justify-start mb-[1px] w-[35%]">
              <Text
                className="font-semibold text-blue_600 w-[auto]"
                as="h4"
                variant="h4"
              >
                Add New Employee
              </Text>
              <Column className="items-center justify-start lg:mt-[24px] xl:mt-[31px] 2xl:mt-[34px] 3xl:mt-[41px] w-[100%]">
                <Input
                  className="placeholder:text-black_900_99 GroupThree"
                  wrapClassName="w-[100%]"
                  type="text"
                  name="GroupThree"
                  placeholder="Name"
                ></Input>
                <Input
                  className="placeholder:text-black_900_99 GroupThree"
                  wrapClassName="2xl:mt-[27px] 3xl:mt-[32px] lg:mt-[19px] w-[100%] xl:mt-[24px]"
                  type="number"
                  name="Group3785"
                  placeholder="Phone Number"
                ></Input>
                <Input
                  className="placeholder:text-black_900_99 GroupThree"
                  wrapClassName="2xl:mt-[27px] 3xl:mt-[32px] lg:mt-[19px] w-[100%] xl:mt-[24px]"
                  type="email"
                  name="Group3786"
                  placeholder="Email"
                ></Input>
                <Input
                  className="placeholder:text-black_900_99 GroupThree"
                  wrapClassName="2xl:mt-[27px] 3xl:mt-[32px] lg:mt-[19px] w-[100%] xl:mt-[24px]"
                  name="Group3787"
                  placeholder="Role"
                ></Input>
                <Button
                  className="common-pointer font-semibold lg:mt-[26px] xl:mt-[33px] 2xl:mt-[37px] 3xl:mt-[44px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[100%]"
                  onClick={handleNavigate70}
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

export { AddNewEmployeModal };
