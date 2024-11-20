import jwt, { SignOptions } from 'jsonwebtoken';

function ClientAssertionJWT(privateKey: string, kid: string, payloadData: Record<string, any>): string {
  const header = { alg: 'PS512' , kid, typ: 'JWT' };
  const payload = payloadData;

  const signOptions: SignOptions = {
    algorithm: 'PS512',
    keyid: header.kid,
  };

  const token = jwt.sign(payload, privateKey, signOptions);

  return token;
}

export default ClientAssertionJWT;
