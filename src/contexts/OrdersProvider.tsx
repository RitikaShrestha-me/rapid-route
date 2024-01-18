'use client';

import { createContext, useContext, useEffect, useState } from 'react';

interface IOrderContext {
	allOrders: any[] | undefined
	selectedOrder: number
	setSelectedOrder: (orderIndex: number) => void
	displayModal: boolean
	setDisplayModal: (display: boolean) => void
}

const OrderContext = createContext<IOrderContext | undefined>(undefined);

export function OrdersProvider({ children }: { children: React.ReactNode }) {
	const [selectedOrder, setSelectedOrder] = useState(0)
	const [displayModal, setDisplayModal] = useState(false)
	const allOrders = [
		{
			packageId: '234',
			packageDetails: {
				description: "Books - 2 novels",
				dimension: "1.2 kg; 20cm x 13cm x 6cm",
				specialInstruction: "Leave at front desk if recipient not available"
			},
			type: 'Book',
			status: true,
			pickup: "Burger House, Radhe, Radhe",
			rider: {
				name: "Nabin Ghimire",
				bike: "Yamaha FZS FI",
				bikeNumber: "Ba 1 ka 001",
				phoneNumber: "9841014781 , 9841025424"
			},
			recipient: {
				name: "Mamta Giri",
				phoneNumber: "9841014777 , 9841025321",
			},
			destination: "Burger House, Radhe, Radhe"
		},
		{
			packageId: '235',
			packageDetails: {
				description: "Pizza",
				dimension: "1.2 kg; 30cm x 30cm x 6cm",
				specialInstruction: "Ring the bell until recipient attends"
			},
			type: 'Food',
			status: false,
			pickup: "Maitidevi vansa ghar, Kathmandu",
			rider: {
				name: "Paras Thakur",
				bike: "Yamaha YZF-R15",
				bikeNumber: "Ba 3 ka 4777",
				phoneNumber: "9851054532 , 9851026478"
			},
			recipient: {
				name: "Surya Thapa",
				phoneNumber: "9841014709 , 9841025490",
			},
			destination: "Kupondole, Kandevatastahan, 32"
		},
		{
			packageId: '236',
			packageDetails: {
				description: "Cake",
				dimension: "800 g; 20cm x 20cm x 16cm",
				specialInstruction: "Handle with care"
			},
			type: 'Food',
			status: true,
			pickup: "Pepsicola, White Rabbit",
			rider: {
				name: "Rohit Jung Kuwar",
				bike: "Royal Enfield Hunter",
				bikeNumber: "Ba 6 ka 803",
				phoneNumber: "98410147809 , 9841025555"
			},
			recipient: {
				name: "Sagar Magar",
				phoneNumber: "9841014788 , 9841025333",
			},
			destination: "Sallaghari, Bhaktapur"
		},
		{
			packageId: '323',
			packageDetails: {
				description: "Clothes - 6 pcs",
				dimension: "2 kg; 32cm x 13cm x 28cm",
				specialInstruction: "Give it to the laundry"
			},
			type: 'Clothes',
			status: false,
			pickup: "Maitidevi vansa ghar, Kathmandu",
			rider: {
				name: "Rohan Adhikari",
				bike: "TVS Raider 125",
				bikeNumber: "Ba 7 ka 9818",
				phoneNumber: "9841014125 , 9841025676"
			},
			recipient: {
				name: "Kabita Kumari",
				phoneNumber: "9841014561 , 9841025114",
			},
			destination: "Kumari Bank Ltd. Byasi Branch"
		},
	];

	return (
		<OrderContext.Provider
			value={{
				allOrders,
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