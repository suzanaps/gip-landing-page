import { createTheme, rem } from "@mantine/core";

export const theme = createTheme({
	//colors schema

	colors: {
		primary: [
			"#EDF8FD",
			"#DBEDF5",
			"#B2DAED",
			"#86C7E5",
			"#66B6DF",
			"#3992C2",
			"#15719A",
			"#0E4F6C",
			"#003F5B",
			"#063246",
		],
	},

	other: {
		neutral: {
			muted: "#A1A1AA",
			default: "#52525B",
			emphasis: "#18181B",
		},
		text: {
			fontFamily: "Figtree",
			spacing: {
				xs: "0",
				sm: "0",
				md: "0",
				lg: "0",
				xl: "0",
			},
			fontSizes: {
				xs: rem(16),
				sm: rem(16),
				md: rem(16),
				lg: rem(18),
				xl: rem(18),
			},
			lineHeights: {
				xs: "1.4",
				sm: "1.4",
				md: "1.4",
				lg: "1.4",
				xl: "1.4",
			},
			fontWeight: "500",
		},
	},

	//typography

	headings: {
		fontFamily: "Figtree",
		sizes: {
			//hero section
			h1: {
				fontSize: rem(64),
				fontWeight: "700",
				lineHeight: "1.2",
			},

			//section heading
			h2: {
				fontSize: rem(36),
				fontWeight: "700",
				lineHeight: "1.2",
			},
		},
	},

	// layouts

	breakpoints: {
		xs: "320",
		sm: "632",
		md: "768",
		lg: "1024",
		xl: "1280",
	},
});
