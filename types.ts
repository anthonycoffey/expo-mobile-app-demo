export interface BaseEntity {
  id: number;
  createdAt: string;
  updatedAt: string | null;
}

export interface Customer extends BaseEntity {
  fullName?: string;
  concat?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  defaultPhoneId?: number;
  CustomerPhones?: CustomerPhone[];
}

export interface CustomerPhone extends BaseEntity {
  number?: string;
  note?: string;
  CustomerId?: number;
  Customer?: Customer;
}

export interface Address extends BaseEntity {
  short?: string;
  address_1?: string;
  address_2?: string;
  city?: string;
  state?: string;
  zipcode?: number;
  lat?: number;
  lng?: number;
}

export interface Job extends BaseEntity {
  AddressId?: number;
  Adddress?: Address;
  CarId?: number;
  Customer?: Customer;
  CustomerId?: number;
  FormSubmissionId?: number;
  arrivalTime: string;
  assignedTechnician?: object;
  assignedTechnicianId?: number;
  canceledAt?: string;
  completedAt?: string;
  dispatcherId?: number;
  linkCode?: string;
  paymentStatus?: string;
  status?: string;
}

export interface JobLineItems extends BaseEntity {
  price?: number;
  JobId?: number;
  ServiceId?: number;
  Service?: Service;
}

export interface Service extends BaseEntity {
  name?: string;
  description?: string;
  payoutRate?: number;
  payoutMinimum?: number;
  price?: number;
  isDefault?: boolean;
  isInternal?: boolean;
}

export interface JobActions extends BaseEntity {
  action?: string;
  JobId?: number;
  UserId?: number;
  User?: User;
}

export interface Car extends BaseEntity {
  concat?: string;
  make?: string;
  model?: string;
  year?: number;
  color?: string;
  plate?: string;
  vin?: string;
  CustomerId?: number;
}

export interface Dispatcher extends BaseEntity {
  fullName?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  roles?: string[];
  otp?: string;
  otpExpiration?: string;
  banned?: boolean;
  isOnline?: boolean;
  latitude?: number;
  longitude?: number;
  lastGeolocationUpdate?: string;
  darkMode?: boolean;
}

export interface AssignedTechnician extends BaseEntity {
  fullName?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  roles?: string[];
  otp?: string;
  otpExpiration?: string;
  banned?: boolean;
  isOnline?: boolean;
  latitude?: number;
  longitude?: number;
  lastGeolocationUpdate?: string;
  darkMode?: boolean;
}

export interface Proxy extends BaseEntity {
  active?: boolean;
  JobId?: number;
  UserId?: number;

  CustomerId?: number;
  ProxyNumberId?: number;
  CustomerPhoneId?: number;
  ProxyNumber?: ProxyNumber;
}

export interface User extends BaseEntity {
  fullName?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  roles?: string[];
  otp?: string;
  otpExpiration?: string;
  banned?: boolean;
  isOnline?: boolean;
  latitude?: number;
  longitude?: number;
  lastGeolocationUpdate?: string;
  darkMode?: boolean;
}

export interface ProxyNumber extends BaseEntity {
  inUse?: boolean;
  sid?: string;
  number?: string;
  ProxySessionId?: number;
}