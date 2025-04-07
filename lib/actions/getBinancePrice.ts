const BINANCE_API = process.env.NEXT_PUBLIC_BINANCE_API;
export const getBinancePrice=async()=> {
    try {
        const response = await fetch(`${BINANCE_API}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }   
        const data = await response.json();
        const price = data.price;
        return price;
    } catch (error) {
        console.error("Error fetching Binance price:", error);
        return null;
    }
}