

// Thread-safe queue
const ConcurrentLinkedQueue = Java.loadClass('java.util.concurrent.ConcurrentLinkedQueue');
const collisionQueue = new ConcurrentLinkedQueue();

LevelEvents.tick(event => {
 
  while (!collisionQueue.isEmpty()) {
    let data = collisionQueue.poll();
    if (data) {
        for (let contactPoint of data.points) {
            onCollide(event,data.id, contactPoint)
        }     
    console.log(data.id)     
    }
  }
})

function onCollide(event, shipid, point) {
  console.log(Object.keys(data))
  console.log(point.position)
  console.log(point.velocity)
  console.log(point.normal)
  console.log(point.separation)
  const ENERGY_THRESHOLD=624826533.3
  let ship=event.level.allShips.getByID(shipid)
  let mass=ship.inertiaData.mass
  if(point.normal.x()>point.normal.y()&&point.normal.x()>point.normal.z()){
    var vectorvelocity=point.velocity.x()
  } else if(point.normal.y()>point.normal.x()&&point.normal.y()>point.normal.z()){
    var vectorvelocity=point.velocity.y()
  }else if (point.normal.z()>point.normal.y()&&point.normal.z()>point.normal.y()){
    var vectorvelocity=point.velocity.z()
  }
  let ke=0.5*(mass)*(vectorvelocity**2)

  
  if (true){    //ke>=ENERGY_THRESHOLD) {
  event.level.explode(
    null,
        point.position.x(),
        point.position.y(),
        point.position.z(),
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

