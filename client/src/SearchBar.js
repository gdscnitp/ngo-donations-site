import React from 'react';

export const SearchBar = () => {

    return(

    <div class="search-container">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <form action="">
            <input type="text" placeholder="Search organisation/NGO" name="search" size = "25"></input>
            <button type="submit"><i class="fa fa-search"></i></button>
        </form>
    </div>
    )
}
