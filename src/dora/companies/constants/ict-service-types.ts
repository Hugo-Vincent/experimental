export const ICT_SERVICE_TYPES = {
  1: "(S01) ICT project management",
  2: "(S02) ICT Development",
  3: "(S03) ICT help desk and first level support",
  4: "(S04) ICT security management services",
  5: "(S05) Provision of data",
  6: "(S06) Data analysis",
  7: "(S07) ICT, facilities and hosting services (excluding Cloud services)",
  8: "(S08) Computation",
  9: "(S09) Non-Cloud Data storage",
  10: "(S10) Telecom carrier",
  11: "(S11) Network infrastructure",
  12: "(S12) Hardware and physical devices",
  13: "(S13) Software licencing (excluding SaaS)",
  14: "(S14) ICT operation management (including maintenance)",
  15: "(S15) ICT Consulting",
  16: "(S16) ICT Risk management",
  17: "(S17) Cloud services: IaaS",
  18: "(S18) Cloud services: PaaS",
  19: "(S19) Cloud services: SaaS"
} as const;
export type TICTServiceKey = keyof typeof ICT_SERVICE_TYPES;
export type TICTService = typeof ICT_SERVICE_TYPES[TICTServiceKey];
