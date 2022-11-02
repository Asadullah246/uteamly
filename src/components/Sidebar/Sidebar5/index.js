import React from "react";

import { Column, Row, Img, Text, Button } from "components";
import { useNavigate } from "react-router-dom";

const Sidebar5 = (props) => {
  const navigate = useNavigate();

  function handleNavigate324() {
    navigate("/message");
  }

  return (
    <>
      <aside className={props.className}>
        <div className="">
          <Column className="bg-cyan_900 justify-end lg:p-[19px] xl:p-[24px] 2xl:p-[27px] 3xl:p-[32px] w-[100%]">
            <Row className="items-start lg:ml-[38px] xl:ml-[48px] 2xl:ml-[54px] 3xl:ml-[64px] mr-[auto] lg:mt-[154px] xl:mt-[193px] 2xl:mt-[217px] 3xl:mt-[260px] w-[47%]">
              <Img
                src="images/img_employee1.png"
                className="todolistOne"
                alt="employeeOne"
              />
              <Text className="rowemployeeone2" as="h5" variant="h5">
                Employee
              </Text>
            </Row>
            <Row
              className="common-pointer items-start lg:ml-[38px] xl:ml-[48px] 2xl:ml-[54px] 3xl:ml-[64px] mr-[auto] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] w-[45%]"
              onClick={handleNavigate324}
            >
              <Img
                src="images/img_email51.png"
                className="todolistOne"
                alt="emailFiftyOne"
              />
              <Text className="rowemailfiftyone1" as="h5" variant="h5">
                Message
              </Text>
            </Row>
            <Row
              className="common-pointer items-start lg:ml-[36px] xl:ml-[46px] 2xl:ml-[51px] 3xl:ml-[62px] mr-[auto] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] w-[50%]"
              onClick={props?.onrowgoogledocsoneClick}
            >
              <Img
                src="images/img_googledocs1.png"
                className="dashboardFive"
                alt="googledocsOne"
              />
              <Text className="rowgoogledocsone1" as="h5" variant="h5">
                Document
              </Text>
            </Row>
            <Row
              className="common-pointer items-center lg:ml-[36px] xl:ml-[46px] 2xl:ml-[51px] 3xl:ml-[62px] mr-[auto] lg:mt-[17px] xl:mt-[22px] 2xl:mt-[24px] 3xl:mt-[29px] w-[41%]"
              onClick={props?.onrowtimetwentyoneClick}
            >
              <Img
                src="images/img_time21.png"
                className="dashboardFive"
                alt="timeTwentyOne"
              />
              <Text className="rowtodolistone1" as="h5" variant="h5">
                Clock in
              </Text>
            </Row>
            <Button
              className="flex lg:h-[31px] xl:h-[39px] 2xl:h-[43px] 3xl:h-[52px] items-center justify-center lg:ml-[36px] xl:ml-[46px] 2xl:ml-[51px] 3xl:ml-[62px] lg:mt-[236px] xl:mt-[295px] 2xl:mt-[332px] 3xl:mt-[398px] lg:w-[30px] xl:w-[38px] 2xl:w-[42px] 3xl:w-[51px]"
              shape="icbRoundedBorder4"
              size="mdIcn"
              variant="icbFillBluegray10042"
            >
              <Img
                src="images/img_group3846.png"
                className="flex items-center justify-center lg:h-[16px] xl:h-[21px] 2xl:h-[23px] 3xl:h-[28px]"
                alt="Group3846"
              />
            </Button>
          </Column>
        </div>
      </aside>
    </>
  );
};

export default Sidebar5;
