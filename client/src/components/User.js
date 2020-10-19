import React from 'react';
import './style.css'


function User(){
   
   
    return(
     
<div>
<br/>
<div class="container-fluid">

<div className="container-fluid "> 
<div className="top">
<div class="text-center">
          <img src="//placehold.it/100"  alt="Organization " class="avatar img-circle" />
          <h6>Upload a different photo...</h6>
          <br />
          
          <input type="file"  />
         
          <br />
          <br />
         <input placeholder=" Name of Organization " class="top-input" /> 
           <i class="fa fa-pencil" aria-hidden="true"></i>
        </div>


  </div>
</div>



</div>
<hr/>




{/* Activity SECTION */}
<div className="middle">  
<div class="container">
   <div class= "row">
   <div class="col-md-3">
   <div className="boxs ">  
   <div className=" box-side">
        <div className="inside">   
         <p>" Around 200 people have joined our organization.  Hoping to expand help as much we can"</p>   
         </div>   
       </div>
       </div>
   
   
   </div>




   <div class="col-md-6 ">
   <div className="boxs boxs-center"> 
   

   <h1  className="activities-head" >Activities</h1>
       <div className="activities">

  {/* First Activity */}

          <div  className="activities-content" > 
          <div className="activity-img">        
          <img src="https://bootdey.com/img/Content/avatar/avatar1.png"   alt="Activity pics" width="60" height="60"/>         </div>        
          <div className="activity-center-detail">
          
          <textarea row="2" cols="30"  placeholder="Recent Activity" />
         
        
          </div>
          
          <i class="fa fa-trash box-i" aria-hidden="true"></i>
          <i class="fa fa-pencil box-i" aria-hidden="true"></i>
          </div>
          <br/>

  {/* Second Activity */}
  <div  className="activities-content" > 
          <div className="activity-img">    
               <img src="https://bootdey.com/img/Content/avatar/avatar1.png"   alt="Activity pics" width="60" height="60"/>         </div>       
          <div className="activity-center-detail">
          <textarea row="2" cols="30"  placeholder="Recent Activity" />
        
          </div>
          
          <i class="fa fa-trash box-i"  aria-hidden="true"></i>
          <i class="fa fa-pencil box-i" aria-hidden="true"></i>
          </div>
<br/>
    {/* Third Activity */}
    <div  className="activities-content" >  
    <div className="activity-img">            <img src="https://bootdey.com/img/Content/avatar/avatar1.png"  alt="Activity pics" width="60" height="60"/>      </div>       
          <div className="activity-center-detail"> 
          <textarea row="2" cols="30"  placeholder="Recent Activity" />
              </div>
          
          <i class="fa fa-trash box-i" aria-hidden="true"></i>
          <i class="fa fa-pencil box-i" aria-hidden="true"></i>
          </div>



     </div>
  
    </div>

</div>


 <div class="col-md-3 ">
 <div className="boxs ">
 <div className="box-side"> 
 <div className="inside"> 
    <p>"Aiming to reach Helping hands to the ones in need."</p>   </div>   
 
 
 </div>
  </div>
</div>

     


   </div>
</div>
</div>
<hr />
{/* CARDS SECTION END */}


{/* Featured */}


<div className="bottom"> 

<div class="container">
  <div class="row">
    <div class="col-md-6     bottom-item">
    
   <h4>Featured Photos : </h4>

      
   <div class="feature">


<div class="profile-page-block-outer clearfix">
                            <div class="profile-page-block">
                                <div class="profile-picture bg-gradient bg-primary">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="featured pics" width="44" height="44"/>
                                </div>
                            </div>
                            <div class="profile-page-block">
                                <div class="profile-picture bg-gradient bg-primary">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar2.png"  alt="featured pics" width="44" height="44"/>
                                </div>
                            </div>
                            <div class="profile-page-block">
                           <div class="profile-picture bg-gradient bg-primary">
                               <img src="https://bootdey.com/img/Content/avatar/avatar3.png"  alt="featured pics" width="44" height="44"/>
                           </div>
                       </div>
                       <div class="profile-page-block">
                           <div class="profile-picture bg-gradient bg-primary">
                               <img src="https://bootdey.com/img/Content/avatar/avatar4.png"  alt="featured pics" width="44" height="44"/>
                           </div>
                       </div>
                       <div class="profile-page-block">
                           <div class="profile-picture bg-gradient bg-secondary">
                               <img src="https://bootdey.com/img/Content/avatar/avatar5.png"  alt="featured pics" width="44" height="44"/>
                           </div>
                       </div>
                       <div class="profile-page-block">
                           <div class="profile-picture bg-gradient bg-primary">
                               <img src="https://bootdey.com/img/Content/avatar/avatar6.png"  alt="featured pics" width="44" height="44"/>
                           </div>
                       </div>
                       <div class="profile-page-block">
                           <div class="profile-picture bg-gradient bg-primary">
                               <img src="https://bootdey.com/img/Content/avatar/avatar7.png"  alt="featured pics" width="44" height="44"/>
                           </div>
                       </div>
                       <div class="profile-page-block">
                           <div class="profile-picture bg-gradient bg-secondary">
                               <img src="https://bootdey.com/img/Content/avatar/avatar1.png"  alt="featured pics" width="44" height="44"/>
                           </div>
                       </div>
                       </div>


</div>



    </div>
    <div class="col-md-6   bottom-item">
   <h4> Reviews </h4>

   
   <div className="reviews">
   <p>
       " One of the best NGOs we can look for."
   </p>

</div>




    </div>
    
  </div>
</div>



















</div>





</div>


    );
}




export default User;
