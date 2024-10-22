import DrawerInitiator from '../utils/drawer-initiator';
class App {
  constructor({ button, drawer, closeBtn }) {
    this._button = button;
    this._drawer = drawer;
    this._closeBtn = closeBtn;

    this._initialAppShell();
  }

  _initialAppShell() {
    // TODO: initial Drawer
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      closeBtn: this._closeBtn,
    });
    // kita bisa menginisiasikan komponen lain bila ada
  }
}
export default App;
