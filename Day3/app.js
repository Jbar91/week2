import { factorial } from './factorial.js';
try {
  console.log(factorial(177));
} catch (error) {
  console.log(error.message);
}
