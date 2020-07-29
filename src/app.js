// import './sub';
import './app.scss';


const init = async()=>{
  console.log('hello webpack');
  await asyncFn();
};

async function asyncFn(){
  [1,2,3].includes(0);
  console.log([1,2,3].includes(0));
}
init();





