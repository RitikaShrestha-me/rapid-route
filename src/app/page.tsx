import { DashboardIcon } from '@/assets/icons/dashboardIcon'
import { LocationPinIcon } from '@/assets/icons/locationPin'
import Navbar from '@/sections/Navbar/Navbar'
import Orders from '@/sections/Orders/Orders'

export default function Home() {
	return (
		<div className="container w-screen overflow-hidden max-h-screen bg-white">
			<Navbar />
			<div className="flex w-full">
				<div className="flex-1 flex" style={{ height: 'calc(100vh - 48px)' }}>
					<div className="flex flex-col justify-start p-1 gap-1 bg-white">
						<div className="flex h-12 w-12 flex-none items-center justify-center rounded-md bg-gray-50 hover:bg-[#FF5C001C]">
							<DashboardIcon fill="#ACACAC" />
						</div>
						<div className="flex h-12 w-12 flex-none items-center justify-center rounded-md bg-gray-50 hover:bg-[#FF5C001C]">
							<LocationPinIcon fill="#FF5C00" />
						</div>
					</div>
					<Orders />
				</div>
				<div className="flex-3 w-full bg-black">

				</div>
			</div>
		</div>
	)
}
