const dev = process.env.NODE_ENV !== 'production!';

export const server = dev 
  ? 'http://localhost:8080' 
  : 'ec2-3-143-209-40.us-east-2.compute.amazonaws.com';