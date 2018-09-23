export interface ICustomer {
    customerId: number
    name: string
    orders: IOrder[]
}

export interface IOrder {
    orderId: number
    date: number
    orderItems: IOrderItem[]
}

export interface IOrderItem {
    orderItemId: number
    product: IProduct
    quantity: number
    price: number
}

export interface IProduct {
    productId: number
    name: string
}