export interface IClientConfig {
  user: string;
  password: string;
  host: string;
  port: number;
  keepAlive: number;
  secure: boolean;
  connTimeout: number;
  pasvTimeout: number;
  secureOptions?: object
}

export default class FTP {
  private options: IClientConfig
  
  constructor() {
    this.options = {
      user: "anonymous",
      port: 21,
      password: "anonymous@",
      host: "localhost",
      secure: false,
      keepAlive: 10000,
      connTimeout: 10000,
      pasvTimeout: 10000
    }
  }
  
  
  
  async connect(options: Partial<IClientConfig>) {
    Object.assign(this.options, options);
  }
}
