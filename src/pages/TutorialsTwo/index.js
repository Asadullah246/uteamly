import React from "react";

import { Column, Row, Stack, Img, Text } from "components";
import Sidebar1 from "components/Sidebar/Sidebar1";
import { useNavigate } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3.5,
    slidesToSlide: 3.5 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const TutorialsTwoPage = () => {
  const navigate = useNavigate();

  function handleNavigate64() {
    navigate("/employeeone");
  }
  function handleNavigate65() {
    navigate("/activitiesone");
  }

  return (
    <>
      <Column className="bg-white_A700 font-poppins justify-end mx-[auto] lg:pr-[56px] xl:pr-[70px] 2xl:pr-[78px] 3xl:pr-[94px] w-[100%]">
        <div className=" w-[100%]">
          <Row className="items-center justify-between  w-[100%]">
            <Stack className="lg:h-[576px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] w-[100%]">
              <Column className="absolute items-center justify-start left-[0] w-[100%]">
                <Row className="items-start justify-between w-[100%]">
                  <Sidebar1
                    className="w-[24%]"
                    onrowemployeeoneClick={handleNavigate64}
                    onrowchecklistClick={handleNavigate65}
                  />
                  <Column className="justify-start lg:mt-[35px] xl:mt-[44px] 2xl:mt-[49px] 3xl:mt-[59px] w-[72%]">
                    <div className="flex justify-between items-center">
                      <Column className="bg-gray_200 justify-end lg:p-[12px] xl:p-[15px] 2xl:p-[16px] 3xl:p-[20px] rounded-radius5 w-[40%]">
                        <Row className="items-start lg:ml-[4px] 2xl:ml-[5px] xl:ml-[5px] 3xl:ml-[6px] mr-[auto] mt-[4px] w-[25%]">
                          <Img
                            src="images/img_search11.png"
                            className="searchEleven"
                            alt="searchEleven"
                          />
                          <Text className="rowsearcheleven" as="h5" variant="h5">
                            Search
                          </Text>
                        </Row>

                      </Column>
                      <Img
                        src="images/img_ellipse2.png"
                        className="lg:h-[47px] xl:h-[59px] 2xl:h-[66px] 3xl:h-[79px] rounded-radius50 lg:w-[46px] xl:w-[58px] 2xl:w-[65px] 3xl:w-[78px]"
                        alt="EllipseTwo"
                      />
                    </div>

                    <Text className="columntutorials_one1" as="h5" variant="h5">
                      Tutorials
                    </Text>

                    <Column
                      className=" bg-cover bg-repeat items-center  text-center rounded-radius12  mx-auto mt-4 w-[50%]"
                      style={{ backgroundImage: "url('images/img_group327.png')" }}
                    >
                      <Stack className="bg-black_900_6b lg:h-[232px] xl:h-[291px] 2xl:h-[327px] 3xl:h-[392px] lg:px-[100px] xl:px-[126px] 2xl:px-[141px] 3xl:px-[170px] rounded-radius12 w-[100%]">
                        <Img
                          src="images/img_playbutton2.png"
                          className="playbuttonTwo"
                          alt="playbuttonTwo"
                        />
                      </Stack>
                    </Column>

                    {/* carousel  */}

                  <section className="mt-10">
                  <Carousel
                      swipeable={false}
                      draggable={false}
                      // showDots={true}
                      responsive={responsive}
                      ssr={true} // means to render carousel on server-side.
                      infinite={true}
                      autoPlay={true}
                      autoPlaySpeed={1000}
                      keyBoardControl={true}
                      customTransition="all .5"
                      transitionDuration={500}
                      containerClass="carousel-container"
                      removeArrowOnDeviceType={["tablet", "mobile"]}
                      // deviceType={this.props.deviceType}
                      dotListClass="custom-dot-list-style"
                      itemClass="carousel-item-padding-40-px"
                    >
                      <Column
                      className=" bg-cover bg-repeat items-center justify-start rounded-radius6 w-[250px]"
                      style={{ backgroundImage: "url('images/img_group328.png')" }}
                    >
                      <div className="bg-black_900_63 Rectangle1285"></div> 
                    </Column>
                      <Column
                      className=" bg-cover bg-repeat items-center justify-start rounded-radius6 w-[250px]"
                      style={{ backgroundImage: "url('images/img_group328.png')" }}
                    >
                      <div className="bg-black_900_63 Rectangle1285"></div> 
                    </Column>
                      <Column
                      className=" bg-cover bg-repeat items-center justify-start rounded-radius6 w-[250px]"
                      style={{ backgroundImage: "url('images/img_group328.png')" }}
                    >
                      <div className="bg-black_900_63 Rectangle1285"></div> 
                    </Column>
                      <Column
                      className=" bg-cover bg-repeat items-center justify-start rounded-radius6 w-[250px]"
                      style={{ backgroundImage: "url('images/img_group328.png')" }}
                    >
                      <div className="bg-black_900_63 Rectangle1285"></div> 
                    </Column>
                     
                     
                    </Carousel>;
                  </section>
                   
                  </Column>
                </Row>
              </Column>

              <Img
                src="images/img_whatsappimage22.png"
                className="WhatsAppImage"
                alt="WhatsAppImage"
              />
            </Stack>
            {/* <Column className="w-[19%]">
              <Img
                src="images/img_ellipse2.png"
                className="lg:h-[47px] xl:h-[59px] 2xl:h-[66px] 3xl:h-[79px] ml-[4px] rounded-radius50 lg:w-[46px] xl:w-[58px] 2xl:w-[65px] 3xl:w-[78px]"
                alt="EllipseTwo"
              />
              <Column
                className="bg-cover bg-repeat items-center justify-start lg:mt-[330px] xl:mt-[413px] 2xl:mt-[464px] 3xl:mt-[557px] rounded-radius6 w-[100%]"
                style={{ backgroundImage: "url('images/img_group331.png')" }}
              >
                <Img
                  src="images/img_rectangle1285.png"
                  className="Rectangle1285"
                  alt="Rectangle1285"
                />
              </Column>
            </Column> */}
          </Row>
        </div>
      </Column>
    </>
  );
};

export default TutorialsTwoPage;
