// import contactLink data & css
import { contactLinks } from "../../data/site-data";
import "../contact-drawer/contact-drawer.css";

// 2 props: isOpen controls visibility, onClose function calls when link clikced
function ContactDrawer({ isOpen, onClose }) {
  return (
    // adds 'open' class when isOpen = true
    <div className={`contact-drawer ${isOpen ? "open" : ""}`}>
      <ul className="contact-drawer-links">

        {/* dynamic data for contact links 
         - Object.values() cnvrts the 'contactLinks' obj into an array, then loops, & destructures them
        */}
        {Object.values(contactLinks).map(({ label, href }) => (
          <li>
            <a
              href={href}
              // if mailtio: open in current tab. otherwise open a blank tab
              target={href.startsWith("mailto") ? "_self" : "_blank"}
              rel="noreferrer"
              className="contact-drawer-link"
              onClick={onClose}
            >
                {/* label = unqiue key for each list item */}
              <span className="nav-icon-title">{label}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactDrawer;
