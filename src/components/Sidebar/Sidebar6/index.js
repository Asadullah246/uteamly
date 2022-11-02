import React from "react";

import { Column, Row, Img, Text, Button } from "components";
import { useNavigate } from "react-router-dom";

const Sidebar6 = (props) => {
  const navigate = useNavigate();

  function handleNavigate82() {
    navigate("/tutorialsone");
  }
  function handleNavigate83() {
    navigate("/tasksone");
  }
  function handleNavigate247() {
    navigate("/timesheet");
  }
  function handleNavigate248() {
    navigate("/messagetwo");
  }

  return (
    <>
      <aside className={props.className}>
        <div className="">
          <Column className="bg-cyan_900 justify-end lg:p-[19px] xl:p-[24px] 2xl:p-[27px] 3xl:p-[32px] w-[100%]">
            <Row
              className="common-pointer items-center lg:ml-[38px] xl:ml-[48px] 2xl:ml-[54px] 3xl:ml-[64px] mr-[auto] lg:mt-[162px] xl:mt-[203px] 2xl:mt-[228px] 3xl:mt-[274px] w-[43%]"
              onClick={handleNavigate82}
            >
              <Img
                src="images/img_videolesson1.png"
                className="dashboardFive"
                alt="videolessonOne"
              />
              <Text className="rowchecklist1" as="h5" variant="h5">
                Tutorials
              </Text>
            </Row>
            <Row
              className="common-pointer items-center lg:ml-[36px] xl:ml-[46px] 2xl:ml-[51px] 3xl:ml-[62px] mr-[auto] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] pr-[2px] py-[2px] w-[44%]"
              onClick={handleNavigate83}
            >
              <Img
                src="images/img_todolist1.png"
                className="dashboardFive"
                alt="todolistOne"
              />
              <Text className="rowtodolistone1" as="h5" variant="h5">
                Tasks
              </Text>
            </Row>
            <Row className="items-start lg:ml-[38px] xl:ml-[48px] 2xl:ml-[54px] 3xl:ml-[64px] mr-[auto] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] w-[54%]">
              <Img
                src="images/img_helpdesk1.png"
                className="todolistOne"
                alt="helpdeskOne"
              />
              <Text className="rowemployeeone2" as="h5" variant="h5">
                Help Center
              </Text>
            </Row>
            <Row
              className="common-pointer items-center lg:ml-[38px] xl:ml-[48px] 2xl:ml-[54px] 3xl:ml-[64px] mr-[auto] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] w-[52%]"
              onClick={handleNavigate247}
            >
              <Img
                src="images/img_googledocs1.png"
                className="dashboardFive"
                alt="googledocsOne"
              />
              <Text className="rowchecklist1" as="h5" variant="h5">
                Time Sheet
              </Text>
            </Row>
            <Row
              className="common-pointer items-start lg:ml-[38px] xl:ml-[48px] 2xl:ml-[54px] 3xl:ml-[64px] mr-[auto] lg:mt-[17px] xl:mt-[22px] 2xl:mt-[24px] 3xl:mt-[29px] w-[45%]"
              onClick={handleNavigate248}
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
              className="common-pointer flex lg:h-[31px] xl:h-[39px] 2xl:h-[43px] 3xl:h-[52px] items-center justify-center lg:ml-[36px] xl:ml-[46px] 2xl:ml-[51px] 3xl:ml-[62px] lg:mt-[192px] xl:mt-[241px] 2xl:mt-[271px] 3xl:mt-[325px] lg:w-[30px] xl:w-[38px] 2xl:w-[42px] 3xl:w-[51px]"
              onClick={props?.onGroup3846Click}
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

export default Sidebar6;
