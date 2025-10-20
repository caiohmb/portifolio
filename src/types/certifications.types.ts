export interface Certification {
  nameKey: string;
  icon?: string;
  year?: number;
  badgeUrl?: string;
  verifyUrl?: string;
}

export interface CertificationsData {
  certifications: Certification[];
}
