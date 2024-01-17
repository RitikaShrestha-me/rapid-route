'use client';

import OrderTab from '@/components/OrderTab/OrderTab'
import Search from '@/components/Search/Search'
import { useOrdersContext } from '@/contexts/OrdersProvider'
import { useEffect, useState } from 'react'

const Orders = () => {
	const { allOrders } = useOrdersContext();
	const [displayOrders, setDisplayOrders] = useState<any[] | undefined>(allOrders)

	return (
		<div className="w-full">
			<Search />
			<div className='w-max' style={{ height: 'calc(100vh - 48px - 62px)', overflow: 'scroll', scrollbarWidth: 'thin' }}>
				{displayOrders && displayOrders?.map((e, index) => {
					return (
						<div key={'orders-' + index}>
							<OrderTab packageId={e.packageId} type={e.type} status={e.status} pickup={e.pickup} destination={e.destination} />
						</div>
					)
				})}
			</div>

		</div>
	)
}

export default Orders