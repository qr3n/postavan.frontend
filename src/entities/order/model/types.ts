type TOrderShipmentType = 'marketplace' | 'anything'
type TOrderMarketplace = 'Яндекс маркет' | 'Wildberries' | 'Ozon' | 'AliExpress' | 'Lamoda'
type TOrderPacking = 'box' | 'palette'

export const MARKETPLACES: TOrderMarketplace[] = ['Яндекс маркет', 'Wildberries', 'Ozon', 'AliExpress', 'Lamoda']

export interface IOrder {
    id: string,
    shipmentType: TOrderShipmentType,
    marketplace: TOrderMarketplace,
    packingType: TOrderPacking,
    whatToDeliver: string[],
    packageLength: number,
    packageWidth: number,
    packageHeight: number,
    deliveryAddresses: string[],
    pickupAddresses: string[],
    comment: string,
    senderPhone: string,
    recipientPhone: string,
}
