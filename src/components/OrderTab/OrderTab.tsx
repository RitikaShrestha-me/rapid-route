import { BulletPointCircleIcon } from '@/assets/icons/bulletPointCircle';
import { WarningIcon } from '../../assets/icons/warning';
import { BulletPointEllipseIcon } from '@/assets/icons/bulletPointEllipse';

const OrderTab = (
	{ packageId, type, status, rider, destination, isSelected }:
		{
			packageId: string,
			type: string,
			status: boolean,
			rider: any,
			destination: string,
			isSelected: boolean
		}
) => {
	return (
		<div className={isSelected ? "group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 bg-gray-50" : "group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"}>
			<div className="flex-auto text-xs text-left text-[rgb(29,33,30)]">
				<div className="flex gap-2">
					<div className="w-full">
						<p className={status ? "mt-1" : "mt-1 text-[#E02323]"}>Package ID: {packageId}</p>
						<p className="mt-1 text-[#797979]">{type}</p>
						<div className="mt-1 flex items-center gap-1">
							<BulletPointCircleIcon />
							<p className='whitespace-nowrap overflow-hidden text-ellipsis max-w-44'>{rider[0]?.address1}</p>
						</div>
						<div className="mt-1 flex items-center gap-1">
							<BulletPointEllipseIcon />
							<p className='whitespace-nowrap overflow-hidden text-ellipsis max-w-44'>{destination}</p>
						</div>
					</div>
					{status ?
						<div className="min-w-max border h-min px-1 border-[#34A853] rounded">
							<p className="text-[#34A853]">En Route</p>
						</div> :
						<div className="min-w-max border h-min px-1 border-[#E02323] rounded">
							<p className="text-[#E02323] flex items-center gap-1">Cancelled <WarningIcon /></p>
						</div>
					}
				</div>
			</div>
		</div>
	)
}

export default OrderTab