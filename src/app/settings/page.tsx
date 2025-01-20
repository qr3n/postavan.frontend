import { IoIosNotifications } from "react-icons/io";
import { Switch } from "@shared/shadcn/components/switch";
import { ToggleNotifications } from "@features/notifications/toggle/ui/ToggleNotifications";

export default function SettingsPage() {
    return (
        <div className="flex items-center justify-center flex-col" vaul-drawer-wrapper="">
            <h1 className="font-semibold text-4xl sm:text-5xl mt-6 sm:mt-12">Настройки</h1>
            <div
                className="max-w-4xl w-full px-8 mt-12"
            >
                <div className='flex items-center gap-3'>
                    <div className='p-1 bg-blue-500 rounded-full w-7 h-7 flex items-center justify-center'>
                        <IoIosNotifications className='w-6 h-6'/></div>
                    <h1 className="font-semibold text-xl sm:text-2xl">Уведомления</h1>
                </div>
                <div className='p-6 mt-4 rounded-3xl bg-zinc-900/80 relative overflow-hidden'>
                    <div
                        className="absolute z-10 w-36 h-36 rounded-full bg-gradient-to-r from-blue-500 via-violet-500 to-red-500 blur-3xl opacity-40"></div>
                    <div
                        className="absolute z-10 w-36 h-36 right-0 -bottom-56 rounded-full bg-gradient-to-r from-blue-500 via-yellow-500 to-blue-500 blur-3xl opacity-30 top-10 left-20"></div>
                    <div className='p-3 z-50 px-4 flex-wrap relative rounded-2xl bg-black/30 backdrop-blur flex gap-4 justify-between items-center'>
                        <div>
                            <h1 className="font-medium sm:text-xl">Push-уведомления</h1>
                            <p className='text-zinc-400 text-xs sm:text-sm mt-2'>Приходят прямо на ваше устройство</p>
                        </div>
                        <ToggleNotifications/>
                    </div>
                    <div className='p-3 z-50 px-4 flex-wrap relative rounded-2xl bg-black/30 backdrop-blur mt-5 flex gap-4 justify-between items-center'>
                        <div>
                            <h1 className="font-medium sm:text-xl">Уведомления по почте</h1>
                            <p className='text-zinc-400 text-xs sm:text-sm mt-2'>Включены по умолчанию</p>
                        </div>
                        <Switch/>
                    </div>
                </div>
            </div>
        </div>
    )
}