import { atom } from 'jotai'
import { IOrder } from "@entities/order";

const shipmentType = atom<IOrder['shipmentType']>('marketplace')
const marketplace = atom<IOrder['marketplace']>('Яндекс маркет')
const whatToDeliver = atom<IOrder['whatToDeliver']>([])
const packingType = atom<IOrder['packingType']>('box')
const packageLength  = atom<IOrder['packageLength']>(0)
const packageWidth = atom<IOrder['packageWidth']>(0)
const packageHeight = atom<IOrder['packageHeight']>(0)
const deliveryAddresses = atom<IOrder['deliveryAddresses']>([])
const pickupAddresses = atom<IOrder['pickupAddresses']>([])
const comment = atom<IOrder['comment']>('')

export const createOrderAtoms = {
    shipmentType,
    marketplace,
    whatToDeliver,
    packingType,
    packageLength,
    packageWidth,
    packageHeight,
    deliveryAddresses,
    pickupAddresses,
    comment,
}
