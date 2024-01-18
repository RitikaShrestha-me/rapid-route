import { PhoneIcon } from '@/assets/icons/phoneIcon';
import Image from 'next/image';

const OrderDescription = (
	{ displayOrder }:
		{
			displayOrder: {
				packageId: string,
				packageDetails: {
					description: string,
					dimension: string,
					specialInstruction: string
				},
				type: string,
				status: boolean,
				pickup: string,
				rider: {
					name: string,
					bike: string,
					bikeNumber: string,
					phoneNumber: string
				},
				recipient: {
					name: string,
					phoneNumber: string,
				},
				destination: string
			}
		}
) => {
	return (
		<div className="w-72 group bg-white text-[#1D211E] text-xs flex flex-col items-center gap-x-6 rounded-lg leading-6 border border-[#DCDCDC] mt-2 ml-2">
			<div className="flex flex-col w-full py-4 px-5 border-b">
				<div className="flex justify-between">
					<p className="text-[#34A853]">Package ID: {displayOrder?.packageId}</p>
					<div className="min-w-max h-min bg-[#F4F4F4] rounded">
						<p className="text-[#5E5E5E] px-2">ETA : 32 min</p>
					</div>
				</div>
				<div className="w-full">
					<p className="mt-1 text-[#797979]">Assigned To</p>
					<div className='flex items-center'>
						<Image height={40} width={40} alt='profile-pic' src={'/profile.png'} />
						<div className='pl-2'>
							<h2 className="text-base leading-5">{displayOrder.rider.name}</h2>
							<div className="flex items-center">
								<p className="whitespace-nowrap overflow-hidden text-ellipsis max-w-28 pr-4">{displayOrder.rider.bike}</p>
								<p className='text-[#797979]'>{displayOrder.rider.bikeNumber}</p>
							</div>
						</div>
					</div>
				</div>
				<div className="mt-1 flex items-center gap-1">
					<PhoneIcon />
					<p className='text-xs pl-2'>{displayOrder.rider.phoneNumber}</p>
				</div>
			</div>
			<div className="w-full py-2 px-5">
				<div className="w-full pb-2 border-b border-[#E6E6E6]">
					<p className='leading-4 text-[#797979]'>Recipient</p>
					<p className="text-sm">{displayOrder.recipient.name}</p>
					<p>{displayOrder?.destination}</p>
					<div className="mt-1 flex items-center gap-1">
						<PhoneIcon />
						<p className='whitespace-nowrap overflow-hidden text-ellipsis max-w-44'>{displayOrder.recipient.phoneNumber}</p>
					</div>
				</div>
				<div className='pt-2'>
					<p className='text-[#797979]'>Package Description</p>
					<p>{displayOrder.packageDetails.description}</p>
					<p className='text-[#797979]'>Weight/Dimensions</p>
					<p>{displayOrder.packageDetails.dimension}</p>
					<p className='text-[#797979]'>Special Instructions</p>
					<p>{displayOrder.packageDetails.specialInstruction}</p>
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