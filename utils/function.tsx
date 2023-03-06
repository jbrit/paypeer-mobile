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

//Mock validator, delete later
const validUsernames = ["jbritz", "iykee", "thatdeji"];

export function is_valid_recipient(recipient: string): boolean {
  try {
    const decoded = base58_decode(recipient);
    if (decoded.length !== 25) {
      return false;
    }
    const checksum = sha256_digest(sha256_digest(decoded.slice(0, 21)));
    const expected_checksum = decoded.slice(21);
    if (
      checksum.slice(0, 4).toString() === expected_checksum.toString() ||
      validUsernames.includes(recipient.toLowerCase())
    ) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
}

function base58_decode(base58: string): Uint8Array {
  const ALPHABET = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
  const BASE = BigInt(ALPHABET.length);
  const INDEXES: any = {};
  for (let i = 0; i < ALPHABET.length; i++) {
    INDEXES[ALPHABET[i]] = BigInt(i);
  }
  let num = BigInt(0);
  let leadingZeros = 0;
  for (let i = 0; i < base58.length; i++) {
    if (base58[i] === "1" && i === 0) {
      leadingZeros++;
    } else {
      num = num * BASE + INDEXES[base58[i]];
    }
  }
  const hex = num.toString(16);
  const bytes: any = new Uint8Array(hex.length / 2);
  for (let i = 0; i < hex.length; i += 2) {
    bytes[i / 2] = parseInt(hex.substr(i, 2), 16);
  }
  return new Uint8Array(
    [...new Array(leadingZeros)].map(() => 0).concat([...bytes])
  );
}

function sha256_digest(message: Uint8Array): Uint8Array {
  const digest: any = crypto.subtle.digest("SHA-256", message);
  return new Uint8Array(digest);
}
