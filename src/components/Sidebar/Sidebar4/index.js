import React from "react";

import { Column, Row, Img, Text, Button } from "components";
import { useNavigate } from "react-router-dom";

const Sidebar4 = (props) => {
  const navigate = useNavigate();

  function handleNavigate232() {
    navigate("/timesheetone");
  }
  function handleNavigate238() {
    navigate("/training");
  }
  function handleNavigate239() {
    navigate("/messagethree");
  }

  return (
    <>
      <aside className={props.className}>
        <div className="">
          <Column className="bg-cyan_900 justify-end lg:p-[19px] xl:p-[24px] 2xl:p-[27px] 3xl:p-[32px] w-[100%]">
            <Row className="items-center lg:ml-[37px] xl:ml-[47px] 2xl:ml-[52px] 3xl:ml-[63px] mr-[auto] lg:mt-[157px] xl:mt-[197px] 2xl:mt-[221px] 3xl:mt-[266px] w-[41%]">
              <Img
                src="images/img_time21.png"
                className="dashboardFive"
                alt="timeTwentyOne"
              />
              <Text className="rowtodolistone1" as="h5" variant="h5">
                Clock in
              </Text>
            </Row>
            <Row className="items-start lg:ml-[37px] xl:ml-[47px] 2xl:ml-[52px] 3xl:ml-[63px] mr-[auto] lg:mt-[17px] xl:mt-[22px] 2xl:mt-[24px] 3xl:mt-[29px] w-[50%]">
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
              className="common-pointer items-start lg:ml-[37px] xl:ml-[47px] 2xl:ml-[52px] 3xl:ml-[63px] mr-[auto] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] w-[40%]"
              onClick={handleNavigate238}
            >
              <Img
                src="images/img_videolesson1.png"
                className="todolistOne"
                alt="videolessonOne"
              />
              <Text className="rowpartnershipone1" as="h5" variant="h5">
                Traning
              </Text>
            </Row>
            <Row
              className="common-pointer items-center lg:ml-[37px] xl:ml-[47px] 2xl:ml-[52px] 3xl:ml-[63px] mr-[auto] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] w-[52%]"
              onClick={handleNavigate232}
            >
              <Img
                src="images/img_googledocs1.png"
                className="dashboardFive"
                alt="googledocsOne One"
              />
              <Text className="rowchecklist1" as="h5" variant="h5">
                Time Sheet
              </Text>
            </Row>
            <Row
              className="common-pointer items-start lg:ml-[37px] xl:ml-[47px] 2xl:ml-[52px] 3xl:ml-[63px] mr-[auto] lg:mt-[17px] xl:mt-[22px] 2xl:mt-[24px] 3xl:mt-[29px] w-[45%]"
              onClick={handleNavigate239}
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
            <Button
              className="flex lg:h-[31px] xl:h-[39px] 2xl:h-[43px] 3xl:h-[52px] items-center justify-center lg:ml-[36px] xl:ml-[45px] 2xl:ml-[50px] 3xl:ml-[60px] lg:mt-[199px] xl:mt-[249px] 2xl:mt-[280px] 3xl:mt-[336px] lg:w-[30px] xl:w-[38px] 2xl:w-[42px] 3xl:w-[51px]"
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

export default Sidebar4;
