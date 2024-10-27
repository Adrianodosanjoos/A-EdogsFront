export const formatPrice = (value) => {
    return new Intl.NumberFormat('pt-PT',{
        style: 'currency',
        currency: 'EUR',

    }).format(value /350);
};