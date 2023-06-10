"use client";

import { User } from "@prisma/client";
import Image from 'next/image';
import { FaUserAlt } from "react-icons/fa";

interface AvatarProps {
    user?: User;
}

export const Avatar: React.FC<AvatarProps> = ({
    user
}) => {
    return (
        <div className="relative">
            <div
                className="
                    relative
                    inline-block
                    reounded-full
                    overflow-hidden
                    h-9
                    w-9
                    md:h-11
                    md:w-11
                "
            >
                { user?.image ? 
                <Image
                    alt="Avatar"
                    src={user?.image}
                    fill
                />  
                :
                    <FaUserAlt></FaUserAlt>
                }
            </div>
        </div>
    ) 
};