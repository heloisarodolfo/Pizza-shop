import { api } from "@/lib/axios";

export interface GetOrdersQuery {
    pageIndex?: number | null
    customerName?: string | null
    orderId?: string | null
    status?: string | null
  }

export interface GetOrdersResponse {
    orders: {
        orderId: string
        createdAt: string
        customerName: string
        total: number
        status: 'pending' | 'canceled' | 'processing' | 'delivering' | 'delivered'
      }[]
      meta: {
        pageIndex: number
        totalCount: number
        perPage: number
      }
    }


export async function getOrders({ pageIndex, orderId, customerName, status }: GetOrdersQuery) {
  const response = await api.get<GetOrdersResponse>('/orders', {
    params: {
      pageIndex,
      orderId, 
      customerName,
      status
    },
  });

  return response.data
}
