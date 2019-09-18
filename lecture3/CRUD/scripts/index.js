function onCreate(ev) {
    ev.preventDefault();
    var data = JSON.stringify({
        "name": String(document.getElementById("name").value),
        "description": String(document.getElementById("description").value),
        "species": String(document.getElementById("species").value),
        "age": String(document.getElementById("age").value),
        "classname": String(document.getElementById("classname").value),
        "size": String(document.getElementById("size").value),
        "application": String(document.getElementById("application").value),
    });
    console.log(data);
    xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            alert(this.responseText);
            document.getElementById("createForm").dispatchEvent(new Event('submit'));
        } 
    });

    xhr.open("POST", "http://195.50.2.67:2403/cpu");
    //xhr.open("POST", "https://helloworldp2000372741trial.hanatrial.ondemand.com/Helloworld/cpu");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(data);
}

function onRead() {
    console.log('allah');
    xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            //console.log(this.response);
            result=JSON.parse(this.response);
            var resultTBody=document.createElement('tbody');
            result.map(function(nthCPU){
                resultTBody.appendChild(parseCPUToTableRow(nthCPU));
            });

            var table=document.getElementById('rTBody').parentElement;
            table.replaceChild(resultTBody,document.getElementById('rTBody'));
            resultTBody.id='rTBody';
            console.log('success');
        }
    });

    xhr.open("GET", "http://195.50.2.67:2403/cpu");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send();
}

function onPrepareUpdate(ev){

    ev.preventDefault();
    xhrids = new XMLHttpRequest();
    xhrids.withCredentials = true;

    xhrids.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            //console.log(this.response);
            result=JSON.parse(this.response);
            var ids=document.createElement('select');
            ids.className='form-control';
            result.map(function(nthCPU){
                var id=document.createElement('option');
                id.innerHTML=nthCPU['id'];
                ids.appendChild(id);
            });
            var form=document.getElementById('uid').parentElement;
            form.replaceChild(ids,document.getElementById('uid'));
            ids.id='uid';
        }
    });
    xhrids.open("GET", "http://195.50.2.67:2403/cpu");
    xhrids.setRequestHeader("Content-Type", "application/json");
    xhrids.send();
}

function onUpdate(ev) {
    ev.preventDefault();
    var data = JSON.stringify({
        "name": String(document.getElementById("name").value),
        "description": String(document.getElementById("description").value),
        "species": String(document.getElementById("species").value),
        "age": String(document.getElementById("age").value),
        "classname": String(document.getElementById("classname").value),
        "size": String(document.getElementById("size").value),
        "application": String(document.getElementById("application").value),
    });
    console.log(data);
    xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log(this.responseText);
        }
    });

    xhr.open("PUT", "http://195.50.2.67:2403/cpu"+document.getElementById("uid").value);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(data);
}

function onDelete(ev) {
    ev.preventDefault();
     xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log(this.responseText);
        }
    });

    xhr.open("DELETE", "http://195.50.2.67:2403/cpu"+document.getElementById("did").value);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send();
}

function parseCPUToTableRow(CPUs){
    var row=document.createElement('tr');

    id=document.createElement('th');
    id.innerText=CPUs['id'];
    row.appendChild(id);

    name=document.createElement('td');
    name.innerText=CPUs['name'];
    row.appendChild(name);

    description=document.createElement('td');
    description.innerText=CPUs['description'];
    row.appendChild(description);
   
    species=document.createElement('td');
    species.innerText=CPUs['species'];
    row.appendChild(species);
    
    age=document.createElement('td');
    age.innerText=CPUs['age'];
    row.appendChild(age);

    classname=document.createElement('td');
    classname.innerText=CPUs['classname'];
    row.appendChild(classname);

    size=document.createElement('td');
    size.innerText=CPUs['size'];
    row.appendChild(size);

    application=document.createElement('td');
    application.innerText=CPUs['application'];
    row.appendChild(application);

    return row;
}


(function () {
  
    document.getElementById('cbutton').addEventListener(
        'click', onCreate
    );
    document.getElementById('rbutton').addEventListener(
        'click', onRead
    );
    document.getElementById('ubutton').addEventListener(
        'click', onUpdate
    );
    document.getElementById('pubutton').addEventListener(
        'click', onPrepareUpdate
    );
    document.getElementById('dbutton').addEventListener(
        'click', onDelete
    );
    console.log('Handlers is set')
})()