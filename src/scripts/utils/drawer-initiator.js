const DrawerInitiator = {
  init({ button, drawer, closeBtn }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer);
    });

    closeBtn.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.style.width = '300px';
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.style.width = '0';
  },
};

export default DrawerInitiator;