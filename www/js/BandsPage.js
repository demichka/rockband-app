class BandsPage extends Component {
    constructor() {
        super();
        this.addRoute('/bands', 'Bands');
        this.bands = new Storage().bandsStorage;
        this.addEvents({
            'click .add-btn': 'addBand'
        });
    }

    addBand() {
        let bandData = this.baseEl.find('.band-data').val();
        let tempBand = new Band(bandData, this);
        this.bands.push(tempBand);
        console.log(this.bands);
        console.log(tempBand);
        this.render();
    }

    removeBand(band){
        let index = this.bands.indexOf(band);
        if(index < 0){ return; }
        this.bands.splice(index, 1);
        this.render();
      }
}