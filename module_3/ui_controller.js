import MaskInput from './node_modules/mask-input';
export default class UIController {
    constructor() {
        this.createCard();
        this.createName();
    }

    createCard() {
            this.numInp = document.getElementById('input'); 
        
            this.maskInput = new MaskInput(this.numInp, {
                mask: '0000-0000-0000-0000',
                alwaysShowMask: true,
                onChange: this. cardValidation.bind(this),
                maskChar: '_',
              });
        }
    
        cardValidation() {
            this.inpReg = /^\d{4}\-\d{4}\-\d{4}\-\d{4}$/;
            if (!this.inpReg.test(this.numInp.value)) {
                this.numInp.style.border = '2px solid red';
                this.inpVal = false;
            } else {
                this.numInp.style.border = '2px solid green';
                this.inpVal = true;
            }
        }
    }
    const uiController = new UIController();

    
// class Name {
//         constructor() {
//             // this.regEx = /^\w\w+$/;
//             this.name = document.getElementById('name');
//             this.name.onchange = this.testName.bind(this);
//         }
//         testName() {
//             if (!this.regEx.test(this.name.value)) {
//                 this.name.style.border = '2px solid red';
//             } else {
//                 this.name.style.border = '2px solid green';
//             }
//         } 
//     }
