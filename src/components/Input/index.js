import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = {
  OutlineBlack900b2: "border-black_900_b2 border-bw05 border-solid",
  FillGray100: "bg-gray_100",
  FillBlue600: "bg-blue_600",
  FillGray301: "bg-gray_301",
};
const shapes = {
  CircleBorder26: "rounded-radius26465",
  RoundedBorder4: "rounded-radius4",
  CustomBorderTL8:
    "rounded-bl-[8px] rounded-br-[0] rounded-tl-[8px] rounded-tr-[8px]",
};
const sizes = {
  sm: "lg:pb-[10px] pb-[13px] 2xl:pb-[14px] 3xl:pb-[17px] lg:pt-[13px] pt-[17px] 2xl:pt-[19px] 3xl:pt-[22px] lg:px-[10px] px-[13px] 2xl:px-[14px] 3xl:px-[17px]",
  md: "lg:pb-[13px] pb-[17px] 2xl:pb-[19px] 3xl:pb-[22px] lg:pt-[16px] pt-[21px] 2xl:pt-[23px] 3xl:pt-[28px] lg:px-[13px] px-[17px] 2xl:px-[19px] 3xl:px-[22px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name,
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div
          className={`${wrapClassName} ${shapes[shape] || ""} ${
            variants[variant] || ""
          } ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf([
    "CircleBorder26",
    "RoundedBorder4",
    "CustomBorderTL8",
  ]),
  variant: PropTypes.oneOf([
    "OutlineBlack900b2",
    "FillGray100",
    "FillBlue600",
    "FillGray301",
  ]),
  size: PropTypes.oneOf(["sm", "md"]),
};
Input.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
  shape: "CircleBorder26",
  variant: "OutlineBlack900b2",
  size: "md",
};

export { Input };
