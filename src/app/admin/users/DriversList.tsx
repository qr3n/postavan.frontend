'use client';

import { useQuery } from "@tanstack/react-query";
import { ScrollArea } from "@shared/shadcn/components/scroll-area";
import { driverService } from "@shared/api/services/drivers/service";
import { MdDeliveryDining } from "react-icons/md";
import { useAdminAllOrders } from "@entities/order/model/hooks";
import { EditDriverProfileByAdmin } from "@features/profile/edit-driver-by-admin/ui/EditDriverProfileByAdmin";

export const DriversList = () => {
    const { orders, isLoading } = useAdminAllOrders();
    const { data } = useQuery({
        queryFn: driverService.getAll,
        queryKey: ['drivers']
    })

    return (
        <ScrollArea className='w-full h-[calc(100dvh-200px)] mt-2 sm:h-[calc(100dvh-250px)] pr-4'>
            <div className='flex flex-col gap-4'>
                {data?.map(driver => (
                    <div className='px-5 py-4 rounded-2xl flex justify-between bg-zinc-800/70' key={driver.id}>
                        <div className='flex items-center gap-3'>
                            <div className='p-2 rounded-full bg-violet-500/40'>
                                <MdDeliveryDining  className='w-6 h-6 text-violet-500'/>

                            </div>
                            <div>
                                {driver.profile?.name || driver.email}
                                <p className='text-sm text-zinc-400'>{orders.reduce((acc, v) => acc + (v.driverId === driver.id ? 1 : 0) || 0, 0)} заказ(-ов)</p>
                            </div>
                        </div>

                        <EditDriverProfileByAdmin data={driver} userId={driver.id}/>
                    </div>
                ))}
            </div>
        </ScrollArea>
    )
}