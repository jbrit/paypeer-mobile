export const truncateAddress = (address: string, long = false) => {
  if (!address) return "No Account";
  const match = address.match(
    long
      ? /^(0x[a-zA-Z0-9]{10})[a-zA-Z0-9]+([a-zA-Z0-9]{3})$/
      : /^(0x[a-zA-Z0-9]{4})[a-zA-Z0-9]+([a-zA-Z0-9]{4})$/
  );
  if (!match) return address;
  return `${match[1]}…${match[2]}`;
};
