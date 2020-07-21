const formatValue = (value: number): string =>
  Intl.NumberFormat('pt', {
    style: 'currency',
    currency: 'EUR',
  }).format(value);

export default formatValue;
