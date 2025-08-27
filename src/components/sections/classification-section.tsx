"use client";

import { Title, Text, MantineProvider, Paper } from "@mantine/core";
import { useMantineTheme } from "@mantine/core";

export default function ClassificationSection() {
	const theme = useMantineTheme();

	const classifications = [
		{
			title: "Estratégicos",
			description:
				"Projetos de caráter transformador, com alta contribuição para o desenvolvimento do Estado. Exigem uma avaliação prévia mais completa e extensiva.",
			styles: {
				bgColor: theme.colors.yellow[1],
				textColor: theme.other.neutral.emphasis,
				colSpan: "md:col-span-2",
			},
		},
		{
			title: "Complementares",
			description:
				"Empreendimentos de natureza tático-operacional e impacto localizado. A análise de viabilidade é simplificada, dependendo do volume de investimento.",
			styles: {
				bgColor: theme.colors.primary[7],
				textColor: "white",
				colSpan: "md:col-span-2",
			},
		},
		{
			title: "Parcerias e Concessões",
			description:
				"Projetos que envolvem a iniciativa privada e seguem um fluxo normativo específico, já previsto em legislação própria.",
			styles: {
				bgColor: "white",
				textColor: theme.other.neutral.emphasis,
				colSpan: "md:col-span-2",
				border: `1px solid ${theme.colors.gray[2]}`,
			},
		},
		{
			title: "Emergenciais",
			description:
				"Projetos urgentes devido a situações como calamidades públicas. Demandam celeridade e seguem um rito sumário, sem passar por todas as etapas da GIP.",
			styles: {
				bgColor: theme.colors.yellow[4],
				textColor: theme.other.neutral.emphasis,
				colSpan: "md:col-span-3",
			},
		},
		{
			title: "Pactos e Convênios",
			description:
				"Projetos urgentes devido a situações como calamidades públicas. Demandam celeridade e seguem um rito sumário, sem passar por todas as etapas da GIP.",
			styles: {
				bgColor: theme.colors.yellow[4],
				textColor: theme.other.neutral.emphasis,
				colSpan: "md:col-span-3",
			},
		},
	];

	return (
		<MantineProvider theme={theme}>
			<div
				id="classification"
				className="w-full h-auto sm:min-h-[713px] flex justify-center items-center p-4 bg-gray-50"
			>
				<div className="w-full md:w-[1120px] md:h-[553px] flex flex-col items-center gap-12">
					<div className="flex flex-col items-center gap-6 text-center">
						<div className="px-3 py-1 text-sm rounded-full bg-amber-100 text-amber-800 font-medium">
							classificação
						</div>
						<div>
							<Title order={2} style={{ color: theme.other.neutral.emphasis }}>
								Nem todo projeto é igual
							</Title>
							<Text>
								A GIP adapta a profundidade da análise conforme a natureza{" "}
							</Text>{" "}
							<Text>e o impacto de cada projeto.</Text>
						</div>
					</div>

					<div className="w-full grid grid-cols-1 lg:grid-cols-6 gap-6">
						{classifications.map((item) => (
							<Paper
								key={item.title}
								p="xl"
								radius="lg"
								className={`flex flex-col text-left w-full ${item.styles.colSpan}`}
								style={{
									backgroundColor: item.styles.bgColor,
									color: item.styles.textColor,
									border: item.styles.border || "none",
								}}
							>
								<Title order={4} className="mb-2">
									{item.title}
								</Title>
								<Text>{item.description}</Text>
							</Paper>
						))}
					</div>
				</div>
			</div>
		</MantineProvider>
	);
}
