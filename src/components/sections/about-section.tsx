import { Title, Text } from "@mantine/core";

export default function AboutSection() {
	return (
		<div
			id="about"
			className="w-full py-16 px-4 sm:px-8 flex justify-center items-center"
		>
			<div className="w-full max-w-[1120px] flex flex-col md:flex-row items-center gap-8 md:gap-16">
				<div className="w-full md:w-1/2 h-64 sm:h-72 md:h-[360px] bg-gray-100 rounded-lg"></div>

				<div className="w-full md:w-1/2 flex flex-col items-start gap-4 sm:gap-5">
					<div className="px-3 py-1 text-sm rounded-full bg-amber-100 text-amber-800 font-medium">
						sobre
					</div>

					<Title order={2} className="text-xl sm:text-2xl md:text-3xl">
						O que é o GIP?
					</Title>

					<div className="flex flex-col gap-2">
						<Text className="text-sm sm:text-base">
							A Gestão do Investimento Público (GIP) é um modelo inovador
							adotado pelo Governo do Piauí para aumentar a eficiência, a
							transparência e a efetividade dos investimentos estaduais.
						</Text>
						<Text className="text-sm sm:text-base">
							Com base nas melhores práticas nacionais e internacionais, o GIP
							organiza os projetos em um ciclo de 5 etapas, assegurando que os
							recursos públicos sejam aplicados de forma estratégica e
							sustentável.
						</Text>
					</div>
				</div>
			</div>
		</div>
	);
}
