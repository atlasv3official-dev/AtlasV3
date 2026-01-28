

// Thread-safe queue
const ConcurrentLinkedQueue = Java.loadClass('java.util.concurrent.ConcurrentLinkedQueue');
const collisionQueue = new ConcurrentLinkedQueue();

LevelEvents.tick(event => {
 
  while (!collisionQueue.isEmpty()) {
    let data = collisionQueue.poll();
    if (data) {
    for (let contactPoint of data) {
  onCollide(event, contactPoint)
}
    }
  }
})

function onCollide(event, data) {

  const ENERGY_THRESHOLD=624826533.3
  let mass=89860
  let vectorvelocity=5
  let ke=0.5*(mass)*(vectorvelocity**2)

  
  if (true){    //ke>=ENERGY_THRESHOLD) {
  event.level.explode(
    null,
        data.position.x(),
        data.position.y(),
        data.position.z(),
    4, //ke/ENERGY_THRESHOLD,
    true,
    'tnt'
  )
} 
}

ShipEvents.collision_start(event => {
  const { dimensionId, physLevel, shipIdA, shipIdB, contactPoints } = event
  collisionQueue.add(contactPoints)
})

