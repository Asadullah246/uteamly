import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder4: "rounded-radius4",
  CircleBorder26: "rounded-radius26465",
  icbRoundedBorder4: "rounded-radius4",
};
const variants = {
  FillCyan900: "bg-cyan_900 text-white_A700",
  FillGray300: "bg-gray_300 text-black_900",
  FillRedA701: "bg-red_A701 text-white_A700",
  OutlineCyan900: "border border-cyan_900 border-solid text-cyan_900",
  FillLightgreenA701: "bg-light_green_A701 text-white_A700",
  FillRed900: "bg-red_900 text-white_A700",
  OutlineBlack9003f: "bg-gray_201 shadow-bs1 text-black_900_b5",
  OutlineBlack9003f1_2: "bg-light_green_A701 shadow-bs1 text-white_A700",
  icbFillBluegray100: "bg-bluegray_100",
  icbOutlineBlack9003f: "bg-gray_100 shadow-bs",
  icbFillGray200: "bg-gray_200",
  icbFillBlue600: "bg-blue_600",
  icbFillBluegray10042: "bg-bluegray_100_42",
  icbOutlineBlack9003f1_2: "bg-cyan_900 shadow-bs2",
  icbFillCyan900: "bg-cyan_900",
};
const sizes = {
  sm: "p-[4px]",
  md: "2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] p-[9px]",
  lg: "lg:p-[10px] p-[13px] 2xl:p-[14px] 3xl:p-[17px]",
  xl: "lg:p-[13px] p-[17px] 2xl:p-[19px] 3xl:p-[22px]",
  smIcn: "lg:p-[4px] p-[6px] 3xl:p-[8px]",
  mdIcn: "2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] p-[9px]",
  lgIcn: "lg:p-[24px] p-[30px] 2xl:p-[33px] 3xl:p-[40px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} common-button `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "RoundedBorder4",
    "CircleBorder26",
    "icbRoundedBorder4",
  ]),
  variant: PropTypes.oneOf([
    "FillCyan900",
    "FillGray300",
    "FillRedA701",
    "OutlineCyan900",
    "FillLightgreenA701",
    "FillRed900",
    "OutlineBlack9003f",
    "OutlineBlack9003f1_2",
    "icbFillBluegray100",
    "icbOutlineBlack9003f",
    "icbFillGray200",
    "icbFillBlue600",
    "icbFillBluegray10042",
    "icbOutlineBlack9003f1_2",
    "icbFillCyan900",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg", "xl", "smIcn", "mdIcn", "lgIcn"]),
};
Button.defaultProps = { className: "", shape: "", variant: "", size: "" };

export { Button };
