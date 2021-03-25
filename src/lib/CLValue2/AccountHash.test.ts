import { expect } from 'chai';
import { CLAccountHash } from './AccountHash';

describe('CLAccountHash', () => {
  it('Should be able to return proper value by calling .value()', () => {
    const arr8 = new Uint8Array([21,31]);
    const myHash = new CLAccountHash(arr8);

    expect(myHash.value()).to.be.deep.eq(arr8);
  });
  it('Should be able to return proper value by calling .clType()', () => {
    const arr8 = new Uint8Array([21,31]);
    const myHash = new CLAccountHash(arr8);

    expect(myHash.clType().toString()).to.be.eq("AccountHash");
  });
  it('Should be able to return proper byte array by calling .toBytes()', () => {
    const expectedBytes = Uint8Array.from(Array(32).fill(42))
    const hash = new CLAccountHash(expectedBytes);

    expect(hash.toBytes()).to.deep.eq(expectedBytes);
  });
});

