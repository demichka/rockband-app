class Band extends Component {
    constructor(name, bandsPage) {
        super();
        this.name = name;
        this.addEvents({
            'click .remove-btn': 'removeMe'
          });
        this.members = [
            
        ];
        this.bandsPage = bandsPage;
    }

    addMember(musician) {
        
    }

    removeMe() {
        console.log(this.bandsPage);
        this.bandsPage.removeBand(this);
    }
}