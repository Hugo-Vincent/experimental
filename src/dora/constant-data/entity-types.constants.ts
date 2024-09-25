const _ENTITY_TYPES = {
  1: "(1) credit institutions",
  2: "(2) payment institutions, including payment institutions exempted pursuant to Directive (EU) 2015/2366",
  3: "(3) account information service providers",
  4: "(4) electronic money institutions, including electronic money institutions exempted pursuant to Directive 2009/110/EC",
  5: "(5) investment firms",
  6: "(6) crypto-asset service providers as authorised under a Regulation of the European Parliament and of the Council on markets in crypto-assets, and amending Regulations (EU) No 1093/2010 and (EU) No 1095/2010 and Directives 2013/36/EU and (EU) 2019/1937 (‘the Regulation on markets in crypto-assets’) and issuers of asset-referenced tokens",
  7: "(7) central securities depositories",
  8: "(8) central counterparties",
  9: "(9) trading venues",
  10: "(10) trade repositories",
  11: "(11) managers of alternative investment funds",
  12: "(12) management companies",
  13: "(13) data reporting service providers",
  14: "(14) insurance and reinsurance undertakings",
  15: "(15) insurance intermediaries, reinsurance intermediaries and ancillary insurance intermediaries",
  16: "(16) institutions for occupational retirement provision",
  17: "(17) credit rating agencies",
  18: "(18) administrators of critical benchmarks",
  19: "(19) crowdfunding service providers",
  20: "(20) securitisation repositories",
  21: "(21) Other financial entity",
  22: "(22) Non-financial entity: ICT intra-group service provider",
  23: "(23) Non-financial entity: Other"
} as const;
export type TEntityKey = keyof typeof _ENTITY_TYPES;
export type TEntity = typeof _ENTITY_TYPES[TEntityKey];
export const ENTITY_TYPES: Record<TEntityKey, TEntity> = _ENTITY_TYPES;
