export interface ICustomer {
    customerId: number
    name: string
}

export interface IOrder {
    orderId: number
    date: number
}

export interface IOrderItem {
    orderItemId: number
    order: IOrder
    product: IProduct
    customer: ICustomer
    quantity: number
}

export interface IProduct {
    productId?: number
    name: string
}