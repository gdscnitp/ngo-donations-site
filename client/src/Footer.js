import React from 'react'
import  './Footer.css'

 

export const Footer = () => {

    return(
     <div class="footer">
         <link rel="stylesheet" href="//netdna.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css"></link>
        <div class="sas">
            <div class="stars">
            <p>Rate our Website</p>
            <form action="">
                 <input class="star star-5" id="star-5" type="radio" name="star"/>
                 <label class="star star-5" for="star-5"></label>
                 <input class="star star-4" id="star-4" type="radio" name="star"/>
                 <label class="star star-4" for="star-4"></label>
                 <input class="star star-3" id="star-3" type="radio" name="star"/>
                 <label class="star star-3" for="star-3"></label>
                 <input class="star star-2" id="star-2" type="radio" name="star"/>
                 <label class="star star-2" for="star-2"></label>
                 <input class="star star-1" id="star-1" type="radio" name="star"/>
                 <label class="star star-1" for="star-1"></label>
            </form>
            </div>
            <br></br>
            <br></br>
            <div class="sm">
            <form id="suggestion_box" action="" method="post">
                <h3>Suggestion box</h3>
                <fieldset>
                    <textarea placeholder="Suggestion" tabindex="5" name="suggestion_text" required></textarea>
                    </fieldset>
                    <fieldset>
                        <button name="submit" type="submit" id="suggestion_box" value="text to send">Submit</button>
                </fieldset>
            </form>
            </div>
        
        </div>
    </div>
    )
}





