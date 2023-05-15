import { create } from 'ipfs-http-client'
import { ApiPromise, WsProvider } from '@polkadot/api'
import { typesBundleForPolkadot, crustTypes } from '@crustio/type-definitions'
import { Keyring } from '@polkadot/keyring'
import { KeyringPair } from '@polkadot/keyring/types'
import { log } from 'console'

// Create global chain instance
const crustChainEndpoint = 'wss://rpc.crust.network'
const api = new ApiPromise({
  provider: new WsProvider(crustChainEndpoint),
  typesBundle: typesBundleForPolkadot,
})

async function getOrderState(cid: string) {
  await api.isReadyOrError
  return await api.query.market.filesV2(cid)
}

function main() {
  const res = getOrderState('QmWfhq82gSQexEfuTxWpAxAcYKab4Zv5yjbVXKKsU3sVWC')
  console.log(res)
}
