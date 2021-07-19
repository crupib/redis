import Redis from 'ioredis';
const redis = new Redis();
redis.set('name', 'Bill', 'EX' ,5)

redis.get('name', (err, result) => {
    console.log(result);
})
redis.get('address', (err, result) => {
    console.log(result);
})
redis.incrby('address', 500)
redis.get('address', (err, result) => {
   console.log(result);
})
redis.mset('street', 'Awesome','city','San Francisco')
redis.mget('street', 'city', (err, result) => {
    console.log(result);
 })