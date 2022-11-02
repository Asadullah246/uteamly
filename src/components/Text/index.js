import React from "react";
const variantClasses = {
  h1: "font-semibold lg:text-[19px] text-[24px] 2xl:text-[27px] 3xl:text-[32px]",
  h2: "font-semibold lg:text-[17px] text-[22px] 2xl:text-[24px] 3xl:text-[29px]",
  h3: "lg:text-[16px] text-[20px] 2xl:text-[22px] 3xl:text-[27px]",
  h4: "lg:text-[14px] text-[18px] 2xl:text-[20px] 3xl:text-[24px]",
  h5: "lg:text-[12px] text-[16px] 2xl:text-[18px] 3xl:text-[21px]",
  h6: "lg:text-[12px] text-[15px] 2xl:text-[16px] 3xl:text-[20px]",
  body1: "lg:text-[11px] text-[14px] 2xl:text-[15px] 3xl:text-[18px]",
  body2: "lg:text-[10px] text-[13px] 2xl:text-[14px] 3xl:text-[17px]",
  body3: "text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px]",
  body4:
    "font-medium text-[11px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px]",
  body5:
    "font-normal text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
