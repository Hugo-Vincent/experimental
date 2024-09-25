const _HIERARCHY_TYPES = {
  1: "(1) The entity is the ultimate parent undertaking of the scope of consolidation",
  2: "(2) The entity is the parent undertaking of a sub-consolidated part of the scope of consolidation",
  3: "(3) The entity is a subsidiary within the scope of consolidation and is not a parent undertaking of a sub-consolidated part",
  4: "(4) The entity is not part of a group",
  5: "(5) The entity is a service provider to which the financial entity (or the management entity acting on its behalf) is outsourcing all its operational activities",
} as const;
export type THierarchyKey = keyof typeof _HIERARCHY_TYPES;
export type THierarchy = typeof _HIERARCHY_TYPES[keyof typeof _HIERARCHY_TYPES];
export const HIERARCHY_TYPES: Record<THierarchyKey, THierarchy> = _HIERARCHY_TYPES;
