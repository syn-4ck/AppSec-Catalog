import React from "react";
import theme from "theme";
import { Theme, Link, Text, Section, Icon, LinkBox, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import { FaCode, FaBox, FaBug, FaTwitter, FaGithub } from "react-icons/fa";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section padding="80px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="center" />
			<Text as="h2" font="--headline1" md-font="--headline2" margin="20px 0 0 0">
				AppSec Catalog
			</Text>
			<Text as="p" font="--lead" margin="20px 0 20px 0" text-align="center">
				AppSec Catalog is a place where you can find (almost) all application security tools grouped by they category and ranked by our own knowledge and experience before. The goal of AppSec Catalog is allow users to discover new unknown tools and have a little space on Internet to help AppSec/DevSecOps specialist to share content.
			</Text>
			<Section align-self="center" align-items="center" justify-content="center">
				<Override
					slot="SectionContent"
					align-self="center"
					align-items="center"
					justify-content="center"
					align-content="center"
					font="oblique 16px sans-serif"
				/>
				<Text
					margin="0px 0px 0px 0px"
					align-self="center"
					text-align="center"
					font="--lead"
					color="--red"
				>
					IMPORTANT: The ranked notes is based on our previous experience and knowledge, so it is totally subjective. We don't work with brands and the marks are not manipulated to get any benefict.
				</Text>
			</Section>
		</Section>
		<Section padding="80px 0 80px 0" sm-padding="60px 0 60px 0" background="rgba(103, 101, 101, 0.2)">
			<Override slot="SectionContent" />
			<Box display="grid" grid-template-columns="repeat(3, 1fr)" grid-gap="32px 4%" md-grid-template-columns="1fr">
				<LinkBox
					href="https://github.com/syn-4ck"
					padding="45px 45px"
					lg-padding="45px 30px"
					md-padding="45px 45px"
					background="#FFFFFF"
					border-radius="24px"
					justify-content="flex-start"
					flex-direction="column"
					display="flex"
				>
					<Icon
						category="fa"
						icon={FaCode}
						margin="0px 0px 30px 0px"
						color="--dark"
						size="48px"
					/>
					<Text margin="0px 0px 18px 0px" color="--darkL2" font="--headline3" lg-text-align="left">
						SAST
					</Text>
					<Text
						margin="0px 0px 0px 0px"
						color="--greyD3"
						font="--base"
						lg-text-align="left"
						flex="1 0 auto"
					>
						Static Application Security Testing (SAST) tools can help analyze source code or compiled versions of code to help find security flaws.
					</Text>
				</LinkBox>
				<LinkBox
					href="https://github.com/syn-4ck"
					padding="45px 45px"
					lg-padding="45px 30px"
					md-padding="45px 45px"
					background="#FFFFFF"
					border-radius="24px"
					justify-content="flex-start"
					flex-direction="column"
					display="flex"
				>
					<Icon
						category="fa"
						icon={FaBox}
						margin="0px 0px 30px 0px"
						color="--dark"
						size="48px"
					/>
					<Text margin="0px 0px 18px 0px" color="--darkL2" font="--headline3" lg-text-align="left">
						SCA
					</Text>
					<Text
						margin="0px 0px 0px 0px"
						color="--greyD3"
						font="--base"
						lg-text-align="left"
						flex="1 0 auto"
					>
						Software Composition Analysis (SCA) is the process of identifying potential areas of risk from the use of third-party and open-source software and hardware components.
					</Text>
				</LinkBox>
				<LinkBox
					href="https://github.com/syn-4ck"
					padding="45px 45px"
					lg-padding="45px 30px"
					md-padding="45px 45px"
					border-radius="24px"
					justify-content="flex-start"
					flex-direction="column"
					display="flex"
					background="#FFFFFF"
				>
					<Icon
						category="fa"
						icon={FaBug}
						margin="0px 0px 30px 0px"
						color="--dark"
						size="48px"
					/>
					<Text margin="0px 0px 18px 0px" color="--darkL2" font="--headline3" lg-text-align="left">
						ASPM
					</Text>
					<Text
						margin="0px 0px 0px 0px"
						color="--greyD3"
						font="--base"
						lg-text-align="left"
						flex="1 0 auto"
					>
						Application security posture management (ASPM) is an application security approach that leverages holistic visibility into the application environment, automation, and comprehensive security measures to implement, measure, and improve application security programs.{"\n\n\n\n"}
					</Text>
				</LinkBox>
			</Box>
		</Section>
		<Section padding="50px 0 50px 0" quarkly-title="Footer-2">
			<Box display="flex" justify-content="space-between" sm-flex-direction="column">
				<Text
					margin="0px 0px 0px 0px"
					font="--base"
					color="#5a5d64"
					sm-margin="0px 0px 15px 0px"
					sm-text-align="center"
				>
					© 2024 syn-4ck, Inc. All rights reserved. Powered by Quakly.
				</Text>
				<Box display="grid" grid-template-columns="repeat(5, 1fr)" grid-gap="16px 24px" sm-align-self="center">
					<LinkBox href="https://twitter.com/syn_4ck">
						<Icon
							category="fa"
							icon={FaTwitter}
							size="24px"
							color="#5a5d64"
							hover-color="--dark"
							transition="background-color 1s ease 0s"
						/>
					</LinkBox>
					<LinkBox href="https://github.com/syn-4ck">
						<Icon
							category="fa"
							icon={FaGithub}
							size="24px"
							color="#5a5d64"
							hover-color="--dark"
							transition="background-color 1s ease 0s"
						/>
					</LinkBox>
				</Box>
			</Box>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"65f0408c8e2e8e00217987eb"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});