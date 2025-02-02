import { ClerkProvider, useAuth } from "@clerk/nextjs";
import { ConvexReactClient } from "convex/react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import React from "react";

const ConvexClientProvider = ({ children }: { children: React.ReactNode }) => {
	const cUrl = process.env.NEXT_PUBLIC_CONVEX_URL;
	const cpk = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

	if (!cUrl || !cpk) {
		return null;
	}

	const convex = new ConvexReactClient(cUrl);

	return (
		<ClerkProvider publishableKey={cpk}>
			<ConvexProviderWithClerk client={convex} useAuth={useAuth}>
				{children}
			</ConvexProviderWithClerk>
		</ClerkProvider>
	);
};

export default ConvexClientProvider;
