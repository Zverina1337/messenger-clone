"use client";

import { User } from "@prisma/client";
import Image from 'next/image';
import { FaUserAlt } from "react-icons/fa";
import useActiveList from "@/app/hooks/useActiveList";

interface AvatarProps {
    user?: User;
}

export const Avatar: React.FC<AvatarProps> = ({
    user
}) => {
    const { members } = useActiveList();
    const isActive = members.indexOf(user?.email!) !== -1;

    return (
        <div className="relative">
            <div
                className="
                    relative
                    inline-block
                    rounded-full
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
                <Image
                    alt="Avatar"
                    src="/images/user.jpg"
                    fill
                />
                }
            </div>
            { isActive && (
                <span
                    className="
                    absolute
                    block
                    bg-green-500
                    ring-2
                    ring-white
                    top-0
                    right-0
                    h-2
                    w-2
                    md:h-3
                    md:w-3
                    rounded-full
                "
                >
            </span>
            )}
        </div>
    ) 
};