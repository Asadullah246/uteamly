import React from "react";

import { Column, Row, Img, Text, Button } from "components";
import { useNavigate } from "react-router-dom";

const Sidebar2 = (props) => {
  const navigate = useNavigate();

  function handleNavigate28() {
    navigate("/helpcentertwo");
  }
  function handleNavigate29() {
    navigate("/taskstwo");
  }
  function handleNavigate30() {
    navigate("/settingsone");
  }
  function handleNavigate76() {
    navigate("/tutorialstwo");
  }
  function handleNavigate304() {
    navigate("/messageone");
  }

  return (
    <>
      <aside className={props.className}>
        <div className="">
          <Column className="bg-cyan_900 items-center justify-end lg:p-[19px] xl:p-[24px] 2xl:p-[27px] 3xl:p-[32px] w-[100%]">
            <Column className="justify-start xl:mt-[113px] 2xl:mt-[127px] 3xl:mt-[152px] lg:mt-[90px] w-[54%]">
              <Row className="items-center w-[96%]">
                <Img
                  src="images/img_dashboard5.png"
                  className="dashboardFive"
                  alt="dashboardFive"
                />
                <Text className="rowtodolistone1" as="h5" variant="h5">
                  Dashboard
                </Text>
              </Row>
              <Row
                className="common-pointer items-center lg:mt-[17px] xl:mt-[22px] 2xl:mt-[24px] 3xl:mt-[29px] w-[83%]"
                onClick={props?.onrowchecklistClick}
              >
                <Img
                  src="images/img_checklist.png"
                  className="dashboardFive"
                  alt="checklist"
                />
                <Text className="rowchecklist1" as="h5" variant="h5">
                  Activities
                </Text>
              </Row>
              <Row
                className="common-pointer items-center lg:mt-[17px] xl:mt-[22px] 2xl:mt-[24px] 3xl:mt-[29px] w-[81%]"
                onClick={handleNavigate76}
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
              <Row className="items-start lg:mt-[17px] xl:mt-[22px] 2xl:mt-[24px] 3xl:mt-[29px] w-[88%]">
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
                className="common-pointer items-start lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] w-[100%]"
                onClick={handleNavigate28}
              >
                <Img
                  src="images/img_helpdesk1.png"
                  className="todolistOne"
                  alt="helpdeskOne"
                />
                <Text className="rowemployeeone2" as="h5" variant="h5">
                  Help Center
                </Text>
              </Row>
              <Row className="items-start lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] w-[93%]">
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
                className="common-pointer items-start lg:mt-[17px] xl:mt-[22px] 2xl:mt-[24px] 3xl:mt-[29px] w-[83%]"
                onClick={handleNavigate304}
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
                className="common-pointer items-center lg:mt-[14px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] pr-[2px] py-[2px] w-[83%]"
                onClick={handleNavigate29}
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
            </Column>
            <Button
              className="common-pointer flex lg:h-[31px] xl:h-[39px] 2xl:h-[43px] 3xl:h-[52px] items-center justify-center lg:mt-[164px] xl:mt-[205px] 2xl:mt-[230px] 3xl:mt-[276px] lg:w-[30px] xl:w-[38px] 2xl:w-[42px] 3xl:w-[51px]"
              onClick={handleNavigate30}
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

export default Sidebar2;
