export const mapShopToMarker = (shop) => ({
    key: shop.id,
    latitude: shop.coordinates.latitude,
    longitude: shop.coordinates.longitude,
    title: shop.title,
    description: shop.address,
});