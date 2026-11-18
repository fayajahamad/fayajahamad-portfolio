/** Add only real, verified certifications; an empty array hides the section. */
export type Certification = { name: string; issuer: string; issued: string; credentialId?: string; url?: string };
export const certifications: readonly Certification[] = [];
