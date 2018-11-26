class MusiciansPage extends Component {
    constructor() {
        super();
        this.addRoute('/musicians', 'Musicians');
        this.musicians = new Storage().musiciansStorage;
        this.addEvents({
            'click .add-btn': 'addMusician'
        });
    }

    addMusician() {
        let musicianData = this.baseEl.find('.musician-data').val();
        let tempMusician = new Musician(musicianData, this);
        this.musicians.push(tempMusician);
        this.render();
    }


    removeMusician(mus) {
        let index = this.musicians.indexOf(mus);
        if (index < 0) {
            return;
        }
        this.musicians.splice(index, 1);
        this.render();
    }
}