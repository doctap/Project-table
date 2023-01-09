import { ItemKeys } from "../../server/Server";

export interface IRequestSortProjects {
	key: ItemKeys;
	isRevers: boolean;
}

export interface IRequestAllProjects {
	skip?: number;
	take?: number;
}