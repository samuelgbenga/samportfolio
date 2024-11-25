import { Metadata } from "next";

// TODO: Update metadata

export function constructMetadata({
  title = "Samuel Gbenga Joseph", // TODO: Add a custom title
  description = "I'm a software engineer, weaving lines of code into scalable web magic. My passion? Building efficient apps that never crash—unless, of course, you're testing my patience with Internet Explorer.", // TODO: Add a custom description
  image = "/ridding.png", // TODO: Add a custom image
  icons = "/avatar.svg", // TODO: Add a custom icon
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@samuelgbenga",
    },
    icons,
    metadataBase: new URL("https://samportfolio-delta.vercel.app/"),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
