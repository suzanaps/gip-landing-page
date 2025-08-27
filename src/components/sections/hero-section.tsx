"use client";

import { Title, Button, Text, MantineProvider } from "@mantine/core";
import { useMantineTheme } from "@mantine/core";

export default function HeroSection() {
	const theme = useMantineTheme();
	return (
		<MantineProvider theme={theme}>
			<div className="w-full min-h-[492px] flex justify-center items-center p-5">
				<div className="w-[1120px] h-[324px] flex flex-col items-center  text-center p-8 gap-6">
					<div className="flex flex-col items-center gap-6">
						<Title
							order={1}
							style={{
								color: theme.other.neutral.emphasis,
								letterSpacing: -2,
								fontVariant: "bold",
							}}
						>
							Investimento Público <br />
							que{" "}
							<span
								style={{
									color: theme.colors.primary[6],
									letterSpacing: -2,
									fontVariant: "bold",
								}}
							>
								Transforma o Piauí
							</span>
						</Title>

						<Text
							className="max-w-3xl"
							style={{
								color: theme.other.neutral.default,
								letterSpacing: 0,
								fontVariant: "bold",
							}}
						>
							O GIP é a metodologia que garante que cada investimento realizado
							pelo Estado gere desenvolvimento, qualidade de vida e mais
							oportunidades para a população.
						</Text>
					</div>
					<div className="flex flex-col md:flex-row gap-2.5">
						<Button color="primary" variant="filled" size="md">
							Conheça as 5 etapas
						</Button>
						<Button color="primary" variant="outline" size="md">
							Baixar guia completo
						</Button>
					</div>
				</div>
			</div>
		</MantineProvider>
	);
}
