const _CONTRACT_RELIANCE_LEVELS = {
  // 1: "(1) Not significant",
  // 2: "(2) Low reliance: in case of disruption of the services, the supported functions would not be significantly impacted (no interruption, no important damage) or disruption can be resolved quickly and with minimal impact on the function/s supported",
  // 3: "(3) Material reliance: in case of disruption of the services, the supported functions would be significantly impacted if the disruption lasts more than few minutes/few hours, and the disruption may engender damages, but still manageable",
  // 4: "(4) Full reliance: in case of disruption of the services, the supported functions would be immediately and severely interrupted/damaged, for a long period",
  1: "(1) Not significant",
  2: "(2) Low reliance",
  3: "(3) Material reliance",
  4: "(4) Full reliance",
} as const;
export type TRelianceLevelKey = keyof typeof _CONTRACT_RELIANCE_LEVELS;
export type TRelianceLevel = typeof _CONTRACT_RELIANCE_LEVELS[TRelianceLevelKey];
export const CONTRACT_RELIANCE_LEVELS: Record<TRelianceLevelKey, TRelianceLevel> = _CONTRACT_RELIANCE_LEVELS;
