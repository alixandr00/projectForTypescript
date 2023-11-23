import React from "react";
import { toast, ToastContainer, ToastOptions } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaTimes } from "react-icons/fa";

interface CloseButtonProps {
  color: string;
}

const CloseButton: React.FC<CloseButtonProps> = ({ color }) => {
  return (
    <FaTimes
      style={{
        color,
        fontSize: "1rem",
        cursor: "pointer",
      }}
    />
  );
};

interface CustomToastProps {
  message: string;
  additionalMessage?: string;
  severity: "success" | "error" | "warning";
}

const CustomToast: React.FC<CustomToastProps> = ({
  message,
  additionalMessage,
  severity,
}) => {
  let firstWordStyle: React.CSSProperties = {
    color: "",
    fontSize: "",
    marginBottom: "0.625rem",
  };
  let secondWordStyle: React.CSSProperties = {
    color: "",
    fontSize: "",
  };

  if (severity === "success") {
    firstWordStyle = {
      color: "#006400",
      fontSize: "1.25rem",
    };
    secondWordStyle = {
      color: "#008000",
      fontSize: "0.9375rem",
    };
  } else if (severity === "error") {
    firstWordStyle = {
      color: "#d82f2f",
      fontSize: "1.25rem",
    };
    secondWordStyle = {
      color: "#CD5C5C",
      fontSize: "0.9375rem",
    };
  } else if (severity === "warning") {
    firstWordStyle = {
      color: "#FF8C00",
      fontSize: "1.25rem",
    };
    secondWordStyle = {
      color: "#FFA500",
      fontSize: "0.9375rem",
    };
  }

  return (
    <div>
      <div style={firstWordStyle}>{message}</div>
      {additionalMessage && (
        <div style={secondWordStyle}>{additionalMessage}</div>
      )}
    </div>
  );
};

interface ShowSnackbarProps {
  message: string;
  additionalMessage?: string;
  severity: "success" | "error" | "warning";
}

export const showSnackbar = ({
  message,
  additionalMessage,
  severity,
}: ShowSnackbarProps): void => {
  let closeButtonColor = "#FF0000";

  if (severity === "success") {
    closeButtonColor = "#008000";
  } else if (severity === "warning") {
    closeButtonColor = "#FFA500";
  } else if (severity === "error") {
    closeButtonColor = "#d82f2f";
  }

  const toastOptions: ToastOptions = {
    closeButton: <CloseButton color={closeButtonColor} />,
  };

  toast[severity](
    <CustomToast
      message={message}
      additionalMessage={additionalMessage}
      severity={severity}
    />,
    toastOptions
  );
};

const Snackbar: React.FC = () => {
  return (
    <div>
      <ToastContainer />
    </div>
  );
};

export default Snackbar;
