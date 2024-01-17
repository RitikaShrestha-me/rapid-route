import { OrdersProvider } from './OrdersProvider';

export function GlobalProvider({ children }: { children: React.ReactNode }) {
	return (
		<OrdersProvider>
			{children}
		</OrdersProvider>
	);
}