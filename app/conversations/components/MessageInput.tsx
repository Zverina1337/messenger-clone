"use client";
import {FieldErrors, FieldValues, UseFormRegister} from "react-hook-form";

interface MessageInputProps {
    placeholder?: string;
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors;
    type?: string;
    required?: boolean;
    id: string;
}
const MessageInput: React.FC<MessageInputProps> = ({
   placeholder,
   register,
   errors,
   type,
   required,
   id,
}) => {
    return (
        <div className="relative w-full">
            <input
                type={type}
                id={id} autoComplete={id}
                {...register(id, { required })}
                placeholder={placeholder}
                className="
                    text-black
                    font-light
                    py-2
                    px-4
                    bg-neutral-100
                    w-full
                    rounded-full
                    focus:outline-none
                "
            />
        </div>
    );
};

export default MessageInput;