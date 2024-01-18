'use client';

import { SearchIcon } from '@/assets/icons/searchIcon';
import { useOrdersContext } from '@/contexts/OrdersProvider';
import { useState } from 'react';


const Search = ({ setDisplayOrders }: { setDisplayOrders: (item: any) => void }) => {
	const [searchItem, setSearchItem] = useState("")
	const { allOrders } = useOrdersContext();

	const applySearch = (e: any) => {
		e.preventDefault();

		if (searchItem) {
			let searchOutput = allOrders?.filter(ele => ele?.packageId?.includes(searchItem))
			if (searchItem && searchOutput) {
				setDisplayOrders(searchOutput)
				return
			}
		}
	}

	return (
		<div className='p-4'>
			<form onSubmit={applySearch} className="form-control w-full relative rounded border border-[#E9E9E9]">
				<button type="submit" className="btn bg-secondary hover:bg-neutral text-base-100 btn-ghost absolute left-0 px-2 py-2">
					<SearchIcon />
				</button>
				<input type="text" placeholder="Search riders/orders" onChange={(e) => setSearchItem(e.target.value)} className="input pl-7 pr-2 py-2 w-full focus:outline-none text-xs text-black placeholder:text-black hover:bg-primary focus:border-neutral hover:border-neutral border-secondary focus:bg-primary bg-white rounded" />
			</form>
		</div>
	)
}

export default Search