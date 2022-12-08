export const calculationCost = (bun, data) => {
    if (!bun && !data) {
        return 0;
    }
    if(!bun && data) {
        return data.reduce((acc, value) => acc += value.price, 0)
    } else {
        return bun[0].price * 2 + data.reduce((acc, value) => acc += value.price, 0)
    }
}
