const setItemWithExpiry = (key, value, ttl) => {
    const now = new Date();

    // Create an object with value and expiry time
    const item = {
        value: value,
        expiry: now.getTime() + ttl, // ttl is the time-to-live in milliseconds
    };

    // Store the object in localStorage
    localStorage.setItem(key, JSON.stringify(item));
};

const getItemWithExpiry = (key) => {
    const item = localStorage.getItem(key);
    if (!item) return null;
const parsedItem = JSON.parse(item);
    const currentTime = new Date().getTime();

    if (currentTime > parsedItem.expiry) {
        localStorage.removeItem(key); 
        return null; 
    }
    return parsedItem.value;
};

export { setItemWithExpiry, getItemWithExpiry };