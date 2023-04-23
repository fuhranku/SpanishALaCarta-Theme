/**
 * Global script
 * 
 * @author FrankPonte
 */

import {checkWPAdminBar} from './functions';

$(window).on('scroll',function(){
    checkWPAdminBar();
});
