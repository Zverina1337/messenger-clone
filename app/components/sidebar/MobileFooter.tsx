"use client";

import useConverasation from "@/app/hooks/useConversation";
import useRoutes from "@/app/hooks/useRoutes";
import { MobileItem } from "./MobileItem";

export const MobileFooter = () => {
    const { isOpen } = useConverasation();
    const routes = useRoutes();

    if (isOpen) {
        return null;
    }

    return (
        <div className="
            fixed
            justify-between
            w-full
            bottom-0
            z-40
            flex
            items-center
            bg-white
            border-t-[1px]
            lg:hidden
        ">
            {routes.map((route) => {
                return <MobileItem
                    key={route.label}
                    href={route.href}
                    icon={route.icon}
                    active={route.active}
                    onClick={route.onClick}
                />
            })}
        </div>
    )
};