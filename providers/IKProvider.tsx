import { ImageKitProvider } from "@imagekit/next";

const urlEndpoint = process.env.NEXT_IMAGEKIT_URL;

export default function IKProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  if (!urlEndpoint) {
    throw new Error("IMAGEKIT_URL is not defined");
  }
  return (
    <ImageKitProvider urlEndpoint={urlEndpoint}>{children}</ImageKitProvider>
  );
}
