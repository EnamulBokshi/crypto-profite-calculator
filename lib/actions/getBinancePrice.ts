import { BINANCE_API } from "@/const";
export const getBinancePrice=async():Promise<number|null>=> {
    try {
        const response = await fetch(`${BINANCE_API}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }   
        const data = await response.json();
        const price = data.price;
        return parseFloat(price);
    } catch (error) {
        console.error("Error fetching Binance price:", error);
        return null;
    }
}