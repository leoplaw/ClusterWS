import { SecureContextOptions } from 'tls';

// TODO: get rid of some options which wont be included in 4.0.0

// for SocketMessage use string | Buffer
export type Message = any;
export type Listener = (...args: any[]) => void;
export type WorkerFunction = () => void;

export enum Mode {
  Scale,
  SingleProcess
}

export enum Middleware {
  onSubscribe,
  onUnsubscribe,
  verifyConnection,
  onChannelOpen,
  onChannelClose
}

export type HorizontalScaleOptions = {
  key?: string;
  serverId?: string;
  brokersUrls?: string[];
  masterOptions?: {
    port: number;
    tlsOptions?: SecureContextOptions;
  };
};

export type Configurations = {
  worker: WorkerFunction;
  mode?: Mode,
  port?: number;
  host?: string;
  logger?: Logger
  wsPath?: string;
  workers?: number;
  brokers?: number;
  autoPing?: boolean;
  // useBinary?: boolean;
  tlsOptions?: SecureContextOptions;
  pingInterval?: number;
  brokersPorts?: number[];
  restartWorkerOnFail?: boolean;
  horizontalScaleOptions?: HorizontalScaleOptions;
  // encodeDecodeEngine?: EncodeDecodeEngine;
};

export type Options = {
  worker: WorkerFunction;
  mode: Mode,
  port: number;
  host: string | null;
  logger: Logger
  wsPath: string;
  workers: number;
  brokers: number;
  autoPing: boolean;
  // useBinary: boolean;
  brokersPorts: number[];
  tlsOptions: SecureContextOptions | null;
  pingInterval: number;
  restartWorkerOnFail: boolean;
  horizontalScaleOptions: HorizontalScaleOptions | null;
  // encodeDecodeEngine: EncodeDecodeEngine | null;
};

/// TODO: Make sure that types fit
// export type EncodeDecodeEngine = {
//   encode: (message: any) => any;
//   decode: (message: any) => any;
// };

export type Logger = {
  [keys: string]: any,
  info: (data: any) => any;
  error: (data: any) => any;
  debug: (prefix: string, data: any) => any;
  warning: (data: any) => any;
};