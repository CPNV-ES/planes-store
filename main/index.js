/*!
=========================================================
* Pigga Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import './index.scss';

import AlpineI18n from "alpinejs-i18n";
import Alpine from "alpinejs";
import TranslationStore from "../src/models/TranslationStore";
import Dictionary from "../src/models/Dictionary";

let locale = "en";

// the translation data
// you can load/fetch these from files or keep them hardcoded.
let messages = {
    en: {
        nav: {
            contact: "Contact us",
            vat: "All prices are HT",
            menu: {
                product_index: "Our planes",
                ask: "Ask information"
            }
        },
        hero: {
            tagline: "The future of private aviation is already here",
            cta: "Access to the future"
        },
        product_index: {
            title: "Our planes",
            tagline: "Featured",
        },
        product: {
            price: "From {value} CHF",
        },
        ask: {
            name: {
                placeholder: "Your name",
                label: "Full name"
            },
            phone: {
                placeholder: "Your phone number",
                label: "Phone number"
            },
            content: {
                placeholder: "Your request",
                label: "Message"
            },
            button: "Envoyer",
            policy: {
                label: "We don't send spam to customers. Check our",
                link: "fr",
                link_label: "Privacy policy"
            }
        },
        footer: {
            copyright: "All rights reserved"
        }
    },
    fr: {
        nav: {
            contact: "Nous contacter ",
            vat: "Tous les prix affiché sont hors taxes",
            menu: {
                product_index: "Nos aéronefs",
                ask: "Demander des informations"
            }
        },
        hero: {
            tagline: "Le futur de l'aviation privée est déjà là",
            cta: "Accéder au futur"
        },
        product_index: {
            title: "Nos avions",
            tagline: "À la une",
        },
        product: {
            price: "Dès {value} CHF",
        },
        ask: {
            name: {
                placeholder: "Votre nom",
                label: "Nom complet"
            },
            phone: {
                placeholder: "Votre numéro de téléphone",
                label: "Numéro de téléphone"
            },
            content: {
                placeholder: "Votre demande",
                label: "Message"
            },
            button: "Envoyer",
            policy: {
                label: "Nous n'envoyons pas de spam aux clients. Vérifiez notre",
                link: "fr",
                link_label: "Politique de confidentialité"
            }
        },
        footer: {
            copyright: "Tous droits réservés"
        }
    },
    de: {
        nav: {
            contact: "Kontaktiere uns",
            vat: "Alle Preise sind exkl. MwSt.",
            menu: {
                product_index: "Unsere Flugzeuge",
                ask: "Fragen Sie nach Informationen"
            }
        },
        hero: {
            tagline: "Die Zukunft der Privatfliegerei ist bereits da",
            cta: "Zugang zur Zukunft"
        },
        product_index: {
            title: "Unsere Flugzeuge",
            tagline: "Vorgestellt",
        },
        product: {
            price: "Ab {value} CHF",
        },
        ask: {
            name: {
                placeholder: "Ihr Name",
                label: "Vollständiger Name"
            },
            phone: {
                placeholder: "Ihre Telefonnummer",
                label: "Telefonnummer"
            },
            content: {
                placeholder: "Ihre Anfrage",
                label: "Nachricht"
            },
            button: "Senden",
            policy: {
                label: "Wir senden keine Spam-Nachrichten an Kunden. Überprüfen Sie unsere",
                link: "de",
                link_label: "Datenschutzrichtlinie"
            }
        },
        footer: {
            copyright: "Alle Rechte vorbehalten"
        }
    }
};

const store = new TranslationStore();

(async function i() {
    store.dictionary = await Dictionary.createFromStorage()
})()



console.log(store)

document.addEventListener("alpine-i18n:ready", function () {
    // ... scroll to Usage to see where locale and messages came from
    window.AlpineI18n.create(locale, messages, {debug: false})
});
Alpine.plugin(AlpineI18n);
Alpine.start();

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        }
    });
});
