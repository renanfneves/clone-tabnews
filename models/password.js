import bcryptjs from "bcryptjs";

const PEPPER = "your-secret-pepper"; // Replace with your actual pepper

async function hash(password) {
  const rounds = getNumberOfRounds();
  return await bcryptjs.hash(`${password}_${PEPPER}`, rounds);
}

function getNumberOfRounds() {
  return process.env.NODE_ENV === "production" ? 14 : 1;
}

async function compare(providedPassword, storedPassword) {
  return await bcryptjs.compare(
    `${providedPassword}_${PEPPER}`,
    storedPassword,
  );
}

const password = {
  hash,
  compare,
};

export default password;
