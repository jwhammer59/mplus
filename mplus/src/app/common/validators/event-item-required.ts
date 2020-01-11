import { AbstractControl } from '@angular/forms';  
  
export function ValidateEvent(eventName: string) {
  return (control:AbstractControl):{[key:string]:Boolean}|null => {  
    
    if(eventName === 'Sunday - Early') {  
      return {"isRequired":true};  
    }  
    return null 
  }
}