require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess clock other sugar fan recipe rural unfold include kangaroo army genius'; 
let testAccounts = [
"0xa9e29505ea4315fbfd67ddb72e77064f1bcc6c6e074d35bbf5d55a30c03f3a85",
"0x52a167397bdcd802fb0b16cb400e6d642b17ba173e93beddc548c020bbcad2a0",
"0x88c9c3fadfdf1144967cb442c97d95b51cebbd42502c1c3874b6645bbc26fd90",
"0xdf34a6702951ff75b288e6c63d38ef5ca4d7f9a425a04eecee1ddd8ad688bcdb",
"0x9b66bfab6d81600d4aa5d2dea62e4e6eb7a83185d7cfbe91335c97bd7071523a",
"0x88d2a07e22ef9db1326c2919585cdda1588f7570442d7d7599aa9fcb5b5f96c9",
"0xa85107f4f3dbcad2a5ba0d8f90d004acf9c9c6d3ca91865b89a44076b362371a",
"0xb72eb732b0048706ea0ddcd5454c484cd6698844ef3ad275b2b0f43620022f48",
"0x457c429d05c515f62315ade3127a1ffa43df3ea4a5dc0c9dcf48f121f0fdea46",
"0x46165d291d07e1c5e416496b3322767ce80e61e859d0af10980a57f2fec17d61"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

