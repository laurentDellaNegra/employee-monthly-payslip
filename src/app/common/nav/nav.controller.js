/* @flow */

/**
 * Navigation bar controller
 */
class NavController {

  /**
   * Controller constructor
   * @param $location angular url service
   */
  constructor($location) {
    this.$location = $location;
  }

  /**
   * Highlight the selected menu
   * @param path: string
   * @return string      active or empty string
   */
  getClass (path: string) {
    return (this.$location.path().substr(0, path.length) === path) ? 'active' : '';
  }
}

NavController.$inject = ['$location'];

export default NavController;
