import { atom } from 'jotai'
import { IOrder } from "@entities/order";

const shipmentType = atom<IOrder['shipmentType']>('marketplace')
const warehouse = atom<IOrder['warehouse']>('Яндекс маркет')
const whatToDeliver = atom<IOrder['whatToDeliver']>([])
const packing = atom<IOrder['packing']>('box')
const packageLength  = atom<IOrder['packageLength']>(0)
const packageWidth = atom<IOrder['packageWidth']>(0)
const packageHeight = atom<IOrder['packageHeight']>(0)
const deliveryAddresses = atom<IOrder['deliveryAddresses']>([])
const pickupAddresses = atom<IOrder['pickupAddresses']>([])
const comment = atom<IOrder['comment']>('')

export const createOrderAtoms = {
    shipmentType,
    warehouse,
    whatToDeliver,
    packing,
    packageLength,
    packageWidth,
    packageHeight,
    deliveryAddresses,
    pickupAddresses,
    comment,
}
