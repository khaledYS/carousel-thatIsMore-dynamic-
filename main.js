////////////////////////////////////////////////////////////////////////////////////////////
//  __    __  __                  __                  __       |                           //
// /  |  /  |/  |                /  |                /  |      |                           //
// $$ | /$$/ $$ |____    ______  $$ |  ______    ____$$ |      |       __    __   _______  //
// $$ |/$$/  $$      \  /      \ $$ | /      \  /    $$ |      |      /  |  /  | /       | //
// $$  $$<   $$$$$$$  | $$$$$$  |$$ |/$$$$$$  |/$$$$$$$ |      |      $$ |  $$ |/$$$$$$$/  //
// $$$$$  \  $$ |  $$ | /    $$ |$$ |$$    $$ |$$ |  $$ |      |      $$ |  $$ |$$      \  //
// $$ |$$  \ $$ |  $$ |/$$$$$$$ |$$ |$$$$$$$$/ $$ \__$$ |      |      $$ \__$$ | $$$$$$  | //
// $$ | $$  |$$ |  $$ |$$    $$ |$$ |$$       |$$    $$ |      |      $$    $$ |/     $$/  //
// $$/   $$/ $$/   $$/  $$$$$$$/ $$/  $$$$$$$/  $$$$$$$/       |       $$$$$$$ |$$$$$$$/   //
//                                                             |      /  \__$$ |           //
//                                                             |      $$    $$/            //
//                                                             |       $$$$$$/             //
//                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////
/**
    ////////////////////////////////////
    ////////////////////////////////////
    // you cant steel this as sympole //
    ////////////////////////////////////
    ////////////////////////////////////
    * 
    * 
    * Its ammar's github with the name of khaledYs
    * you cant steel this 
    * you have the right to download it and edit on it
    * you can't pubilsh this as it's yours
    * this is only for educitional purpose
    * and if you like you can smash star btn
    * I guess I'am done here 
    * Have Fun!
 */




// STart hacking!!
/**
 * doc = is a shortcut to document
 * cas = this would select the container caoursel
 * !note : cas stands for carousel  
 * clas = this is the class that you would add to the targeted switched carousel and now it is middle
 * casTrigger = these are the triggers in the caousel to ex ; after and before
 * !note : the cas container conaitns the items with class .item and
 * !       the triggers inside another container with class .triggers
 * casItems = contains all the cases
 */ 
const doc = document
const cas = doc.querySelector('.carousel')
const clas = "middle";
const casTriggers = cas.querySelectorAll('.triggers > .trigger')
const casItems = cas.querySelectorAll('.item')


// we do all our shit after the dom initalized 
document.addEventListener("DOMContentLoaded",()=>{


////////////////////////////////////////////////////////////////////////////////////////////
        /////////////////////
        //                 //
        //    After btn    //
        //                 //
        /////////////////////
    casTriggers[1].onclick = ()=>{

        /**
         * middle = will select the active cas
         * afterMiddle = well select the elements after the active cas
         * beforeMiddle =  well select the els before the active
         * !note : els is A shortcut for Elements
         */
        const middle = cas.querySelector(`.${clas}`)
        const afterMiddle = cas.querySelectorAll(`.${clas} ~ div.item`)
        const beforeMiddle = cas.querySelectorAll('.item:not(.middle, .right)')

        // explaining would be down man
        console_log_statusOfCases(beforeMiddle, afterMiddle, middle)

        // this will check if there is any elements after the active cas
        // if there is then he will do magic
        // if not it will ignore that .
        afterMiddle.length && 
            setCasItem(beforeMiddle, middle, afterMiddle, "left", afterMiddle[0])
    }
////////////////////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////////////////////
        //////////////////////
        //                  //
        //    Before Btn    //
        //                  //
        //////////////////////
    casTriggers[0].onclick = ()=>{

        /**
         * ! All the same in line : 68
         */
        const middle = cas.querySelector(`.${clas}`)
        const afterMiddle = cas.querySelectorAll(`.${clas} ~ div.item`)
        const beforeMiddle = cas.querySelectorAll('.item:not(.middle, .right)')

        // to console.log(everything)
        console_log_statusOfCases(beforeMiddle, afterMiddle, middle)

        /**
         * will check if there is els after the active cas 
         * if there is then go streent 
         * if not then do not do any thing
         */
        beforeMiddle.length &&
            setCasItem(beforeMiddle, middle, afterMiddle, "right", beforeMiddle[beforeMiddle.length - 1])
    }
////////////////////////////////////////////////////////////////////////////////////////////

    
    /**
     * @param beforeMiddle:DocumentEls this will contian the before middle els
     * @param middle:DocumentEl this will contian the active cas or the middle cas
     * @param afterMiddle:DocumentEls this will contian the els after the middle cas
     * @param direction:String this would be the place that the active cas will go to after switching the cases
     * @param targetedToBeMiddle:DocuemntEl this would be cas that would be activeated oe that would be tha middle cas
     */
    const setCasItem = (beforeMiddle, middle, afterMiddle, direction, targetedToBeMiddle) =>{
        
        // we clear all the item to be with only item class
        casItems.forEach(el=>deleteClasses(el))

        // this would get the middle one to be to the direction after switch
        middle.classList.add(direction)

        // this will give the the els after the middle a class with left 
        beforeMiddle.forEach(el=>el.classList.add('left'))

        // this will give the the els before the middle a class with right 
        afterMiddle.forEach(el=>el.classList.add('right'))

        // this will delete all the classes that got assinged to the targeted cas and give a class of middle
        deleteClasses(targetedToBeMiddle).classList.add("middle")
    }


    /**
     * @param el:DocumentEl this will remove all the middle and right and left classes from the element
     */
    const deleteClasses = (el)=>{
        el.classList.remove('middle')
        el.classList.remove('right')
        el.classList.remove('left')
        return el
    }

    // this function uses to console.log(the status of the middle , after, before middle )
    const console_log_statusOfCases = (beforeMiddle, afterMiddle, middle)=>{
        console.log("before : ", beforeMiddle)
        console.log("after : ", afterMiddle)
        console.log("middle : ", middle)
    }
})
