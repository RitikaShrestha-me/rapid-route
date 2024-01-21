import { PhoneIcon } from '@/assets/icons/phoneIcon';
import { useOrdersContext } from '@/contexts/OrdersProvider';
import Image from 'next/image';

const OrderDescription = (
	{ displayOrder }: any
) => {
	const { allRidersList, allOrdersPackageDetails } = useOrdersContext()
	return (
		<div className="w-72 group bg-white text-[#1D211E] text-xs flex flex-col items-center gap-x-6 rounded-lg leading-6 border border-[#DCDCDC] mt-2 ml-2">
			<div className="flex flex-col w-full py-4 px-5 border-b">
				<div className="flex justify-between">
					<p className="text-[#34A853]">Package ID: {displayOrder?.order_number}</p>
					<div className="min-w-max h-min bg-[#F4F4F4] rounded">
						<p className="text-[#5E5E5E] px-2">ETA : {Number(displayOrder?.time_estimation?.split(' ')[0]).toFixed(2)} {displayOrder?.time_estimation?.split(' ')[1]}</p>
					</div>
				</div>
				<div className="w-full">
					<p className="mt-1 text-[#797979]">Assigned To</p>
					<div className='flex items-center'>
						<Image height={40} width={40} alt='profile-pic' src={'/profile.png'} />
						<div className='pl-2'>
							<h2 className="text-base leading-5">{displayOrder?.rider_name}</h2>
							<div className="flex items-center">
								<p className="whitespace-nowrap overflow-hidden text-ellipsis max-w-28 pr-4">{Number(displayOrder?.distance?.split(' ')[0]).toFixed(2)} {displayOrder?.distance?.split(' ')[1]}</p>
								<p className='text-[#797979]'>{allRidersList?.filter((e) => (e.id === displayOrder?.rider_id))[0]?.email}</p>
							</div>
						</div>
					</div>
				</div>
				<div className="mt-1 flex items-center gap-1">
					<PhoneIcon />
					<p className='text-xs pl-2'>{`${allRidersList?.filter((e) => (e.id === displayOrder?.rider_id))[0]?.primary_contact} ${allRidersList?.filter((e) => (e.id === displayOrder?.rider_id))[0]?.secondary_contact}`}</p>
				</div>
			</div>
			<div className="w-full py-2 px-5">
				<div className="w-full pb-2 border-b border-[#E6E6E6]">
					<p className='leading-4 text-[#797979]'>Recipient</p>
					<p className="text-sm">{displayOrder?.customer_name}</p>
					<p>{displayOrder?.customer_address}</p>
					<div className="mt-1 flex items-center gap-1">
						<PhoneIcon />
						<p className='whitespace-nowrap overflow-hidden text-ellipsis max-w-44'>{displayOrder?.customer_contact}</p>
					</div>
				</div>
				<div className='pt-2'>
					<p className='text-[#797979]'>Package Description</p>
					<p>{allOrdersPackageDetails && allOrdersPackageDetails[0].description}</p>
					<p className='text-[#797979]'>Weight/Dimensions</p>
					<p>{allOrdersPackageDetails && allOrdersPackageDetails[0].dimension}</p>
					<p className='text-[#797979]'>Special Instructions</p>
					<p>{allOrdersPackageDetails && allOrdersPackageDetails[0].specialInstruction}</p>
				</div>
			</div>
			<div className="w-full pb-6 px-4 pt-2">
				<button className='w-full bg-[#E7E7E7] py-2 rounded'>
					Reassign
				</button>
			</div>
		</div>
	)
}

export default OrderDescription