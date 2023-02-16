import { useState } from "react";

const Reservation = () => {
    const [reservation, setReservation] = useState({
        date: "",
        time: "",
        guestNum: 0,
        occasion: "",
    });



    return(<>
            <form style={{display:"grid", maxWidth:"200px", gap:"20px"}}>
            <label for="res-date">Choose date</label>
            <input type="date" id="res-date" value={reservation.date} onChange={(e) => setReservation({...reservation, date: e.target.value})}/>
            <label for="res-time">Choose time</label>
            <select id="res-time " defaultValue={reservation.time} onChange={(e) => setReservation({...reservation, time: e.target.value})}>
                <option>17:00</option>
                <option>18:00</option>
                <option>19:00</option>
                <option>20:00</option>
                <option>21:00</option>
                <option>22:00</option>
            </select>
            <label for="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" value={reservation.guestNum} onChange={(e) => setReservation({...reservation, guestNum: e.target.value})}/>
            <label for="occasion">Occasion</label>
            <select id="occasion" defaultValue={reservation.occasion} onChange={(e) => setReservation({...reservation, occasion: e.target.value})}>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input type="submit" value="Make Your reservation" onClick={() => {console.log(reservation); setReservation({
        date: "",
        time: "",
        guestNum: 0,
        occasion: "",
    })}}/>
            </form>
    </>)
}

export default Reservation;