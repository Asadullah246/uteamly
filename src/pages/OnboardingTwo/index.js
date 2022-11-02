import React from "react";

import { Column, Row, Img, Text, Stack } from "components";

const OnboardingTwoPage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-poppins items-center justify-start mx-[auto] w-[100%]">
        <Row className="items-start justify-between w-[100%]">
          <Column className="justify-start w-[46%]">
            <Img
              src="images/img_whatsappimage_16.png"
              className="WhatsAppImage10"
              alt="WhatsAppImage"
            />
            <Column className="justify-start xl:ml-[101px] 2xl:ml-[113px] 3xl:ml-[136px] lg:ml-[80px] lg:mt-[21px] xl:mt-[27px] 2xl:mt-[30px] 3xl:mt-[36px] w-[83%]">
              <Text
                className="leading-[normal] text-blue_600 w-[91%]"
                as="h2"
                variant="h2"
              >
                With Utealy you can keep a track of you Shifts payment
              </Text>
              <Text
                className="font-normal leading-[normal] lg:mt-[21px] xl:mt-[27px] 2xl:mt-[30px] 3xl:mt-[36px] not-italic text-black_900 w-[100%]"
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
          <Column className="bg-light_blue_800 items-center justify-start w-[50%]">
            <Column className="justify-start w-[100%]">
              <Row className="items-end w-[84%]">
                <Img
                  src="images/img_vector1.svg"
                  className="VectorOne"
                  alt="VectorOne"
                />
                <Img
                  src="images/img_contrast.svg"
                  className="contrast"
                  alt="contrast"
                />
                <Column className="items-end justify-start 3xl:mt-[108px] lg:mt-[64px] xl:mt-[80px] 2xl:mt-[90px] w-[21%]">
                  <Row className="items-center justify-evenly w-[100%]">
                    <Img
                      src="images/img_contrast.svg"
                      className="contrast_One"
                      alt="contrast One"
                    />
                    <Img
                      src="images/img_contrast.svg"
                      className="contrast_One"
                      alt="contrast Two"
                    />
                    <Img
                      src="images/img_contrast.svg"
                      className="contrast_One"
                      alt="contrast Three"
                    />
                  </Row>
                  <Row className="items-center justify-end ml-[auto] w-[67%]">
                    <Img
                      src="images/img_contrast.svg"
                      className="contrast_Four"
                      alt="contrast Four"
                    />
                    <Img
                      src="images/img_contrast.svg"
                      className="contrast_Five"
                      alt="contrast Five"
                    />
                  </Row>
                </Column>
              </Row>
              <Stack className="lg:h-[429px] xl:h-[537px] 2xl:h-[604px] 3xl:h-[725px] lg:ml-[10px] xl:ml-[13px] 2xl:ml-[14px] 3xl:ml-[17px] lg:mt-[17px] xl:mt-[22px] 2xl:mt-[24px] 3xl:mt-[29px] w-[98%]">
                <Img
                  src="images/img_vector2.svg"
                  className="absolute bottom-[0] lg:h-[224px] xl:h-[281px] 2xl:h-[316px] 3xl:h-[379px] right-[0] w-[45%]"
                  alt="VectorTwo"
                />
                <Img
                  src="images/img_5917012.png"
                  className="absolute lg:h-[281px] xl:h-[352px] 2xl:h-[396px] 3xl:h-[475px] left-[0] top-[0] w-[84%]"
                  alt="5917012"
                />
              </Stack>
            </Column>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default OnboardingTwoPage;
