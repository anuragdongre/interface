/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides, Signer, utils } from "ethers";
import type {
  PaymentsImmutables,
  PaymentsImmutablesInterface,
} from "../PaymentsImmutables";

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "permit2",
            type: "address",
          },
          {
            internalType: "address",
            name: "weth9",
            type: "address",
          },
          {
            internalType: "address",
            name: "openseaConduit",
            type: "address",
          },
          {
            internalType: "address",
            name: "sudoswap",
            type: "address",
          },
        ],
        internalType: "struct PaymentsParameters",
        name: "params",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
];

const _bytecode =
  "0x610100346100f657601f61012138819003918201601f19168301926001600160401b03929091838511838610176100e05781608092849260409788528339810103126100f65782519160808301908111838210176100e0578352610062816100fb565b8252610070602082016100fb565b80602084015261009360606100868685016100fb565b93868601948552016100fb565b606084019081526001600160a01b039182166080529251811660a0529051811660c05290511660e0525160119081610110823960805181505060a05181505060c05181505060e051815050f35b634e487b7160e01b600052604160045260246000fd5b600080fd5b51906001600160a01b03821682036100f65756fe600080fdfea164736f6c6343000811000a";

export class PaymentsImmutables__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    params: {
      permit2: string;
      weth9: string;
      openseaConduit: string;
      sudoswap: string;
    },
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<PaymentsImmutables> {
    return super.deploy(params, overrides || {}) as Promise<PaymentsImmutables>;
  }
  getDeployTransaction(
    params: {
      permit2: string;
      weth9: string;
      openseaConduit: string;
      sudoswap: string;
    },
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(params, overrides || {});
  }
  attach(address: string): PaymentsImmutables {
    return super.attach(address) as PaymentsImmutables;
  }
  connect(signer: Signer): PaymentsImmutables__factory {
    return super.connect(signer) as PaymentsImmutables__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PaymentsImmutablesInterface {
    return new utils.Interface(_abi) as PaymentsImmutablesInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PaymentsImmutables {
    return new Contract(address, _abi, signerOrProvider) as PaymentsImmutables;
  }
}
