export async function fetchProducts() {
    const res = await fetch("/data/products.json:");

    if(!res.ok){
        throw new Error("api error")
    }

    return await res.json();
}