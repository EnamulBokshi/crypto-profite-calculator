import { KRAKEN_API } from "@/const";
export const getKrakenPrice = async (): Promise<number | null> => {
    try {
        const response = await fetch(`${KRAKEN_API}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const price = data.result.BNBUSD.c[0];
        return parseFloat(price);
    } catch (error) {
        console.error("Error fetching Kraken price:", error);
        return null;
    }
}