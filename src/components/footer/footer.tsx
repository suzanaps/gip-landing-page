"use client";

import { Image, MantineProvider, useMantineTheme } from "@mantine/core";
import {
	IconBrandInstagram,
	IconMail,
	IconBrandYoutube,
	IconPhone,
} from "@tabler/icons-react";

export default function Footer() {
	const theme = useMantineTheme();

	return (
		<MantineProvider theme={theme}>
			<footer
				className="w-full  bg-black text-white"
				style={{ height: "77px" }}
			>
				<div className="max-w-[1200px] mx-auto flex justify-between items-center h-[77px] p-5">
					<Image
						src="/seplan-logo.png"
						alt="Logotipo da Seplan"
						h={40}
						w="auto"
					/>

					<div className="flex flex-end gap-5">
						<IconBrandInstagram size={23} />
						<IconMail size={23} />
						<IconBrandYoutube size={23} />

						<IconPhone size={23} />
					</div>
				</div>
			</footer>
		</MantineProvider>
	);
}
