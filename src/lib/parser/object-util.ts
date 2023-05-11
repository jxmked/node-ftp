import Stream from 'stream';
import { IParserOptions } from './index';

export abstract class AbstractParserObjectUtil extends Stream.Writable {
  
  protected _options: IParserOptions;
  protected _bufferString: string;
  
  constructor(options: Partial<IParserOptions>) {
    super();
    
    this._options = {
      debug: () => {}
    };
    
    this._bufferString = "";
    
    Object.assign(this._options, options)
    
  }
  
  
  async _write(chunk: unknown, encoding:BufferEncoding): Promise<void> {
    
    
    
    
    return;
  }
  
  
  
  
  
}

