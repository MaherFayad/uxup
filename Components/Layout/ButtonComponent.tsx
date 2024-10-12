"use client";

import React, { useEffect, useRef, useState } from "react";

export type ButtonProps = {
  id: string;
  type?: "primary" | "secondary" | "outLine";
  text: string;
  showLoading?: boolean;
  isDisable?: boolean;
  suffixImg?: string;
  suffixIcon?: string;
  prefixImg?: string;
  dynaTraceTag?: string;
  prefixIcon?: string;
  numberBadge?: number;
  dropDownoptions?: ButtonDropDownOptions[];
  currency?: string;
  onClick?: (id: string) => void;
};

export type ButtonDropDownOptions = {
  id: string;
  disabled?: boolean;
  icon?: string;
  isDanger?: boolean;
  text: string;
  badge?: number;
  hasBorder?: boolean;
};

const ButtonComponent: React.FC<ButtonProps> = ({
  id,
  type = "primary",
  text,
  showLoading = false,
  isDisable = false,
  suffixImg,
  suffixIcon,
  prefixImg,
  dynaTraceTag,
  prefixIcon,
  dropDownoptions,
  currency,
  onClick,
}) => {
  const dropdownMenu = useRef<HTMLDivElement | null>(null);
  const [currentBtnClass, setCurrentBtnClass] = useState<string>(
    "btn-primary uxup-bg-primary-400 uxup-color-text-950 border border-dark rounded-pill"
  );

  const buttonClasses = {
    enabled: {
      primary: "btn-primary uxup-bg-primary-400 uxup-color-text-950 uxup-fs-paragraph border border-dark rounded-pill fw-bold py-2 px-4",
      secondary: "btn-secondary uxup-bg-neutralBasePlus20 uxup-white rounded-pill",
      outLine: "btn-secondary uxup-bg-white uxup-primaryBlack border border-dark rounded-pill",
    },
    disabled: {
      primary: "btn-primary uxup-bg-primary-400 uxup-color-text-950 border border-dark rounded-pill" ,
      secondary: "btn-secondary uxup-bg-neutralBasePlus20 uxup-white rounded-pill",
      outLine: "btn-secondary uxup-bg-white uxup-primaryBlack border border-light rounded-pill",
    },
  };

  const doClick = () => {
    if (!dropDownoptions) {
      onClick && onClick(id);
    } else {
      dropdownMenu.current?.classList.toggle("show");
    }
  };

  const doClickMenu = (itemId: string) => {
    onClick && onClick(itemId);
  };

  useEffect(() => {
    const getBtnStatus = () => (isDisable ? "disabled" : "enabled");
    setCurrentBtnClass(buttonClasses[getBtnStatus()][type] || currentBtnClass);
  }, [isDisable, type]);

  return (
    <>
      {!showLoading ? (
        <div className="col position-relative">
          <button
            type="button"
            disabled={isDisable}
            id={`btn-${id}`}
            onClick={doClick}
            className={`uxup-btn font-body-semi-bold w-100 d-flex gap-2 justify-content-center position-relative ${currentBtnClass}`}
            aria-label={text} // Ensure button has discernible text for screen readers
            title={text} // Optional, can be used to add tooltip or better accessibility
          >
            <div className="d-flex gap-2">
              {prefixIcon && (
                <span
                  className={`material-symbols-outlined fs-4 my-auto ${prefixIcon}`}
                  aria-hidden="true" // Ensures this icon is ignored by screen readers
                />
              )}
              {prefixImg && <img src={prefixImg} alt="Prefix Icon" />}
              <span className="my-auto" data-dtname={dynaTraceTag}>
                {text} {/* This is the visible text for the button */}
              </span>
              {currency && <span className="currencyClass">{currency}</span>}
              {suffixIcon && (
                <span
                  className={`material-symbols-outlined fs-4 my-auto ${suffixIcon}`}
                  aria-hidden="true" // Ensures this icon is ignored by screen readers
                />
              )}
              {suffixImg && <img src={suffixImg} alt="Suffix Icon" />}
            </div>
          </button>
        </div>
      ) : (
        <div className="col">
          <button
            type="button"
            disabled={true}
            id={`btn-${id}`}
            className={`uxup-btn font-body-semi-bold w-100 ${currentBtnClass}`}
            aria-label="Loading" // Label the button to screen readers as 'loading'
          >
            <div className={`loadingDot-${type}`} />
            <div className={`loadingDot-${type}`} />
            <div className={`loadingDot-${type}`} />
          </button>
        </div>
      )}
      {dropDownoptions && dropDownoptions.length > 0 && !showLoading && (
        <div ref={dropdownMenu} className="onEndDropDown" aria-labelledby="dropdown1">
          {dropDownoptions.map((item: ButtonDropDownOptions) => (
            <button
              key={item.id}
              id={item.id}
              className="mb-2 text-start px-0"
              disabled={item.disabled || false}
              onClick={() => doClickMenu(item.id)}
              aria-label={item.text} // Accessible label for screen readers
            >
              <div className="d-flex gap-3 color-uxup-primaryText font-body-semi-bold">
                {item.icon && (
                  <span
                    className={`my-auto color-uxup-secondaryText fs-4 ${
                      item.isDanger ? "color-uxup-negativeText" : ""
                    }`}
                    aria-hidden="true" // Ignored by screen readers
                  >
                    {item.icon}
                  </span>
                )}
                <span className={`flex-grow-1 my-auto ${item.isDanger ? "color-uxup-negativeText" : ""}`}>
                  {item.text}
                </span>
              </div>
              {item.hasBorder && <div className="pt-2 uxup-dropdown-divider"></div>}
            </button>
          ))}
        </div>
      )}
    </>
  );
};

export default ButtonComponent;