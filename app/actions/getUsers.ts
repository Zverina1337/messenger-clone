import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/app/libs/prismadb";

const getUsers = async () => {
    const currentUser = await getCurrentUser()

    try {
        return await prisma.user.findMany({
            orderBy: {
                createdAt: "desc"
            },
            where: {
                NOT: {
                    email: currentUser?.email,
                }
            }
        })

    } catch (error) {
        return [];
    }
}

export default getUsers;
