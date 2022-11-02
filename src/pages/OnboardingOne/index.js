import React from "react";

import { Column, Row, Img, Text, Stack } from "components";

const OnboardingOnePage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-poppins items-center justify-start mx-[auto] w-[100%]">
        <Row className="items-start justify-between w-[100%]">
          <Column className="justify-start w-[46%]">
            <Img
              src="images/img_whatsappimage_14.png"
              className="WhatsAppImage10"
              alt="WhatsAppImage"
            />
            <Column className="justify-start xl:ml-[101px] 2xl:ml-[113px] 3xl:ml-[136px] lg:ml-[80px] lg:mt-[21px] xl:mt-[27px] 2xl:mt-[30px] 3xl:mt-[36px] w-[83%]">
              <Text className="text-blue_600 w-[auto]" as="h2" variant="h2">
                With Utealy you can manage shifts
              </Text>
              <Text
                className="font-normal leading-[normal] lg:mt-[32px] xl:mt-[41px] 2xl:mt-[46px] 3xl:mt-[55px] not-italic text-black_900 w-[100%]"
                as="h4"
                variant="h4"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries
              </Text>
            </Column>
          </Column>
          <Stack className="bg-light_blue_800 lg:h-[576px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] w-[50%]">
            <Img
              src="images/img_vector1.svg"
              className="absolute lg:h-[127px] xl:h-[159px] 2xl:h-[178px] 3xl:h-[214px] left-[0] top-[0] w-[25%]"
              alt="VectorOne"
            />
            <Stack className="absolute bottom-[0] lg:h-[480px] xl:h-[600px] 2xl:h-[675px] 3xl:h-[810px] right-[0] w-[91%]">
              <Column className="absolute items-center justify-start right-[0] w-[48%]">
                <Column className="items-center justify-start w-[100%]">
                  <Row className="items-center justify-center w-[28%]">
                    <Img
                      src="images/img_contrast.svg"
                      className="contrast_Four"
                      alt="contrast"
                    />
                    <Img
                      src="images/img_contrast.svg"
                      className="contrast_Five"
                      alt="contrast One"
                    />
                  </Row>
                  <Img
                    src="images/img_vector2.svg"
                    className="lg:h-[224px] xl:h-[281px] 2xl:h-[316px] 3xl:h-[379px] lg:mt-[222px] xl:mt-[278px] 2xl:mt-[312px] 3xl:mt-[375px] w-[100%]"
                    alt="VectorTwo"
                  />
                </Column>
              </Column>
              <Img
                src="images/img_3958831012.png"
                className="absolute lg:h-[352px] xl:h-[441px] 2xl:h-[496px] 3xl:h-[595px] left-[0] top-[6%] lg:w-[352px] xl:w-[440px] 2xl:w-[495px] 3xl:w-[594px]"
                alt="3958831012"
              />
            </Stack>
            <Row className="absolute items-center justify-center right-[16%] top-[11%] w-[24%]">
              <Img
                src="images/img_contrast.svg"
                className="contrast_Two"
                alt="contrast Two"
              />
              <Img
                src="images/img_contrast.svg"
                className="contrast_Two"
                alt="contrast Three"
              />
              <Img
                src="images/img_contrast.svg"
                className="contrast_Two"
                alt="contrast Four"
              />
              <Img
                src="images/img_contrast.svg"
                className="ml-[2px] contrast_Two"
                alt="contrast Five"
              />
            </Row>
          </Stack>
        </Row>
      </Column>
    </>
  );
};

export default OnboardingOnePage;
