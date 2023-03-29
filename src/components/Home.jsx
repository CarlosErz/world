import plato from '/src/assets/plato.png';

export function Home(){
  return(
     <div className="background">
      <div className="conten">
        <h1 className='title'>
        World Cuisine
        </h1>
        <p className='subtitle'>Recipes from home</p>
        <img className='plato' src={plato} alt="" />
      </div>
     </div>
  )
}