import { UsersList } from "@app/admin/users/UsersList";
import Image from "next/image";
import { bgImg } from "@shared/assets";

export default function UsersPage() {
    return (
        <>
            <div className="flex items-center justify-center flex-col" vaul-drawer-wrapper="">
                <Image placeholder="blur" width={1920} height={1080} src={bgImg}
                       className='fixed w-[100dvw] h-[100dvh] object-cover top-0 left-0 -z-50' alt='bg'/>

                <div
                    className='fixed top-0 left-0 -z-50 w-screen h-screen bg-gradient-to-br from-transparent to-black'/>
                <div
                    className='fixed top-0 left-0 -z-50 w-screen h-screen bg-gradient-to-bl from-transparent to-black'/>
                <div
                    className='fixed top-0 left-0 -z-50 w-screen h-screen bg-gradient-to-b from-transparent to-black'/>
                <h1 className="font-semibold text-4xl sm:text-5xl mt-6 sm:mt-12">Пользователи</h1>
                <div
                    className="max-w-4xl w-full px-8 mt-12"
                >
                    <UsersList/>
                </div>
                </div>
            </>
    )
}