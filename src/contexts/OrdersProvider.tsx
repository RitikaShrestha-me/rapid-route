'use client';

import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';

interface IOrderContext {
	allOrdersPackageDetails: any[] | undefined
	allOrdersList: any[] | undefined
	allRidersList:
	{
		address1: string,
		email: string,
		first_name: string,
		gender: string,
		id: string,
		image: any,
		join_date: string,
		last_name: string,
		primary_contact: string, secondary_contact: string,
	}[] | undefined
	selectedOrder: number
	setSelectedOrder: (orderIndex: number) => void
	displayModal: boolean
	setDisplayModal: (display: boolean) => void
}

const OrderContext = createContext<IOrderContext | undefined>(undefined);

export function OrdersProvider({ children }: { children: React.ReactNode }) {
	const [selectedOrder, setSelectedOrder] = useState(0)
	const [allOrdersList, setAllOrdersList] = useState(undefined)
	const [allRidersList, setAllRidersList] = useState(undefined)
	const [displayModal, setDisplayModal] = useState(false)
	const allOrdersPackageDetails = [
		{
			description: "Books - 2 novels",
			dimension: "1.2 kg; 20cm x 13cm x 6cm",
			specialInstruction: "Leave at front desk if recipient not available"
		},
		{
			description: "Pizza",
			dimension: "1.2 kg; 30cm x 30cm x 6cm",
			specialInstruction: "Ring the bell until recipient attends"
		},
		{
			description: "Cake",
			dimension: "800 g; 20cm x 20cm x 16cm",
			specialInstruction: "Handle with care"
		},
		{
			description: "Clothes - 6 pcs",
			dimension: "2 kg; 32cm x 13cm x 28cm",
			specialInstruction: "Give it to the laundry"
		},
	];

	const getAllRiders = async () => {
		const res = await axios.get(`http://139.59.20.143/api/v1/riders`)
		const orders = await axios.get(`http://139.59.20.143/api/v1/orders`)

		setAllOrdersList(orders.data.data)
		setAllRidersList(res.data.data)
	}

	useEffect(() => {
		getAllRiders()
	}, [])

	return (
		<OrderContext.Provider
			value={{
				allOrdersPackageDetails,
				allOrdersList,
				allRidersList,
				selectedOrder,
				setSelectedOrder,
				displayModal,
				setDisplayModal,
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