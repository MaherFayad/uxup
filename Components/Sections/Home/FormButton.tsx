"use client";

import React from "react";

type FormButtonProps = {
  id: string;
  text: string;
  showLoading?: boolean;
  isDisabled?: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const FormButton: React.FC<FormButtonProps> = ({
  id,
  text,
  showLoading = false,
  isDisabled = false,
  onClick,
}) => {
  return (
    <div className="col position-relative">
      {!showLoading ? (
        <button
          type="button"
          disabled={isDisabled}
          id={`btn-${id}`}
          onClick={onClick}
          className={`button primary body-regular d-flex gap-2 justify-content-center position-relative ${
            isDisabled ? "disabled-class" : "enabled-class"
          }`}
          aria-label={text}
          title={text}
        >
          {text}
        </button>
      ) : (
        <button
          type="button"
          disabled
          id={`btn-${id}`}
          className="button primary body-regular loading-class"
          aria-label="Loading"
        >
          <div className="loadingDot"></div>
          <div className="loadingDot"></div>
          <div className="loadingDot"></div>
        </button>
      )}
    </div>
  );
};

export default FormButton;
