'use client';

import { createContext, useContext, useEffect, useState } from 'react';

interface IOrderContext {
	allOrders: any[] | undefined
}

const OrderContext = createContext<IOrderContext | undefined>(undefined);

export function OrdersProvider({ children }: { children: React.ReactNode }) {
	const allOrders = [
		{
			packageId: 234,
			type: 'Food',
			status: true,
			pickup: "Burger House, Radhe, Radhe",
			destination: "Burger House, Radhe, Radhe"
		},
		{
			packageId: 235,
			type: 'Food',
			status: false,
			pickup: "Maitidevi vansa ghar, Kathmandu",
			destination: "Kupondole, Kandevatastahan, 32"
		},
		{
			packageId: 236,
			type: 'Food',
			status: true,
			pickup: "Pepsicola, White Rabbit",
			destination: "Sallaghari, Bhaktapur"
		},
		{
			packageId: 323,
			type: 'Food',
			status: false,
			pickup: "Maitidevi vansa ghar, Kathmandu",
			destination: "Kumari Bank Ltd. Byasi Branch"
		},
	];

	return (
		<OrderContext.Provider
			value={{
				allOrders,
			}}
		>
			{children}
		</OrderContext.Provider>
	);
}

export const useOrdersContext = () => {
	const context = useContext(OrderContext)
	if (context === undefined) {
		throw new Error("useProductContext must be within ProductContext")
	}

	return context
}

export default OrderContext