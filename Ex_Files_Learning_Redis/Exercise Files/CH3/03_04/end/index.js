import Redis from 'ioredis';
import Strings from './strings';
import Hashes from './hashes';
import lists from './lists'

const redis = new Redis();

Strings(redis);
Hashes(redis);

