

// Thread-safe queue
const ConcurrentLinkedQueue = Java.loadClass('java.util.concurrent.ConcurrentLinkedQueue');
const collisionQueue = new ConcurrentLinkedQueue();

LevelEvents.tick(event => {
//console.log('tick')
  while (!collisionQueue.isEmpty()) {
    let data = collisionQueue.poll();
    console.log('polled')
    if (data) {
        console.log('polled data')
        for (let contactPoint of data.points) {
            onCollide(event,data.id, contactPoint)
            console.log('added point')
        }     
    console.log(data.id)     
    }
  }
})

function onCollide(event, shipid, point) {

 
  const ENERGY_THRESHOLD=624826533.3
  let ship=event.level.shipObjectWorld.allShips.getById(shipid)
  console.log(ship)
  let mass=ship.inertiaData.mass
  console.log(mass)
  if(point.normal.x()>point.normal.y()&&point.normal.x()>point.normal.z()){
    var vectorvelocity=point.velocity.x()
  } else if(point.normal.y()>point.normal.x()&&point.normal.y()>point.normal.z()){
    var vectorvelocity=point.velocity.y()
  }else if (point.normal.z()>point.normal.y()&&point.normal.z()>point.normal.y()){
    var vectorvelocity=point.velocity.z()
  }
  console.log(Number(point.velocity.x()))
  console.log(Number(point.velocity.y()))
  console.log(Number(point.velocity.z()))
  let sumvel=Math.sqrt((Number(point.velocity.x())**2)+(Number(point.velocity.y())**2)+(Number(point.velocity.z())**2))
  console.log(sumvel)
  let ke=0.5*(mass)*(sumvel**2)
  console.log(ke)
  if(ke>=1000000000000){
    ke=1000000000000
  }
  
  if (true){//ke>=ENERGY_THRESHOLD) {
  event.level.explode(
    null,
        point.position.x(),
        point.position.y(),
        point.position.z(),
    ke/ENERGY_THRESHOLD*100,
    true,
    'tnt'
  )
} 
}

ShipEvents.collision_start(event => {
console.log('collided')
console.log(event.shipIdA)
  const collisionData = {
        id: event.shipIdA,
        points: event.contactPoints
    }
  collisionQueue.add(collisionData)
  console.log('collided added')
})

