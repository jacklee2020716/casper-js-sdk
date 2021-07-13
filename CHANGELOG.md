# Changelog

All notable changes to casper-js-sdk.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## 2.1.0

### Fixed

- `state-get-item` due to RPC changes
- `CLList` as empty list initialization from JSON

### Added

- `getBlockTransfers`, `getEraInfoBySwitchBlock`, `getEraInfoBySwitchBlockHeight` methods to `CasperServiceByJsonRPC`

## 2.0.1

### Changed

- `DeployUtil.deployFromJson` returns now `Result<Deploy, Error>` instead of `Deploy | undefined`. `Error` has a `message` inside.

## 2.0.0

### Changed

- Caution! This release contains rewritten CLValue from scratch, there are some breaking changes so consider it before upgrading.
- Removed `CLTypedAndToBytesHelper` to have consistent way of creating new CLValues by using `new CLBool(true)` or `CLValueBuilder.bool(true)`
- Removed `CLTypeHelper` have consistent way of creating new CLValues by using `new CLBoolType()` or `CLTypeBuilder.bool()`
- `CLValue` static methods now are moved to `CLValueBuilder` eg. `CLValueBuilder.u512`
- Every class inheriting from `CLValue` is now named with `CL` prefix, bigger naming changes:
  - `StringValue` -> `CLString`
  - `KeyValue` -> `CLKey`
  - `MapValue` -> `CLMap`
  - `Option` -> `CLOption`
- There are API changes in `CLResult`

```
const myTypesComplex = {
  ok: new CLListType(new CLListType(new CLU8Type())),
  err: new CLOptionType(new CLListType(new CLListType(new CLU8Type())))
};

const myOkComplexRes = new CLResult( Ok(new CLList([new CLList([new CLU8(5), new CLU8(10), new CLU8(15)])])), myTypesComplex );
```

- There are API changes in `CLOption` - now it requires `Some` or `None` wrappers as argument (from `ts-result` library).
- Now all the serialization methods are not connected to `CLValue` anymore - `toJSON`, `fromJSON`, `toBytes`, `fromBytes` needs to be called with `CLValueParsers` eg. `CLValueParser.toJSON(CLValueBuilder.string("ABC"))`
- Renamed methods in `CLPublicKey`:
  - `toAccountHex` -> `toHex` - old name led to misunderstandings as in fact this is hex representation of `public-key` prefixed with key-type.
  - added method `toAccountHashStr` - this methods returns string containing account hash in hex form prefixed with `account-hash-`.

## 1.4.4

### Changed

- Experimental release with `@next` tag.

## 1.4.3

### Changed

- Changed repo name and npm package name from `casper-client-sdk` to `casper-js-sdk`.

## 1.4.2

### Added

- `newTransferWithoutObligatoryId` renamed to `newTransferWithOptionalTransferId`

## 1.4.1

### Added

- `newTransferWithoutObligatoryId` restores the function that gives abilitity to send transfer without providing id.

## 1.4.0

### Changed

- `Signer.sign` now requires deploy in JSON format, `public-key hex` of a sender and `public-key hex` of a target.

## 1.3.4

### Added

- `Signer.getVersion` returns running version of Signer.

## 1.3.3

### Fixed

- `Keys.SECP256K1.new()` and other SECP256K1 releated methods now can work in a browser environment.

## 1.3.2

### Added

- `DeployUtil.deployToBytes(deploy)` returns an `Uint8Array`, which is a byte representation of a deploy.

## 1.3.1

### Changed

- Added `newTransferToUniqAddress` and `UniqAddress`.
- Fix in `newTransfer` - `id` now can be `0`

## 1.3.0

### Changed

- Removed EventStore from codebase.
- `CasperClient.getDeployByHashFromRPC` is now `CasperClient.getDeploy`.
- Fixed problems with `deployFromJson` caused by missing support for deserialization TTL values other than `ms`.

## 1.2.0

### Changed

- BIP-44 Index changed from `748` to `506`. It follows https://github.com/satoshilabs/slips/blob/master/slip-0044.md. All secret and public keys dervied using `CasperHDKey` class will change.

## 1.1.0

### Changed

- `transfer-id` is required parameter in `DeployUtils.newTransfer`.

## 1.0.44

### Added

- Support `disconnectFromSite` method from the Signer.

## 1.0.43

### Fixed

- Missign interface for `getActivePublicKey` method from the Signer.

## 1.0.42

### Added

- Support `getActivePublicKey` method from the Signer.

## 1.0.41

### Added

- `DeployUtils.deployFromJson` verifies `Deploy`'s `hash` and `bodyHash`. If not matching return `undefined`, so the interface doesn't change.

## 1.0.40

### Changed

- New url for docs.

## 1.0.39

### Fixed

- Reverted usage of `TextEncoder` to support Node.js versions < 11.

## 1.0.38

### Fixed

- Problem with U32 deserialization (and all values that uses Buffer polyfill).

## 1.0.37

### Changed

- Changed the default `Deploy`'s ttl from 1h to 30min.

## 1.0.36

### Fixed

- Fixed Delegator interface shape

## 1.0.35

### Changed

- Validate the size of the `Deploy`. Now `CasperServiceByJsonRPC.deploy` throws an error if the size of the deploy is larger then 1 megabyte.`

## 1.0.34

### Fixed

- Problems with Buffer polyfill not working in browser

## 1.0.32

### Added

- `CasperServiceByJsonRPC.getBlockInfoByHeight(height)`

### Fixed

- `CasperServiceByJsonRPC.getBlockInfo(hash)` to return requested block, not the last one.

## 1.0.25

### Added

- Added UMD bundle into npm package.

## 1.0.24

### Added

- Adds `protocol_version` to the `JsonHeader`.

### Fixed

- Fixes `ValidatorInfoResult` for casper-node ^0.9.0 (creates `AuctionState` interface).

## 1.0.23

### Changed

- Removes use of `Buffer` in `parseKeyPair()` and instead creates new `Uint8Array` concatenating public and private keys for use as secret key in Ed25519 key pair.

## 1.0.22

### Fixed

- Parsing `ExecutableDeployItem`'s `StoredContractByHash` from JSON to the `ExecutableDeployItem` object.

## 1.0.21

### Added

- `CasperClient.getDeployByHashFromRPC` allows for getting `Deploy` instance from the Node's RPC.

### Fixed

- Secp keys generator returns `Uint8Array` instead of `Buffer`.

### Changed

- `CLValue.publicKey` accepts `PublicKey` object.

## 1.0.20

### Fixed

- Deserialize `Deploy.hash` to `Uint8Array` instead of `Buffer`.

## 1.0.19

### Added

- `CLValue.isList` and `CLValue.asList`.

### Fixed

- BytesArrayValue's fromBytes.

## 1.0.18

### Added

- Partial support for the Contract object under StoredValue.

### Fixed

- Deploy's body hash derivation.

## 1.0.17

### Added

- Added `DeployUtils.addArgToDeploy(deploy: Deploy, name: string, value: CLValue)` to be able to modify Deploy's session arguments. It creates a new deploy instance. Can not be used on signed deploys.

### Changed

- Default `gasPrice` changed from `10` to `1`.
- Casper balances checks return `BigNumber` now.

## 1.0.15

### Added

- Started using CHANGELOG.md.

### Changed

g Changed CLValue's `value` to `value()` and `remainder` to `remainder()`.
