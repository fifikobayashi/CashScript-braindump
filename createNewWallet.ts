/*
* Demonstration of:
* 1. Creation of a new wallet
* 2. Output of wallet address
*/

import { BITBOX } from 'bitbox-sdk';
import { HDNode } from 'bitcoincashjs-lib';
import * as path from 'path';

run();
	export async function run(): Promise<void> {
	// Initialise BITBOX
	const network: string = 'testnet';
	const bitbox: BITBOX = new BITBOX({ restURL: 'https://trest.bitcoin.com/v2/' });

	// Initialise HD node and alice's keypair
	const rootSeed: Buffer = bitbox.Mnemonic.toSeed('CashScript'); // auto generate mnemonic seed for wallet
	const hdNode: HDNode = bitbox.HDNode.fromSeed(rootSeed, network); // generate wallet from mnemonic
	// Optional: you can change to a different wallet by using bitbox.HDNode.derivePath(wallet, "m/44/145'/0'/0/0");

	// get the CashAddress of this node/wallet
	const nodeCashaddr = bitbox.HDNode.toCashAddress(hdNode); 
	console.log('CashAddress:', nodeCashaddr);
}
