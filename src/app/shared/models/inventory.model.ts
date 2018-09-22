export interface IProduct {
    id: number
    name: string
}

export interface ICustomer {
    id: number
    name: string
}

export interface IOrder {
    id: number
    customer_id: number
}

export interface IOrderItem {
    id: number
    order_id: number
    product_id: number
    quantity: number
    price: number
}