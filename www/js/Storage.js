class Storage extends Component {
    constructor() {
        super();
        this.musiciansStorage = [
            new Musician('Tom York', this),
            new Musician('Beth Gibbons', this)
        ];
        this.bandsStorage = [
            new Band('Portishead', this),
            new Band('Massive Attack', this),
            new Band('Radiohead', this)
        ];
        this.createdBandsStorage = [];
    }
}