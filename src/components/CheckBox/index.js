import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = {
  OutlineBluegray100: "border border-bluegray_100 border-solid",
  OutlineBlack9008e: "border-black_900_8e border-bw05 border-solid",
};
const shapes = { RoundedBorder3: "rounded-radius3" };
const sizes = {
  sm: "lg:pb-[5px] pb-[7px] 3xl:pb-[9px] pt-[1px] px-[1px]",
  md: "px-[1px] py-[2px]",
  lg: "p-[4px]",
};

const CheckBox = React.forwardRef(
  (
    {
      inputClassName = "",
      className,
      name,
      children,
      label = "",
      errors = [],
      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div className={className}>
          <input
            className={`${inputClassName} ${shapes[shape] || ""} ${
              variants[variant] || ""
            } ${sizes[size] || ""}`}
            ref={ref}
            type="checkbox"
            name={name}
            {...restProps}
          />
          {label}
        </div>
        <ErrorMessage errors={errors} />
        {children}
      </>
    );
  }
);

CheckBox.propTypes = {
  inputClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  shape: PropTypes.oneOf(["RoundedBorder3"]),
  variant: PropTypes.oneOf(["OutlineBluegray100", "OutlineBlack9008e"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
};
CheckBox.defaultProps = {
  inputClassName: "",
  className: "",
  name: "",
  label: "",
  shape: "",
  variant: "",
  size: "",
};

export { CheckBox };
