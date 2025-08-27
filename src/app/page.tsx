import { MantineProvider } from "@mantine/core";
import { theme } from "@/design system/themes";
import TopSection from "@/components/header/top-section";
import BottonSection from "@/components/header/botton-section";
import HeroSection from "@/components/sections/hero-section";
import Separator from "@/components/ui/separator";
import AboutSection from "@/components/sections/about-section";
import StepsSection from "@/components/sections/steps-section";
import GovernanceSection from "@/components/sections/governance-section";
import ClassificationSection from "@/components/sections/classification-section";
import CTASection from "@/components/sections/cta-section";
import Footer from "@/components/footer/footer";

export default function Home() {
	return (
		<MantineProvider theme={theme}>
			<div>
				<TopSection />
				<BottonSection />
				<HeroSection />
				<Separator />
				<AboutSection />
				<StepsSection />
				<GovernanceSection />
				<ClassificationSection />
				<CTASection />
				<Footer />
			</div>
		</MantineProvider>
	);
}
