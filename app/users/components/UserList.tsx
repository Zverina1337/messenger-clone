"use client"

import {User} from "@prisma/client";
import {UserBox} from "@/app/users/components/UserBox";

interface UserListProps {
    items: User[]
}
export const UserList: React.FC<UserListProps> = ({items}) => {
    return (
        <aside
            className="
                fixed
                inset-y-0
                pb-20
                lg:pg-0
                lg:left-20
                lg:w-80
                lg:block
                overflow-y-auto
                border-r
                border-gray-200
                w-full
                left-0
            "
        >
            <div className="px-5">
                <div className="flex-col">
                    <h1
                        className="
                        text-2xl
                        font-bold
                        text-neutral-800
                        py-4
                    "
                    >
                        People
                    </h1>
                </div>
                {items.map((item) => {
                    return <UserBox user={item} key={item.id} />
                })}
            </div>
        </aside>
    );
};