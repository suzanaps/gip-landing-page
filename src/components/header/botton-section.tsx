"use client";

import {
	Button,
	Image,
	Text,
	MantineProvider,
	useMantineTheme,
	Box,
	Title,
} from "@mantine/core";
import { IconLock } from "@tabler/icons-react";

export default function Header() {
	const theme = useMantineTheme();

	const navLinks = [
		{ href: "#about", label: "Sobre" },
		{ href: "#steps", label: "Etapas" },
		{ href: "#governance", label: "Governancia" },
		{ href: "#classification", label: "Classificação" },
	];

	return (
		<MantineProvider theme={theme}>
			<header
				className="w-full  border-b border-gray-200"
				style={{ height: "77px" }}
			>
				<div className="max-w-[1200px] mx-auto flex justify-between items-center h-[77px] p-5">
					<Image src="/gip-logo.svg" alt="Logotipo do GIP" h={50} w="auto" />

					<div className="flex flex-end gap-5">
						<nav className="flex items-center gap-8">
							{navLinks.map((link) => (
								<Text
									key={link.label}
									component="a"
									href={link.href}
									c={theme.other.neutral.default}
								>
									{link.label}
								</Text>
							))}
						</nav>

						<Button
							variant="filled"
							radius="md"
							style={{
								backgroundColor: theme.colors.primary[6],
								height: "42px",
								padding: "8px 12px",
							}}
						>
							<Box
								style={{
									display: "flex",
									alignItems: "center",
									gap: "8px",
								}}
							>
								<IconLock size={22} />
								<Box
									style={{
										display: "flex",
										flexDirection: "column",
										alignItems: "flex-start",
										lineHeight: "1.0",
									}}
								>
									<Text style={{ color: "white" }} size="10px">
										acesso exclusivo
									</Text>
									<Title order={4} size="14px">
										Servidor
									</Title>
								</Box>
							</Box>
						</Button>
					</div>
				</div>
			</header>
		</MantineProvider>
	);
}
