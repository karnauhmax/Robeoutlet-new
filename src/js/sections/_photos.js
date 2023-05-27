import Tab from '../functions/tabs';
import Accordion from '../functions/accordion';
if (document.querySelector('.photos')) {
  new Tab('.photos').renderTab();
  new Accordion('.photos').renderaccordionDefault();
}
