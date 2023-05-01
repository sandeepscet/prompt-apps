import Head from "next/head";
import React from "react";

import { Category } from "@/src/Component/Category";
import { SubCategoires } from "@/src/Component/Subcategories";
import { getPopularPrompts } from "@/src/Utils/prompt";
import { RecentHeader } from "@/src/Component/RecentHeader";
import { Subscription } from "@/src/Component/Subcription";

const MainPage = () => {
	const getPromptsData = getPopularPrompts();

	return (
		<>
			<Head>
				<title>chatgpt Prompt Apps</title>
				<meta
					name="description"
					content="User interface-based Apps from Prompt."
					key="desc"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=0.1" />
			</Head>
			<div style={{ width: "100%" }}>
				<Subscription />
				<RecentHeader />
				<SubCategoires SubCategoiresData={getPromptsData} />
				<Category />
			</div>
		</>
	);
};

export default MainPage;
