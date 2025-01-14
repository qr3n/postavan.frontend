import { useQuery } from "@tanstack/react-query";
import { orderService } from "@shared/api/services/order";
import { GetUserOrderResponse } from "@shared/api/services/order/types";
import { IOrder } from "@entities/order";

const convertGetUserOrderResponseToIOrder = (response: GetUserOrderResponse): IOrder => {
    return {
        id: response.id,
        cost: response.cost,
        shipmentType: response.shipment_type,
        marketplace: response.marketplace,
        packingType: response.packing_type,
        whatToDeliver: response.what_to_deliver,
        packageLength: response.package_length,
        packageWidth: response.package_width,
        packageHeight: response.package_height,
        deliveryAddresses: response.delivery_addresses,
        pickupAddresses: response.pickup_addresses,
        comment: response.comment,
        senderPhone: response.sender_phone,
        recipientPhone: response.recipient_phone,
    };
};

export const useUserOrders = () => {
    const { data, ...other } = useQuery({
        queryFn: orderService.get,
        queryKey: ['user.orders']
    });

    const formattedData = data?.map((order: GetUserOrderResponse) => convertGetUserOrderResponseToIOrder(order)) ?? [];

    return {
        orders: formattedData,
        ...other
    };
};
