import { ApplicatorToken } from './common';

export interface DecoratorConfigOptions {
  bound?: boolean;
  setter?: boolean;
  getter?: boolean;
  property?: boolean;
  method?: boolean;
}

export class DecoratorConfig {
  constructor(
    public readonly execute: Function,
    public readonly applicator: ApplicatorToken,
    public readonly options: DecoratorConfigOptions = {}
  ) {}

  get bound(): boolean {
    return this.options.bound != null ? this.options.bound : false;
  }

  get setter(): boolean {
    return this.options.setter != null ? this.options.setter : false;
  }

  get getter(): boolean {
    return this.options.getter != null ? this.options.getter : false;
  }

  get property(): boolean {
    return this.options.property != null ? this.options.property : false;
  }

  get method(): boolean {
    return this.options.method != null ? this.options.method : true;
  }
}