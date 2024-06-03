import { NextRequest } from 'next/server';

export const isHttps = (request: NextRequest) => {
  const proto = request.headers.get('x-forwarded-proto');
  return proto === 'https';
};

export default isHttps;
