import React from "react";

import { Column, Row, Img, Text, Button } from "components";
import { useNavigate } from "react-router-dom";

const Sidebar = (props) => {
  const navigate = useNavigate();

  function handleNavigate279() {
    navigate("/activities");
  }
  function handleNavigate280() {
    navigate("/userstats");
  }

  return (
    <>
      <aside className={props.className}>
        <div className="">
          <Column className="bg-cyan_900 justify-end lg:p-[19px] xl:p-[24px] 2xl:p-[27px] 3xl:p-[32px] w-[100%]">
            <Row
              className="common-pointer items-center justify-center lg:ml-[36px] xl:ml-[46px] 2xl:ml-[51px] 3xl:ml-[62px] lg:mt-[161px] xl:mt-[202px] 2xl:mt-[227px] 3xl:mt-[272px] w-[61%]"
              onClick={handleNavigate279}
            >
              <Img
                src="images/img_todolist1.png"
                className="dashboardFive"
                alt="todolistOne"
              />
              <Text className="rowtodolistone1" as="h5" variant="h5">
                User Activities
              </Text>
            </Row>
            <Row
              className="common-pointer items-start lg:ml-[38px] xl:ml-[48px] 2xl:ml-[54px] 3xl:ml-[64px] mr-[auto] lg:mt-[17px] xl:mt-[22px] 2xl:mt-[24px] 3xl:mt-[29px] w-[30%]"
              onClick={handleNavigate280}
            >
              <Img
                src="images/img_stats1.png"
                className="dashboardFive"
                alt="statsOne"
              />
              <Text
                className="font-medium font-poppins xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] mt-[2px] text-white_A700 w-[auto]"
                as="h5"
                variant="h5"
              >
                Stats
              </Text>
            </Row>
            <Button
              className="common-pointer flex lg:h-[31px] xl:h-[39px] 2xl:h-[43px] 3xl:h-[52px] items-center justify-center lg:ml-[36px] xl:ml-[46px] 2xl:ml-[51px] 3xl:ml-[62px] lg:mt-[296px] xl:mt-[370px] 2xl:mt-[416px] 3xl:mt-[499px] lg:w-[30px] xl:w-[38px] 2xl:w-[42px] 3xl:w-[51px]"
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

export default Sidebar;
