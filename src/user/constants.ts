import 'dotenv/config';

const jwtSecret = process.env.SECRET;

export const jwtContants = {
  secret: jwtSecret,
};
