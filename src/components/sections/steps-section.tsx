"use client";
import { Title, Text, MantineProvider, useMantineTheme } from "@mantine/core";
import { steps } from "@/mocks/steps";

export default function StepsSection() {
	const theme = useMantineTheme();

	return (
		<MantineProvider theme={theme}>
			<div
				id="steps"
				className="w-full h-auto md:h-[927px] flex justify-center items-start py-16 px-4 sm:px-8"
			>
				<div className="max-w-[1120px] flex flex-col md:flex-row items-start gap-8 md:gap-16">
					<div className="w-full md:w-1/2 flex flex-col items-start gap-6">
						<div className="px-3 py-1 text-sm rounded-full bg-amber-100 text-amber-800 font-medium">
							as 5 etapas
						</div>
						<Title order={2}>
							O Caminho para o
							<br />
							<span style={{ color: theme.colors.primary[6] }}>
								Investimento de Impacto
							</span>
						</Title>
						<Text>
							O modelo GIP organiza o ciclo de vida dos projetos em 5 etapas
							estratégicas, baseadas nas melhores práticas nacionais e
							internacionais.
						</Text>
						<div className="w-full xs:h-[180px] xl:h-[450px] bg-gray-100 rounded-lg mt-4"></div>
					</div>

					<div className="w-full md:w-1/2 xs:h-[986px] relative mt-4 md:mt-0">
						<div className="flex flex-col gap-6">
							{steps.map((step, index) => (
								<div key={step.id} className="relative flex items-start">
									{index < steps.length - 1 && (
										<div className="absolute left-5 top-0 h-full w-px border-l-2 border-dashed border-yellow-400"></div>
									)}
									<div
										className="z-10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-white font-bold border-4
										 border-yellow-400"
										style={{ backgroundColor: theme.colors.primary[6] }}
									>
										{step.id}
									</div>

									<div className="ml-6 p-4 rounded-lg bg-blue-50/50 w-full">
										<Title order={4} style={{ color: theme.colors.primary[6] }}>
											{step.title}
										</Title>
										<Text size="sm" mt={4}>
											{step.description}
										</Text>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</MantineProvider>
	);
}
