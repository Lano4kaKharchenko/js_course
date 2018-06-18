class Task {
    constructor () {
      this.text = document.getElementById('text'); 
      this.list = document.getElementById('list');

      this.createTask();
    }
    createTask() {
        if (this.text.value) {
            this.li = document.createElement('li');
            this.li.appendChild(document.createTextNode(this.text.value));

            this.delBtn = document.createElement('button');
            this.delBtn.setAttribute('class', 'del');
            this.delBtn.onclick = this.deleteTask.bind(this);
            this.delBtn.innerHTML = '&#10008;';

            this.doneBtn = document.createElement('button');
            this.doneBtn.setAttribute('class', 'done');
            this.doneBtn.onclick = this.doneTask.bind(this);
            this.doneBtn.innerHTML = '&#10004';

            this.li.appendChild(this.doneBtn);
            this.li.appendChild(this.delBtn);
            this.list.appendChild(this.li);

            this.text.value = '';
        }
       
    }
    deleteTask(){
        this.li.remove();
    }
    doneTask() {
        if (this.doneCheck === false) {
        this.li.style.textTransform = 'line-through';
        this.doneBtn.style.background = 'white';
        this.doneBtn.style.color = 'green';
        this.doneCheck = true;
        } else {
            this.li.style.textDecoration = 'none';
            this.doneCheck = false;
        }
    }
} 

const btn = document.getElementById('btn');
   
   btn.addEventListener('click', function() {
       new Task();
   });