export const ENTITY_ACTIVITIES = {
  1: "(a) Activities listed in Annex I of Directive 2013/36/EU and activities listed in Section A and B of Annex I of Directive 2014/65/EU",
  2: "(b) Activities listed in Annex I of Directive (EU) 2015/2366 of PSD2",
  3: "(c) Account information services as referred to in point (8) of Annex I of PSD2",
  4: "(d) Issuing electronic money in accordance with 2009/110/EC (EMD) and the activities listed in Annex I of PSD2",
  5: "(e) Investment services and activities listed in Section A and B of Annex I of Directive 2014/65/EU",
  6: "(f)* Services and activities listed in Article 3(16) of Regulation (EU) 2023/1114 (MiCAR)",
  61: "(f)** Activities mentioned in Article 16(1) of Regulation (EU) 2023/1114 (MiCAR)",
  7: "(g) Activities listed in Annex of Regulation (EU) No 909/2014 (CSDR)",
  8: "(h) Activity of CCPs as described in Article 2(1) of Regulation (EU) No 648/2012 (EMIR)",
  9: "(i) Activity of trading venues as described in Article 2(4) of Regulation (EU) No 648/2012 (EMIR)",
  10: "(j) Activities of trade repositories as described in Article 2(2) of Regulation (EU) No 648/2012 and in Article 3(1) of Regulation (EU) No 2015/2365",
  11: "(k) Activities listed in Article 6(4) + Annex I of Directive 2011/61/EU (AIFMD)",
  12: "(l) Activities listed in Article 6(3) + Annex II of Directive 2009/65/EC (UCITD)",
  13: "(m) Services referred to in Article 3(1)(34), (35), and (36) of Regulation (EU) 600/2014",
  14: "(n) Activities authorised for the classes of non-life insurance as described in Annex I Section B of Directive 2009/138/EC and classes of life insurance as described in Annex II of Directive 2009/138/EC (Solvency II)",
  15: "(o) Activities of insurance and reinsurance distribution as described in Articles 2(1)(1) and 2(1)(2) of Directive (EU) 2016/97 (IDD)",
  16: "(p) Activities of IORPs as described in Article 7 of Directive (EU) 2016/2341 (IORP II)",
  17: "(q) Activities of CRAs as described in Articles 2(1) and 3.1(a) and (b) of Regulation (EC) No 1060/2009",
  18: "(r) Activity of administrators of benchmarks as defined in Article 3(1), (5), and (6) of Regulation (EU) 2016/1011, referred to the benchmarks defined in Article 3(1)(25) of the same Regulation",
  19: "(s) Provision of crowdfunding services in accordance with Article 3 of Regulation (EU) 2020/1503",
  20: "(t) Activity of SRs as described in Article 2(23) of Regulation (EU) 2017/2402"
} as const;
export type TEntityActivityKey = keyof typeof ENTITY_ACTIVITIES;
export type TEntityActivity = typeof ENTITY_ACTIVITIES[TEntityActivityKey];
