
export interface IItemRow {
	id: number;
	name: string;
	status: string;
	type: string;
	conditions: string;
	volume: number;
	roi: number;
	free: number;
	hedge: number;
}

export type ItemKeys = 'id' | 'name' | 'status' | 'type' | 'conditions' | 'volume' | 'roi' | 'free' | 'hedge';

export const items: IItemRow[] = [
	{ id: 1, name: 'Pyshky.net', status: 'green', type: 'TRST', conditions: 'x2,6 months', volume: 120000, roi: 4, free: 20, hedge: 20 },
	{ id: 2, name: 'NFT-Flowershop', status: 'yellow', type: 'THT', conditions: 'x4,2 years', volume: 80000, roi: 23, free: 12, hedge: 0 },
	{ id: 3, name: 'Web3 P2P University', status: 'red', type: 'TRST', conditions: 'x2,1 years', volume: 200000, roi: 6, free: 1, hedge: 0 },
	{ id: 4, name: 'Lorem.doc', status: 'yellow', type: 'TRST', conditions: 'x1,4 months', volume: 140000, roi: 78, free: 53, hedge: 20 },
	{ id: 5, name: 'LID-BreadShop', status: 'red', type: 'THT', conditions: 'x2,2 years', volume: 70000, roi: 9, free: 14, hedge: 30 },
	{ id: 6, name: 'Hotel.kz', status: 'green', type: 'THT', conditions: 'x2,3 years', volume: 300000, roi: 3, free: 27, hedge: 0 },
];