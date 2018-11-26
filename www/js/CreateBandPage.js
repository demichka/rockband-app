class CreateBandPage extends Component {
    constructor() {
        super();
        this.addRoute('/create', 'Create Band');
        this.bandsStorage = new Storage().bandsStorage;
        this.musiciansStorage = new Storage().musiciansStorage;
        this.createdBandsStorage = new Storage().createdBandsStorage;
        this.addEvents({
            'click .add-btn[data-add=addBand]': 'addBand',
            'click .add-btn[data-add=addMusician]': 'addMusician',
            'click .add-btn[data-add=chooseBand]': 'chooseBand',
            'click .add-btn[data-add=chooseMusician]': 'addMember',
            'click .remove-btn[data-btn=removeFromBand]': 'removeMember',
            'click .btn[data-btn=saveCreatedBand]': 'saveBand'
        });
    }

    saveBand() {
        this.createdBandsStorage.push(this.createdBand);
        this.render();

    }

    removeMember() {
        let btn = document.activeElement;
        let musToRemove = btn.previousSibling.innerHTML;   
        console.log(musToRemove);     
        let indexOfMus = this.createdBand.members.includes(this.createdBand.members.name === musToRemove);
        console.log(indexOfMus);
        console.log('clicked delete');
        if (indexOfMus < 0) {
            return;
        }
        else {
            this.createdBand.members.splice(indexOfMus, 1);
            this.render();
            console.log(this.createdBand.members);

        }
    }

    chooseBand() {
        let selected = document.getElementById('bandsSelect').selectedOptions;
        let output = selected[0].label;
        this.createdBand = new Band('', this.bandsPage);
        this.createdBand.name =  output;
        this.render();
    }

    addMember() {
        let selected = document.getElementById('musiciansSelect').selectedOptions;
        let output = selected[0].label;
        let mus = this.musiciansStorage.find(mus => mus.name === output);
        this.createdBand.members.push(mus);    
        mus.addBandToMus(this.createdBand);
        this.render();
        console.log(mus);
    }

    showCreatedBandList() {
        let wrap = $('<div/>');
        let list = $('<ul/>');
        if(this.createdBand.members.length > 0) {
            for (let i = 0; i < this.createdBand.members.length; i++) {
                let p = $('<p/>').append(this.createdBand.members[i].name);
                let li = $('<li class="my-3"/>').append(p);
                let removeMusBtn = $('<button class="remove-btn btn btn-secondary float-right" type="button" data-btn="removeFromBand" >X</button>');
                p.append(removeMusBtn);
                list.append(li);
            }
        }
        wrap.append(list);
        return wrap.get(0).innerHTML;
    }

    

    bandsList() {
        let select = $('<select/>');
        for (let i = 0; i < this.bandsStorage.length; i++) {
            let option = $('<option/>');
            option.append(this.bandsStorage[i].name);
            select.append(option.attr('value', option.text()));
        }
        return select.get(0).innerHTML;
    }

    musiciansList() {
        let select = $('<select/>');
        for (let i = 0; i < this.musiciansStorage.length; i++) {
            let option = $('<option/>');
            option.append(this.musiciansStorage[i].name);
            select.append(option.attr('value', option.text()));
        }
        return select.get(0).innerHTML;
    }

    addBand() {
        let bandData = this.baseEl.find('.band-data').val();
        let tempBand = new Band(bandData, this);
        this.bandsStorage.push(tempBand);
        this.render();
    }

    removeBand(band) {
        let index = this.bandsStorage.indexOf(band);
        if (index < 0) {
            return;
        }
        this.bandsStorage.splice(index, 1);
        this.render();
    }

    addMusician() {
        let musicianData = this.baseEl.find('.musician-data').val();
        let tempMusician = new Musician(musicianData, this);
        this.musiciansStorage.push(tempMusician);
        this.render();
    }


    removeMusician(mus) {
        let index = this.musiciansStorage.indexOf(mus);
        if (index < 0) {
            return;
        }
        this.musiciansStorage.splice(index, 1);
        this.render();
    }
}
