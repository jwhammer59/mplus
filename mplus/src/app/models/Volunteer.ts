export interface Volunteer {
  id?: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  street: string;
  city: string;
  state: string;
  zipcode: string;
  isAvailable: boolean;
  isAdmin: boolean;
  isEMoHC: boolean;
  isCantor: boolean;
  isLector: boolean;
  isGifts: boolean;
  isGiftsChild: boolean;
  isServer: boolean;
  isTech: boolean;
  isOther: boolean;
  isUsher: boolean;
  isRosary: boolean;
}