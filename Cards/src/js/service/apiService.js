export async function fetchUser(id = 1) {
    const res = await
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    if (!res.ok) throw new Error("API probleem");
    return await res.json();
}
