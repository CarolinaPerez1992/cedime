import React from 'react'
import "./programs.css"
import corazon from '../../assets/corazon.png'
import tierra from '../../assets/tierra.png'
import amigo from '../../assets/amigo.png'
import reciclar from '../../assets/reciclar.png'


const Programs = () => {

    return (
        <div className='Programs' id="programs">
            {/*header*/}
            <div className="Programs-header">
                <span className='stroke-text'>Explore our</span>
                <span className='stroke-text'>Programs</span>
                <span className='stroke-text'>to Shape you</span>

            </div>
<div className='box'>
<div className="card w-96  bg-primary text-primary-content">
  <div className="card-body">
    <img src={corazon} alt="" width="75" height="75"/>
    <h2 className="card-title">Card title!</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores placeat fugit doloremque porro magni harum delectus esse sequi voluptates non. Totam, veniam nisi nostrum assumenda id perferendis vel beatae aliquam.</p>
    
  </div>
</div>
 <div className="card w-96 bg-primary text-primary-content">
  <div className="card-body">
  <img src={tierra} alt="" width="75" height="75"/>
    <h2 className="card-title">Card title!</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptatem sit, consectetur praesentium eos unde vel quam aliquid, explicabo officiis reiciendis ratione maxime beatae autem at earum, repudiandae nostrum temporibus!</p>

  </div>
</div> 
<div className="card w-96 bg-primary text-primary-content">
  <div className="card-body">
  <img src={amigo} alt="" width="75" height="75"/>
    <h2 className="card-title">Card title!</h2>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis dicta eos voluptatum sequi modi expedita! Est, voluptas nulla incidunt nostrum neque accusamus maiores quas eos distinctio fugiat quidem iste quibusdam!</p>
    
  </div>
</div> 
<div className="card w-96 bg-primary text-primary-content">
  <div className="card-body">
  <img src={reciclar} alt="" width="75" height="75"/>
    <h2 className="card-title">Card title!</h2>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae quia quasi aliquid delectus quisquam sed ad doloribus, excepturi provident! Eius porro velit maxime vel cupiditate sunt facilis praesentium qui voluptatum.</p>

  </div>
</div>

</div>


        </div>
    )
}

export default Programs;


