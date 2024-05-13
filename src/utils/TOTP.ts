export const TOTP = {
    abi : [
       {
         "inputs": [
           {
             "internalType": "bytes",
             "name": "_secretKey",
             "type": "bytes"
           }
         ],
         "stateMutability": "nonpayable",
         "type": "constructor"
       },
       {
         "inputs": [],
         "name": "ECDSAInvalidSignature",
         "type": "error"
       },
       {
         "inputs": [
           {
             "internalType": "uint256",
             "name": "length",
             "type": "uint256"
           }
         ],
         "name": "ECDSAInvalidSignatureLength",
         "type": "error"
       },
       {
         "inputs": [
           {
             "internalType": "bytes32",
             "name": "s",
             "type": "bytes32"
           }
         ],
         "name": "ECDSAInvalidSignatureS",
         "type": "error"
       },
       {
         "inputs": [],
         "name": "InvalidShortString",
         "type": "error"
       },
       {
         "inputs": [
           {
             "internalType": "string",
             "name": "str",
             "type": "string"
           }
         ],
         "name": "StringTooLong",
         "type": "error"
       },
       {
         "anonymous": false,
         "inputs": [],
         "name": "EIP712DomainChanged",
         "type": "event"
       },
       {
         "inputs": [
           {
             "internalType": "bytes",
             "name": "newSecretKey",
             "type": "bytes"
           }
         ],
         "name": "changeSecretKey",
         "outputs": [],
         "stateMutability": "nonpayable",
         "type": "function"
       },
       {
         "inputs": [],
         "name": "eip712Domain",
         "outputs": [
           {
             "internalType": "bytes1",
             "name": "fields",
             "type": "bytes1"
           },
           {
             "internalType": "string",
             "name": "name",
             "type": "string"
           },
           {
             "internalType": "string",
             "name": "version",
             "type": "string"
           },
           {
             "internalType": "uint256",
             "name": "chainId",
             "type": "uint256"
           },
           {
             "internalType": "address",
             "name": "verifyingContract",
             "type": "address"
           },
           {
             "internalType": "bytes32",
             "name": "salt",
             "type": "bytes32"
           },
           {
             "internalType": "uint256[]",
             "name": "extensions",
             "type": "uint256[]"
           }
         ],
         "stateMutability": "view",
         "type": "function"
       },
       {
         "inputs": [],
         "name": "owner",
         "outputs": [
           {
             "internalType": "address",
             "name": "",
             "type": "address"
           }
         ],
         "stateMutability": "view",
         "type": "function"
       },
       {
         "inputs": [],
         "name": "secretKey",
         "outputs": [
           {
             "internalType": "euint16",
             "name": "",
             "type": "uint256"
           }
         ],
         "stateMutability": "view",
         "type": "function"
       },
       {
         "inputs": [
           {
             "internalType": "bytes",
             "name": "_encryptedTOTP",
             "type": "bytes"
           },
           {
             "internalType": "uint32",
             "name": "timestamp",
             "type": "uint32"
           }
         ],
         "name": "validateTOTP",
         "outputs": [
           {
             "internalType": "bool",
             "name": "",
             "type": "bool"
           }
         ],
         "stateMutability": "view",
         "type": "function"
       },
       {
         "inputs": [
           {
             "internalType": "bytes32",
             "name": "publicKey",
             "type": "bytes32"
           },
           {
             "internalType": "bytes",
             "name": "signature",
             "type": "bytes"
           }
         ],
         "name": "viewSecretKey",
         "outputs": [
           {
             "internalType": "bytes",
             "name": "",
             "type": "bytes"
           }
         ],
         "stateMutability": "view",
         "type": "function"
       }
     ],
     bytecode: "61016060405234801562000011575f80fd5b50604051620029103803806200291083398181016040528101906200003791906200052a565b6040518060400160405280601381526020017f417574686f72697a6174696f6e20746f6b656e000000000000000000000000008152506040518060400160405280600181526020017f31000000000000000000000000000000000000000000000000000000000000008152508181620000ba5f83620001b460201b90919060201c565b6101208181525050620000d8600182620001b460201b90919060201c565b6101408181525050818051906020012060e08181525050808051906020012061010081815250504660a08181525050620001176200020960201b60201c565b608081815250503073ffffffffffffffffffffffffffffffffffffffff1660c08173ffffffffffffffffffffffffffffffffffffffff16815250505050505062000167816200026560201b60201c565b6002819055503360035f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505062000bf8565b5f602083511015620001d957620001d1836200028060201b60201c565b905062000203565b82620001eb83620002ea60201b60201c565b5f019081620001fb9190620007b0565b5060ff5f1b90505b92915050565b5f7f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60e0516101005146306040516020016200024a95949392919062000902565b60405160208183030381529060405280519060200120905090565b5f62000279826001620002f360201b60201c565b9050919050565b5f80829050601f81511115620002cf57826040517f305a27a9000000000000000000000000000000000000000000000000000000008152600401620002c69190620009ad565b60405180910390fd5b805181620002dd90620009fe565b5f1c175f1b915050919050565b5f819050919050565b5f80838360f81b6040516020016200030d92919062000afc565b6040516020818303038152906040529050605d73ffffffffffffffffffffffffffffffffffffffff16634b252ec8826040518263ffffffff1660e01b81526004016200035a919062000b77565b602060405180830381865afa15801562000376573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906200039c919062000bc8565b91505092915050565b5f604051905090565b5f80fd5b5f80fd5b5f80fd5b5f80fd5b5f601f19601f8301169050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b6200040682620003be565b810181811067ffffffffffffffff82111715620004285762000427620003ce565b5b80604052505050565b5f6200043c620003a5565b90506200044a8282620003fb565b919050565b5f67ffffffffffffffff8211156200046c576200046b620003ce565b5b6200047782620003be565b9050602081019050919050565b5f5b83811015620004a357808201518184015260208101905062000486565b5f8484015250505050565b5f620004c4620004be846200044f565b62000431565b905082815260208101848484011115620004e357620004e2620003ba565b5b620004f084828562000484565b509392505050565b5f82601f8301126200050f576200050e620003b6565b5b815162000521848260208601620004ae565b91505092915050565b5f60208284031215620005425762000541620003ae565b5b5f82015167ffffffffffffffff811115620005625762000561620003b2565b5b6200057084828501620004f8565b91505092915050565b5f81519050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f6002820490506001821680620005c857607f821691505b602082108103620005de57620005dd62000583565b5b50919050565b5f819050815f5260205f209050919050565b5f6020601f8301049050919050565b5f82821b905092915050565b5f60088302620006427fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8262000605565b6200064e868362000605565b95508019841693508086168417925050509392505050565b5f819050919050565b5f819050919050565b5f62000698620006926200068c8462000666565b6200066f565b62000666565b9050919050565b5f819050919050565b620006b38362000678565b620006cb620006c2826200069f565b84845462000611565b825550505050565b5f90565b620006e1620006d3565b620006ee818484620006a8565b505050565b5b818110156200071557620007095f82620006d7565b600181019050620006f4565b5050565b601f82111562000764576200072e81620005e4565b6200073984620005f6565b8101602085101562000749578190505b620007616200075885620005f6565b830182620006f3565b50505b505050565b5f82821c905092915050565b5f620007865f198460080262000769565b1980831691505092915050565b5f620007a0838362000775565b9150826002028217905092915050565b620007bb8262000579565b67ffffffffffffffff811115620007d757620007d6620003ce565b5b620007e38254620005b0565b620007f082828562000719565b5f60209050601f83116001811462000826575f841562000811578287015190505b6200081d858262000793565b8655506200088c565b601f1984166200083686620005e4565b5f5b828110156200085f5784890151825560018201915060208501945060208101905062000838565b868310156200087f57848901516200087b601f89168262000775565b8355505b6001600288020188555050505b505050505050565b5f819050919050565b620008a88162000894565b82525050565b620008b98162000666565b82525050565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f620008ea82620008bf565b9050919050565b620008fc81620008de565b82525050565b5f60a082019050620009175f8301886200089d565b6200092660208301876200089d565b6200093560408301866200089d565b620009446060830185620008ae565b620009536080830184620008f1565b9695505050505050565b5f82825260208201905092915050565b5f620009798262000579565b6200098581856200095d565b93506200099781856020860162000484565b620009a281620003be565b840191505092915050565b5f6020820190508181035f830152620009c781846200096d565b905092915050565b5f81519050919050565b5f819050602082019050919050565b5f620009f5825162000894565b80915050919050565b5f62000a0a82620009cf565b8262000a1684620009d9565b905062000a2381620009e8565b9250602082101562000a665762000a617fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8360200360080262000605565b831692505b5050919050565b5f81905092915050565b5f62000a8382620009cf565b62000a8f818562000a6d565b935062000aa181856020860162000484565b80840191505092915050565b5f7fff0000000000000000000000000000000000000000000000000000000000000082169050919050565b5f819050919050565b62000af662000af08262000aad565b62000ad8565b82525050565b5f62000b09828562000a77565b915062000b17828462000ae1565b6001820191508190509392505050565b5f82825260208201905092915050565b5f62000b4382620009cf565b62000b4f818562000b27565b935062000b6181856020860162000484565b62000b6c81620003be565b840191505092915050565b5f6020820190508181035f83015262000b91818462000b37565b905092915050565b62000ba48162000666565b811462000baf575f80fd5b50565b5f8151905062000bc28162000b99565b92915050565b5f6020828403121562000be05762000bdf620003ae565b5b5f62000bef8482850162000bb2565b91505092915050565b60805160a05160c05160e051610100516101205161014051611cc662000c4a5f395f61055a01525f61051f01525f610f4a01525f610f2901525f610b5f01525f610bb501525f610bde0152611cc65ff3fe608060405234801561000f575f80fd5b5060043610610060575f3560e01c80633a2077fa1461006457806384b0196e146100825780638da5cb5b146100a6578063979c364d146100c4578063c7c6bfd6146100f4578063e96151de14610124575b5f80fd5b61006c610140565b6040516100799190611111565b60405180910390f35b61008a610146565b60405161009d979695949392919061130b565b60405180910390f35b6100ae6101eb565b6040516100bb919061138d565b60405180910390f35b6100de60048036038101906100d99190611451565b610210565b6040516100eb91906114c8565b60405180910390f35b61010e6004803603810190610109919061150b565b610302565b60405161011b91906115ba565b60405180910390f35b61013e600480360381019061013991906115da565b610432565b005b60025481565b5f6060805f805f6060610157610517565b61015f610551565b46305f801b5f67ffffffffffffffff81111561017e5761017d611625565b5b6040519080825280602002602001820160405280156101ac5781602001602082028036833780820191505090505b507f0f00000000000000000000000000000000000000000000000000000000000000959493929190965096509650965096509650965090919293949596565b60035f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b5f60c88261021e919061167f565b63ffffffff16421115610266576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161025d90611700565b60405180910390fd5b5f620186a083610276919061174b565b90505f6102c586868080601f0160208091040260200160405190810160405280939291908181526020018383808284375f81840152601f19601f8201169050808301925050505050505061058c565b90505f6102eb826102e66102de8663ffffffff1661059f565b6002546105b2565b610600565b90506102f68161064f565b93505050509392505050565b60608383838080601f0160208091040260200160405190810160405280939291908181526020018383808284375f81840152601f19601f820116905080830192505050505050505f61039b7f051d137ae0e1fae6e3b6559fed4442b35a85a9a39789838ad5c9ea05e7da2dce8460405160200161038092919061177b565b60405160208183030381529060405280519060200120610663565b90505f6103a8828461067c565b90503373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610418576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161040f90611812565b60405180910390fd5b610425600254895f6106a6565b9450505050509392505050565b60035f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146104c1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104b89061187a565b60405180910390fd5b61050d82828080601f0160208091040260200160405190810160405280939291908181526020018383808284375f81840152601f19601f820116905080830192505050505050506106e0565b6002819055505050565b606061054c5f7f00000000000000000000000000000000000000000000000000000000000000006106f390919063ffffffff16565b905090565b606061058760017f00000000000000000000000000000000000000000000000000000000000000006106f390919063ffffffff16565b905090565b5f6105988260026107a0565b9050919050565b5f6105ab82600261084b565b9050919050565b5f6105bc836108d2565b6105cc576105c95f61059f565b92505b6105d5826108de565b6105e5576105e25f6108ea565b91505b6105f8836105f2846108fd565b5f610910565b905092915050565b5f61060a836108d2565b61061a576106175f61059f565b92505b610623826108d2565b610633576106305f61059f565b91505b61064761064184845f6109b2565b5f610a54565b905092915050565b5f8061065a83610adb565b14159050919050565b5f61067561066f610b5c565b83610c12565b9050919050565b5f805f8061068a8686610c52565b92509250925061069a8282610ca7565b82935050505092915050565b60605f84146106c0576106b98484610e09565b90506106d9565b6106d66106d08361ffff166108ea565b84610e09565b90505b9392505050565b5f6106ec8260016107a0565b9050919050565b606060ff5f1b831461070f5761070883610e93565b905061079a565b81805461071b906118c5565b80601f0160208091040260200160405190810160405280929190818152602001828054610747906118c5565b80156107925780601f1061076957610100808354040283529160200191610792565b820191905f5260205f20905b81548152906001019060200180831161077557829003601f168201915b505050505090505b92915050565b5f80838360f81b6040516020016107b892919061194f565b6040516020818303038152906040529050605d73ffffffffffffffffffffffffffffffffffffffff16634b252ec8826040518263ffffffff1660e01b815260040161080391906115ba565b602060405180830381865afa15801561081e573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061084291906119a0565b91505092915050565b5f605d73ffffffffffffffffffffffffffffffffffffffff1663e71746b8848460f81b6040518363ffffffff1660e01b815260040161088b9291906119cb565b602060405180830381865afa1580156108a6573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906108ca91906119a0565b905092915050565b5f808214159050919050565b5f808214159050919050565b5f6108f682600161084b565b9050919050565b5f610909826002610a54565b9050919050565b5f80821561092457600160f81b905061092b565b5f60f81b90505b605d73ffffffffffffffffffffffffffffffffffffffff1663816d57d38686846040518463ffffffff1660e01b8152600401610969939291906119f2565b602060405180830381865afa158015610984573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906109a891906119a0565b9150509392505050565b5f8082156109c657600160f81b90506109cd565b5f60f81b90505b605d73ffffffffffffffffffffffffffffffffffffffff16636be317588686846040518463ffffffff1660e01b8152600401610a0b939291906119f2565b602060405180830381865afa158015610a26573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610a4a91906119a0565b9150509392505050565b5f605d73ffffffffffffffffffffffffffffffffffffffff16634be68d20848460f81b6040518363ffffffff1660e01b8152600401610a949291906119cb565b602060405180830381865afa158015610aaf573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610ad391906119a0565b905092915050565b5f605d73ffffffffffffffffffffffffffffffffffffffff16635a4ee440836040518263ffffffff1660e01b8152600401610b169190611a27565b602060405180830381865afa158015610b31573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610b5591906119a0565b9050919050565b5f7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff16148015610bd757507f000000000000000000000000000000000000000000000000000000000000000046145b15610c04577f00000000000000000000000000000000000000000000000000000000000000009050610c0f565b610c0c610f05565b90505b90565b5f6040517f190100000000000000000000000000000000000000000000000000000000000081528360028201528260228201526042812091505092915050565b5f805f6041845103610c92575f805f602087015192506040870151915060608701515f1a9050610c8488828585610f9a565b955095509550505050610ca0565b5f600285515f1b9250925092505b9250925092565b5f6003811115610cba57610cb9611a40565b5b826003811115610ccd57610ccc611a40565b5b0315610e055760016003811115610ce757610ce6611a40565b5b826003811115610cfa57610cf9611a40565b5b03610d31576040517ff645eedf00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60026003811115610d4557610d44611a40565b5b826003811115610d5857610d57611a40565b5b03610d9c57805f1c6040517ffce698f7000000000000000000000000000000000000000000000000000000008152600401610d939190611a27565b60405180910390fd5b600380811115610daf57610dae611a40565b5b826003811115610dc257610dc1611a40565b5b03610e0457806040517fd78bce0c000000000000000000000000000000000000000000000000000000008152600401610dfb9190611a6d565b60405180910390fd5b5b5050565b6060605d73ffffffffffffffffffffffffffffffffffffffff1663d6ad57cd84845f1c6040518363ffffffff1660e01b8152600401610e49929190611a86565b5f60405180830381865afa158015610e63573d5f803e3d5ffd5b505050506040513d5f823e3d601f19601f82011682018060405250810190610e8b9190611b9a565b905092915050565b60605f610e9f83611081565b90505f602067ffffffffffffffff811115610ebd57610ebc611625565b5b6040519080825280601f01601f191660200182016040528015610eef5781602001600182028036833780820191505090505b5090508181528360208201528092505050919050565b5f7f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f7f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000004630604051602001610f7f959493929190611be1565b60405160208183030381529060405280519060200120905090565b5f805f7f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0845f1c1115610fd6575f600385925092509250611077565b5f6001888888886040515f8152602001604052604051610ff99493929190611c4d565b6020604051602081039080840390855afa158015611019573d5f803e3d5ffd5b5050506020604051035190505f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361106a575f60015f801b93509350935050611077565b805f805f1b935093509350505b9450945094915050565b5f8060ff835f1c169050601f8111156110c6576040517fb3512b0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80915050919050565b5f819050919050565b5f819050919050565b5f6110fb6110f66110f1846110cf565b6110d8565b6110cf565b9050919050565b61110b816110e1565b82525050565b5f6020820190506111245f830184611102565b92915050565b5f7fff0000000000000000000000000000000000000000000000000000000000000082169050919050565b61115e8161112a565b82525050565b5f81519050919050565b5f82825260208201905092915050565b5f5b8381101561119b578082015181840152602081019050611180565b5f8484015250505050565b5f601f19601f8301169050919050565b5f6111c082611164565b6111ca818561116e565b93506111da81856020860161117e565b6111e3816111a6565b840191505092915050565b6111f7816110cf565b82525050565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f611226826111fd565b9050919050565b6112368161121c565b82525050565b5f819050919050565b61124e8161123c565b82525050565b5f81519050919050565b5f82825260208201905092915050565b5f819050602082019050919050565b611286816110cf565b82525050565b5f611297838361127d565b60208301905092915050565b5f602082019050919050565b5f6112b982611254565b6112c3818561125e565b93506112ce8361126e565b805f5b838110156112fe5781516112e5888261128c565b97506112f0836112a3565b9250506001810190506112d1565b5085935050505092915050565b5f60e08201905061131e5f83018a611155565b818103602083015261133081896111b6565b9050818103604083015261134481886111b6565b905061135360608301876111ee565b611360608083018661122d565b61136d60a0830185611245565b81810360c083015261137f81846112af565b905098975050505050505050565b5f6020820190506113a05f83018461122d565b92915050565b5f604051905090565b5f80fd5b5f80fd5b5f80fd5b5f80fd5b5f80fd5b5f8083601f8401126113d8576113d76113b7565b5b8235905067ffffffffffffffff8111156113f5576113f46113bb565b5b602083019150836001820283011115611411576114106113bf565b5b9250929050565b5f63ffffffff82169050919050565b61143081611418565b811461143a575f80fd5b50565b5f8135905061144b81611427565b92915050565b5f805f60408486031215611468576114676113af565b5b5f84013567ffffffffffffffff811115611485576114846113b3565b5b611491868287016113c3565b935093505060206114a48682870161143d565b9150509250925092565b5f8115159050919050565b6114c2816114ae565b82525050565b5f6020820190506114db5f8301846114b9565b92915050565b6114ea8161123c565b81146114f4575f80fd5b50565b5f81359050611505816114e1565b92915050565b5f805f60408486031215611522576115216113af565b5b5f61152f868287016114f7565b935050602084013567ffffffffffffffff8111156115505761154f6113b3565b5b61155c868287016113c3565b92509250509250925092565b5f81519050919050565b5f82825260208201905092915050565b5f61158c82611568565b6115968185611572565b93506115a681856020860161117e565b6115af816111a6565b840191505092915050565b5f6020820190508181035f8301526115d28184611582565b905092915050565b5f80602083850312156115f0576115ef6113af565b5b5f83013567ffffffffffffffff81111561160d5761160c6113b3565b5b611619858286016113c3565b92509250509250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f61168982611418565b915061169483611418565b9250828201905063ffffffff8111156116b0576116af611652565b5b92915050565b7f54696d657374616d70206e6f742077697468696e2072616e67650000000000005f82015250565b5f6116ea601a8361116e565b91506116f5826116b6565b602082019050919050565b5f6020820190508181035f830152611717816116de565b9050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601260045260245ffd5b5f61175582611418565b915061176083611418565b9250826117705761176f61171e565b5b828206905092915050565b5f60408201905061178e5f830185611245565b61179b6020830184611245565b9392505050565b7f454950373132207369676e657220616e64207472616e73616374696f6e2073695f8201527f676e657220646f206e6f74206d61746368000000000000000000000000000000602082015250565b5f6117fc60318361116e565b9150611807826117a2565b604082019050919050565b5f6020820190508181035f830152611829816117f0565b9050919050565b7f4f6e6c79206f776e6572000000000000000000000000000000000000000000005f82015250565b5f611864600a8361116e565b915061186f82611830565b602082019050919050565b5f6020820190508181035f83015261189181611858565b9050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f60028204905060018216806118dc57607f821691505b6020821081036118ef576118ee611898565b5b50919050565b5f81905092915050565b5f61190982611568565b61191381856118f5565b935061192381856020860161117e565b80840191505092915050565b5f819050919050565b6119496119448261112a565b61192f565b82525050565b5f61195a82856118ff565b91506119668284611938565b6001820191508190509392505050565b61197f816110cf565b8114611989575f80fd5b50565b5f8151905061199a81611976565b92915050565b5f602082840312156119b5576119b46113af565b5b5f6119c28482850161198c565b91505092915050565b5f6040820190506119de5f8301856111ee565b6119eb6020830184611155565b9392505050565b5f606082019050611a055f8301866111ee565b611a1260208301856111ee565b611a1f6040830184611155565b949350505050565b5f602082019050611a3a5f8301846111ee565b92915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602160045260245ffd5b5f602082019050611a805f830184611245565b92915050565b5f604082019050611a995f8301856111ee565b611aa660208301846111ee565b9392505050565b5f80fd5b611aba826111a6565b810181811067ffffffffffffffff82111715611ad957611ad8611625565b5b80604052505050565b5f611aeb6113a6565b9050611af78282611ab1565b919050565b5f67ffffffffffffffff821115611b1657611b15611625565b5b611b1f826111a6565b9050602081019050919050565b5f611b3e611b3984611afc565b611ae2565b905082815260208101848484011115611b5a57611b59611aad565b5b611b6584828561117e565b509392505050565b5f82601f830112611b8157611b806113b7565b5b8151611b91848260208601611b2c565b91505092915050565b5f60208284031215611baf57611bae6113af565b5b5f82015167ffffffffffffffff811115611bcc57611bcb6113b3565b5b611bd884828501611b6d565b91505092915050565b5f60a082019050611bf45f830188611245565b611c016020830187611245565b611c0e6040830186611245565b611c1b60608301856111ee565b611c28608083018461122d565b9695505050505050565b5f60ff82169050919050565b611c4781611c32565b82525050565b5f608082019050611c605f830187611245565b611c6d6020830186611c3e565b611c7a6040830185611245565b611c876060830184611245565b9594505050505056fea2646970667358221220c4c9a9e4af8a224d2099f4a3c690abce05a00249a652dea81c5109899420dfc064736f6c63430008140033"
   } as const