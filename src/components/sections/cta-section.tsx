"use client";

import {
	Title,
	Text,
	Button,
	MantineProvider,
	useMantineTheme,
} from "@mantine/core";
import { IconDownload } from "@tabler/icons-react";

export default function CTASection() {
	const theme = useMantineTheme();

	return (
		<MantineProvider theme={theme}>
			<div className="w-full min-h-[531px] sm:min-h-[531px] flex justify-center items-center py-16 px-4 sm:px-8">
				<div
					className="max-w-[1208px] h-auto md:h-[323px] flex flex-col md:flex-row items-center justify-between pt-14 pb-14 pr-11 pl-11 rounded-2xl gap-2.5"
					style={{
						backgroundColor: theme.colors.primary[6],
						color: "white",
					}}
				>
					<div className="w-full md:w-1/2 flex flex-col items-start gap-5 pr-8">
						<div className="px-2 py-1 text-sm rounded-sm bg-yellow-300/15 text-yellow-300 font-semibold">
							ferramentas e recursos
						</div>

						<Title order={2}>Pronto para Começar?</Title>

						<Text>
							Acesse os recursos, aprofunde seu conhecimento e comece a aplicar
							a metodologia GIP hoje mesmo.
						</Text>
					</div>

					<div className="w-full md:w-[400px] h-[211px]">
						<div className="rounded-[12px] bg-white/10 backdrop-blur-md p-5">
							<div className="flex flex-col gap-4">
								<Title order={4}>Manual Técnico</Title>
								<Text size="sm">
									Aprofunde-se em cada detalhe, critério e cálculo da
									metodologia.
								</Text>
								<Text size="sm">O guia completo para especialistas.</Text>
								<div className="w-[260px]">
									<Button
										color="yellow"
										variant="filled"
										mt="md"
										size="lg"
										leftSection={<IconDownload size={18} />}
										radius="md"
										fullWidth={true}
									>
										Baixar Manual Técnico
									</Button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</MantineProvider>
	);
}
