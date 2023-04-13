import PocketbaseService from "../services/pocketbase.service.js";
import {useState} from "preact/hooks";
import {Link} from "preact-router";

const MeetingDialog = ({ open, onClose, carId }) => {

    const [openState, setOpenState] = useState(open);
    const [meeting, setMeeting] = useState(null);


    const sendMeeting = async (e) => {
        e.preventDefault();
        const firstname = document.getElementById("firstname");
        const lastname = document.getElementById("lastname");
        const email = document.getElementById("email");
        const phone = document.getElementById("phone");
        const message = document.getElementById("message");
        const date = document.getElementById("date");
        const time = document.getElementById("time");
        const type = document.getElementById("meeting");
        const data = {
            firstname: firstname.value,
            name: lastname.value,
            email: email.value,
            phone: phone.value,
            message: message.value,
            date: date.value + "T" + time.value + ":00.000Z",
            time: time.value,
            type: type.value,
            car: carId
        }
        const record = await PocketbaseService.pocketbase.collection("meetings").create(data);
        if (record) {
            setMeeting(record);
            //onClose();
        }
    }

    return (
        <dialog open={openState} >
            {meeting === null &&
            <article style={{ width: "750px" }}>
                <header>
                    <a href="#close" aria-label="Close" className="close" onClick={onClose}></a>
                    Prenons rendez-vous
                </header>
                <form onSubmit={sendMeeting}>
                    <fieldset>
                        <h4>Informations personnelles</h4>
                        <div className="grid">
                            <div>
                                <label htmlFor="firstname">Prénom</label>
                                <input type="text" id="firstname" name="firstname" required />
                            </div>
                            <div>
                                <label htmlFor="lastname">Nom</label>
                                <input type="text" id="lastname" name="lastname" required />
                            </div>
                        </div>

                        <div className="grid">
                            <div>
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" required />
                            </div>
                            <div>
                                <label htmlFor="phone">Téléphone</label>
                                <input type="tel" id="phone" name="phone" required />
                            </div>
                        </div>
                    </fieldset>
                    <fieldset>
                        <h4>Informations sur le rendez-vous</h4>
                        <label htmlFor="date">Date</label>
                        <input type="date" id="date" name="date" required />
                        <label htmlFor="time">Heure</label>
                        <input type="time" id="time" name="time" required />
                        <label htmlFor="meeting">Type de rendez-vous</label>
                        <select id="meeting" name="meeting" required>
                            <option value="Essai">Essai</option>
                            <option value="Vente">Vente</option>
                            <option value="Entretien">Entretien</option>
                            <option value="Autre">Autre</option>
                        </select>
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" rows="5" cols="33" placeholder="Message" required></textarea>
                    </fieldset>
                    <button type="submit">Envoyer</button>
                </form>
            </article>
            }
            {meeting !== null && <div>
                    <ins>Le rendez-vous a bien été pris en compte.</ins>
                    <button onClick={() => setOpenState(false)}>Fermer</button>
                </div>
            }
        </dialog>
    );
}

export default MeetingDialog;