class NavBar extends Component {

  constructor(){
    super();
    this.navItems = [
      new NavItem('Start', '/'),
      new NavItem('About', '/about'),
      new NavItem('Bands', '/bands'),
      new NavItem('Musicians', '/musicians'),
      new NavItem('Create band', '/create')
    ];
  }

}