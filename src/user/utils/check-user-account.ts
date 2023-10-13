import { Repository } from 'typeorm';
import { SignUpEntity } from '../signup/entities/signup.entity';

export async function dbCheckUserAccount(
  signUpRepository: Repository<SignUpEntity>,
  field: string,
  value: string,
) {
  const userAccount = await signUpRepository.findOne({
    where: { [field]: value },
  });
  return !!userAccount;
}
