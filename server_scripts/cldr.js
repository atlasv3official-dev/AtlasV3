

// Thread-safe queue
const ConcurrentLinkedQueue = Java.loadClass('java.util.concurrent.ConcurrentLinkedQueue');
const collisionQueue = new ConcurrentLinkedQueue();

LevelEvents.tick(event => {
 
  while (!collisionQueue.isEmpty()) {
    let data = collisionQueue.poll();
    if (data) {
        for (let contactPoint of data.points) {
            onCollide(event, contactPoint)
        }     
    console.log(data.id)     
    }
  }
})

function onCollide(event, data) {
  console.log(Object.keys(data))
  console.log(data.position)
  console.log(data.velocity)
  console.log(data.normal)
  console.log(data.separation)
  const ENERGY_THRESHOLD=624826533.3
  let mass=89860*17
  let vectorvelocity=Math.sqrt(data.velocity.x()**2+data.velocity.y()**2+data.velocity.z()**2)
  let ke=0.5*(mass)*(vectorvelocity**2)

  
  if (true){    //ke>=ENERGY_THRESHOLD) {
  event.level.explode(
    null,
        data.position.x(),
        data.position.y(),
        data.position.z(),
    ke/ENERGY_THRESHOLD,
    false,
    'tnt'
  )
} 
}

ShipEvents.collision_start(event => {
  const collisionData = {
        id: event.shipIdA,
        points: event.contactPoints
    }
  collisionQueue.add(collisionData)
})

