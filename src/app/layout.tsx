import "@mantine/core/styles.css";
import "./globals.css";
import { Figtree } from "next/font/google";

const figtree = Figtree({ subsets: ["latin"] });

import {
	ColorSchemeScript,
	MantineProvider,
	mantineHtmlProps,
} from "@mantine/core";

export const metadata = {
	title: "GIP - Gestão do Investimento Público do Piauí",
	description: "",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" {...mantineHtmlProps} className={figtree.className}>
			<head>
				<ColorSchemeScript />
			</head>
			<body>
				<MantineProvider>{children}</MantineProvider>
			</body>
		</html>
	);
}
