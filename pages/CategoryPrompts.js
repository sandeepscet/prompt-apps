import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import { SubCategoires } from "@/src/Component/Subcategories";
import { getPromptsByCategory } from "@/src/Utils/prompt";
import Head from "next/head";

const CategoriesPrompt = () => {
	const router = useRouter();
	const [promptData, setPromptData] = useState([]);
	const [categoryId, setCategoryId] = useState("");

	useEffect(() => {
		if (router.isReady) {
			const { categoryId } = router.query;
			if (categoryId) {
				setCategoryId(categoryId);
				const data = getPromptsByCategory(categoryId);
				setPromptData(data);
			}
		}
	}, [router]);

	return (
		<>
			<Head>
				<title>{`${categoryId  } Prompt Apps`}</title>
				<meta name="description" content="{category.description}" key="desc" />
				<meta name="viewport" content="width=device-width, initial-scale=0.1" />
			</Head>
			{categoryId && (
				<SubCategoires SubCategoiresData={promptData} categoryName={categoryId} />
			)}
		</>
	);
};
export default CategoriesPrompt;
