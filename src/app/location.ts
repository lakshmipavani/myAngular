export interface LocationDetails {
	lat:number;
	long:number;
	iconUrl?: string;
}
export interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}