class NavController {
  constructor($location) {
    this.$location = $location;
  }

  getClass (path) {
    return (this.$location.path().substr(0, path.length) === path) ? 'active' : '';
  }
}

NavController.$inject = ['$location'];

export default NavController;
