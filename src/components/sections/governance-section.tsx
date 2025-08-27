"use client";
import { Title, Text, MantineProvider, useMantineTheme } from "@mantine/core";
import { groups } from "@/mocks/groups";

export default function GovernanceSection() {
	const theme = useMantineTheme();

	return (
		<MantineProvider theme={theme}>
			<div
				id="governance"
				className="w-full h-auto md:h-[607px]  flex justify-center items-center py-24 px-4 sm:px-8 gap-8 md:gap-20"
				style={{
					background: `linear-gradient(to right, ${theme.colors.primary[9]}, ${theme.colors.primary[6]})`,
					color: "white",
				}}
			>
				<div className="max-w-[1120px] md:h-[447px] flex  flex-col md:flex-row items-start gap-12">
					<div className="w-full md:w-1/2 flex flex-col items-start gap-5">
						<div className="px-2 py-1 text-sm rounded-sm bg-yellow-300/15 text-yellow-300 font-semibold">
							governancia
						</div>

						<Title order={2}>
							Decisões Inteligentes,
							<br />
							Estrutura Robusta
						</Title>

						<div className="flex flex-col gap-4">
							<Text>
								O sucesso da GIP depende de uma governança bem definida, que
								garante avaliações técnicas, imparciais e alinhadas à capacidade
								fiscal do Estado.
							</Text>
						</div>
					</div>

					<div className="w-full md:w-1/2 flex flex-col items-start gap-6 ">
						{groups.map((group) => (
							<div
								key={group.id}
								className="w-full rounded-xl bg-white/10 backdrop-blur-md p-5"
							>
								<div className="flex flex-col gap-2">
									<Title order={4} className="text-lg font-bold">
										{group.name}
									</Title>
									<Text variant="medium">{group.description}</Text>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</MantineProvider>
	);
}
