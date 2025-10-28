export interface CertificationItem {
  nameKey: string;
  icon?: string;
  year?: number;
  badgeUrl?: string;
  verifyUrl?: string;
}

export interface CertificationsData {
  certifications: CertificationItem[];
}
