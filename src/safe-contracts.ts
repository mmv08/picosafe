import type { Address } from "viem/accounts";

type SafeContracts =
	| "SafeProxyFactory"
	| "Safe"
	| "SafeL2"
	| "CompatibilityFallbackHandler"
	| "MultiSend"
	| "MultiSendCallOnly"
	| "CreateCall";

const V141_ADDRESSES: Record<SafeContracts, Address> = {
	SafeProxyFactory: "0x4e1DCf7AD4e460CfD30791CCC4F9c8a4f820ec67",
	Safe: "0x41675C099F32341bf84BFc5382aF534df5C7461a",
	SafeL2: "0x29fcB43b46531BcA003ddC8FCB67FFE91900C762",
	CompatibilityFallbackHandler: "0xfd0732Dc9E303f09fCEf3a7388Ad10A83459Ec99",
	MultiSend: "0x38869bf66a61cF6bDB996A6aE40D5853Fd43B526",
	MultiSendCallOnly: "0x9641d764fc13c8B624c04430C7356C1C7C8102e2",
	CreateCall: "0x9b35Af71d77eaf8d7e40252370304687390A1A52",
} as const;

export type { SafeContracts };
export { V141_ADDRESSES };
