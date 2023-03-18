import {
  PoolCreated as PoolCreatedEvent,
  PoolRemoved as PoolRemovedEvent
} from "../generated/Deployer/Deployer"
import { PoolCreated, PoolRemoved } from "../generated/schema"

// export function handlePoolCreated(event: PoolCreatedEvent): void {
//   let entity = new PoolCreated(
//     event.transaction.hash.concatI32(event.logIndex.toI32())
//   )
//   entity._oracle = event.params._oracle
//   entity._price = event.params._price
//   entity._settlementDate = event.params._settlementDate
//   entity.decay = event.params.decay
//   entity.maxRatioPOS = event.params.maxRatioPOS
//   entity.maxRatioNEG = event.params.maxRatioNEG
//   entity.maxRatioDate = event.params.maxRatioDate
//   entity.name = event.params.name
//   entity.acronym = event.params.acronym
//   entity.poolAddress = event.params.poolAddress
//   entity.turnToDustDate = event.params.turnToDustDate
//   entity.deployerContract = event.params.deployerContract

//   entity.blockNumber = event.block.number
//   entity.blockTimestamp = event.block.timestamp
//   entity.transactionHash = event.transaction.hash

//   entity.save()
// }

export function handlePoolRemoved(event: PoolRemovedEvent): void {
  let entity = new PoolRemoved(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.poolAddress = event.params.poolAddress

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}


import {
  ClaimsCreated as ClaimsCreatedEvent,
  DepNumNegChanged as DepNumNegChangedEvent,
  DepNumPosChanged as DepNumPosChangedEvent,
  ConditionChanged as ConditionChangedEvent,
  WithdrawChanged as WithdrawChangedEvent,
  pastSettlementDateChanged as PastSettlementDateChangedEvent,
  contractGone as ContractGoneEvent

} from "../generated/templates/Pool/Pool"
import { ClaimsCreated, 
  DepNumNegChanged, DepNumPosChanged, 
  ConditionChanged, WithdrawChanged, 
  PastSettlementDateChanged, ContractGone } from "../generated/schema"




import { Pool } from "../generated/schema"

export function handlePoolCreated(event: PoolCreatedEvent): void {
  // Create and save the PoolCreated entity as before
  let poolCreatedEntity = new PoolCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  // ... set fields for the PoolCreated entity
  poolCreatedEntity.save()

  // Create a new Pool entity
  let poolEntity = new Pool(event.transaction.hash.concatI32(event.logIndex.toI32()))
  poolEntity._oracle = event.params._oracle
  poolEntity._price = event.params._price
  poolEntity._settlementDate = event.params._settlementDate
  poolEntity.decay = event.params.decay
  poolEntity.maxRatioPOS = event.params.maxRatioPOS
  poolEntity.maxRatioNEG = event.params.maxRatioNEG
  poolEntity.maxRatioDate = event.params.maxRatioDate
  poolEntity.name = event.params.name
  poolEntity.acronym = event.params.acronym
  poolEntity.poolAddress = event.params.poolAddress
  poolEntity.turnToDustDate = event.params.turnToDustDate

  // Save the Pool entity
  poolEntity.save()
}


export function handleClaimsCreated(event: ClaimsCreatedEvent): void {
  // Create a new ClaimsCreated entity
  let claimsCreatedEntity = new ClaimsCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  // ... set fields for the ClaimsCreated entity

  // Set the pool field to the ID of the related Pool entity
  claimsCreatedEntity.pool = event.address

  // Save the ClaimsCreated entity
  claimsCreatedEntity.save()
}

export function handleDepNumNegChanged(event: DepNumNegChangedEvent): void {
  // Create a new DepNumNegChanged entity
  let depNumNegChangedEntity = new DepNumNegChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  // ... set fields for the DepNumNegChanged entity

  // Set the pool field to the ID of the related Pool entity
  depNumNegChangedEntity.pool = event.address

  // Save the DepNumNegChanged entity
  depNumNegChangedEntity.save()
}

export function handleDepNumPosChanged(event: DepNumPosChangedEvent): void {
  // Create a new DepNumPosChanged entity
  let depNumPosChangedEntity = new DepNumPosChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  // ... set fields for the DepNumPosChanged entity

  // Set the pool field to the ID of the related Pool entity
  depNumPosChangedEntity.pool = event.address

  // Save the DepNumPosChanged entity
  depNumPosChangedEntity.save()
}


export function handleConditionChanged(event: ConditionChangedEvent): void {
  // Create a new ConditionChanged entity
  let conditionChangedEntity = new ConditionChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  // ... set fields for the ConditionChanged entity

  // Set the pool field to the ID of the related Pool entity
  conditionChangedEntity.pool = event.address

  // Save the ConditionChanged entity
  conditionChangedEntity.save()
}

export function handleWithdrawChanged(event: WithdrawChangedEvent): void {
  // Create a new WithdrawChanged entity
  let withdrawChangedEntity = new WithdrawChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  // ... set fields for the WithdrawChanged entity

  // Set the pool field to the ID of the related Pool entity
  withdrawChangedEntity.pool = event.address

  // Save the WithdrawChanged entity
  withdrawChangedEntity.save()
}



export function handlePastSettlementDateChanged(event: PastSettlementDateChangedEvent): void {
  // Create a new PastSettlementDateChanged entity
  let pastSettlementDateChangedEntity = new PastSettlementDateChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  // ... set fields for the PastSettlementDateChanged entity

  // Set the pool field to the ID of the related Pool entity
  pastSettlementDateChangedEntity.pool = event.address

  // Save the PastSettlementDateChanged entity
  pastSettlementDateChangedEntity.save()
}

export function handleContractGone(event: ContractGoneEvent): void {
  // Create a new ContractGone entity
  let contractGoneEntity = new ContractGone(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  // ... set fields for the ContractGone entity

  // Set the pool field to the ID of the related Pool entity
  contractGoneEntity.pool = event.address

  // Save the ContractGone entity
  contractGoneEntity.save()
}

