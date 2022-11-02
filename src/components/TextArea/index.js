import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = { FillGray100: "bg-gray_100 border-0" };
const shapes = { RoundedBorder4: "rounded-radius4" };
const sizes = { sm: "lg:p-[14px] p-[18px] 2xl:p-[20px] 3xl:p-[24px]" };
const TextArea = React.forwardRef(
  (
    {
      className,
      name,
      placeholder,
      children,
      shape,
      variant,
      size,
      errors,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <textarea
          ref={ref}
          className={`${className} ${shapes[shape] || ""} ${
            variants[variant] || ""
          } ${sizes[size] || ""}`}
          name={name}
          placeholder={placeholder}
          {...restProps}
        />
        {!!errors && <ErrorMessage errors={errors} />}

        {children}
      </>
    );
  }
);
TextArea.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  shape: PropTypes.oneOf(["RoundedBorder4"]),
  variant: PropTypes.oneOf(["FillGray100"]),
  size: PropTypes.oneOf(["sm"]),
};
TextArea.defaultProps = {
  className: "",
  name: "",
  placeholder: "",
  shape: "RoundedBorder4",
  variant: "FillGray100",
  size: "sm",
};
export { TextArea };
