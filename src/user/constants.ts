import 'dotenv/config';

const jwtSecret = process.env.SECRET;

export const jwtConstants = {
  secret: jwtSecret,
};
