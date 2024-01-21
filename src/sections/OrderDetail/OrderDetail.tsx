'use client';

import { CloseIcon } from '@/assets/icons/closeIcon';
import OrderDescription from '@/components/OrderDescription/OrderDescription';
import { useOrdersContext } from '@/contexts/OrdersProvider'

const OrderDetail = () => {
	const { selectedOrder, allOrdersList, setDisplayModal, displayModal } = useOrdersContext();
	const displayOrder = allOrdersList && allOrdersList[selectedOrder]

	return (
		<div className="w-full" style={{ height: 'calc(100vh - 48px - 62px)' }}>
			{displayModal && <div className='flex absolute'>
				<OrderDescription displayOrder={displayOrder} />
				<div>
					<button onClick={() => setDisplayModal(false)} className='flex mt-2 ml-2 justify-center items-center rounded bg-[#818181]' style={{ backgroundColor: "#818181", width: '20px', height: '20px' }}>
						<CloseIcon />
					</button>
				</div>
			</div>
			}
			<div className='w-screen' style={{ height: 'calc(100vh - 48px - 62px)' }}>

			</div>
		</div>
	)
}

export default OrderDetail