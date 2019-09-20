import Singleton from './singleton';

const a = Singleton.getInstance();
const b = Singleton.getInstance();

console.log('A es igual a B?', a === b);
