import styles from '../styles/Booking.module.css'
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import Checkbox from '../components/Checkbox';

export default function Booking() {
  return (
    <>
      <main className={styles.main}>
        <Menu />
        <div className={styles.container}>
          <h2 className={styles.title}>Bookings</h2>

          <div className={styles.email}>
            <label>Email us at: <a>email@email.com</a></label>
          </div>
          <div className={styles.orOption}>
            <label>or use the form below</label>
          </div>

          <div className={styles.titleContent}>Select Artists</div>
          <div className={styles.contentArtists}>
            <Checkbox text="Loopbass" />
            <Checkbox text="Psychotria" />
            <Checkbox text="Merlin" />
            <Checkbox text="Progressive Outrun" />
            <Checkbox text="Random" />
          </div>

          <div className={styles.titleContent}>Artist Details</div>
          <div>
            <div className={styles.formGroup}>
              <div className={styles.label}>
                <label>Stage Time</label>
                <label>(required)</label>
              </div>
              <input className={styles.input} type="text" />
            </div>

            <div className={styles.formGroup}>
              <div className={styles.label}>
                <label>Set Duration</label>
                <label>(required)</label>
              </div>
              <input className={styles.input} type="text" />
            </div>

            <div className={styles.formGroup}>
              <div className={styles.label}>
                <label>Offer</label>
                <label>(required)</label>
              </div>
              <input className={styles.input} type="text" />
            </div>
          </div>

          <div className={styles.titleContent}>Event Details</div>
          <div>
            <div className={styles.formGroup}>
              <div className={styles.label}>
                <label>Event Date</label>
                <label>(required)</label>
              </div>
              <input className={styles.input} type="date" />
            </div>

            <div className={styles.formGroup}>
              <div className={styles.label}>
                <label>Event Name</label>
                <label>(required)</label>
              </div>
              <input className={styles.input} type="text" />
            </div>

            <div className={styles.formGroup}>
              <div className={styles.label}>
                <label>Lineup</label>
                <label>(optional)</label>
              </div>
              <textarea className={styles.input} rows="5"></textarea>
            </div>

            <div className={styles.formGroup}>
              <div className={styles.label}>
                <label>Doors Open</label>
                <label>(optional)</label>
              </div>
              <input className={styles.input} type="text" />
            </div>

            <div className={styles.formGroup}>
              <div className={styles.label}>
                <label>Curfew</label>
                <label>(optional)</label>
              </div>
              <input className={styles.input} type="text" />
            </div>
          </div>

          <div className={styles.btnBox}>
            <button className={styles.btnSubmit} type="button">Submit Request</button>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}