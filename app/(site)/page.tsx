import AuthForm from "@/app/(site)/components/AuthForm";
import Image from "next/image";

export default function Home() {
    return (
        <section className="
            flex
            min-h-full
            flex-col
            justify-center
            bg-gray-100
            py-12
            sm:px-6
            lg:px-8
        "
        >
            <article className="sm:mx-auto sm:w-full sm:max-w-md">
                <Image
                    alt="logo"
                    height="48"
                    width="48"
                    className="mx-auto"
                    src="/images/logo.svg"
                />
                <h2 className="
                        mt-6
                        text-center
                        text-3xl
                        font-bold
                        tracking-tight
                        text-gray-900
                    "
                >
                    Sign in to your account!
                </h2>
                <AuthForm />
            </article>
        </section>
    )
}
