type TOrderShipmentType = 'marketplace' | 'anything'
type TOrderWarehouse = 'Яндекс маркет' | 'Wildberries' | 'Ozon' | 'AliExpress' | 'Lamoda'
type TOrderPacking = 'box' | 'palette'

export interface IOrder {
    id: string,
    shipmentType: TOrderShipmentType,
    warehouse: TOrderWarehouse,
    packing: TOrderPacking,
    whatToDeliver: string[],
    packageLength: number,
    packageWidth: number,
    packageHeight: number,
    deliveryAddresses: string[],
    pickupAddresses: string[],
    comment: string,
}
