type ButtonProps = {
  label: string;
  iconURL?: string; // Eğer URL ise tür string olmalı
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
  fullWidth?: boolean;
};
const Button: React.FC<ButtonProps> = ({
  label,
  iconURL,
  backgroundColor = "bg-coral-red",
  textColor = "text-white",
  borderColor = "border-coral-red",
  fullWidth = false,
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
        ${
          backgroundColor
            ? `${backgroundColor} ${textColor} ${borderColor}`
            : "bg-coral-red text-white border-coral-red"
        } rounded-full ${fullWidth && "w-full"}`}
    >
      {label}

      {iconURL && (
        <img
          src={iconURL}
          alt="arrow right icon"
          className="ml-2 rounded-full bg-white w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;
