import { CLType, CLValue } from "./Abstract"; 

export class BoolType extends CLType {
  toString(): string {
    return 'Bool';
  }
}

export class Bool extends CLValue {
  v: boolean;

  constructor(v: boolean) {
    super();
    this.v = v;
  }

  clType(): CLType {
    return new BoolType();
  }

  value(): boolean {
    return this.v;
  }
}
