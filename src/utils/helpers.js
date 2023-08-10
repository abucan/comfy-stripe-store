export const formatPrice = (price) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price / 100);
};

export const getUniqueValues = (data, type) => {
  if (type === 'colors') {
    return ['all', ...new Set(data.map((item) => item[type]).flat())];
  }

  return ['all', ...new Set(data.map((item) => item[type]))];
};
