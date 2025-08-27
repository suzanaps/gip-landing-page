"use client";

import {
	Button,
	Image,
	Text,
	MantineProvider,
	useMantineTheme,
} from "@mantine/core";

export default function TopSection() {
	const theme = useMantineTheme();
	const navLinks = [
		{ href: "https://dialogos.seplan.pi.gov.br/", label: "Diálogos" },
		{ href: "https://opa.seplan.pi.gov.br/", label: "OPA" },
		{ href: "https://dados.seplan.pi.gov.br/", label: "dadosPI" },
		{ href: "#", label: "Pactos pelo Piauí" },
		{ href: "#", label: "Retribuir" },
		{ href: "#", label: "PSI" },
		{ href: "#", label: "Pilares" },
	];

	return (
		<MantineProvider theme={theme}>
			<header
				className="w-full flex justify-center items-center px-8"
				style={{
					height: "76px",
					backgroundColor: theme.colors.primary[6],
				}}
			>
				<div className="w-full max-w-[1200px] flex justify-between items-center">
					<div className="flex items-center gap-6">
						<Button
							variant="semibold"
							style={{
								backgroundColor: "white",
								color: "black",
								variant: "semibold",
							}}
							radius="md"
							onClick={() =>
								window.open("https://www.seplan.pi.gov.br/", "_blank")
							}
						>
							Site da Seplan
						</Button>
						<nav className="flex items-center gap-5">
							{navLinks.map((link) => (
								<Text
									key={link.label}
									component="a"
									href={link.href}
									c="white"
									className="hover:underline"
								>
									{link.label}
								</Text>
							))}
						</nav>
					</div>

					<Image
						src="/seplan-logo.png"
						alt="Logotipo da Seplan e Governo do Piauí"
						h={50}
						w="auto"
					/>
				</div>
			</header>
		</MantineProvider>
	);
}
