class Musician extends Component {
    constructor(name, musicianPage) {
        super();
        this.addEvents({
            'click .remove-btn': 'removeMe'
          });
        this.name = name;
        this.bands = [];
        this.musicianPage = musicianPage;
    }
    removeMe() {
        console.log(this.musicianPage);
        this.musicianPage.removeMusician(this);
    }

    addBandToMus(band) {
        this.bands.push(band);
    }
}