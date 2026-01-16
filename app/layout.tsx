import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Your App Title',
  description: 'Description of your app',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <body>{children}</body>
  </html>
);

export default RootLayout;