export interface ICustomer {
    customerId: number
    name: string
}

export interface IOrder {
    orderId: number
    customers: ICustomer[]
    date: number
}

export interface IOrderItem {
    orderItemId: number
    order: IOrder
    product: IProduct
    quantity: number
}

export interface IProduct {
    productId: number
    name: string
}