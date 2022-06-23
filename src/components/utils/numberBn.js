import React from 'react'
import reactStringReplace from 'react-string-replace';

export default function NumberBn(data){
    return(
        reactStringReplace(data.number.toString(), /([0,1,2,3,4,5,6,7,8,9])/g, (match, i) => 
        {
            switch(match){
                case "1": return '১'
                case "2": return '২'
                case "3": return '৩'
                case "4": return '৪'
                case "5": return '৫'
                case "6": return '৬'
                case "7": return '৭'
                case "8": return '৮'
                case "9": return '৯'
                default: return '০'              
            }
        })
    )
}