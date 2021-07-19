const Lists = (redis) => {
    
    redis.ltrim('planets',99,0)
    redis.rpush('planets', 'venus', 'earth', 'mars', 'jupiter');
    redis.rpush('planets', 'saturn','pluto');
    redis.lpush('planets', 'mercury');
    redis.rpop('planets',4);
    redis.lrange('planets', 0, -1, (err, result) => {
        console.log(result);
    });
}

export default Lists;
