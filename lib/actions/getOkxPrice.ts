
import { OKX_API } from "@/const";

export const getOKXPrice = async (): Promise<number | null>=>{
    try {
        const response = await fetch(`${OKX_API}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const price = data.data[0].last;
        return parseFloat(price);
    } catch (error) {
        console.error("Error fetching OKX price:", error);
        return null;
    }
}