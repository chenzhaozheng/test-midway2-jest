export interface IApiList {
  current: number;
  data: any;
  pageSize: number;
  total: number;
  message?: string;
}

export interface IApiError {
  code: number;
  data?: any;
  message: string;
}

export interface IGrpcService {
  init(): Promise<void>;
}

/**
 * @description User-Service parameters
 */

export interface IRegisterUserParam {
  username?: string;
  password?: string;
  name?: string;
  avatar?: string;
  email?: string;
  phone?: string;
}

export interface IRegisterUserReturn {
  code?: 1000001;
  id?: number;
}

export interface ILoginUserParam {
  type: 'mobile' | 'account';
  password?: string;
  userName?: string;
  mobile?: string;
  captcha?: string;
}

export interface ILoginUserReturn {
  user: object;
  type: 'mobile' | 'account';
  status: 'ok' | 'fail';
}

export interface IUserUpdateParam {
  authority?: 'admin' | 'user' | 'viewer' | 'guest';
  email?: string;
  name?: string;
  phone?: string;
  username?: string;
  password?: string;
  avatar?: string;
  canteenIds?: string[];
  gateIds?: string[];
  newPassword?: string;
}

export interface IUserUpdateReturn {
  userId?: string;
  code?: 500 | number;
  msg?: '' | 'ok' | 'fail';
}

export interface IPosLoginUserParam {
  userName?: string;
  password?: string;
}

export interface IPosLoginUserReturn {
  user?: object;
  status: '' | 'ok' | 'fail';
}

export interface IUserService {
  registerUser(param): Promise<any>;
  loginUser(param): Promise<any>;
  loginOut(): Promise<any>;
  getUser(): Promise<any>;
  update(param, id: number): Promise<any>;
  getCanteen(): Promise<any>;
  getGate(param): Promise<any>;
  posLoginUser(param): Promise<any>;
  checkMember(param): Promise<any>;
}

type TGoodInfo = {
  goodId: string;
  num: string;
  price?: number;
};

export interface ISettlementParam {
  goodInfo: Array<TGoodInfo>;
  // totalPrice: number;
  openId: string;
  // botId: string;
  token?: string;
}

export interface IUpdateSettlementParam {
  orderNum: string;
  payType: number;
  payCode?: string;
  openId?: string;
  appendPayType?: number;
}

export interface IPayStatusParam {
  orderNum: string;
}

export interface ISettlementReturn {
  orderNum?: string;
  totalPrice?: number;
  code?: number;
  message?: string;
}

export interface IUpdateSettlementReturn {
  code?: number;
  message?: string;
  mobile?: string;
  quota?: number;
  totalPrice?: number;
  payData?: any;
  payStatus?: number;
}

export interface IOrderService {
  list(param): Promise<any>;
  putOrders(param): Promise<any>;
  settlement(param): Promise<any>;
  updateSettlement(param): Promise<any>;
  payStatus(param): Promise<any>;
}

export interface payCallbackParam {
  requestNum: string;
  completeTime: string;
  openId?: string;
  amount: string;
  extraInfo?: string;
  botId?: string;
}
