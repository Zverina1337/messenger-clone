"use client";
import {ReactNode} from "react";
import clsx from "clsx";

interface ButtonProps {
    type?: "submit" | "reset" | "button" | undefined;
    onClick?: () => void;
    disabled?: boolean;
    fullWidth?: boolean;
    children?: React.ReactNode;
    secondary?: boolean;
    danger?: boolean;
}
const Button: React.FC<ButtonProps> = ({
   type,
   onClick,
   disabled,
   fullWidth,
   children,
   secondary,
   danger
   }) => {
    return (
        <button
            onClick={onClick}
            type={type}
            disabled={disabled}
            className={clsx(`
                flex
                justify-center
                rounded-md
                px-3
                py-2
                text-sm
                font-semibold
                focus-visible:outline
                focus-visible:outline-2
                focus-visible:outline-offset-2`,
                disabled && "opacity-50 cursor-default",
                fullWidth && "w-full",
                secondary ? "text-gray-900" : "text-white",
                danger && "bg-rose-500 hover:bg-rose-600 focus-visible:outline-rose-600",
                !secondary && !danger && "bg-sky-500 hover:bg-sky-600 focus-visible:bg-sky-600"
                )}
        >
            {children}
        </button>
    );
};

export default Button;