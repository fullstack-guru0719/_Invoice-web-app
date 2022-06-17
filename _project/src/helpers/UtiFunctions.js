export const makeFixed2 = (number) => {
  if (!number || Number.isNaN(number)) return 0;
  return (Math.round(number * 100) / 100).toFixed(2);
};
export const getInvoicePrice = (invoice) => {
  if (!invoice || !invoice.products) return 0.0;

  const { products, tax } = invoice;
  let totalPrice = 0;

  products.map((invoiceProduct) => {
    const { quantity, product } = invoiceProduct;
    const { price } = product;
    totalPrice = totalPrice + quantity * price;
  });

  totalPrice = totalPrice ? (totalPrice / 100) * (100 + tax) : totalPrice;

  return totalPrice;
};
export const inCludeQuery = (str, substr) => {
  if (!str) return false;
  if (!substr) return true;
  return str.trim().toLowerCase().includes(substr.trim().toLowerCase());
};
export const formatDate = (date_str) => {
  const date = new Date(date_str);
  return (
    (date.getMonth() > 8 ? date.getMonth() + 1 : "0" + (date.getMonth() + 1)) +
    "/" +
    (date.getDate() > 9 ? date.getDate() : "0" + date.getDate()) +
    "/" +
    date.getFullYear()
  );
};
export const invoiceStatus = {
  sent: {
    name: "Not paid",
    class: "bg-inverse-danger",
  },
  draft: {
    name: "Draft",
    class: "bg-inverse-info",
  },
  paid: {
    name: "Paid",
    class: "bg-inverse-success",
  },
};
