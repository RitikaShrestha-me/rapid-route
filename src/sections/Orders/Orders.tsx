'use client';

import OrderTab from '@/components/OrderTab/OrderTab'
import Search from '@/components/Search/Search'
import { useOrdersContext } from '@/contexts/OrdersProvider'
import { useEffect, useState } from 'react'

const Orders = () => {
	const { selectedOrder, setSelectedOrder, allOrders, setDisplayModal } = useOrdersContext();
	const [displayOrders, setDisplayOrders] = useState<any[] | undefined>(allOrders)

	const setOrdersToDisplay = (orders: any) => {
		setDisplayOrders(orders)
	}

	return (
		<div className="w-full border border-[#F3F3F3]">
			<Search setDisplayOrders={setOrdersToDisplay} />
			<div className='min-w-max flex flex-col' style={{ height: 'calc(100vh - 48px - 62px)', overflow: 'scroll', scrollbarWidth: 'thin' }}>
				{(displayOrders && displayOrders?.length > 0) && displayOrders?.map((e, index) => {
					return (
						<button onClick={() => { setSelectedOrder(index); setDisplayModal(true) }} key={'orders-' + index}>
							<OrderTab packageId={e.packageId} type={e.type} status={e.status} pickup={e.pickup} destination={e.destination} isSelected={selectedOrder === index} />
						</button>
					)
				})}
				{!(displayOrders && displayOrders?.length > 0) &&
					<p className='px-4 text-xs text-[#1D211E]'>No Orders with this package id To Be Displayed.</p>
				}
			</div>
		</div>
	)
}

export default Orders