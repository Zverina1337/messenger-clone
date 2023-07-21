"use client";
import {User} from "@prisma/client";
import {useRouter} from "next/navigation";
import {useCallback, useState} from "react";
import {Avatar} from "@/app/components/Avatar";
import requestManager from "@/app/fetcher";

interface UserBoxProps {
    user: User;
}
export const UserBox: React.FC<UserBoxProps> = ({user}) => {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)

    const handleClick = useCallback(() => {
        setIsLoading(true);

        requestManager("/api/conversations", "POST", {
            userId: user.id
        })
        .then((res) => {
            router.push(`/conversations/${res.id}`)
        })
        .finally(() => setIsLoading(false));
    }, [user, router]);

    return (
        <div
            onClick={handleClick}
            className="
                w-full
                relative
                flex
                items-center
                space-x-3
                bg-white
                p-3
                hover:bg-neutral-100
                rounded-lg
                transition
                cursor-pointer
            "
        >
            <Avatar user={user} />
            <div className="min-w-0 flex-1">
                <div className="focus:outline-none">
                    <div className="
                        flex
                        justify-between
                        items-center
                        mb-1
                    ">
                        <p className="
                            text-sm
                            font-medium
                            text-gray-900
                        ">
                            { user.name }
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};